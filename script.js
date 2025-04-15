document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;  // Collapse
            } else {
                content.style.maxHeight = content.scrollHeight + "px";  // Expand
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["COMP 016", "Web Development"];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // Typing speed in ms
    const eraseSpeed = 50; // Erasing speed in ms
    const delay = 1500; // Delay before erasing
    const typedText = document.getElementById("typed-text");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(erase, delay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length; // Loop through texts
            setTimeout(type, speed);
        }
    }

    type(); // Start the effect
});
