import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Main extends React.Component {
    state = {
        isLoading : true,
    }

    getSite = () => {
        setTimeout(()=> {
            gsap.to("#header",
            {duration:0.4,
            top:0,
            })
            gsap.to("#footer",
            {duration:0.8,
            bottom:0,
            })
            gsap.to(".main__inner > div:nth-child(1)",
            {duration:1.2,
            opacity:1,
            y:0,
            delay:0.4,
            ease: "slow(0.7, 0.7, false)"
            })
            gsap.to(".main__inner > div:nth-child(2)",
            {duration:1.4,
            opacity:1,
            y:0,
            delay:0.8,
            ease: "slow(0.7, 0.7, false)"
            })
            gsap.to(".main__inner > div:nth-child(3)",
            {duration:1.6,
            opacity:1,
            y:0,
            delay:1.2,
            ease: "slow(0.7, 0.7, false)"
            })
            gsap.to(".main__inner > div:nth-child(4)",
            {duration:1.8,
            opacity:1,
            y:0,
            delay:1.6,
            ease: "slow(0.7, 0.7, false)"
            })
        },1000)
    }

    // mainAnimation = ()=>{
    //     gsap.set("main__inner", {opacity:0});
    // }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false});
            this.getSite();
        }, 3000);
    }
    
    render(){
        const {isLoading} = this.state;


        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Main;