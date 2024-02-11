import React from "react"
import s from "./SubName.module.css";

const SubName = (props) => {
    let subName = [
        { id: 1, name: "DevOps" },
        { id: 2, name: "Eminem" }
    ]

    return (
        <div>
            <div>{subName[0].name}</div>
            <div>{subName[1].name}</div>
        </div >

    )
}

export default SubName;
