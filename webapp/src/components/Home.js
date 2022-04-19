import React from "react"

import "./../styles/Home.css"
import logoData from "./../content/tech-logo.json"

const baseUrl = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics"
export default function Home() {
    const loadImgData = () => JSON.parse(JSON.stringify(logoData));
    const imgs = loadImgData();
    const imgJsx = imgs.map((img) => {
        return <img key={img.title} src={baseUrl + img.url} alt={img.title} />
    })
    return (
        <>
            <div className="intro">
                <p>Hi, I'm Clive,</p>
                <p>an ordinary developer.</p>
            </div>
            <div className="interest">
                <p>I'm interested in...</p>
                <div className="interest__logo">
                    {imgJsx}
                </div>
            </div>
        </>
    );
}
