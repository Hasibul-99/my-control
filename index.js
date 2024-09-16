// Function to set the body's opacity
function setBodyOpacity(opacity) {
    console.log("hello -----");
    
    if (opacity >= 0 && opacity <= 1) {
        document.body.style.opacity = opacity;
    } else {
        console.error("Opacity must be between 0 and 1.");
    }
}

// Example usage: Set opacity to 0.8 (80%)
setBodyOpacity(0.8);