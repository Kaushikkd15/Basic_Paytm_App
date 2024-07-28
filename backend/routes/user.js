import express from 'express';
import { userAuth } from '../types.js';
import {user,account} from '../db.js'
import jwt from 'jsonwebtoken'
import zod from 'zod';
import { authMiddleware } from '../middleware.js';
import { JWT_Secret } from '../config.js';

export const userRouter = express.Router();

userRouter.post('/signup', async (req,res)=>{
     
      const userPayload = req.body;
      const updatePayload = userAuth.safeParse(req.body);

      if(!updatePayload.success){
        return res.status(411).json({
            msg: " You sent the wrong inputs"
        });
      }
      const existingUser = await user.findOne({
        userName: userPayload.userName
      });

      if(existingUser){
        res.status(411).json({
            msg: " You sent the wrong inputs"
        });
        return;
      }
     
      const User = await user.create({
           userName: userPayload.userName,
           firstName: userPayload.firstName,
           lastName: userPayload.lastName,
           password: userPayload.password,
      });

      
      const userId = User._id;
      await account.create({
           userId,
           balance: 1 + Math.random() * 10000 
      });
      const token= jwt.sign({
        userId},
            JWT_Secret
        );
      res.json({
        msg: "user created",
        token: token,
        userId: userId
      });
});


userRouter.post('/signin', async (req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    
    const existingUser = await user.findOne({
        userName: userName,
        password: password
    });

    if(existingUser){
        const token= jwt.sign({
            userId: user._id}, JWT_Secret)
        res.json({
           jwt: token 
        });
    }else{
        res.json({
          message: "Error while logging in"
        }) 
    }

});

const updatedBody = zod.object({
  password : zod.string().min(5).optional(),
  firstName : zod.string().optional(),
  lastName : zod.string().optional()
});

userRouter.put('/',authMiddleware, async (req, res)=>{

  const updateded = updatedBody.safeParse(req.body);

  if(!updateded.success){
    res.status(411).json({
        msg: "Error while updating information"
    });
  }
  
    await user.updateOne(
      { _id:req.userId},
         req.body 
    );
    res.json({
      msg: " Updated User details"
    });
})

userRouter.get('/bulk',async (req,res)=>{
     
     const filter = req.query.filter || "";
    
     const users = await user.find({
             $or: [
                {
                  firstName: { "$regex" : filter}
                },
                {
                  lastName: { "$regex" : filter}
                }
             ]
     });

     res.json({
        user: users.map(
          user =>({
             firstName: user.firstName,
             lastName: user.lastName,
             _id: user._id
          })
        )
     })

})

// Update issue with put route.