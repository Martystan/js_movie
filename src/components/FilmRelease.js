import React from "react";

const FilmRelease = ({title, url} ) =>{
    return(
        <>
        
        <li>
        <a href = {url}>{title}</a>
        </li>
        
        </>
    )
}

export default FilmRelease