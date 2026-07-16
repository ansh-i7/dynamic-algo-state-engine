const container = document.getElementById('visualizer-container');
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

const sizeSlider = document.getElementById('size-slider');
const speedSlider = document.getElementById('speed-slider');

let isSorting = false;
let delay = 50; //ms

/* array generation */
function generateArray(size = 30) {

    if(isSorting) return;

    container.innerHTML = ''; 
    const array = [];

    const barWidth = `${100 / size}%`;

    for (let i = 0; i < size; i++) {
        const heightValue = Math.floor(Math.random() * 360) + 20;
        array.push(heightValue);

        const bar = document.createElement('div');
        bar.classList.add('bar'); 
        bar.style.height = `${heightValue}px`;

        bar.style.width = barWidth;
        bar.style.margin = '0 1px';

        container.appendChild(bar);
    }
}

function disableControls() {
    isSorting = true;
    generateBtn.disabled = true;
    sortBtn.disabled = true;
    sizeSlider.disabled = true;
    speedSlider.disabled = true;
}

function enableControls() {
    isSorting = false;
    generateBtn.disabled = false;
    sortBtn.disabled = false;
    sizeSlider.disabled = false;
    speedSlider.disabled = false;
}

generateBtn.addEventListener('click', () => {
    generateArray(sizeSlider.value);
});

sizeSlider.addEventListener('input', (e) => {
    generateArray(e.target.value);
});

speedSlider.addEventListener('input', (e) => {  
    delay = 121 - e.target.value;
});

generateArray(sizeSlider.value);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*Bubble sort logic*/
async function bubbleSort(){

    if(isSorting) return;
    disableControls();

   const bars = document.querySelectorAll('.bar');

   for(let i = 0 ;i < bars.length; ++i){
    for(let j = 0; j < bars.length - i - 1; ++j){

        bars[j].style.backgroundColor = '#ef4444';
        bars[j + 1].style.backgroundColor = '#ef4444';

        await sleep(delay); 

        const height1 = parseInt(bars[j].style.height);
        const height2 = parseInt(bars[j+1].style.height);

        if(height1 > height2){
            bars[j].style.height = `${height2}px`;
            bars[j+1].style.height = `${height1}px`;
        }
        
        bars[j].style.backgroundColor = '#3b82f6';
        bars[j + 1].style.backgroundColor = '#3b82f6';

    }

    bars[bars.length - i - 1].style.backgroundColor = '#10b981';
   }
    bars[0].style.backgroundColor = '#10b981';
    
    enableControls();
}

sortBtn.addEventListener('click' , async () => {
    await bubbleSort();
});