document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function(event) {
        console.log('Search:', event.target.value);
    });
});
