import React, { useState } from "react";
import { useEffect } from "react";
import {API_KEY,imageUrl} from '../../constants/constant'
import axios from "../../axios";
import "./Banner.css"

function Banner() {
  const [movie,setMovie]=useState()
    useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response);
      setMovie(response.data.results[1])
    })
  },[])
  return (
    <div
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.title: ""}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="discription">
        {movie? movie.overview: ""}
          </h1>
        </div>
        <div className="fade_bottom">
        
        </div>
      </div>
    </div>
  );
}

export default Banner;
