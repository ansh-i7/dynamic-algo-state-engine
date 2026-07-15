const container = document.getElementById('visualizer-container');
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

/* array generation */
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

/*Bubble sort logic*/
async function bubbleSort(){
   const bars = document.querySelectorAll('.bar');

   for(let i = 0 ;i < bars.length; ++i){
    for(let j = 0; j < bars.length - i - 1; ++j){

        const height1 = parseInt(bars[j].style.height);
        const height2 = parseInt(bars[j+1].style.height);

        if(height1 > height2){
            bars[j].style.height = `${height2}px`;
            bars[j+1].style.height = `${height1}px`;
        }

        await sleep(30);      //Pause execution of sorting for 30 ms for human eye to recognize the changes on the screen
    }
   }
}

sortBtn.addEventListener('click' , async () => {
    await bubbleSort();
});