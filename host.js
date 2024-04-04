  // Create a new div element
  var newDiv = document.createElement('div');

  // Set some content and style for the new div
  newDiv.textContent = 'This is a dynamically created div!';
  newDiv.style.backgroundColor = 'lightblue';
  newDiv.style.padding = '10px';
  newDiv.style.margin = '10px';
  newDiv.style.display = 'inline';
  newDiv.style.position = 'fixed';
  newDiv.style.bottom = '0';
  newDiv.style.right = '0';

  // Get a reference to the body element
  var body = document.body;

  // Inject the new div into the DOM by appending it to the body
  body.appendChild(newDiv);