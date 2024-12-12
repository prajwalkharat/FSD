const arrayContainer = document.querySelector('.array-container');
const generateBtn = document.getElementById('generate');
const sortBtn = document.getElementById('sort');
const resetBtn = document.getElementById('reset');

let array = [];

// Generate random array
function generateArray() {
  arrayContainer.innerHTML = '';
  array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10);

  array.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('array-bar');
    bar.style.height = `${value * 3}px`;
    bar.style.width = '30px';
    arrayContainer.appendChild(bar);
  });
}

// Quick Sort Visualization
async function quickSort(start, end) {
  if (start >= end) return;

  const pivotIndex = await partition(start, end);
  await quickSort(start, pivotIndex - 1);
  await quickSort(pivotIndex + 1, end);
}

// Partition Function
async function partition(start, end) {
  const bars = document.querySelectorAll('.array-bar');
  const pivotValue = array[end];
  let pivotIndex = start;
  bars[end].classList.add('pivot');

  for (let i = start; i < end; i++) {
    bars[i].classList.add('partition');
    await delay(300);

    if (array[i] < pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      swapBars(bars[i], bars[pivotIndex]);
      pivotIndex++;
    }
    bars[i].classList.remove('partition');
  }

  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  swapBars(bars[pivotIndex], bars[end]);
  bars[end].classList.remove('pivot');

  return pivotIndex;
}

// Swap Bars Visually
function swapBars(bar1, bar2) {
  const tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;
}

// Delay for animation
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Event Listeners
generateBtn.addEventListener('click', generateArray);
sortBtn.addEventListener('click', () => quickSort(0, array.length - 1));
resetBtn.addEventListener('click', generateArray);

// Initial Array
generateArray();
