const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const hearts = document.querySelector('.hearts');


heart.addEventListener('mouseenter', () => {
    envelope.classList.add('flap');
});

heart.addEventListener('mouseleave', () => {
    envelope.classList.remove('flap');
});