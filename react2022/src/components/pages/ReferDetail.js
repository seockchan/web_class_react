import React from 'react'
// import Header from "../layout/Header";
// import Contents from "../layout/Contents";
// import Footer from "../layout/Footer";
// import { gsap } from "gsap";

// class ReferDetail extends React.Component {
//     componentDidMount(){
//         document.querySelector("body").style.background="#fff";
//         this.mainAnimation();
//     }

//     mainAnimation = ()=>{
//         gsap.to("#header",
//             {duration:0.4,
//             top:0,
//             ease: "slow(0.7, 0.7, false)"
//             })
//             gsap.to("#footer",
//             {duration:0.8,
//             bottom:0,
//             ease: "slow(0.7, 0.7, false)"
//             })
//             gsap.to(".refer__inner",
//             {duration:0.5,
//                 x:0,
//                 y:0,
//                 opacity:1,
//                 delay:2,
//                 ease: "slow(0.7, 0.7, false)"
//             })
//     }

//     render(){
//         return (
//             <>
//                 <Header color="light" />
//                 <Contents>
//                     <section className="refer__cont light">
//                         <div className="container">
//                             <div className="refer__inner">
//                             </div>
//                         </div>
//                     </section>
//                 </Contents>
//                 <Footer color="light" />
//             </>
//         )
//     }
// }
function ReferDetail(props) {
    console.log(props)
    return <span>{props.location.state}</span>
}
export default ReferDetail
