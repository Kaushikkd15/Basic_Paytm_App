import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";

export function Users(){
    const[users, setUsers] = useState([]);
    const[filter, setFilter] =useState("");

    useEffect(()=>{
       axios.get("http://localhost:3000/api/v1/user/bulk?filter="+ filter) 
       .then(response  =>{
            setUsers(response.data.user);
       });
    },[setFilter])
    return <div className=" flex flex-col mt-6">
         <div className="my-2 ml-4 font-bold text-lg">
               Users
         </div>
         <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)}} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user=> <User user={user} />)}
        </div>
    </div>
}

function User({user}){
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 flex justify-center bg-slate-200 mt-1 ml-4">
                <div className="flex flex-col justify-center h-12 text-lg">
                   {user.firstName[0]}
                </div>
            </div>  
            <div className="flex flex-col justify-center font-semibold text-xl h-full ml-2">  
                <div>
                     {user.firstName} {user.lastName}
                </div>
            </div>
        </div>    
            <div className="flex flex-col justify-center h-full mt-2">
                <Button label={"Send Money"} />
            </div>       
    </div>
}