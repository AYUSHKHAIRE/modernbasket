let control = document.getElementById('list');
let btnctrl = document.getElementById('buttoncontrol')
function toggler() {
    if (control.style.display === 'none') {
        control.style.display = 'flex';
        console.log("clicked !!")
        btnctrl.innerHTML = '<'
    } else {
        control.style.display = 'none';
        btnctrl.innerHTML = '>'
    }
}


let shopcon = document.getElementById('shop');
let subnav = document.getElementById('subnavbar');

function togglesubcon() {
    let computedStyle = window.getComputedStyle(subnav); // Get the computed style for the element

    if (computedStyle.display === 'none' || computedStyle.display === '') {
        subnav.style.display = 'flex';
        subnav.classList.add('show'); // Add the 'show' class to trigger the transition
        shopcon.innerHTML = 'Hide';
        console.log("clicked !!");
    } else {
        subnav.classList.remove('show'); // Remove the 'show' class
        shopcon.innerHTML = 'shop now';
        // Listen for the 'transitionend' event to ensure the transition is complete before hiding the element
        subnav.addEventListener('transitionend', function () {
            subnav.style.display = 'none';
        }, { once: true }); // { once: true } makes sure the event listener is removed after it's triggered
    }
}
