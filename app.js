const subButton = document.getElementById('submit');
const rateAgainButton = document.getElementById('rate-again');
const firstContainer = document.querySelector('.first-container');
const thanksContainer = document.querySelector('.thanks-container');
const ratingButtons = document.querySelectorAll('.btn');
const actualRating = document.getElementById('rating');


//EVENT LISTENERS
subButton.addEventListener('click', ()=> {
    firstContainer.style.display = 'none';
    thanksContainer.classList.remove('hidden');
})

rateAgainButton.addEventListener('click', ()=> {
    firstContainer.style.display = 'block';
    thanksContainer.classList.add('hidden');
})

//HANDLING THE RATINGS
ratingButtons.forEach((rating) => {
    rating.addEventListener('click', ()=> {
        actualRating.innerHTML = rating.innerHTML;
    })
});



