import React from "react"
import s from "./ImgInfo.module.css";

const ImgInfo = () => {
    let imgName = [
        { id: 1, name: "https://cdn.pvs-studio.com/import/docx/blog/0710_DevOps_vs_DevSecOps_ru/image2.png?ver=07-27-2023-02-50-26" }
    ]

    return (
        <div>
            <img src={imgName[0].name} />
        </div >

    )
}

export default ImgInfo;
