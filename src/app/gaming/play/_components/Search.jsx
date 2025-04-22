import { Search } from "lucide-react"

export const SearchInput = () => {

    return (
        <div>
            <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            aria-label="Search icon"
            />
            <input type="text" 
          
            placeholder="asds"
        
            style={{width:"500px", height: "80px", border:"1px solid green", marginTop: 40, marginLeft:40 }}
            >
               
            </input>
        </div>
    )
}
