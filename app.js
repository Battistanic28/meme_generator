// CONSTANT DECLARATIONS
const form = document.querySelector('#inputsform')
const submitBtn = document.getElementById('submit');
const resultsDiv = document.querySelector('.resultsdiv');
const imageURL = document.getElementById('imginput');
const textInputTop = document.getElementById('uppertext');
const textInputBottom = document.getElementById('lowertext');

// EVENT LISTENER
submitBtn.addEventListener('click', handleFormSubmit);

// CALLBACK FUNCTION
    function handleFormSubmit(e) {
        e.preventDefault();
// MODIFY THIS
// -------------------------------------------------------------
        // Create new container
        const newContainer = document.createElement('div');

        newContainer.addEventListener('click', removeMeme);

        const imageLayer = document.createElement('img');
        imageLayer.src = imageURL.value;
        imageLayer.classList.add('memeimg');
        console.log(imageURL.value)
        // Append imageLayer to newContainer
        newContainer.appendChild(imageLayer);
        newContainer.classList.add('container');

        // Create text layer
        const textLayer = document.createElement('div');
        textLayer.classList.add('textContainer');

        const topP = document.createElement('p');
        topP.classList.add('toptext');
        topP.innerText = textInputTop.value;
        textLayer.appendChild(topP);
        console.log(topP.value)

        const bottomP = document.createElement('p');
        bottomP.classList.add('bottomtext');
        bottomP.innerText = textInputBottom.value;
        textLayer.appendChild(bottomP);
        // Append textLayer to newContainer
        newContainer.appendChild(textLayer);

        // Append new container to results div
        resultsDiv.appendChild(newContainer);
// -------------------------------------------------------------

        form.reset()
    }

    function removeMeme(e) {
        e.preventDefault();

        e.currentTarget.remove()

    }
