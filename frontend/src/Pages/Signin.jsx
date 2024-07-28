import { useState } from "react";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SideBar } from "../Components/SideBar";
import { Subheading } from "../Components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");
    const navigate = useNavigate();
    const handleSignIn = async ()=>{
        try{
            const response =  await axios.post("http://localhost:3000/api/v1/user/signin", {
                userName,
                password
            });
        
        navigate("/dashboard");    
        }catch(err){
            console.log("Error while logging in: ",err) ;
        }
    }
    return <div className="h-screen bg-stone-400 bg-cover flex justify-center ">
       <div className="flex flex-col justify-center">
            <div className="flex justify-end"> 
            <SideBar />
            </div>
        <div className="bg-slate-100 p-2 rounded-md">
           
            <Heading label={"SignIn"}/>
            <Subheading sublabel={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} onChange={ e =>{
                setUserName(e.target.value);  
            }} placeholder={"Kaushik@gmail.com"} />
            <InputBox label={"Password"} onChange={ e=>{
                setPassword(e.target.value);
            }} placeholder={"Password"} />
            <div className=" pt-2 mb-3">
                <Button onClick={handleSignIn} label={"Login"} />
            </div>
            
          </div>
        </div> 
    </div>
}