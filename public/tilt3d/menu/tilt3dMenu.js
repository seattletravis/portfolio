import '../input.css'
// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { TextPlugin } from "gsap/TextPlugin";


const introInfo = document.getElementById('introInfo')
const onePlayerInfo = document.getElementById('onePlayerInfo')
const twoPlayerInfo = document.getElementById('twoPlayerInfo')

const playerOneButton = document.getElementById('playerOneButton')
const playerTwoButton = document.getElementById('playerTwoButton')
const startButton = document.getElementById('startButton')
const aboutButton = document.getElementById('aboutButton')

let infoFlag = true
let playerOneFlag = false
let playerTwoFlag = false


playerOneButton.addEventListener('click', (ev)=>{

    playerTwoButton.className = "m-auto text-red-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-red-600 opacity-40"
    playerOneButton.className = "m-auto text-blue-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-blue-600 opacity-100"
    startButton.className = "m-auto text-purple-600 text-2xl font-bold border-4 border-purple-600 rounded-full px-4 py-3 opacity-100"
    introInfo.className = "hidden"
    twoPlayerInfo.className = "hidden"
    onePlayerInfo.className = "text-blue-600"
    playerTwoFlag = false
    playerOneFlag = true
    startButton.href = "../tilt3dSinglePlayer/index.html"
});

playerTwoButton.addEventListener('click', (ev)=>{

    playerOneButton.className = "m-auto text-blue-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-blue-600 opacity-40"
    playerTwoButton.className = "m-auto text-red-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-red-600 opacity-100"
    startButton.className = "m-auto text-purple-600 text-2xl font-bold border-4 border-purple-600 rounded-full px-4 py-3 opacity-100"
    introInfo.className = "hidden"
    onePlayerInfo.className = "hidden"
    twoPlayerInfo.className = "text-red-600"
    playerOneFlag = false
    playerTwoFlag = true
    startButton.href = "../tilt3dMultiPlayer/index.html"
})


// startButton.addEventListener('click', ()=>{
//     if (playerOneFlag == false && playerTwoFlag == false){ return }
//     if (playerOneFlag == true){
//         console.log("Start Playing Game in Single Player Mode")
//     } else {
//         startButton.href = "../tilt3dMultiPlayer/index.html"
//     }
// });

aboutButton.addEventListener('click', ()=>{
    playerTwoButton.className = "m-auto text-red-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-red-600 opacity-40"
    playerOneButton.className = "m-auto text-blue-600 text-2xl font-bold border-4 rounded-full px-4 py-3 border-blue-600 opacity-40"
    startButton.className = "m-auto text-purple-600 text-2xl font-bold border-4 border-purple-600 rounded-full px-4 py-3 opacity-40"
    aboutButton.className = "m-auto text-yellow-600 font-bold border-2 border-yellow-600 rounded-full px-8 py-1 opacity-100"
    introInfo.className = "text-yellow-600"
    twoPlayerInfo.className = "hidden"
    onePlayerInfo.className = "hidden"
    playerTwoFlag = false
    playerOneFlag = false
})