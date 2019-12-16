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
content.textContent='Images';
document.body.appendChild(content);
content.className='images';

// let picture = document.getElementById('pictures');
// let cow = document.createElement('img')
// cow.src='https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg'
// picture.appendChild(cow)


//-------------------------------
let list = document.createElement('ul') // create list
document.body.appendChild(list);
list.className='sidenavLinks';
//---------------------------------------
let listLinkOne = document.createElement('li') // list items, New Image
listLinkOne.textContent="New image"; 
list.appendChild(listLinkOne);
listLinkOne.style.padding='20px';

let listLinkTwo = document.createElement('li') // list items, Images
listLinkTwo.textContent="Images";
list.appendChild(listLinkTwo);
listLinkTwo.style.padding='20px';
listLinkTwo.style.margin='10px';

let listLinkThree = document.createElement('li') // list items, Galleries
listLinkThree.textContent="Galleries"
list.appendChild(listLinkThree);
listLinkThree.style.padding='20px';
//--------------------------------
// changes h3 heading with button click,, Temporary!!!!
let btn = document.getElementsByTagName('button')[0];
btn.className = 'button1'
let body = document.body;
btn.addEventListener('click',changesText);

function changesText(event) {
   content.textContent='New images'
}
//---------------------------------













