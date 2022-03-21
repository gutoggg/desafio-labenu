const ulNavigation = document.querySelector('.header-navigation')
const liNavigationList = document.querySelectorAll('.nav-list-item')

const menuButton = document.querySelector('.menu-icon')
const closeButton = document.querySelector('.close-icon')

menuButton.addEventListener('click', () => {
    ulNavigation.classList.toggle('show')
})

closeButton.addEventListener('click', () => {
    ulNavigation.classList.toggle('show')
})

for (const element of liNavigationList) {
    element.addEventListener('click', () => {
        ulNavigation.classList.remove('show')
    })
}