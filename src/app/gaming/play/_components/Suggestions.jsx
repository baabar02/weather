import { MapPin } from "lucide-react"

export const Suggestions =({cityNames})=>{
    return <div className="flex gap-4">
        {cityNames.map(el=>{
            return (
            <div className="flex gap-4 p-2 z-52">
               <MapPin/>
               <p>{el}</p>
            </div>
            )
        })}
    </div>
}