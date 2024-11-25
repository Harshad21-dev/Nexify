// Sample data for projects
const projects = [
    { title: "Website Design", description: "Build a responsive website for a client", budget: 500, type: "Fixed Price" },
    { title: "Mobile App Development", description: "Create an Android/iOS app", budget: 1500, type: "Hourly" },
    { title: "Logo Design", description: "Design a logo for a startup", budget: 300, type: "Fixed Price" },
    { title: "SEO Optimization", description: "Improve website SEO rankings", budget: 800, type: "Hourly" }
];

// Function to render projects
function renderProjects(filteredProjects = projects) {
    const projectContainer = document.querySelector(".projects");
    projectContainer.innerHTML = ""; // Clear previous projects

    if (filteredProjects.length === 0) {
        projectContainer.innerHTML = "<p>No projects match your filter criteria.</p>";
        return;
    }

    filteredProjects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button>Apply</button>
        `;

        projectContainer.appendChild(projectElement);
    });
}

// Apply filters
document.querySelector(".apply-filter").addEventListener("click", () => {
    const minBudget = parseInt(document.querySelector("#fixed-price-min").value) || 0;
    const maxBudget = parseInt(document.querySelector("#fixed-price-max").value) || Number.MAX_VALUE;

    const filteredProjects = projects.filter(project => project.budget >= minBudget && project.budget <= maxBudget);
    renderProjects(filteredProjects);
});

// Initial Render
renderProjects();