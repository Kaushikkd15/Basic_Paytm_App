import { Link } from "react-router-dom"
export function BottomWarning({label, buttonText, to}){
    return <div className="py-4 text-sm flex justify-center font-medium">
          <div>
            {label}
          </div>
         <Link className="pointer pl-1 underline cursor-pointer" to={to}>
              {buttonText}
         </Link> 
    </div>
}