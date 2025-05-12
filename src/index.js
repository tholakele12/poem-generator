function displayPoem(response) {
    console.log("poem generated")
    new Typewriter("#poem", {
    strings: "I love you son Like no one else Only you and I forever",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
    
}



function generatePoem(event) {
    event.preventDefault()

    let instructionInput=document.querySelector("#user-instructions")
    let apiKey = "cbt861e044733a3cdofadb63b63182c9"
    let prompt=`User instructions: Generate a poem about ${instructionInput}`
    let context="You are learning how to write a short poem for your son. Your mission is to generate a 4 line poem in basic HTML and separate each line with a br/>. Make sure to follow the user instructions."
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement=document.querySelector("#poem")
    poemElement.style.display = "block"

    console.log("generating poem")
    console.log(`prompt: ${prompt}`)
    console.log(`context: ${context}`)

    axios.get(apiUrl).then(displayPoem)
    
   
    
    

}
let poemFormElement= document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit",generatePoem)
