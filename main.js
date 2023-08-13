let letters = 'abcdefghijklmnopqrstuvwxyz'

// create array from letters
let lettersarray = Array.from(letters)

// create letters containers 
let letterscontainer = document.querySelector('.letters')

lettersarray.forEach(letter => {
    // create span
    let span = document.createElement('span')

    // create textNode
    let theletter = document.createTextNode(letter)

    // append theletter to the to span
    span.appendChild(theletter)

    // create classname
    span.className = 'letter-Box'

    // append span to lettersarray
    letterscontainer.appendChild(span)
})

// get object + category

let words = {
    programing: ['php', 'javascript', 'Go', 'scala', 'fortran', 'r', 'mysql', 'python'],
    movies: ['prestige','inception', 'parasite', 'intersellar', 'whiplash', 'memnto', 'coco', 'up'],
    people: ['albert einstien', 'hitchcock', 'Alexander', 'cleopatra', 'mahtma ghandi'],
    countries: ['syria', 'palastine', 'yemn', 'egypt', 'bahrain', 'qatar']
}

let allkeys = Object.keys(words)

let randomPropnum = Math.floor(Math.random() * allkeys.length)

let randomPropName = allkeys[randomPropnum]

let randomPropValue = words[randomPropName]

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// the choosen word
let randomValueValue = randomPropValue[randomValueNumber]

document.querySelector('.game-info .category span').innerHTML = randomPropName

// ######################################################################################################################

let lettersguesscontainer = document.querySelector('.letters-guess')


let lettersandspaces = Array.from(randomValueValue )
console.log(lettersandspaces)

lettersandspaces.forEach(letter =>{

    // create empty span
    let emptyspan = document.createElement('span')
    
    if (letter === ' '){

        emptyspan.className = 'with-space'
    }
    lettersguesscontainer.appendChild(emptyspan)
})

// set statues
let statues = false

// set letters-guess container
let lettersguess = document.querySelectorAll('.letters-guess span')

// set wrongs attempts
let wrongattempts = 0

// get the draw
let thedraw = document.querySelector('.hangeman-draw')

// handle clicking on letters 
document.addEventListener('click', (e) =>{

    // set statues
    let statues = false

    if (e.target.className === 'letter-Box')

    e.target.classList.add('clicked')

    // Get clicked letter
    let theclickedletter = e.target.innerHTML.toLowerCase()

    // Get choosen letter
    let thechoosenletter = Array.from(randomValueValue.toLowerCase())

    // loop on the choosen letter
    thechoosenletter.forEach((wordletter, wordindex) =>{

        if (theclickedletter == wordletter){
            
            statues = true

            lettersguess.forEach((spanword, spanindex) => {

                if (wordindex == spanindex){

                    spanword.innerHTML = theclickedletter
                }

            })

        }

    })

    if (statues !== true){

        wrongattempts++

        thedraw.classList.add(`wrong-${wrongattempts}`)

        if (wrongattempts == 8){

            endgame()

            letterscontainer.classList.add('finished')

        }

    }

})

function endgame(){

    let div = document.createElement('div')

    let divtext = document.createTextNode(`Game Over, The Word is ${randomValueValue}`)

    div.appendChild(divtext)

    div.className = 'popup'

    document.body.appendChild(div)
    

}
