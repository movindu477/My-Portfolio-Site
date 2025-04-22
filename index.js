document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    const secondSection = document.getElementById('second');

    if (aboutLink && secondSection) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            console.log('Link clicked, scrolling to section...');
            secondSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
        console.error('One or both elements not found:', aboutLink, secondSection);
    }
});


// smooth slide to third //
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('thirdlink');
    const secondSection = document.getElementById('third');

    if (aboutLink && secondSection) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            console.log('Link clicked, scrolling to section...');
            secondSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
        console.error('One or both elements not found:', thirdlink, secondSection);
    }
});


// smooth slide to fourth //
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('forthlink');
    const secondSection = document.getElementById('forth');

    if (aboutLink && secondSection) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            console.log('Link clicked, scrolling to section...');
            secondSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
        console.error('One or both elements not found:', forthlink, secondSection);
    }
});


/* fifth section smooth scroll */
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('fifthlink');
    const secondSection = document.getElementById('fifth');

    if (aboutLink && secondSection) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            console.log('Link clicked, scrolling to section...');
            secondSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
        console.error('One or both elements not found:', fifthlink, secondSection);
    }
});