let colorinput = document.querySelector('#color');
let hexinput = document.querySelector('#hex');


colorinput.addEventListener('input', () => {
    let color = colorinput.value;
    hexinput.value = color;

    document.querySelector('svg').style.color = color;
})

function copiarHex() {
    navigator.clipboard.writeText(hexinput.value);
}

