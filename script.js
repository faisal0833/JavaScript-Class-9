// (1) getElementById Method
// const id1 = document.getElementById("id1");
// // console.log(id1);
// console.log(id1.innerHTML);
// id1.innerHTML = "JavaScript Text";
// document.getElementById("id1").innerHTML = "New JavaScript Text";

// // (2) getElementByTagName Method
// const tag1 = document.getElementsByTagName("h1")[1];
// console.log(tag1.innerHTML);
// tag1.innerText = "JavaScript Header Two";

// // (3) getElementByClassName Method
// const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1.innerText);
// class1.innerText = "JavaScript Text";

// // (4) DOM Element Style
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.style.color = "red";
// id1.style.backgroundColor = "green";
// id1.style.fontSize = "50px";

// // (5) DOM Element Attributes
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// console.log(id1.attributes);
// console.log(id1.attributes.length);

// // (6) getAttribute
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// console.log(id1.getAttribute("class"));
// console.log(id1.getAttribute("id"));

// // (7) removeAttribute
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.removeAttribute("class");

// (8) setAttribute
const id2 = document.getElementById("id2");
console.log(id2.innerText);
id2.removeAttribute("class");

id2.setAttribute("class", "class2");