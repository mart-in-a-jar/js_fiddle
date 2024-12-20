const mainSlider = document.querySelector('.item-1');
const secondSlider = document.querySelector('.item-2');
const thirdSlider = document.querySelector('.item-3');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const FULL_REVEAL_THRESHOLD = -400; // Point at which both elements are fully revealed
const SNAP_THRESHOLD = -220; // snaps after first item is revealed

mainSlider.addEventListener('mousedown', startDragging);
mainSlider.addEventListener('touchstart', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);
document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

function startDragging(e) {
    isDragging = true;
    mainSlider.classList.add('dragging');
    secondSlider.classList.add('dragging');
    thirdSlider.classList.add('dragging');
    startPos = getPositionX(e);
}

function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;

    // Limit the drag range
    currentTranslate = Math.min(0, Math.max(FULL_REVEAL_THRESHOLD, currentTranslate));

    updateSliderPositions(currentTranslate);
}

function stopDragging() {
    if (!isDragging) return;
    
    isDragging = false;
    mainSlider.classList.remove('dragging');
    secondSlider.classList.remove('dragging');
    thirdSlider.classList.remove('dragging');

    // If dragged more than 90% of the way, snap to full reveal
    if (currentTranslate <= SNAP_THRESHOLD) {
        // Fully reveal
        snapToPosition(FULL_REVEAL_THRESHOLD);
    } else {
        // Snap back to start
        snapToPosition(0);
    }
}

function snapToPosition(position) {
    currentTranslate = position;
    prevTranslate = position;
    updateSliderPositions(position);
}

function updateSliderPositions(translate) {
    // Move main slider
    mainSlider.style.transform = `translateX(${translate}px)`;

    // Move second slider with delay
    const secondSliderTranslate = Math.min(0, translate + 200);
    secondSlider.style.transform = `translateX(${secondSliderTranslate}px)`;

    // Move third slider with more delay
    const thirdSliderTranslate = Math.min(0, translate + 400);
    thirdSlider.style.transform = `translateX(${thirdSliderTranslate}px)`;
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
} 