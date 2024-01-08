import RestuarantCard from "./RestuarantCard";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer"

const Body=()=>{
    
    const [on,setOn]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredList,setFilteredList]=useState("");
    useEffect(
        ()=>{
            console.log("useEffect")
            fetchData()
        },[]);
        console.log("body rendered")
        const fetchData= async () => {
            
              const data = await fetch(
                "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/mapi/homepage/getCards?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
              const json = await data.json();
            //   console.log(json.data.succees.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
              
                const resData=json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants;
              
              setOn(resData);
              setFilteredList(resData);
            } 
        
          
        
    if(on.length===0){
        return (
            <Shimmer/>
        )
    }
    console.log(searchText)
    return (
        <div className="body">
            <div className="search">
                <button onClick={()=>{
                    setOn((prev)=>{
                        let x= prev.filter((x)=>x.info.avgRating>4.0)
                        return x
                    })
                    }}>Top Rated Restuarants</button>
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(()=>{return e.target.value;});
                    }} />
                    <button onClick={()=>{
                        console.log(searchText,on[0].info.name)
                        setFilteredList(on.filter((e)=>e.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
            </div>
            <div className="res-container">
                {
                    filteredList.map((e)=><RestuarantCard key={e.info.id} resObj={e}/>)
                }
            </div>
        </div>
    )    
}

export default Body;