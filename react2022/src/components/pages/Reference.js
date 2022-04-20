import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";


class Reference extends React.Component {
    state = {
        isLoading : true,
        refers : [],
    }

    mainAnimation=()=>{
        setTimeout(() => {
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
            gsap.to(".refer__inner",
            {duration:0.5,
                x:0,
                y:0,
                opacity:1,
                delay:1.5,
                ease: "slow(0.7, 0.7, false)"
            })
        }, 10);
    }

    getSite = async ()=>{
        const {
            data : {
                data:{refer},
            },
        } = await axios.get("https://seockchan.github.io/web_class_react/react2022/src/assets/json/reference.json");
        console.log(refer);

        this.setState({refers:refer,isLoading:false});

        setTimeout(() => {
            console.log("두번째 시작");
            this.setState({isLoading:false});
            this.mainAnimation();
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작");
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background="#fff";
            this.getSite();
        }, 2000);
    }
    render(){
        const {isLoading, refers} = this.state;

        console.log(refers);
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                    ) : (
                        <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["Reference","Book"]}color="light"/>
                            <ReferCont refer={refers} color="light" />
                            <Contact />
                        </Contents>
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}

export default Reference;