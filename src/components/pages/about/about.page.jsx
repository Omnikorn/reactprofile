import React from "react"
import "./about.css"
const image = require("./AvatarMaker.png").default
const twitter = require("./twitter.png").default
const insta = require("./insta.png").default
const linked = require("./mouse.png").default

export default function About() {
	return (
		<div>
			<div className="container">
				<h1 className="title"> About Me</h1>
				<div className="row" style={{marginTop:"10%"}}>
					<div className="col"><img  src={image} alt="harith" style={{ filter:"grayscale(90%)"}}></img></div>
		           <div className="col">
		           	 <p>
			        
							Hi, I am a full stack web developer. recent graduat
							of the Manchester University Coding bootcamp. I love
							building costume websites. in my spare time i do
							some graphic desing and pottery. I am leaning to
							paint.
						</p>
						<div className="flexrow">
							<a style={{margin:"18px"}}><img src={twitter}  height="40px"></img></a>
							<a style={{margin:"18px"}}><img src={insta} height="40px"></img></a>
							<a style={{margin:"18px"}}><img src={linked} height="40px"></img></a>

						</div>
		           </div>
				</div>
			</div>
		</div>
	)
}
