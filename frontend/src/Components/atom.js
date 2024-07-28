import {atom , selector} from 'recoil';
import axios from 'axios';

export const currentbalance = atom({
    key: "balanceAtom",
    default: selector({
    key: "balanceSelector",
    get: async()=>{
       const res= await axios.get(" http://localhost:3000/api/v1/account/balance");
       return res.data.balance
    }
   })
});