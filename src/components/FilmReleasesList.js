import React from "react";
import FilmRelease from "./FilmRelease";

const FilmReleasesList = ({film_releases}) => {
    const filmReleaseComponents = film_releases.map((film_release)=>{ 
        return <FilmRelease title = {film_release.title} url = {film_release.url} key = {film_release.id}/>
        
    })

    return(
        <>
        {filmReleaseComponents}
        </>
    )
}

export default FilmReleasesList;
