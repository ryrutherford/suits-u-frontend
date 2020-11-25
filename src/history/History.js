import React from "react";
import Sponsorships from "./Sponsorships";

const History = () => {
    return (
        <section className="history">
            <div>
                <p className="history__overview--text">
                    Suits U Montreal is a student run nonprofit organization that provides students with an opportunity to  
                    purchase high quality, gently used, business attire at affordable prices. Clothes are donated by businesses, 
                    students, and other community members with all profits being donated to local charities. 
                    Originally founded in Toronto, the Montreal branch opened in 2017. 
                </p>
            </div>
            <div className="history__timeline">
                <div className="history__timeline-container history__timeline--left">
                    <div className="history__timeline-content">
                        <h2>2017</h2>
                        <p>
                            Suits U Montreal is founded by a couple of McGill students. One suit sale is held along with a tie sale and some other minor fundraising events like churro sales. Partnerships with local businesses begin to form with law firms like Blake's and McCarthy Tétrault donating suits and Tim Hortons providing coffee for events. All profits are donated to Sun Youth.
                        </p>
                    </div>
                </div>
                <div className="history__timeline-container history__timeline--right">
                    <div className="history__timeline-content">
                        <h2>2018</h2>
                        <p>
                            Two suit sales are held on McGill campus leading to double the money raised for Sun Youth. New partnerships with local firms like Richter, RDS, and McMillan are formed.
                        </p>
                    </div>
                </div>
                <div className="history__timeline-container history__timeline--left">
                    <div className="history__timeline-content">
                        <h2>2019</h2>
                        <p>
                            Suits U Montreal joins McGill's Management Undergraduate Society (MUS) where it is now officially affiliated with McGill University. A suit sale is held in the fall in McGill's famous Arts building leading to the highest event turnout and profit. Over $1000 is donated to McGill Students' for Parkinson's Awareness. Suits U Montreal is represented at Fashion Business Uncovered's 2019 conference with two club members as panelists.
                        </p>
                        </div>
                </div>
                <div className="history__timeline-container history__timeline--right">
                    <div className="history__timeline-content">
                        <h2>2020</h2>
                        <p>
                            The largest suit drive yet (in partnership with Maison Manuvie), a collaboration with SynesthASIA McGill, and another suit sale is planned for the winter semester but are all cancelled due to the Coronavirus. In the fall, resume writing and cover letter tips are delivered through online vidoes in partnership with AIESEC.
                        </p>
                    </div>
                </div>
                <div className="history__timeline-container history__timeline--left">
                    <div className="history__timeline-content">
                        <h2>2021</h2>
                        <p>
                            Suits U Montreal's website is launched, enabling students around Montreal to purchase our items at anytime. 
                        </p>
                    </div>
                </div>
            </div>
            <Sponsorships/>
        </section>
    );
}

export default History;