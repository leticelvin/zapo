let header1 = document.createElement('header');

let text = document.createElement('h2');
text.textContent='Gallery application 2000';

let bar = document.createElement('nav')
document.body.appendChild(bar)

document.body.appendChild(header1);
header1.appendChild(text);

header1.className='header'
text.className='h2'
bar.className= 'sidenav'