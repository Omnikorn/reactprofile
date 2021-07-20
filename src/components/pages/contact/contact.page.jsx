import { blue } from "@material-ui/core/colors"
import React from "react"
import emailjs from "emailjs-com"
import { fontSize } from "@material-ui/system"
const image = require("./lines.png").default


const Contact = () => {

    function sendEmail (event){
        event.preventDefault();

        emailjs.sendForm().then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));

    }
	return (
		<div
			className="container border"
			style={{
				marginTop: "50px",
				width: "50%",
				backgroundImage:`url(${image})`,
				backgroundPosition:"center",
				backgroundSize:"100% 100%"
			}}
            onSubmit={sendEmail}
		>
			<h1 style={{ marginTop: "25px", fontSize:"6 rem"}}> Get in Touch</h1>
			<form
				className="row"
				style={{ margin: "25px 85px 75px 100px" }}
			>
				{/* <label>Name</label> */}
				<input 
				placeholder="Name"
					type="text"
					name="name"
					className="form-control"
					style={{marginTop:"25px"}}
				/>

				{/* <label>Email</label> */}
				<input
				placeholder="Email"
					type="email"
					name="user_email"
					className="form-control"
					style={{marginTop:"25px"}}
				/>

				{/* <label>Message</label> */}
				<textarea
				placeholder="message"
					name="message"
					rows="4"
					className="form-control"
					style={{marginTop:"25px"}}
				/>

				<input
					type="submit"
					value="send"
					className="form-control btn btn-primary"
					style={{ marginTop: "25px", backgroundColor:"black", borderColor:"white" }}
				/>
			</form>
		</div>
	)
}

export default Contact
