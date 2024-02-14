import React from "react"
import s from "./ImgInfo.module.css";

const ImgInfo = (props) => {


    return (
        <div>
            <img src={props.objData} />
        </div >

    )
}

export default ImgInfo;
