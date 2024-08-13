import React from "react";
import amberly from "../assets/Amberly-1.jpg"

function AboutMe() {
    return(
        <div className="content-container">
        <div className="md:grid md:grid-cols-3 md:gap-5">
            <div>
                <img className="img-class md:h-auto" src={amberly}/>
            </div>
            <div className="md:col-span-2 text-justify">
                <h2 className="font-alegreya">Meet the artist</h2>
                <p>My name is Amberly, and as you can see, I am quite passionate about art! Rooted in mathematics and art, I have always sought ways to combine my two studies. Before transitioning to UX/UI design, I worked as a full stack software engineer for five years. While in engineering, I became increasingly interested in user experience design, and always sought to develop the best user interface in collaboration with our design team. Working closely with them gave me better insight into their work and sparked a curiosity which blossomed into pursuing a new career path. From my educational background and work experience, I am well positioned to bridge the gap between design and tech to create delightful user experiences driven by thorough research.</p>
               
                <p>Outside of work, you can find me jamming out to Taylor Swift, catching up on Formula One news, or cuddling with my two cats.</p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;