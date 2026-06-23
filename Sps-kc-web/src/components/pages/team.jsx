import "./team.css"
import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/navbar";
let stud=[
   {
    image :"img/team/image.png",
    h3 : "Samuel John",
    p : "Student representative"
   },

   {
    image :"img/team/image.png",
    h3 : "Samuel John",
    p : "Student representative"
   },

   {
    image :"img/team/image.png",
    h3 : "Samuel John",
    p : "Student representative"
   },

   {
    image :"img/team/image.png",
    h3 : "Samuel John",
    p : "Student representative"
   },

   {
    image :"img/team/image.png",
    h3 : "Samuel John",
    p : "Student representative"
   },
]
let prof=[
    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

    {
        image :"img/team/random1.png",
        h3 : "John Doe",
        p : "Coordinator"
    },

]

export default function Team()
{
    const [items, setItems] = useState(0);
    const [color, setcolor] = useState("#ffff");
    let content;
    if(items==0)
        {  
         content= stud.map((item, index) => (
             <div className="mem" key={index}>
                 <img src={item.image} alt="team member"/>
                 <h3>{item.h3}</h3>
                 <p>{item.p}</p>
             </div>    
         ))
        }
        else if(items==1)
        {
          content=prof.map((item, index) => (
             <div className="mem" key={index}>
                 <img src={item.image} alt="team member"/>
                 <h3>{item.h3}</h3>
                 <p>{item.p}</p>
             </div>    
         ))
        }
    return (
        <div className="team">
            <div className="slt">
                 <h1><span>Meet the</span> Team</h1>
                <div className="types">
                    <button onClick={()=>setItems(0)}><h3 style={{backgroundColor:items==0? "#001E40": "#ffff",color: items==0? "#ffff": "black"}}>Student Team</h3></button> 
                    <button onClick={()=>setItems(1)}><h3 style={{backgroundColor:items==1? "#001E40": "#ffff",color: items==1? "#ffff": "black"}}>Profesional body</h3></button> 
                </div>
                <div className="members">
                {content}
                </div>
            </div>
        </div>
    )
}