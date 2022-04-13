import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function About() {
    return (
        <>
            <Header />
            <Contents>
                <section className="about__cont">
                    <div className="about__inner">
                        <div>about</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default About;