import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";


class Reference extends React.Component {
    state = {
        isLoading : true,
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

    getPorts = async ()=>{
        

        // console.log(ports);

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
            this.getPorts();
        }, 2000);
    }
    render(){
        const {isLoading} = this.state;

        console.log();
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                    ) : (
                        <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["Reference","Book"]}color="light"/>
                            <ReferCont color="light" />
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