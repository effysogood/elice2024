const movieName = document.querySelector('.middle');

console.log(movieName.parentElement);
console.log(movieName.parentElement.parentElement);
console.log(movieName.nextElementSibling);
console.log(movieName.previousElementSibling);

const movieList = document.querySelector('#movie');

console.log(movieList.children);
console.log(Array.from(movieList.children));

Array.from(movieList.children).forEach((child) => {
    child.classList.add('movie-name');
});
