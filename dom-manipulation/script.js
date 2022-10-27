// console.log("Hello World!!")

// 1. Highlight all of the words of the paragraph
//over 5 letters (with yellow background)

// A. get the paragraph element (tag)
// let paragraph = document.querySelector("p")

// B. get the text inside of the paragraph
//textContent
// let text = paragraph.textContent
//innerText
// let text = paragraph.innerText

// // C. get each words of that text
// //words will be an array
// let words = text.split(" ")


// // D. if length > 5 return word with yellow bg
// //  else return word
// let requiredWords = words.map((word) => {
//     if(word.length > 5) {
//         return `<span style="background-color:yellow;">${word}</span>`
//     } else {
//         return word
//     }
// })


// // E. convert that array into string
// let requiredText = requiredWords.join(" ")

// // F. Assign requiredText as text of the paragraph
// // paragraph.textContent = requiredText
// paragraph.innerHTML = requiredText




// paragraph.innerHTML = paragraph.innerText.split(" ")
// .map((word) => {
//     if(word.length > 5) {
//         return `<span style="background-color:yellow;">${word}</span>`
//     } else {
//         return word
//     }
// }).join(" ")


// paragraph.innerHTML = paragraph.innerText.split(" ")
//     .map((word) => 
//         word.length > 5 ?
//             `<span style="background-color:yellow;">${word}</span>`
//             : word
//     ).join(" ")



// 2. Count the number of words in the paragraph
// and display the count after the heading

// A. Select the paragraph element
// let paragraph = document.querySelector("p")

// // B. Get the paragraph text
// let paragraphText = paragraph.innerText

// // C. get each words
// let words = paragraphText.split(" ")

// // D. get the length
// let length = words.length

// // E. Create a p element
// let countElement = document.createElement("p")

// // F. Set the p element's text
// countElement.textContent = length

// // G. Append the textContent after the header
// // document.body.append(countElement)
// document.body.insertBefore(countElement, paragraph)

// //insertAdjacentHTML



// 3. Replace all "a" with "@" and "s" with "$"
let paragraph = document.querySelector("p")

let paragraphText = paragraph.innerText

let encodedTextWithA = paragraphText.replace(/a/g, "@")

let encodedTextWithS = encodedTextWithA.replace(/s/g, "$")

paragraph.innerText = encodedTextWithS