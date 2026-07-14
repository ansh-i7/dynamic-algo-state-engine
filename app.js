const container = document.getElementById('visualizer-container');
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

function generateArray(size = 30) {
    container.innerHTML = ''; 
    const array = [];

    for (let i = 0; i < size; i++) {
        const heightValue = Math.floor(Math.random() * 360) + 20;
        array.push(heightValue);

        const bar = document.createElement('div');
        bar.classList.add('bar'); 
        bar.style.height = `${heightValue}px`;

        container.appendChild(bar);
    }
}

generateBtn.addEventListener('click', () => {
    generateArray();
});

generateArray();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}