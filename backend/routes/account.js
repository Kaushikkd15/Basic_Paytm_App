import express from 'express';
import mongoose from 'mongoose';
import { account } from '../db.js';
import { authMiddleware } from '../middleware.js';

export const accountRouter = express.Router();

accountRouter.get('/balance', async(req, res)=>{
     const userId = req.userId;

    const Account = await account.findOne(userId);

    res.json({
        balance: Account.balance
    });
   
});

accountRouter.post('/transfer',authMiddleware, async(req, res)=>{
     const session = await mongoose.startSession();

     session.startTransaction();
     const {amount , to } = req.body;
     const Account = await account.findOne({userId: req.userId}).session(session);
     console.log(Account);
     if(!Account || Account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance" 
        });
     }
    const receiver = await account.findOne({userId: to}).session(session);

     if(!receiver){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid Account"
        });
     }

     await account.updateOne({userId: req.userId}, { $inc: {balance: -amount}});
     await account.updateOne({userId: to},{$inc: {balance: amount}});
    
     await session.commitTransaction();
     return res.json({
        msg: "Transfer successful"
     });

})