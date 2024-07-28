import { useState,useEffect } from "react";
import axios from 'axios';

export function Balance(){
    return <>
      <BalanceAmount />
    </>
}

function BalanceAmount(){
    const [balance, setBalance]= useState("");
    useEffect(async ()=>{
        axios.get(" http://localhost:3000/api/v1/account/balance")
        .then(response =>{
        setBalance(response.data.balance);
        });
    },[setBalance])

return <div className="flex  pt-4">
       <div className=" font-bold h-full text-lg ml-4">
           Your Balance
       </div>
       <div className="font-semibold text-lg ml-4">
        Rs {balance}
       </div>
</div>
}