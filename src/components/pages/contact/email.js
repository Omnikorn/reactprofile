// const nodemailer = require ("nodemailer")
// const {google} = require ("googleapis")

// const CLIENT_ID="523636012733-gtri1p0eo45ggrurcqllbd260ga2p0ga.apps.googleusercontent.com"
// const CLIENT_SECRET="UlHt_Ro-9G7I1pS9KAItaRsP"
// const REDIRECT_URI="https://developers.google.com/oauthplayground"
// const REFRESH_TOKEN= "1//0454WsTmuBhnECgYIARAAGAQSNwF-L9Ira5aeQ82oAGp8DdO75FBQFMdLBW3JHSYg2IMYadq_u5FwOM3xAnzYk0TACIBJxaZbajs"


// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
// oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})


// async function SendMail(firstName, lastName, email, message){
//     try{

//         const accessToken = await oAuth2Client.getAccessToken()

//         const transport = nodemailer.createTransport({
//             service: "gmail",
//             auth:{
//                 type:"OAuth2",
//                 user: "wed.min.2021@gmail.com",
//                 clientId: CLIENT_ID,
//                 clientSecret: CLIENT_SECRET,
//                 refreshToken:REFRESH_TOKEN,
//                 accessToken: accessToken,
//             }
//         })

//         const mailOptions = {
//             from:"the bigday <wed.min.2021@gmail.com>",
//             to: email,
//             subject:`from ${firstName} ${lastName} and ${email}`,
//             text: message,
//             html:message,
//         };

//         const result = await transport.sendMail(mailOptions)
//         return result
        
//     } catch(error) {
//         return error
//     }
// }

// // sendMail().then(result=>console.log("email has been sent", result ))
// // .catch((error)=>console.log(error.message));

// export default SendMail