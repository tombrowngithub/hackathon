function toggleAccordion(sectionId) {
    let content = document.getElementById(sectionId);
    let arrowIconUp = document.querySelector('.arrow-icon-up');
    let arrowIconDown = document.querySelector('.arrow-icon-down');

    if (content.style.display === "block") {
        arrowIconUp.style.display = 'none';
        arrowIconDown.style.display = 'block';
        content.style.display = "none";
    } else {
        arrowIconUp.style.display = 'block';
        arrowIconDown.style.display = 'none';
        content.style.display = "block";
    }
}

// let gaugeCount = 1;
//
// function incrementGauge() {
//     gaugeCount += 1;
//     updateGaugeText();
// }
//
// function updateGaugeText() {
//     const gaugeText = document.querySelector('.gauge');
//     gaugeText.textContent = `${gaugeCount} / 5 completed`;
// }

let gaugeCount = 0;

function InnerToggleAccordion(sectionId, icon1Id, icon2Id) {
    let content = document.getElementById(sectionId);
    let allContents = document.querySelectorAll('.inner-accordion-content');
    let accordionContent = document.querySelector('.accordion-content');
    let accordionItem = document.getElementById('inner-accordion-item')
    //let clickedIcon1 = document.querySelector('.' + icon1Id);
    //let clickedIcon2 = document.querySelector('.' + icon2Id);

    const gaugeText = document.querySelector('.gauge');


    allContents.forEach(function (item) {
        if (item.id !== sectionId) {
            item.style.display = 'none';
        }
    });

    if (content.style.display === "flex") {
        content.style.display = "none";
        accordionItem.className = "inner-accordion-item"
        accordionContent.style.background = '#fff';
       // clickedIcon1.style.display = 'block';
        //clickedIcon2.style.display = 'none';
        // if (clickedIcon2.style.display === 'none' && clickedIcon1.style.display === 'block') {
        //     gaugeText.textContent = `${gaugeCount -= 1} / 5 completed`;
        // }
    } else {
        content.style.display = "flex";
        accordionContent.style.background = '#f1f1f1';
        // clickedIcon1.style.display = 'none';
        // clickedIcon2.style.display = 'block';
        // gaugeText.textContent = `${gaugeCount += 1} / 5 completed`;
    }
}

//Navbar dropdown toggler
function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
    let usernameElement = document.getElementById("username");

    if (usernameElement) {
        usernameElement.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleDropdown();
        });
    }

    // Close the dropdown if the user clicks outside it
    window.addEventListener("click", function (event) {
        let dropdownContent = document.getElementById("dropdownContent");
        if (event.target !== usernameElement && dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });
});

//remove the select plan component when the x icon is clicked
let selectContainer = document.querySelector('.select-container')
let XIcon = document.querySelector('.x-icon')

XIcon.addEventListener('click', () => {
    selectContainer.style.display = 'none'
})