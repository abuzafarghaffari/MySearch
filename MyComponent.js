import {useState, useEffect} from "react";
import MyCard from "./MyCard";

const MyComponent =()=>{

const [error,setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
  //     set search query to empty string
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name"]);
  const [filterParam, setFilterParam] = useState(["All"]);

useEffect(()=>{
setIsLoaded(true);
const fetchData= async ()=>{
const response = await fetch("https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json");
//console.log(response);
 if(!response.ok){
throw new Error("Some thing not ok");
 }

const data = await response.json();
//console.log(data);
if(data){
    setIsLoaded(false);
    setItems(Object.values(data));
}

}    
fetchData().catch(err=>console.log(err.message));

},[]);

function search(items) {
    return items.filter((item) => {

    if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
                     );
                 });
             } else if (filterParam == "All") {
                 return searchParam.some((newItem) => {
                     return (
                         item[newItem]
                             .toString()
                             .toLowerCase()
                             .indexOf(q.toLowerCase()) > -1
                     );
                 });
             }
         });
     }



return (
    <div>
         <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search countries here</span>
                        </label>

                        <select
              onChange={(e) => {
      setFilterParam(e.target.value);
       }}
       className="custom-select"
       aria-label="Filter Countries By Region">

        <option value="All">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
                    </div>
<div className="grid-container">
    {isLoaded && <h1>Loading...</h1>}
    {
     search(items).map((item, index)=>{
return <MyCard key={index} item ={item} />
        })
    }
</div>
</div>
);
}
export default MyComponent;