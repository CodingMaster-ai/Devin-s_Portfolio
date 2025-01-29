// Show Projects
let projectReveal = document.getElementById('button-1');
let projectSection = document.getElementById('projects');

// Show Skills
let skillsReveal = document.getElementById('button-2');
let skillsSection = document.getElementById('skills');

function showProjects() {
    projectSection.style.display = 'block';
}

projectReveal.addEventListener('click', showProjects);

function showSkills() {
    skillsSection.style.display = 'block';
}

skillsReveal.addEventListener('click', showSkills);