import React, { useEffect, useState } from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieList from "../includes/MovieList";
import MovieSearch from '../includes/MovieSearch';
import Loading from "../basics/Loading";
import { gsap } from "gsap";



function Movie() {
  const [results, setVideos] = useState([]);

  function mainAnimation(){
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      document.querySelector("body").style.background="#fff";
        gsap.to("#header",
        {duration:0.4,
        top:0,
        ease: "slow(0.7, 0.7, false)"
        })
        gsap.to("#footer",
        {duration:0.8,
        bottom:0,
        ease: "slow(0.7, 0.7, false)"
        })
        gsap.to(".cont__title strong",
        {duration:0.5,
            x:0,
            y:0,
            opacity:1,
            delay:1,
            ease: "slow(0.7, 0.7, false)"
        })
        gsap.to(".cont__title em",
        {duration:0.5,
            x:0,
            y:0,
            opacity:1,
            delay:1.2,
            ease: "slow(0.7, 0.7, false)"
        })
        gsap.to(".youtube__inner",
        {duration:0.5,
            x:0,
            y:0,
            opacity:1,
            delay:1.5,
            ease: "slow(0.7, 0.7, false)"
        })
    }, 2000);
  }

  const search = (query)=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=db8df34d6524da32a570ae16c7dc9d8a&query=${query}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.results))
      .catch(error => console.log('error', error));
  }
  useEffect(()=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      fetch("https://api.themoviedb.org/3/search/movie?api_key=db8df34d6524da32a570ae16c7dc9d8a&query=cat", requestOptions)
        .then(response => response.json())
        .then(result => {setVideos(result.results)
          mainAnimation();
          console.log(result.results)
        })
        .catch(error => console.log('error', error));
  }, []);
  return (
    <>
      <Loading color="light"/>
      <Header color="light" />
      <Contents>
          <Title title={["Movie","Book"]} color="light" />
            <section className={`youtube__cont light`}>
              <div className="container">
                  <div className="youtube__inner">
                    <MovieSearch onSearch={search} />
                    <MovieList results={results} />
                  </div>
              </div>
            </section>       
      <Contact />
      </Contents>
      <Footer color="light" />
    </>
  )
}
export default Movie;
    
