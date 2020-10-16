import React from "react"
import ZVideo from "../imgs/fear-of-god-for-ermenegildo-zegna.mp4"


const Video = () => {
    return(
        <section className="section-video">
            <div className="video">
                <video className="video__content" autoPlay muted loop>
                    <source src={ZVideo} type="video/mp4"/>
                    Your browser is not supported
                </video>
            </div>
        </section>
    );
}

export default Video