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
    isLoading: true,
    refers: [],
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", {
        duration: 0.4,
        top: 0,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to(".cont__title strong", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to(".cont__title em", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.2,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to(".refer__inner", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "slow(0.7, 0.7, false)",
      });
    }, 10);
  };

  getRefers = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/seockchan/web_class_react/master/react2022/src/assets/json/reference.json"
    );

    this.setState({ refers: htmlRefer, isLoading: false });
    this.mainAnimation();
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      document.querySelector("body").style.background = "#fff";
      this.getRefers();
    }, 2000);
  }
  render() {
    const { isLoading, refers } = this.state;

    console.log(refers);
    return (
      <>
        {isLoading ? (
          <Loading color="light" />
        ) : (
          <>
            <Header color="light" />
            <Contents>
              <Title title={["Reference", "Book"]} color="light" />
              <section className="refer__cont light">
                <div className="container">
                  <div className="refer__inner">
                    <h2>CSS</h2>
                    <ul className="refer__list">
                      {refers.map((refer) => (
                        <ReferCont
                          key={refer.id}
                          id={refer.id}
                          title={refer.title}
                          desc={refer.desc}
                          use={refer.use}
                          desc2={refer.desc2}
                          element={refer.element}
                          tag={refer.tag}
                          version={refer.version}
                          view={refer.view}
                          image={refer.image}
                          link={refer.link}
                          Definition={refer.Definition}
                          Accessability={refer.Accessability}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <Contact />
            </Contents>
            <Footer color="light" />
          </>
        )}
      </>
    );
  }
}

export default Reference;
