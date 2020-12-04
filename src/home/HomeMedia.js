import React from "react"
import ZVideo from "../img/fear-of-god-for-ermenegildo-zegna.mp4"
import MPic from "../img/mobile-background.jpg";
import {useViewport} from "../common/ReactMediaQuery";


const HomeMedia = () => {
    const { width } = useViewport();
    return(
        <section className="section-home-media">
            <div className="home-media">
                {width >= 601 &&
                    <video className="home-media__content" autoPlay muted loop playsInline preload="auto">
                        <source src={ZVideo} type="video/mp4"/>
                        Your browser is not supported
                    </video>
                }
                {width < 601 &&
                    <img src={MPic} alt="Suits U Photoshoot" className="home-media__content"/>
                }
            </div>
        </section>
    );
}

export default HomeMedia;