

//creating HTML elements.
//h1.innerHTMl (vulnerable to XSS attacks)
//h1.innertext better


const h1 = document.createElement("h1");
h1.innerHTML = "<u>hello world</u>";
document.body.append(h1);

const h2 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello world";
h2.append(underline);
document.body.append(h2);

