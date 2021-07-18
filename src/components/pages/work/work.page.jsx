import { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
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
			image: "./images/yummy.png",
			info: "This is a recipe recommendation app where a user will enter a list of ingredients they have in their fridge and our app will do its magic and come up with a number of recipes along with a cocktail suggestion. Who doesn’t need a good cocktail (or 2 ) at the end of the day. The app utilises Spoonacular API on the backend and built with HTML, JavaScript and CSS.",
		},
		{
			name: "WRK with",
			id: 2,
			deployedLink: "https://wrkwith-app.herokuapp.com/",
			repoLink: "https://github.com/Omnikorn/wrkwith-app",
			image: "./images/cover-s.png",
			info: "This was an attempt at creating an alternative to stack overflow. The premise is simple. A developer working on a project would advertise the project to attract possible collaborators. This could be a project from start or a part of a project or a specific problem. Interested developers would register as interested collaborators and lines of communication would open between the project owner and future collaborators. A win-win situation.",
		},
		{
			name: "The Big Day",
			id: 3,
			deployedLink: "underconstruction",
			repoLink: "underconstruction",
			image: "./images/Me_Purple.jpg",
			info: "This is a MERN full stack application aimed to simplify the wedding planning process. Couples can enter their wedding details including dates, venue and menu details and generate an electronic email list of their guests who will receive an email of these details. The guests can then log in to the “wedding” on our application to RSVP and confirm their menu choice.",
		},
	])
	return (
		<Row xs={1} md={2} className="g-4 manycards">
			{/* {Array.from({ length: 4 }).map((_, idx) => ( */}
			{projects.map((project) => (
				
				<Col>
					<Card>
						<Card.Img variant="top" src={project.image} />
						<Card.Body>
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
	)
}

export default Work
