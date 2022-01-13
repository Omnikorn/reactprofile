import React, { useState } from "react"
import { Card, CardGroup, Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "./work.css"

const Work = () => {
	const [projects, setProject] = useState([
		{
			name: "yummy fridge",
			id: 1,
			deployedLink:
				"https://omnikorn.github.io/Yummy_Fridge/",
			repoLink: "https://github.com/Omnikorn/Yummy_Fridge",
			image:require("./images/yummy.png").default,
			info: "This is a recipe recommendation app where a user will enter a list of ingredients they have in their fridge and our app will do its magic and come up with a number of recipes along with a cocktail suggestion. Who doesn’t need a good cocktail (or 2 ) at the end of the day. The app utilises Spoonacular API on the backend and built with HTML, JavaScript and CSS.",
		},
		{
			name: "WRK with",
			id: 2,
			deployedLink: "https://wrkwith-app.herokuapp.com/",
			repoLink: "https://github.com/Omnikorn/wrkwith-app",
			image: require("./images/cover-s.png").default,
			info: "This was an attempt at creating an alternative to stack overflow. The premise is simple. A developer working on a project would advertise the project to attract possible collaborators. This could be a project from start or a part of a project or a specific problem. Interested developers would register as interested collaborators and lines of communication would open between the project owner and future collaborators. A win-win situation.",
		},
		{
			name: "The Big Day",
			id: 3,
			deployedLink: "https://thebigday.herokuapp.com/",
			repoLink: "https://github.com/Omnikorn/Wedding_Organiser",
			image:require("./images/wedbg1.png").default,
			info: "This is a MERN full stack application aimed to simplify the wedding planning process. Couples can enter their wedding details including dates, venue and menu details and generate an electronic email list of their guests who will receive an email of these details. The guests can then log in to the “wedding” on our application to RSVP and confirm their menu choice.",
		},
		{
			name: "The Micro Blog site",
			id: 4,
			deployedLink: "https://tblog2.herokuapp.com/",
			repoLink: "https://github.com/Omnikorn/Micro_Blog_v2",
			image:require("./images/micro-blog.png").default,
			info: "This is a simple blogging app build using node, express, handlebars with a MYSQL database to store and retrieve blog posts. A user is presented with a log in / sig up screen where they can create or log in into their account. Once logged in, the user is taken to the home page where they can view all posts posted by other users . when a user clicks on a post they are taken to a post screen where they can see all comments related to that post and they have the ability to comment themselves. On the users own dashboard the user can create a new post or edit and delete their current posts. The app is hosted on a Heroku serve with the posts and comments MYSQL database being hosted on a JAWdb server.",
		},
		{
			name: "The Weather Dashboard",
			id: 5,
			deployedLink: "https://omnikorn.github.io/WeatherApp/",
			repoLink: "https://github.com/Omnikorn/WeatherApp",
			image:require("./images/weatherapp.png").default,
			info: "This is a weather dashboard built using HTML, JavaScript and CSS. The main search function is powered by open-weather 5day forecast API which supports city name search. This API returns the 5-day forecast and it also returns the latitude and longitude coordinates for the searched city. These are then fed into a new function to generate a second API search (one call API) from open weather that returns the current weather conditions including the UV index",
		},
		{
			name: "The Online/Offline Budget Tracker",
			id: 6,
			deployedLink: "https://harith-budget-tracker.herokuapp.com/",
			repoLink: "https://github.com/Omnikorn/budget_tracker",
			image:require("./images/budget.png").default,
			info: "This is a simple progressive web application designed with the world traveller in mind. It is designed to work offline during periods of internet outage where a user can still enter their information (i.e expenses) to be stored locally then to be uploaded to the main database when the user next connect online",
		}
	])
	return (
		
		<React.Fragment>
			<h1>Recent Projects</h1>
			<CardGroup>
				
					<Row xs={1} md={3} className="g-4">
						{/* {Array.from({ length: 4 }).map((_, idx) => ( */}
						{projects.map((project) => (
							
							
								<Col>
									<Card key={project.id} class="the_card">
										<Card.Img className="anim" variant="top" src={project.image}/>
										
										<Card.Body >
											<Card.Title>{project.name}</Card.Title>
											<Card.Text>{project.info}</Card.Text>
											<Button id="but1"
												href={project.deployedLink}
												target="_blank"
											>
												{" "}
												Deployed Link{" "}
											</Button>
											<Button id="but2"
												href={project.repoLink}
												target="_blank"
											>
												{" "}
												Repo Link{" "}
											</Button>
										</Card.Body>
									</Card>
								</Col>
							
						))}
					</Row>
				
			</CardGroup>
		</React.Fragment>
	)
}

export default Work
