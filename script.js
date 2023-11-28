function toggleAccordion(sectionId) {
    let content = document.getElementById(sectionId)
    let arrowIconUp = document.querySelector('.arrow-icon-up')
    let arrowIconDown = document.querySelector('.arrow-icon-down')

    if (content.style.display === "block") {
        arrowIconUp.style.display = 'none'
        arrowIconDown.style.display = 'block'
        content.style.display = "none"
    } else {
        arrowIconUp.style.display = 'block'
        arrowIconDown.style.display = 'none'
        content.style.display = "block"
    }
}

let gaugeCount = 0


function updateProgressBar() {
    let progressBar = document.querySelector('.progress-bar')
    let progress = (gaugeCount / 5) * 100
    progressBar.style.width = `${progress}%`
    progressBar.style.borderRadius = '2px'
}

// function IconToggle(icon1Id, icon2Id) {
//     let clickedIcon1 = document.querySelector('.' + icon1Id)
//     let clickedIcon2 = document.querySelector('.' + icon2Id)
//
//     let gaugeText = document.querySelector('.gauge')
//
//     if (window.getComputedStyle(clickedIcon1).display === 'block') {
//         clickedIcon1.style.display = 'none'
//         clickedIcon2.style.display = 'block'
//         if (gaugeCount < 5) {
//             gaugeText.textContent = `${++gaugeCount} / 5 completed`
//             updateProgressBar()
//         }
//     } else {
//         clickedIcon1.style.display = 'block'
//         clickedIcon2.style.display = 'none'
//         if (gaugeCount > 0) {
//             gaugeText.textContent = `${--gaugeCount} / 5 completed`
//             updateProgressBar()
//         }
//     }
// }

function IconToggle(icon1Id, icon2Id, spinner) {
    let clickedIcon1 = document.querySelector('.' + icon1Id)
    let clickedIcon2 = document.querySelector('.' + icon2Id)
    let accordionItem = clickedIcon1.closest('.inner-accordion-item')
    let Spinner = accordionItem.querySelector('.' + spinner)
    let gaugeText = document.querySelector('.gauge')

    if (window.getComputedStyle(clickedIcon1).display === 'block') {
        // Display the spinner
        Spinner.style.display = 'block'
        clickedIcon1.style.display = 'none'
        clickedIcon2.style.display = 'none'

        // Delay showing clickedIcon2 for 3 seconds
        setTimeout(function () {
            // Hide the spinner
            Spinner.style.display = 'none'

            // Show clickedIcon2
            clickedIcon1.style.display = 'none'
            clickedIcon2.style.display = 'block'

            if (gaugeCount < 5) {
                gaugeText.textContent = `${++gaugeCount} / 5 completed`
                updateProgressBar()
            }
        }, 2000)
    } else {
        clickedIcon1.style.display = 'block'
        clickedIcon2.style.display = 'none'

        if (gaugeCount > 0) {
            gaugeText.textContent = `${--gaugeCount} / 5 completed`
            updateProgressBar()
        }
    }
}



updateProgressBar()

function InnerToggleAccordion(sectionId) {
    let content = document.getElementById(sectionId)
    let allContents = document.querySelectorAll('.inner-accordion-content')
    let allItems = document.querySelectorAll('.inner-accordion-item')


    allContents.forEach(function (item) {
        if (item.id !== sectionId) {
            item.style.display = 'none'
        }
    })

    allItems.forEach(function (item) {
        item.style.background = '#fff'
    })

    if (content.style.display === "flex") {
        content.style.display = "none"
        content.parentElement.style.background = '#fff'
    } else {
        content.style.display = "flex"
        content.parentElement.style.background = '#f1f1f1'

    }
}


document.addEventListener("DOMContentLoaded", function () {
    let userDropdownContent = document.getElementById("dropdownContent")
    let notificationDropdownContent = document.getElementById("NotificationDropdownContent")

    let usernameElement = document.getElementById("username")
    let bellIconElement = document.getElementById("bell-icon")

    if (usernameElement) {
        usernameElement.addEventListener("click", function (event) {
            event.stopPropagation()
            userDropdownContent.style.display = (userDropdownContent.style.display === "block") ? "none" : "block"

            // Close the notification dropdown when the user profile dropdown is clicked
            notificationDropdownContent.style.display = "none"
        })
    }

    if (bellIconElement) {
        bellIconElement.addEventListener("click", function (event) {
            event.stopPropagation()
            notificationDropdownContent.style.display = (notificationDropdownContent.style.display === "block") ? "none" : "block"

            // Close the user dropdown when the notification dropdown is clicked
            userDropdownContent.style.display = "none"
        })
    }


    // Prevent closing the dropdowns if the user clicks inside them
    userDropdownContent.addEventListener("click", function (event) {
        event.stopPropagation()
    })

    notificationDropdownContent.addEventListener("click", function (event) {
        event.stopPropagation()
    })
})


//remove the select plan component when the X icon is clicked
let selectContainer = document.querySelector('.select-container')
let selectContainerMobile = document.querySelector('.select-container-mobile')
let XIcon = document.querySelector('.x-icon')
let XIconMobile = document.querySelector('.x-icon-mobile')
XIcon.addEventListener('click', () => {
    selectContainer.style.display = 'none'
})
XIconMobile.addEventListener('click', () => {
    selectContainerMobile.style.display = 'none'
})

//using button to navigate
function Redirect() {
    window.location.href = 'https://shopify.com/pricing'
}
