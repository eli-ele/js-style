document.body.style.fontFamily = 'Montserrat, sans-serif';

function myFunction() {
    document.body.style.backgroundColor = "#252B42";
}
myFunction()

import { parawelcome } from './style.js';
parawelcome("#23A6F0", 'flex', 'center', "70px");

import { parseeling } from "./style.js";
parseeling("#FFFFFF", "54px", "flex", "center", "center", "40px")

import { paragraph } from "./style.js";
paragraph("#FFFFFF", "20px", "flex", "center", "center", "40px");

import { allbutton } from "./style.js";
allbutton("flex", "center", "40px")

 const main = document.querySelector("main");
const parentdiv = document.createElement("div");
main.appendChild(parentdiv);
parentdiv.style.display = "flex";
parentdiv.style.gap = "40px";
parentdiv.style.padding = "70px";
parentdiv.style.justifyContent="center"
parentdiv.style.marginTop = "10px";

const firstCard = document.createElement("div");
parentdiv.appendChild(firstCard);
const firstImage = document.createElement("img");
firstImage.src = "./assets/fixed-width1.png";
firstCard.style.display = "flex";
firstCard.style.flexDirection = "column";
firstCard.style.background = "white";
firstCard.style.width = "328px";
firstImage.style.marginLeft = "30px";
firstImage.style.width = "60px";
firstImage.style.height = "60px";
firstImage.style.paddingTop = "40px";
firstCard.appendChild(firstImage);

const Paragraph = document.createElement("h3");
firstCard.appendChild(Paragraph);
Paragraph.innerText = "training Courses";
Paragraph.style.fontSize = "16px";
Paragraph.style.color = "#737373";
Paragraph.style.marginLeft = "30px";
Paragraph.style.marginTop = "30px";
const line = document.createElement("p");
Paragraph.appendChild(line);
line.style.width = "40px";
line.style.height = "1px"
line.style.border = "solid 1px #E74040";
line.style.backgroundColor = "#E74040";
line.style.marginTop="30px";

const Paragraph2 = document.createElement("p");
firstCard.appendChild(Paragraph2);
Paragraph2.innerText = "The gradual accumulation of  information about atomic and small-scale behaviour...";
Paragraph2.style.fontSize = "14px";
Paragraph2.style.marginLeft = "30px";
Paragraph2.style.marginRight = "50px";
Paragraph2.style.marginTop = "0px";
Paragraph2.style.marginBottom = "40px";
Paragraph2.style.color = "#737373";

const secondcard = document.createElement("div");
parentdiv.appendChild(secondcard);
const secondtImage = document.createElement("img");
secondtImage.src = "./assets/fixed-width2.png";
secondcard.style.display = "flex";
secondcard.style.flexDirection = "column";
secondcard.style.background = "white";
secondcard.style.width = "328px";
secondtImage.style.marginLeft = "30px";
secondtImage.style.width = "60px";
secondtImage.style.height = "60px";
secondcard.style.paddingTop = "40px";
secondcard.appendChild(secondtImage);

const secondparagraph = document.createElement("h2");
secondcard.appendChild(secondparagraph);
secondparagraph.innerHTML=("2,769 online courses");
secondparagraph.style.color = "#252B42";
secondparagraph.style.fontSize = "16px";
secondparagraph.style.marginLeft = "30px";
secondparagraph.style.marginTop = "30px";
secondparagraph.style.color = "#737373";
const line2 = document.createElement("p");
secondparagraph.appendChild(line2);
line2.style.width = "40px";
line2.style.height = "1px"
line2.style.border = "solid 1px #E74040";
line2.style.backgroundColor = "#E74040";
line2.style.marginTop = "30px";

const secondparagraph2 = document.createElement("p");
secondcard.appendChild(secondparagraph2);
secondparagraph2.innerText = "The gradual accumulation of  information about atomic and small-scale behaviour...";
secondparagraph2.style.fontSize = "14px";
secondparagraph2.style.marginLeft = "30px";
secondparagraph2.style.marginRight = "50px";
secondparagraph2.style.marginTop = "0px";
secondparagraph2.style.marginBottom = "40px";
secondparagraph2.style.color = "#737373";

const thirdCard = document.createElement("div");
parentdiv.appendChild(thirdCard);
const thirdImage = document.createElement("img");
thirdImage.src = "./assets/fixed-width3.png";
thirdCard.style.display = "flex";
thirdCard.style.flexDirection = "column";
thirdCard.style.background = "#23A6F0";
thirdCard.style.width = "328px";
thirdImage.style.marginLeft = "30px";
thirdImage.style.width = "60px";
thirdImage.style.height = "60px";
thirdImage.style.paddingTop = "40px";
thirdCard.appendChild(thirdImage);

const thirdCardparagraph = document.createElement("h2");
thirdCard.appendChild(thirdCardparagraph);
thirdCardparagraph.innerHTML=("2,769 online courses");
thirdCardparagraph.style.color = "#FFFFFF";
thirdCardparagraph.style.fontSize = "16px";
thirdCardparagraph.style.marginLeft = "30px";
thirdCardparagraph.style.marginTop = "30px";
const line3 = document.createElement("p");
thirdCardparagraph.appendChild(line3);
line3.style.width = "40px";
line3.style.height = "1px"
line3.style.border = "solid 1px #FFFFFF";
line3.style.backgroundColor = "#FFFFFF";
line3.style.marginTop = "30px";

const thirdCardparagraph2 = document.createElement("p");
thirdCard.appendChild(thirdCardparagraph2);
thirdCardparagraph2.innerText = "The gradual accumulation of  information about atomic and small-scale behaviour...";
thirdCardparagraph2.style.fontSize = "14px";
thirdCardparagraph2.style.marginLeft = "30px";
thirdCardparagraph2.style.marginRight = "50px";
thirdCardparagraph2.style.marginTop = "0px";
thirdCardparagraph2.style.marginBottom = "40px";
thirdCardparagraph2.style.color = "#FFFFFF";