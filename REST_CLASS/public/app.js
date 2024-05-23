document.addEventListener("DOMContentLoaded", () => {
    const deleteForms = document.querySelectorAll('.delete-post');

    deleteForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const confirmDelete = confirm('Are you sure you want to delete this post?');
            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });
});
