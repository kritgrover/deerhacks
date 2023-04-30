const b2 = document.getElementById('b2')
b2.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default behavior of anchor tag

    // create alert element and add class
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-success');

    // add alert message and button
    alertElement.innerHTML = 'Club Added!';

    // add alert to the container element
    const containerElement = document.getElementById('noResults');
    containerElement.insertBefore(alertElement, containerElement.firstChild);
    const parent = b2.parentNode.parentNode;

    setTimeout(function() {
        alertElement.remove();
        parent.remove();
    }, 2000);

});

const b4 = document.getElementById('b4')
b4.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default behavior of anchor tag

    // create alert element and add class
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-success');

    // add alert message and button
    alertElement.innerHTML = 'Club Added!';

    // add alert to the container element
    const containerElement = document.getElementById('noResults');
    containerElement.insertBefore(alertElement, containerElement.firstChild);
    const parent = b4.parentNode.parentNode;

    setTimeout(function() {
        alertElement.remove();
        parent.remove();
    }, 2000);

});

const b3 = document.getElementById('b3')
b3.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default behavior of anchor tag

    // create alert element and add class
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-success');

    // add alert message and button
    alertElement.innerHTML = 'Club Added!';

    // add alert to the container element
    const containerElement = document.getElementById('noResults');
    containerElement.insertBefore(alertElement, containerElement.firstChild);
    const parent = b3.parentNode.parentNode;

    setTimeout(function() {
        alertElement.remove();
        parent.remove();
    }, 2000);

});

const b1 = document.getElementById('b1')
b1.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default behavior of anchor tag

    // create alert element and add class
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-success');

    // add alert message and button
    alertElement.innerHTML = 'Club Added!';

    // add alert to the container element
    const containerElement = document.getElementById('noResults');
    containerElement.insertBefore(alertElement, containerElement.firstChild);
    const parent = b1.parentNode.parentNode;

    setTimeout(function() {
        alertElement.remove();
        parent.remove();
    }, 2000);

});