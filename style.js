const main = document.querySelector("main");

export function parawelcome(color, display, justifyContent, marginTop) {
    const parawelcome = document.createElement("p");
    parawelcome.innerText = "Welcome.";
    parawelcome.style.color = color;
    parawelcome.style.display = display;
    parawelcome.style.justifyContent = justifyContent;
    parawelcome.style.marginTop = marginTop;
    main.appendChild(parawelcome);
}

export function parseeling(color,fontSize, display, justifyContent, textAlign, marginTop ) {
    const parseeling = document.createElement("h1");
    parseeling.innerHTML = "Selling on the <br> internet like a pro";
    parseeling.style.color = color;
    parseeling.style.fontSize = fontSize;
    parseeling.style.display = display;
    parseeling.style.justifyContent = justifyContent;
    parseeling.style.textAlign = textAlign;
    parseeling.style.marginTop = marginTop;
    main.appendChild(parseeling)
}

export function paragraph(color,fontSize, display, justifyContent, textAlign, marginTop) {
    const paragraph = document.createElement("p")
    paragraph.innerHTML = "We know how large objects will act, but things on a <br> small scale just do not act that way.";
    paragraph.style.color = color;
    paragraph.style.fontSize = fontSize;
    paragraph.style.display = display;
    paragraph.style.justifyContent = justifyContent;
    paragraph.style.textAlign = textAlign;
    paragraph.style.marginTop = marginTop;
    main.appendChild(paragraph)
}

export function allbutton(display,justifyContent,marginTop) {
    const allbutton = document.createElement("div");
    main.appendChild(allbutton);
    allbutton.style.display = display;
    allbutton.style.justifyContent = justifyContent;
    allbutton.style.marginTop = marginTop;
    function button1(backgroundColor, width, height, border, borderRadius, color,marginRight) {
        const button1 = document.createElement("button");
        button1.innerHTML = "Get Quote Now";
        button1.style.backgroundColor = backgroundColor;
        button1.style.width = width;
        button1.style.height = height;
        button1.style.border = border;
        button1.style.borderRadius = borderRadius;
        button1.style.color = color;
        button1.style.marginRight = marginRight;
        allbutton.appendChild(button1);

      function button2( justifyContent ,backgroundColor, width, height, borderColor , borderRadius,color) {
          const button2 = document.createElement("button");
          button2.innerHTML = "Learn More";
          button2.style.justifyContent = justifyContent;
          button2.style.backgroundColor = backgroundColor;
          button2.style.width = width;
          button2.style.height = height;
          button2.style.borderColor = borderColor;
          button2.style.borderRadius = borderRadius;
          button2.style.color = color;
          allbutton.appendChild(button2)
       }
        button2("center", "#252B42", "173px", "52px", "#23A6F0", "3px", "#23A6F0");
    }
      button1( "#23A6F0", "173px", "52px", "none", "3px", "#FFFFFF",  "30px");
}




