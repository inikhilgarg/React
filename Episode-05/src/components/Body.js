import RestuarantCard from "./RestuarantCard";
import { restaurants } from "../utils/mockData";
import {useState} from "react"

const Body=()=>{
    
    const [on,setOn]=useState(restaurants);
    return (
        <div className="body">
            <div className="search">
                search
                <button onClick={()=>{
                    setOn((prev)=>{
                        let x= prev.filter((x)=>x.info.avgRating>4.0)
                        return x
                    })
                    }}>Top Rated</button>
            </div>
            <div className="res-container">
                {
                    on.map((e)=><RestuarantCard key={e.info.id} resObj={e}/>)
                }
            </div>
        </div>
    )    
}

export default Body;