import { useState } from "react";
import {motion} from "framer-motion";
import { MenuLink } from "./MenuLink";
import { Button } from "./Button";
export function SideBar(){
    const [isOpen, setisOpen] = useState(false);

    const Links = [
        {
          name: "SignIn",
          path: "/signin"
       },
       {
        name: "SignUp",
        path: "/signup"
     }, {
        name: "Dashboard",
        path: "/dashboard"
     }, {
        name: "Payment",
        path: "/payment"
     }
    ]

    return (
        <div>
            <div className="sidebar-btn" onClick={()=>{
                setisOpen(!isOpen);
            }}>
            <span className="material-symbols-outlined-icon"><Button label= {"Menu"}/></span>
            </div>
            <motion.aside className="sidebar w-96 h-full" 
            initial={{clipPath: "circle (0% at 0 0)"}}
            animate= {
                isOpen
                ?{clipPath: "circle(200% at 0 0)"}
                :{clipPath:"circle(0% at 0 0)"}
            }
            transition={{ease: [0.17, 0.67, 0.83, 0.67 ]}}
            >
                <div className="sidebar-wrapper  ">
                    <nav className="sidebar-menu">
                        <ul>
                            {Links.map((item)=>(
                                <li key={item.name}>
                                    <MenuLink link={item.path} text={item.name} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </motion.aside>
        </div>
    )
}

