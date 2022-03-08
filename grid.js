//Javascript source code

const grid9x9 = document.getElementById('grid9x9');
let listOfGrids = [];

function buildGrid(i) {
    myDigit = '☐';
    for (let i = 0; i < 9; i++) {
        let myGrid = document.createElement('div');
        myGrid.id = 'subgrid' + i;
        myGrid.innerText = myDigit;
            grid9x9.appendChild(myGrid);
            listOfGrids.push(myGrid);
    }
    return listOfGrids;
}