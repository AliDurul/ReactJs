
import { useState } from "react"
import { Users } from "../helper/users"
import Table from "./Table"

const Main = () => {

    const [query, setQuery] = useState("");
  
    const keys = ['first_name', 'last_name', 'email'];
    
    const search = (data) => {
        return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
    }
    return (
        <div className="app">
            <input type="text" className="search" onChange={(e) => setQuery(e.target.value)} />
            <Table  data = {search(Users)} />
        </div>
    )
}
export default Main