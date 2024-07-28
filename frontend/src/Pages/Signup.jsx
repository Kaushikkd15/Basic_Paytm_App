import { useState } from "react";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { Subheading } from "../Components/Subheading";
import { SideBar } from "../Components/SideBar";
import axios  from "axios";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const[userName, setUserName] = useState("");
    const[firstName , setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignup = async () => {
        try {
            // Send POST request with the correct data
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                userName,
                firstName,
                lastName,
                password
            });
    
            // Store token in localStorage
            localStorage.setItem("token", response.data.token);
    
            // Navigate to the dashboard
            navigate("/dashboard");
        } catch (error) {
            console.error("Error during signup:", error);
            // Handle error (e.g., show a message to the user)
        }
    };
    
    return <div className="h-screen bg-stone-400 bg-cover  flex justify-center">
        <div className="flex flex-col justify-center">
        <SideBar className="flex flex-col flex-end"/>
        <div className="bg-slate-100 rounded-md px-4">
         
         <Heading label= {"Signup"}/>
         <Subheading sublabel={"Enter your Information to create your account"}/>
         <InputBox onChange={ e =>{
            setFirstName(e.target.value);
         } } label={"First Name"} placeholder={"John Doe"}/>
         <InputBox onChange={ (e)=>{
            setLastName(e.target.value);
         }} label={"Last Name"} placeholder={"Emerson"}/>
         <InputBox onChange={ (e) =>{
            setUserName(e.target.value);
         }} label={"Email"} placeholder={"kaushik@gmail.com"}/>
         <InputBox onChange={ (e) =>{
            setPassword(e.target.value);
         }} label={"Password"} type="password" placeholder={"Password"}/>
         <div className="pt-2">
            <Button onClick={handleSignup}label={"Submit"}/>
            </div>
         <BottomWarning label={"Already have an account?"} buttonText={"Sign in"}/>
      </div>
      </div>
    </div>
}

