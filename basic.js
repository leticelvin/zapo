//Contains the Add metadata and Display metadata

let header1 = document.createElement('header'); // create header
document.body.appendChild(header1);
header1.className='header'

let text = document.createElement('h2'); // creat text in header
text.textContent='Gallery application 2000';
header1.appendChild(text);
text.className='h2'

let bar = document.createElement('nav') // create sidebar
document.body.appendChild(bar);
bar.className= 'sidenav'
//-----------------------
let content = document.createElement('h3'); // create header images
content.id = "demo";

content.textContent='Images'
document.body.appendChild(content);
content.className='images'

//-------------------------------
let list = document.createElement('ul') // create list
document.body.appendChild(list);
list.className='sidenavLinks';
//---------------------------------------
let listLinkOne = document.createElement('li') // list items, New Image
listLinkOne.textContent="New image"; 
list.appendChild(listLinkOne);
listLinkOne.style.padding='20px';
listLinkOne.addEventListener("click", newImagePage); // make text clickable and calls function

function newImagePage() { // opens a "new Image" content page/screen
  document.getElementById("demo").innerHTML = "New Image";
 submitForm (); // annropar formuläret
 onclick();
 
}

let listLinkTwo = document.createElement('li') // list items, Images
listLinkTwo.textContent="Images";
list.appendChild(listLinkTwo);
listLinkTwo.style.padding='20px';
listLinkTwo.style.margin='10px';
listLinkTwo.addEventListener("click", imagesPage); // make text clickable and calls function

function imagesPage() { // opens a new "Image" content page/screen
  document.getElementById("demo").innerHTML = "Images";
  
 /**
  * @description contains img, cow
  * @returns image is displayed on click
  */
  function imageContainer(e) {     
    
    var cow = document.createElement('img'); 
    cow.setAttribute('src','https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg') 
    cow.className='img1'
    document.body.appendChild(cow); // sätt denna div i body
    listLinkThree.addEventListener('click',onclick);// remove image on click
    listLinkOne.addEventListener('click',onclick);//remove image on click
    
    function onclick(event){
    
      cow.removeAttribute('src')
    }
    
    }
    
    imageContainer();
   
}

let listLinkThree = document.createElement('li') // list items, Galleries
listLinkThree.textContent="Galleries"
list.appendChild(listLinkThree);
listLinkThree.style.padding='20px';
listLinkThree.addEventListener("click", galleriesPage); // make text clickable and calls function

function galleriesPage() { // opens a new "galleries" content page/screen
  document.getElementById("demo").innerHTML = "Galleries";
  

  
}



function submitForm(){

//Create the form
var form = document.createElement('form');
form.id="myForm";
form.action="results.html";
form.method="GET";
document.body.appendChild(form);

//Create the div 
var div1 = document.createElement("div");
div1.id="aDiv"; 
document.body.appendChild(div1);

//Place the input field 
var input = document.createElement("input");
input.type = "url";
input.id = "urlinput";
input.placeholder = "Enter URL Here";
input.value = "";
document.getElementById("myForm").appendChild(input);
var url = document.getElementById("urlinput").value;

//Add submit button 
var inputbutton = document.createElement("input");
inputbutton.id = "submitbutton";
inputbutton.type = "submit";
inputbutton.value = "submit";
document.getElementById("myForm").appendChild(inputbutton);  
inputbutton.addEventListener("click", function() {});

}

//create an empty array
var imgObj = [];

function arrList(e){ // create function with an event
e.preventDefault(); // prevents the page from reloading when clicking on submit
var values = document.getElementById('urlinput'.value); //get input field value
imgObj.push('urlinput'.value);// push the input value to the empty array (imgObj)
console.log(imgObj); // Console log the empty array to see if it works
}

var submitButton = document.getElementById('submitbutton'); //get submitbutton
var submitForm = document.getElementById('myForm'); // get form
submitButton.addEventListener('click', arrList, false); // when clicking on submit, the arrList function should fire
© 2020 GitHub, Inc.


//Add description metadata to image
var description = document.createElement('input');
description.type = "text";
description.id="descriptioninput";
description.placeholder="Write description here";
document.getElementById("myForm").appendChild(description);

//button for submitting description
var descriptionbutton = document.createElement("button");
descriptionbutton.id = "descriptionsubmit";
descriptionbutton.innerText="Add description";
document.getElementById("myForm").appendChild(descriptionbutton);
document.getElementById("descriptionsubmit").addEventListener("click", descriptionfortheimage());

var imagetitle = document.getElementById("titleinput").value;
var imagedescription = document.getElementById("descriptioninput").value;


//Add title metadata to image
var title = document.createElement('input');
title.type = "text";
title.id="titleinput";
title.placeholder="Write image name here";
document.body.appendChild(title);

//button for submitting title
var titlebutton = document.createElement("button");
titlebutton.id="titlesubmit";
titlebutton.innerText="Add title";
document.body.appendChild(titlebutton);
document.getElementById("titlesubmit").addEventListener("click", nameoftheimage());


//Displaymetadata.js
//Display image metadata in the same card where the images are located
function nameoftheimage() {
  var nameparagraph = document.createElement('p');
  nameparagraph.id = "imagename";
  nameparagraph.innerText = imagename;
  //.appendChild(nameparagraph);
  };
  
  function descriptionfortheimage() {
  var descriptionparagraph = document.createElement('p');
  descriptionparagraph.id = "imagedescription";
  descriptionparagraph.innerText = imagedescription;
  var imageslocation = document.querySelector(images);
  imageslocation.appendChild(nameparagraph);
  };


// login button
function loginBtn(){
  // create the login button
  var logInButton = document.createElement('button');
  logInButton.textContent="Login";
  logInButton.id="loginbutton"
  document.body.appendChild(logInButton);
  logInButton.addEventListener('click', login, false)
  

  /**
   * @description shows the login form
   *  
   */
  function login(e){
    
    var loginDiv = document.createElement('div');
    
    var logInForm = document.createElement('form');
    logInForm.id="loginform";
    logInForm.method='Get';
    
    // input field email
    var emailInput = document.createElement('input');
    emailInput.id='email';
    emailInput.setAttribute("type", "email");
    emailInput.placeholder='E-mail';
    emailInput.maxLength='20';
    
    var lineBreak = document.createElement('br');
    
    // input field password
    var passwordInput = document.createElement('input');
    passwordInput.id='password';
    passwordInput.placeholder='password'
    passwordInput.setAttribute("type", "password");
    passwordInput.maxLength='20';

    
    // creates the submit button inside the form
    var loginSubmitButton = document.createElement('button');
    loginSubmitButton.id='loginSubmitBtn';
    loginSubmitButton.type='submit';
    loginSubmitButton.value='submit';
    loginSubmitButton.textContent='Submit';
    loginSubmitButton.addEventListener('click',submit, false)

    function submit (){
      // here the code should be for where the form should be sent.
    }

    document.body.appendChild(loginDiv); // Div 
    loginDiv.appendChild(logInForm);    // form
    logInForm.appendChild(emailInput); // email input
    logInForm.appendChild(lineBreak);   // line break
    logInForm.appendChild(passwordInput); // password input
    logInForm.appendChild(loginSubmitButton); // submit button

    

    // ta bort eventlyssnaren så det bara blir ett formulär även om man trycker på knappen mer än en gång
    this.removeEventListener('click',login,false)
    
    }
    
  }
  
   loginBtn();
  
