

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
document.getElementById("myForm").appendChild(inputbutton);  //This line doesnt work
inputbutton.addEventListener("click", function() {});
