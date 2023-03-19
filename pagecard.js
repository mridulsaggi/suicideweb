import React from "react";
import "./page.css"
const Menucard=( {menuData} )=>{
    return(
        <>
    <div className="he">SUICIDE IS NOT THE SOLUTION</div>
        <div className="cont">
            {menuData.map((curelem)=>{
                return(
                    <>
                        <div className="menucards">
                            <div className="h">{curelem.head}</div>
                            <img src={curelem.img} alt="" />
                            <div className="br">{curelem.b}</div>
                            <a href={curelem.link} target="_blank">READ</a>
                        </div>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default Menucard;