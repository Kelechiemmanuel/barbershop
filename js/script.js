function sendmail()
{
    
    let user= document.getElementById("user_name").value;
    let email= document.getElementById("user_email").value;
    let rooms= document.getElementById("no._rooms").value;
    let people= document.getElementById("no._people").value;
    
    let msg = "Congratulations !!! Your room has been sucessfully booked.This is the confirmation message regarding your booking. Here is the details that you have entered<hr>"



     let body = msg+'<br>Name: ' + user +"<br>Email: " +email +"<br>No. Of Rooms: " + rooms+"<br>No. Of People: " + people  ;
     Email.send({
        SecureToken:"00f74d-33ce-4f32-b45f-a1252506c78b",
        To :"ekelechi413@gmail.com",
        From: "ekelechi413@gmail.com",
        Subject: "Hotel Booking Status",
        Body:body,
    }).then(
        message =>{
           
            if(message=='OK'){
            alert('There is error at sending e-mail.');
            }
            else{
                console.log (message);
                alert('Your room has been booked successfully, check your e-mail for confirmation. ')
                
            }
        }
    );
}


// Email.send({
//     SecureToken:"00f74d-33ce-4f32-b45f-a1252506c78b",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body",
// 	Attachments : [
// 	{
// 		name : "smtpjs.png",
// 		path : "https:/etworkprogramming.files.wordpress.com/2017/11/smtpjs.png"
// 	}]
// }).then(
//   message => alert(message)
// );


