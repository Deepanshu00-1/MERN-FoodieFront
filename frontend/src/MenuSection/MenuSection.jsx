import { useState } from "react"
import Header from "../HomeSection/Header"
import "./menusection.css"
import { appetizers, deserts, maincourses, totalItems } from "../assets/assets";

const MenuSection = ()=>{
    const[newClass,setNewClass] = useState(false);

    const [query, setQuery] = useState(""); 

    const [appetizerVisible, setAppetizerVisible] = useState(true)
    const [maincourseVisible, setMaincourseVisible] = useState(true)
    const [desertVisible, setDesertVisible] = useState(true)

    // console.log(maincourses.filter((mainCourse)=>mainCourse.item_name.toLowerCase().includes(query)))

    // maincourses.filter((mainCourse)=>mainCourse.item_name.toLowerCase().includes(query)) && setAppetizerVisible(false) 

    return(
        <>
        <Header />
        <div className="header">
            <div className="search-part">
                <input  onChange={(e)=>setQuery(e.target.value)} onClick={()=>setNewClass(true)}  style={{width:newClass?'30vw':'20vw', border:newClass?'2px solid #061E5C':''}} type="text" name="search" placeholder="Search..."/>
                <i className="fa-solid fa-magnifying-glass" ></i>
            </div>
        </div>
        <div className="items">
            <div className="appetizer">
                <div className="name">Appetizers🥗</div>
                <div className="foodItems">
                    
                    {appetizers.filter((appetizer)=>(appetizer.item_name.toLowerCase().includes(query))).map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mainCourse">
                <div className="name">Main Course🍕</div>
                <div className="foodItems">
                    {maincourses.filter((maincourse)=>maincourse.item_name.toLowerCase().includes(query)).map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })} 
                </div>
            </div>
            <div className="desert">
                <div className="name">Desert🍰</div>
                <div className="foodItems">
                    {deserts.filter((desert)=>desert.item_name.toLowerCase().includes(query)).map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default MenuSection