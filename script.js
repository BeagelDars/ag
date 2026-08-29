const text = document.getElementById('text');

let count = 0;

function updateText() {
    text.textContent = count;
    count = Number(localStorage.getItem('count'));
}

function save() {
    localStorage.setItem('count', count)
}

function add() {
    count++;
    save();
    updateText();
}

updateText();