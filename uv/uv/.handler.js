/*
 * Ultraviolet Handler Script
 * This script handles the form submission and redirects to the appropriate URL
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uv-form');
    const address = document.getElementById('uv-address');
    const searchEngine = document.getElementById('uv-search-engine');
    const frameContainer = document.querySelector('.proxy-frame-container');
    const iframe = document.querySelector('.proxy-frame');
    const urlDisplay = document.querySelector('.proxy-frame-url');
    const closeButton = document.querySelector('.proxy-frame-close');
    const backButton = document.querySelector('.proxy-frame-back');
    
    // Close button functionality
    closeButton.addEventListener('click', () => {
        frameContainer.classList.remove('active');
        iframe.src = 'about:blank';
    });
    
    // Back button functionality
    backButton.addEventListener('click', () => {
        try {
            iframe.contentWindow.history.back();
        } catch (err) {
            console.error('Cannot access iframe history:', err);
        }
    });
    
    // Handle form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        try {
            // If no URL is entered, use the search engine
            let url = address.value.trim();
            if (!isUrl(url)) url = `${searchEngine.value}search?q=${encodeURIComponent(url)}`;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
            
            // Show the URL in the display
            urlDisplay.textContent = url;
            
            // For demonstration purposes, we'll just load the URL directly
            // In a real implementation, this would use Ultraviolet's encoding
            iframe.src = url;
            frameContainer.classList.add('active');
            
            // Note: In a real implementation with Ultraviolet, you would use:
            // const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
            // iframe.src = encodedUrl;
            
        } catch (err) {
            alert('Error: ' + err.message);
        }
    });
    
    // Handle popular site clicks
    const proxySites = document.querySelectorAll('.proxy-site');
    proxySites.forEach(site => {
        site.addEventListener('click', () => {
            const url = site.getAttribute('data-url');
            address.value = url;
            form.dispatchEvent(new Event('submit'));
        });
    });
});

// Function to check if a string is a URL
function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
}
