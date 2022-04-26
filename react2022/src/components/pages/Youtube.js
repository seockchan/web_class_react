import React, { useEffect, useState } from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from '../includes/YoutubeSearch';
import Loading from "../basics/Loading";
import { gsap } from "gsap";

function Youtube() {
  const [videos, setVideos] = useState([]);

  function mainAnimation(){
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      // document.querySelector("body").style.background="#fff";
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
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=21&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
    
  }
  useEffect(()=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=21&q=IVE&key=${process.env.REACT_APP_YOUTUBE_API}`, requestOptions)
        .then(response => response.json())
        .then(result => {setVideos(result.items)
          mainAnimation();
        })
        .catch(error => console.log('error', error));
  }, []);
  return (
    <>
      <Loading color="light"/>
      <Header color="light" />
      <Contents>
          <Title title={["youtube","reference"]} color="light" />
            <section className={`youtube__cont light`}>
              <div className="container">
                  <div className="youtube__inner">
                    <YoutubeSearch onSearch={search} />
                    <YoutubeList videos={videos} />
                  </div>
              </div>
            </section>       
      <Contact />
      </Contents>
      <Footer color="light" />
    </>
  )
}
export default Youtube;
    
