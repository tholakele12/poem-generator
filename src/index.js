function generatePoem(event) {
    event.preventDefault()

    new Typewriter("#poem", {
    strings: "I love you son Like no one else Only you and I Verified love personified",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
    
    
}

let poemFormElement= document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit",generatePoem)
