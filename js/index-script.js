// Get a reference to the link element
const link = document.getElementById('del_m1');

// Add a click event listener to the link
link.addEventListener('click', () => {
    // Get a reference to the parent element of the link
    const parent = link.parentNode.parentNode.parentNode.parentNode;

    // Remove the parent element from the DOM
    parent.remove();
});

const link2 = document.getElementById('del_m2');

// Add a click event listener to the link
link2.addEventListener('click', () => {
    // Get a reference to the parent element of the link
    const parent = link2.parentNode.parentNode.parentNode.parentNode;

    // Remove the parent element from the DOM
    parent.remove();
});

const link3 = document.getElementById('del_g1');

// Add a click event listener to the link
link3.addEventListener('click', () => {
    // Get a reference to the parent element of the link
    const parent = link3.parentNode.parentNode.parentNode.parentNode;

    // Remove the parent element from the DOM
    parent.remove();
});

const link4 = document.getElementById('del_g2');

// Add a click event listener to the link
link4.addEventListener('click', () => {
    // Get a reference to the parent element of the link
    const parent = link4.parentNode.parentNode.parentNode.parentNode;

    // Remove the parent element from the DOM
    parent.remove();
});