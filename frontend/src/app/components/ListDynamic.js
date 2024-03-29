"use client";
import {useState} from "react";
function unique(){
    let i = 1;
    return function(){
        return i++;
    }
}
let result = unique();
export default function ListDynamic(){
    const [items, setItems] = useState([]);
    const add = () => setItems([...items, `Hello ${result()}` ]);
    return (
        <div>
             <button type="button" onClick={add}>Add</button>
            <ul>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
            </ul>
           
        </div>
    )
}
