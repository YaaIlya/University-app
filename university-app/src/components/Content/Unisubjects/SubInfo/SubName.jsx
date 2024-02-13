import React from "react"
import s from "./SubName.module.css";

const SubName = (props) => {
    let subName = [
        { id: 1, name: "DevOps" },
        { id: 2, name: "Eminem" }
    ]

    let subElemetns = subName.map(s => <div>{s.name}</div>);

    return (
        <div>
            {subElemetns}
        </div >

    )
}

export default SubName;
