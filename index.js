let myForm = document.getElementById("myForm");
let numberInput = document.getElementById("numberInput");
let rhomboidLocation = document.getElementById("rhomboidLocation");

function createPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let j = 0; j < rows - i; j++) {
            str = ` ${str} `;
        }
        for (let k = 0; k <= i; k++) {
            str = `${str} ⭐️ `;
        }
        printRow(str);
    }
}

function createInversePyramid(rows) {
    for (let i = 1; i < rows; i++) {
        let str = "";
        for (let j = 0; j < rows - i; j++) {
            str = ` ⭐️ ${str}`;
        }
        for (let k = 0; k <= i; k++) {
            str = `  ${str}  `;
        }
        printRow(str);
    }
}

function printRhomboid(rows) {
    createPyramid(rows);
    createInversePyramid(rows);
}

function printRow(str) {
    rhomboidLocation.innerHTML += `<span>${str}</span>`;
}


myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    rhomboidLocation.innerHTML = "";
    printRhomboid(numberInput.value);
}
);
