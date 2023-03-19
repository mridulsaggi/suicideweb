import {React,useState} from "react";
import "./page.css";
import Menu from "./pageapi";
import Menucard from "./pagecard";
const Res=()=>{
    const[menuData,setMenuData]=useState(Menu);
    return(
        <>
        <Menucard menuData={menuData}/>
        </>
    )
}
export default Res;