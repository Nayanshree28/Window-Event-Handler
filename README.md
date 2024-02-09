# Window-Event-Handler

This repository contains a modal window application implemented using HTML, CSS, and JavaScript. The modal window provides information on various topics such as Data Structures and Algorithms (DSA), Machine Learning, and JavaScript.

# Description

The JavaScript file (`script.js`) contains the functionality to control the modal window's behavior. It initializes variables to select elements from the HTML document, including the modal itself, overlay, close button, and buttons to trigger the modal. Event listeners are added to these elements to respond to user interactions.

The `closeModel` function is defined to hide the modal window and overlay when triggered. It adds the `hidden` class to both elements, effectively hiding them from view.

A loop iterates over each button with the class `.show-modal` to add event listeners. When a button is clicked, it removes the `hidden` class from the modal window and overlay, making them visible.

Additionally, event listeners are set up to close the modal window when the close button is clicked, when the overlay is clicked, or when the Escape key is pressed.

# Usage

To use the modal window application, clone the repository and open the `index.html` file in a web browser. Click on any of the buttons labeled "DSA", "Machine Learning", or "JavaScript" to open the respective modal window. To close the modal window, click on the close button (X), anywhere outside the modal window, or press the Escape key.

# File Structure

- `index.html`: Contains the structure of the HTML document, including the buttons and modal window content.
- `style.css`: Defines the styles for the modal window and overlay.
- `script.js`: Implements the functionality to show and hide the modal window.
