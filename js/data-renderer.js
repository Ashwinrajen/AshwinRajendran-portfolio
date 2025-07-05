// ==========================================
// DATA RENDERER 
// ==========================================

// Function to render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid || !portfolioData) return;

    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in parallax-fade';
        
        // Determine which links to show based on available data
        let linksHTML = '<div class="project-links">';
        if (project.demoLink) {
            linksHTML += `<a href="${project.demoLink}" class="project-link">View Demo →</a>`;
        }
        if (project.githubLink) {
            linksHTML += `<a href="${project.githubLink}" class="project-link">GitHub →</a>`;
        }
        if (project.paperLink) {
            linksHTML += `<a href="${project.paperLink}" class="project-link">Research Paper →</a>`;
        }
        if (project.videoLink) {
            linksHTML += `<a href="${project.videoLink}" class="project-link">Video →</a>`;
        }
        if (project.caseStudyLink) {
            linksHTML += `<a href="${project.caseStudyLink}" class="project-link">Case Study →</a>`;
        }
        if (project.specsLink) {
            linksHTML += `<a href="${project.specsLink}" class="project-link">Technical Specs →</a>`;
        }
        if (project.docsLink) {
            linksHTML += `<a href="${project.docsLink}" class="project-link">Documentation →</a>`;
        }
        if (project.simulationLink) {
            linksHTML += `<a href="${project.simulationLink}" class="project-link">Simulation →</a>`;
        }
        linksHTML += '</div>';

        projectCard.innerHTML = `
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-tech">${project.tech}</p>
                <p class="project-description">${project.description}</p>
                ${linksHTML}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Function to render research
function renderResearch() {
    const researchGrid = document.querySelector('.research-grid');
    if (!researchGrid || !portfolioData) return;

    portfolioData.research.forEach(research => {
        const researchCard = document.createElement('div');
        researchCard.className = 'research-card fade-in parallax-fade';
        
        researchCard.innerHTML = `
            <h3>${research.title}</h3>
            <p>${research.publication}</p>
            <p>${research.description}</p>
            <a href="${research.link}" class="research-link">Read Paper →</a>
        `;
        
        researchGrid.appendChild(researchCard);
    });
}

// Function to render experience timeline
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline || !portfolioData) return;

    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in parallax-fade';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <p class="timeline-date">${exp.date}</p>
                <h3>${exp.position}</h3>
                <p><strong>${exp.company}</strong></p>
                <p>${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Initialize all data rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if portfolioData exists
    if (typeof portfolioData !== 'undefined') {
        renderProjects();
        renderResearch();
        renderExperience();
        
        // Re-initialize animations for dynamically added content
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            if (typeof observer !== 'undefined') {
                observer.observe(el);
            }
        });
    } else {
        console.error('Portfolio data not found. Make sure portfolio-data.js is loaded before this script.');
    }
});

// Add hover effect to dynamically created project cards
document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation for dynamically added elements
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.addEventListener('mouseenter', function(e) {
            if (e.target.classList.contains('project-card')) {
                e.target.style.transform = 'translateY(-10px)';
            }
        }, true);
        
        projectsGrid.addEventListener('mouseleave', function(e) {
            if (e.target.classList.contains('project-card')) {
                e.target.style.transform = 'translateY(0)';
            }
        }, true);
    }
});