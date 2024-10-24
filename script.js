document.querySelectorAll('.secondary button').forEach(button => {
    button.addEventListener('click', function () {
        // Get the sibling div (the one where we want to add the new element)
        const siblingDiv = this.previousElementSibling;

        // Create a new input element (you can change this to any type of element)
        const newInput = document.createElement('input');
        newInput.type = 'text'; // Set the type of input
        newInput.placeholder = 'Enter something'; // Optional placeholder text

        newInput.addEventListener('keydown', function (event) {
            // Check if the pressed key is Delete or Backspace
            if (event.key === 'Delete'/* || event.key === 'Backspace'*/) {
                // Check if the input is empty
                if (this.value === '') {
                    // Remove this input from the DOM
                    siblingDiv.removeChild(this);
                }
            }
        });

        // Append the new input to the sibling div
        siblingDiv.appendChild(newInput);
    });
});