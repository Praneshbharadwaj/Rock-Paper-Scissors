const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji : '✊',
        beats: "scissors"
    },
    {
        name: 'paper',
        emoji : '✋',
        beats: "rock"
    },
    {
        name: 'scissors',
        emoji : '✌',
        beats: "paper"
    }
]
selectionButtons.forEach(selectionButton=>{
    selectionButton.addEventListener('click',()=>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection=>selection.name==selectionName)
        makeSelection(selection )
    })
})
function makeSelection(selection)
{
    
    const computerselection = randomSelection();
    const yourWinner = isWinner(selection,computerselection)
    const computerWinner = isWinner(computerselection,selection)
    console.log(computerselection)
    addSelectionResult(computerselection,computerWinner)
    addSelectionResult(selection,yourWinner)
    if(yourWinner) incrementScore(yourScoreSpan)
    if(computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scorespan)
{
    scorespan.innerText = parseInt(scorespan.innerText)+1
}

function addSelectionResult(selection,winner)
{

    const div = document.createElement("div")
    div.innerText=selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add("winner")
     finalColumn.after(div)
}

function isWinner(selection,opponentsSelection){
    return selection.beats == opponentsSelection.name
     
}

function randomSelection()
{
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
