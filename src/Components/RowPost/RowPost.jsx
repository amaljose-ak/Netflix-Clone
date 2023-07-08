import React, { useEffect, useState } from "react";
import "./Rowpost.css"
import axios from "../../axios";
import {API_KEY,imageUrl} from "../../constants/constant";

function RowPost(props) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('isfn')
    })
  })
 
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
           <img className={props.isSmall ? 'smallPoster': 'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`} />
        )}
       
         
      </div>
    </div>
  );
}

export default RowPost;
