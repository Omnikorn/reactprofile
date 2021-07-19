import { blue } from "@material-ui/core/colors"
import React from "react"
import emailjs from "emailjs-com"

const Contact = () => {

    function sendEmail (event){
        event.preventDefault();

        emailjs.sendForm("service_ookie27","template_wtq1v83",event.target,"user_fKSEnKtHCs5iiz02fMa9f").then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));

    }
	return (
		<div
			className="container border"
			style={{
				marginTop: "50px",
				width: "50%",
				backgroundColor: "blueviolet",
			}}
            onSubmit={sendEmail}
		>
			<h1 style={{ marginTop: "25px" }}> Get in Touch</h1>
			<form
				className="row"
				style={{ margin: "25px 85px 75px 100px" }}
			>
				<label>Name</label>
				<input
					type="text"
					name="name"
					className="form-control"
				/>

				<label>Email</label>
				<input
					type="email"
					name="user_email"
					className="form-control"
				/>

				<label>Message</label>
				<textarea
					name="message"
					rows="4"
					className="form-control"
				/>

				<input
					type="submit"
					value="send"
					className="form-control btn btn-primary"
					style={{ marginTop: "25px" }}
				/>
			</form>
		</div>
	)
}

export default Contact
