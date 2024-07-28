export function InputBox ({label, placeholder, onChange}){
    return <div>
        <div className="text-sm font-medium pt-2 pb-0.5">
           {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className=" w-full px-2 py-2 border-slate-200 border rounded"/>
    </div>
}