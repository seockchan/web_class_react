import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function Portfolio() {
    return (
        <>
            <Header />
            <Contents>
                <section className="portfolio__cont">
                    <div className="portfolio__inner">
                        <div>portfolio</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;