
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

//--------------------------------------------------------

//Add description metadata to image
var description = document.createElement('input');
description.type = "text";
description.id="descriptioninput";
description.placeholder="Write description here";
document.body.appendChild(description);

//button for submitting description
var descriptionbutton = document.createElement("button");
descriptionbutton.id = "descriptionsubmit";
descriptionbutton.innerText="Add description";
document.body.appendChild(descriptionbutton);
document.getElementById("descriptionsubmit").addEventListener("click", descriptionfortheimage());

var imagetitle = document.getElementById("titleinput").value;
var imagedescription = document.getElementById("descriptioninput").value;
