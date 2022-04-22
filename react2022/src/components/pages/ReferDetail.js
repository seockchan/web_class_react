import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
    componentDidMount(){
        document.querySelector("body").style.background="#fff";
        const {location,history}=this.props;
        if(location.state===undefined){
            history.push("/reference");
        }
        this.mainAnimation();
    }

    mainAnimation = ()=>{
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
            gsap.to(".refer__inner",
            {duration:0.8,
                x:0,
                y:0,
                opacity:1,
                delay:1.5,
                ease: "slow(0.7, 0.7, false)"
            })
    }

    render(){
        const {location}=this.props;
        console.log(location.state);
        if(location.state===undefined){
            return <div>잘못된 페이지입니다.</div>
        }else{
            return (
                <>
                    <Header color="light" />
                    <Contents>
                        <section className="refer__cont light">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h2>{location.state.title}</h2>
                                        <p>{location.state.desc}</p>
                                        <div>
                                            <table className='table'>
                                                <thead>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>요소</th>
                                                        <td>{location.state.element}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>닫는 태그</th>
                                                        <td>{location.state.tag}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>버전</th>
                                                        <td>{location.state.version}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>시각적 표현</th>
                                                        <td>{location.state.view}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>사용성</th>
                                                        <td>{location.state.Accessability}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer color="light" />
                </>
            )

        }
        this.mainAnimation();
        
    }
}

export default ReferDetail
