import React from "react"
import "./about.css"
const image = require("./Me_Purple.jpg").default



export default function About() {
	return (
		<div>
			<h1 className="title"> About Me</h1>
			<img src={image} alt="harith" height="200px"></img>
            <p>
        
				Hi, I am a full stack web developer. recent graduat
				of the Manchester University Coding bootcamp. I love
				building costume websites. in my spare time i do
				some graphic desing and pottery. I am leaning to
				paint.
			</p>
		</div>
	)
}
