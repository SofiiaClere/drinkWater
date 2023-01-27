const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('.liters');
const percentage = document.getElementById('percentage');
const remained= document.getElementById('remained');

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click',() => highLightCups(idx))
})

function highLightCups(idx) {
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}