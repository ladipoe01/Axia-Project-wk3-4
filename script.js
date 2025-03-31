document.addEventListener('DOMContentLoaded', () => {
    const jobListings = document.querySelectorAll('.job-listing');

    jobListings.forEach(listing => {
        listing.addEventListener('click', () => {
            const skills = listing.dataset.skills.split(', ');
            alert(Skills, $,skills.join(', ')); // Example: Show skills in an alert
            // You can add more complex interactivity here, like showing a job details modal
        });
    });
});