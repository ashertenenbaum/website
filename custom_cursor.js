const cursor = document.querySelector('.cursor');

// Function to show the cursor
function showCursor() {
    cursor.style.opacity = '1';
}

// Function to hide the cursor
function hideCursor() {
    cursor.style.opacity = '0';
}

// Event listener for mousemove
document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

// Event listener for mouseenter on the window to show the cursor
window.addEventListener('mouseenter', showCursor);

// Event listener for mouseleave on the window to hide the cursor
window.addEventListener('mouseleave', hideCursor);
