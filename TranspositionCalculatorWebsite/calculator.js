const notesInScale = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G",
"G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb",
"B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

const intervals = ["U", "m2", "M2", "m3", "M3", "P4", "Tritone", "P5", "m6", "M6", "m7", "M7"]


document.addEventListener("DOMContentLoaded", (event) =>{

    const runButton = document.getElementById("transpoButton");

    runButton.addEventListener("click", (event) => {

       const dropDown1 = document.getElementById("starting-note");
       const startingNote = dropDown1.value;
       const dropDown2 = document.getElementById("direction");
       const direction = dropDown2.value;
       const dropDown3 = document.getElementById("interval")
       const interval = dropDown3.value;

        answer = transpose(startingNote, direction, interval);

        const h3 = document.getElementById("answer");
        h3.innerText = answer;

    })



})




function transpose(startingNote, direction, interval){

    let goalNote;

    let intervalNum = 0;
    for (let i = 0; i < intervals.length; i++){
        if(interval === intervals[i]){
            intervalNum = i;
        }
    }

    if(direction === "Downward"){
        intervalNum *= -1;
    }

    for(let i = 12; i < 24; i++){
        if(notesInScale[i] === startingNote){
            goalNote = notesInScale[i + intervalNum];

            
        }
    }

    return goalNote;



}


