const mainSlider = document.querySelector('.item-1');
const secondSlider = document.querySelector('.item-2');
const thirdSlider = document.querySelector('.item-3');
const leftSlider = document.querySelector('.item-left');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const FULL_REVEAL_THRESHOLD = -400; // Right side full reveal
const SNAP_THRESHOLD = -220; // Right side snap threshold
const LEFT_REVEAL_THRESHOLD = 200; // Left side full reveal
const LEFT_SNAP_THRESHOLD = 100; // Left side snap threshold

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
    leftSlider.classList.add('dragging');
    startPos = getPositionX(e);
}

function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;

    // Limit the drag range (now allows positive values for right sliding)
    currentTranslate = Math.min(LEFT_REVEAL_THRESHOLD, Math.max(FULL_REVEAL_THRESHOLD, currentTranslate));

    updateSliderPositions(currentTranslate);
}

function stopDragging() {
    if (!isDragging) return;
    
    isDragging = false;
    mainSlider.classList.remove('dragging');
    secondSlider.classList.remove('dragging');
    thirdSlider.classList.remove('dragging');
    leftSlider.classList.remove('dragging');

    // Handle snapping for both directions
    if (currentTranslate <= SNAP_THRESHOLD) {
        // Snap to right full reveal
        snapToPosition(FULL_REVEAL_THRESHOLD);
    } else if (currentTranslate >= LEFT_SNAP_THRESHOLD) {
        // Snap to left full reveal
        snapToPosition(LEFT_REVEAL_THRESHOLD);
    } else {
        // Snap back to center
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

    // Move right side sliders
    const secondSliderTranslate = Math.min(0, translate + 200);
    secondSlider.style.transform = `translateX(${secondSliderTranslate}px)`;

    const thirdSliderTranslate = Math.min(0, translate + 400);
    thirdSlider.style.transform = `translateX(${thirdSliderTranslate}px)`;

    // Move left side slider
    const leftSliderTranslate = Math.max(0, translate - 200);
    leftSlider.style.transform = `translateX(${leftSliderTranslate}px)`;
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
} 