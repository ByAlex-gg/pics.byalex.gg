// script.js
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    displayRecentPhotos();

    function updateStats() {
        const photoCountElement = document.getElementById('photo-count');
        const registrationCountElement = document.getElementById('registration-count');
        
        // Get photo count from local storage
        const photos = JSON.parse(localStorage.getItem('photos')) || [];
        photoCountElement.textContent = photos.length;
        
        // For demonstration, we'll use a random number for registrations
        // In a real application, this would come from your user database
        const registrationCount = Math.floor(Math.random() * 1000) + 1;
        registrationCountElement.textContent = registrationCount;
    }

    function displayRecentPhotos() {
        const photos = JSON.parse(localStorage.getItem('photos')) || [];
        const recentPhotosGrid = document.querySelector('.photo-grid');
        
        // Display up to 8 most recent photos
        photos.slice(-8).reverse().forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'photo-item';
            photoElement.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;
            recentPhotosGrid.appendChild(photoElement);
        });
    }
});

// Add this to your script.js file

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const photoCount = document.getElementById('photo-count');
    const registrationCount = document.getElementById('registration-count');

    // Get actual counts from your data source
    const totalPhotos = 1500; // Example value
    const totalRegistrations = 750; // Example value

    animateValue(photoCount, 0, totalPhotos, 2000);
    animateValue(registrationCount, 0, totalRegistrations, 2000);
});