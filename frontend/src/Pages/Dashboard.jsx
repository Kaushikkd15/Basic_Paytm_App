import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import { Balance } from "../Components/Balance";
import { Appbar } from "../Components/Appbar";
import { Users } from "../Components/Users";
import axios from "axios";

export function Dashboard(){
    return (
        <div>
           <div className="h-screen" >
            <div>
            <Appbar /> 
            <Balance/>
            <Users/>
            </div>
           </div>
        </div>
    )
}