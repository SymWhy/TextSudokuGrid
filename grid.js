//Javascript source code

const grid9x9 = document.getElementById('grid9x9');
let listOfGrids = [];

function buildGrid(i) {
    myDigit = '☐';
    let listofChars = ['A','B','C','D','E','F','G','H','I'];
    for (let i = 0; i < 9; i++) {
        let myGrid = document.createElement('div');
        let listofBoxes = [];
        myGrid.id = 'grid' + listofChars[i] + i;
        for (let j = 0; j < 9; j++) {
            let myBox = document.createElement('div');
            myBox.id = 'numbox' + listofChars[i] + j;
            myBox.innerText = myDigit;
            myGrid.appendChild(myBox);
            listofBoxes.push(myBox);
        }
        console.log(listofBoxes);
        listOfGrids.push(listofBoxes);
        grid9x9.appendChild(myGrid);
    }
    return listOfGrids;
}