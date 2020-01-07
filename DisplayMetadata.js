
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