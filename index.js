
/******************************************** 
*           Calculator 
*
******************************************** */
let body=document.getElementById("body");
var myScreen=document.getElementById('screen');
var clrScreen=document.getElementById("del_button");
var ans;

//  Function for displaying values
function displayValues(value)
{   
   if(myScreen.value==="welcome")
   {
    myScreen.value=null;
    myScreen.value+=value; 
   } 
   else if(myScreen.value==="Infinity")
   {
    myScreen.value=null;
    myScreen.value+=value;
   }
   else if(myScreen.value==="Syntax !!")
   {
    myScreen.value=null;
    myScreen.value+=value;
   }
   else
   {
    myScreen.value+=value; 
   }
}

//  function for calculating the value from screen
function calc()
{ 
    try{
     myScreen.value=eval(myScreen.value);
    }
    catch(e)
    {
       myScreen.value="Syntax !!"
    }
}

//  function to delete the values from screen
function deleteValues()
{
 let clr=myScreen.value.slice(0,length-1);
 return myScreen.value=clr;
}

//  greeting function
function greeting(){
    myScreen.value="welcome";
}
// displaying the greeting  immediately when page load 
setTimeout(greeting,500);

/******************************************** 
*           lucky  Game
*
******************************************** */

// creating html elements and a
var mainDiv=document.createElement("div");
var leftDiv=document.createElement("div");
var respDiv=document.createElement('div');
var line=document.createElement('hr');
var input=document.createElement("input");
var header=document.createElement("h2")
var tryBtn =document.createElement("button")
var resetbtn =document.createElement("input")
var intervalId;
var luckNum;

// adding Attributes
mainDiv.setAttribute("id","secDiv")
respDiv.setAttribute("id","rightDiv")
leftDiv.setAttribute("id","leftDiv")
input.setAttribute("type","numeric")
tryBtn.innerText="Try !"
resetbtn.setAttribute("type","reset");
resetbtn.setAttribute("value","Reset");
input.setAttribute("placeholder","Enter number")
header.innerText="Guess Number from 100 t0 999"

mainDiv.appendChild(line);
leftDiv.appendChild(input);

mainDiv.insertBefore(header,line)
leftDiv.appendChild(tryBtn)
leftDiv.insertBefore(resetbtn,tryBtn)
mainDiv.appendChild(leftDiv)
body.appendChild(mainDiv);

//function to genarate random numbers   
function generateNum(initial,final)
{ 
    return (initial+ parseInt(Math.random()*final));
}


luckNum=generateNum(100,899)
//console.log(x)
//  Event Listener for tryBtn
tryBtn.addEventListener("click",function(){
       
    mainDiv.appendChild(respDiv);  
    if(input.value=="")
    {   
        respDiv.innerHTML="<strong>You guess nothing !!</strong>"
        input.focus();
        input.style.border="2px red"
        // generating new number
        luckNum=generateNum(100,899)
    }
    else if(input.value >luckNum)
    {
        respDiv.innerHTML="<strong>Your <br> guess  is <br>Too High !"
        +"<br> The Lucky number was : "+luckNum+"</strong>"
        // generating new number
        luckNum=generateNum(100,899)
    }
    else if(input.value <luckNum)
    {
        respDiv.innerHTML="<strong>Your <br>guess  is<br>Too low !"+
        "<br> The Lucky number was : "+luckNum+"</strong>"
       // generating new number
       luckNum=generateNum(100,899)
    }
    else if(input.value==luckNum)
    {
        respDiv.innerHTML="  <strong>Exactly<br> You won !!!</strong>"
        input.style.fontSize="50px"
        input.style.backgroundColor="green" 
        intervalId=setInterval(() => {
            decorate();
        }, 500);
        // generating new number
        luckNum=generateNum(100,899)
    }
});
 

// function for changing background color
function decorate()
{
    respDiv.style.backgroundColor="rgb("+generateNum(0,255)+","+generateNum(0,255)+","+generateNum(0,255)+")"
}
//  Event Listener for reset button
resetbtn.addEventListener("click",function(){
input.value=null;
input.style.fontSize="larger"
input.style.backgroundColor="white" 
clearInterval(intervalId);
respDiv.style.backgroundColor=null
 respDiv.innerHTML=null;
 mainDiv.removeChild(respDiv);
 // generating new number
 luckNum=generateNum(100,899)
});
