export function Appbar({label}){
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center  h-full ml-4">
              Paytm App
        </div>
        <div className="flex">
             <div className="flex flex-col justify-center h-full mr-4 text-lg">
                Hello
             </div>
             <div className="rounded-full h-12 w-12 mt-1 shadow flex justify-center bg-slate-200 ml-2">
                 <div className="flex flex-col justify-center h-full text-xl">
                       U
                 </div>
             </div>
        </div>
    </div>
}