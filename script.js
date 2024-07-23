// API URL and key
const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=9';  // Fetch multiple images
const apiKey = 'live_ScI9GuQWV4PyG95S6gUVL41YJYucg8QFQrM8PUi4iUt9HL3l1kp8R5svqc36Shy3';

// Fetch cat images and display them
async function fetchCatImages() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'x-api-key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCatImages(data);
    } catch (error) {
        console.error('Fetch error:', error);
        showErrorMessage('Failed to load cat images. Please try again later.');
    }
}

// Display cat images on the webpage
function displayCatImages(images) {
    const catContainer = document.getElementById('cat-container');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = 'A cute cat';
        imgElement.loading = 'lazy';  // Add lazy loading
        catContainer.appendChild(imgElement);
    });
}

// Show error message
function showErrorMessage(message) {
    const catContainer = document.getElementById('cat-container');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.className = 'error-message';
    catContainer.appendChild(errorMessage);
}

// Load more cat images on button click
document.getElementById('load-more').addEventListener('click', fetchCatImages);

// Initial fetch
fetchCatImages();
