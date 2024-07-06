const jobListings = [
    {
        title: "Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        description: "We are looking for a skilled software engineer..."
    },
    {
        title: "Graphic Designer",
        company: "Creative Studio",
        location: "New York, NY",
        description: "Seeking a creative and experienced graphic designer..."
    },
    {
        title: "Product Manager",
        company: "Business Inc.",
        location: "Chicago, IL",
        description: "We need a detail-oriented product manager..."
    },
    {
        title: "Frontend Developer",
        company: "TCS",
        location: "Chennai",
        description: "We need a creative Frontend Developer..."
    },
    {
        title: "Backend Developer",
        company: "Zoho",
        location: "Chennai",
        description: "We need a detail-oriented Backend developer..."
    },
    {
        title: "Sales Manager",
        company: "Teachnook",
        location: "Bangalore",
        description: "We need a detail-oriented Sales manager..."
    },
    {
        title: "product Manager",
        company: "cartrabbit",
        location: "coimbatore",
        description: "We need a detail-oriented Sales manager..."
    }
];

function displayJobs(jobs) {
    const jobListingsContainer = document.getElementById('jobListings');
    jobListingsContainer.innerHTML = ''; // Clear previous job listings

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-listing';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobListingsContainer.appendChild(jobElement);
    });
}

function searchJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobListings.filter(job => 
        job.title.toLowerCase().includes(searchInput) ||
        job.company.toLowerCase().includes(searchInput) ||
        job.location.toLowerCase().includes(searchInput) ||
        job.description.toLowerCase().includes(searchInput)
    );
    displayJobs(filteredJobs);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Initial display setup
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section by default
    displayJobs(jobListings); // Display jobs initially in the jobs section
});

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);
    const position = document.getElementById('position').value;

    // Define minimum experience required
    const minimumExperience = 2; // Example value

    // Check if the applicant meets the requirement
    if (experience >= minimumExperience) {
        document.getElementById('result').textContent = `${name},your application for the ${position} position has been accepted.`;
    } else {
        document.getElementById('result').textContent = `${name}, your application for the ${position} position has been rejected due to insufficient experience.`;
    }

    // Clear the form
    document.getElementById('jobApplicationForm').reset();
});