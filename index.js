let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomFighter1 = Math.floor(Math.random() * 17 )
    let randomFighter2 = Math.floor(Math.random() * 17 )
    stageEl.textContent = fighters[randomFighter1] + " VS " + fighters[randomFighter2]
})
