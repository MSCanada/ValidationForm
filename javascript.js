function userid()
{
	var user_value=document.getElementById("user_value").value;
    var individual= user_value.split("");
    var i;
    var count=0; // for only lower class,upper class and numbers allowed in userid
    var lowercase=0;
    var uppercase=0;
    var error=0;


if(/[a-z]/.test(user_value)==true)
	lowercase=1;
else
	lowercase=0;

if(/[A-Z]/.test(user_value)==true)
	uppercase=1;
else
	uppercase=0;

for(i=0;i<user_value.length;i++)
{

if(((individual[i]>="A" && individual[i]<="Z") || (individual[i]>="a" && individual[i]<="z")|| (individual[i]>="0" && individual[i]<="9")  )==false)
	count=1;
}

if(user_value.length<=4 || user_value.length>=12 )
{
error=1;
}


if(lowercase==1 && uppercase==1 && count==0 && error==0)
document.getElementById("user_id").innerHTML="";
else
document.getElementById("user_id").innerHTML="User Id not corect";



}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function password()
{

if (document.getElementById("password_value").value!=document.getElementById("conpassword_value").value)

document.getElementById("password_id").innerHTML="Password not Match";
else
{

	document.getElementById("password_id").innerHTML="";
if(document.getElementById("password_value").value.length<=4 || document.getElementById("password_value").value.length>=12)
	
{
	document.getElementById("password_id").innerHTML="Password length should be between 5 to 12 characters.";
}

else{
if(/[a-z]/.test(document.getElementById("password_value").value)==true)
	lowercase=1;
else
	lowercase=0;

if(/[A-Z]/.test(document.getElementById("password_value").value)==true)
	uppercase=1;
else
	uppercase=0;

if ((lowercase==1 && uppercase==1)==false)

document.getElementById("password_id").innerHTML="Password should contain atleast one uppercase and one lowercase letter.";
}

}
}

function username()
{
var nameuser=document.getElementById("user_name").value;
var individual= nameuser.split("");
var i,count;

for(i=0;i<nameuser.length;i++)
{

if(((individual[i]>="A" && individual[i]<="Z") || (individual[i]>="a" && individual[i]<="z") || (individual[i]==" ")  )==false)
	count=1;
}

if (count==1)
{
	document.getElementById("username").innerHTML="Should include only alphabets";
count=0;
}
else 
	document.getElementById("username").innerHTML="";
}

function zipcode()
{
var zipvalue=document.getElementById("zipcode_value").value;
var individual= zipvalue.split("");
var i,count;
for(i=0;i<zipvalue.length;i++)
{

if(((individual[i]>="A" && individual[i]<="Z") || (individual[i]>="a" && individual[i]<="z") || (individual[i]==" ") || (individual[i]>="0" && individual[i]<="9") )==false)
	count=1;
}

if (count==1)
{
	document.getElementById("zip_id").innerHTML="Should include only alphabets and numbers";
count=0;
}
else 
	document.getElementById("zip_id").innerHTML="";
}


function emailvalue()
{
	var evalue=document.getElementById("email_value").value;
var individual= evalue.split("");
var i,count;
for(i=0;i<evalue.length;i++)
{

if(((individual[i]>="A" && individual[i]<="Z") || (individual[i]>="a" && individual[i]<="z") ||  (individual[i]>="0" && individual[i]<="9") ||(individual[i]=="@") || (individual[i]==".")                     )==false)
	count=1;
}

if (count==1)
{
	document.getElementById("emailvalue").innerHTML="Not a Valid Email";
count=0;
}
else 
	document.getElementById("emailvalue").innerHTML="";
}


function submit()
{
if(document.getElementById("user_value").value=="")
	document.getElementById("user_id").innerHTML="Please Enter User ID";

if((document.getElementById("password_value").value && document.getElementById("conpassword_value").value)=="")
document.getElementById("password_id").innerHTML="Please Enter Password";	

if(document.getElementById("user_name").value=="")
document.getElementById("username").innerHTML="Please enter Username";

if(document.getElementById("zipcode_value").value=="")
document.getElementById("zip_id").innerHTML="Please enter Zip Code";	

if(document.getElementById("email_value").value=="")
document.getElementById("emailvalue").innerHTML="Please enter Email";		

if ((document.getElementById("user_id").innerHTML =="") && (document.getElementById("password_id").innerHTML=="") && (document.getElementById("username").innerHTML =="") && (document.getElementById("zip_id").innerHTML=="") && (document.getElementById("emailvalue").innerHTML==""))
window.alert(" Form Submitted");









}







