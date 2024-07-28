import { Button } from "./Button"
import { Heading } from "./Heading"
export const SendMoney = ()=>{
    return  <div className="flex justify-center bg-gray-100 h-screen">
                <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col justify-center">
                    <Heading label ={"Send Money"}/>
                    </div>
                    <div className="flex flex-col justify-center ]">
                        <div className="flex">
                            <div className="rounded-full h-12 w-12 flex justify-center bg-green-500">
                                <div className="flex flex-col justify-center h-full text-white">
                                <a href="/dashboard"> U </a>    
                                </div>
                            </div>
                            <div className="flex flex-col justify-center text-lg font-semibold ml-2">
                             Friend's Name
                            </div>
                        </div>
                        <div className="flex flex-col justify-center mt-2">
                        <input type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"></input>
                        </div>
                        <div>
                        <button type="button" class=" w-full mt-3 text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Intiate Transfer</button>
                        </div>
                    </div>
                
                </div>
                </div>
            </div>
}