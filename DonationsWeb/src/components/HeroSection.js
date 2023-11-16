import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';
function HeroSection()
{
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>We fight together!</h1>
            <p>?האם אתה תורם בגדים או צריך בגדים</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>!אני תורם</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>!אני צריך עזרה<i className="far fa-play-circle" /></Button>
            </div>

        </div>
    )
}

export default HeroSection;