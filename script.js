// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const skillTabs = document.querySelectorAll('.skill-tab');
const contactForm = document.getElementById('contactForm');
const statsNumbers = document.querySelectorAll('.stat-number');

// Skills Data
const skillsData = {
    frontend: [
        { name: "React / Next.js", percent: 95, years: "2+ years", projects: "5 projects", description: "Building modern web applications with React ecosystem" },
        { name: "TypeScript", percent: 90, years: "2+ years", projects: "5 projects", description: "Type-safe JavaScript development" },
        { name: "Tailwind CSS", percent: 92, years: "3+ years", projects: "7 projects", description: "Utility-first CSS framework" },
        { name: "Vue.js", percent: 85, years: "1+ years", projects: "3 projects", description: "Progressive JavaScript framework" },
        { name: "Animation Libraries", percent: 80, years: "1+ years", projects: "2 projects", description: "Creating smooth animations and interactions" }
    ],
    backend: [
        { name: "Node.js", percent: 90, years: "3+ years", projects: "8 projects", description: "JavaScript runtime for server-side development" },
        { name: "Python", percent: 85, years: "2+ years", projects: "4 projects", description: "Backend development with Django/Flask" },
        { name: "PostgreSQL", percent: 88, years: "3+ years", projects: "6 projects", description: "Relational database management" },
        { name: "MongoDB", percent: 82, years: "2+ years", projects: "4 projects", description: "NoSQL database for modern applications" },
        { name: "Redis", percent: 80, years: "1+ years", projects: "3 projects", description: "In-memory data structure store" }
    ],
    devops: [
        { name: "Docker", percent: 85, years: "2+ years", projects: "5 projects", description: "Containerization platform" },
        { name: "AWS", percent: 80, years: "2+ years", projects: "4 projects", description: "Cloud services and infrastructure" },
        { name: "CI/CD Pipelines", percent: 82, years: "2+ years", projects: "5 projects", description: "Automated deployment workflows" },
        { name: "Kubernetes", percent: 75, years: "1+ years", projects: "2 projects", description: "Container orchestration platform" },
        { name: "Nginx", percent: 85, years: "2+ years", projects: "4 projects", description: "Web server and reverse proxy" }
    ],
    tools: [
        { name: "Git", percent: 95, years: "4+ years", projects: "All projects", description: "Version control system" },
        { name: "VS Code", percent: 90, years: "4+ years", projects: "All projects", description: "Code editor and IDE" },
        { name: "Figma", percent: 75, years: "2+ years", projects: "6 projects", description: "UI/UX design and prototyping" },
        { name: "Jest / Testing", percent: 85, years: "2+ years", projects: "5 projects", description: "Testing frameworks and methodologies" },
        { name: "Webpack / Vite", percent: 80, years: "2+ years", projects: "4 projects", description: "Build tools and bundlers" }
    ]
};

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize skills section
    initSkills();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize form submission
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize stats counter
    initStatsCounter();
});

// Mobile Navigation
function initMobileNav() {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === #${sectionId}) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Skills Section
function initSkills() {
    // Load initial skills (frontend)
    loadSkills('frontend');
    
    // Add event listeners to skill tabs
    skillTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            skillTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Load skills for selected category
            const category = this.getAttribute('data-category');
            loadSkills(category);
        });
    });
}

function loadSkills(category) {
    const skillsGrid = document.querySelector('.skills-grid');
    const skillCategory = document.querySelector('.skill-category');
    
    // Update active category
    document.querySelectorAll('.skill-category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Create new category content
    const categoryDiv = document.createElement('div');
    categoryDiv.className = skill-category active;
    categoryDiv.id = category;
    
    // Create category header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'skill-category-header';
    headerDiv.innerHTML = 
        <h3>${category.charAt(0).toUpperCase() + category.slice(1)} Development</h3>
        <div class="skill-overall">
            <span>Overall Proficiency:</span>
            <div class="proficiency-bar">
                <div class="proficiency-fill" style="width: ${calculateAverageProficiency(category)}%"></div>
            </div>
            <span class="proficiency-value">${calculateAverageProficiency(category)}%</span>
        </div>
    ;
    
    // Create skills grid
    const gridDiv = document.createElement('div');
    gridDiv.className = 'skills-grid';
    
    // Populate skills
    skillsData[category].forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.percent}%</span>
            </div>
            <div class="skill-meta">
                <span>${skill.years}</span>
                <span>${skill.projects}</span>
            </div>
            <p>${skill.description}</p>
            <div class="skill-bar">
                <div class="skill-level" data-percent="${skill.percent}"></div>
            </div>
            ;
        gridDiv.appendChild(skillItem);
    });
    
    // Assemble category content
    categoryDiv.appendChild(headerDiv);
    categoryDiv.appendChild(gridDiv);
    
    // Replace existing content
    document.querySelector('.skills-content').innerHTML = '';
    document.querySelector('.skills-content').appendChild(categoryDiv);
    
    // Animate skill bars
    animateSkillBars();
}

function calculateAverageProficiency(category) {
    const skills = skillsData[category];
    const total = skills.reduce((sum, skill) => sum + skill.percent, 0);
    return Math.round(total / skills.length);
}

function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        const percent = level.getAttribute('data-percent');
        level.style.width = '0%';
        
        // Animate after a short delay
        setTimeout(() => {
            level.style.width = ${percent}%;
        }, 100);
    });
}

// Back to Top Button
function initBackToTop() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // In a real application, you would send this to a server
        // For demo purposes, we'll just show a success message
        alert(Thank you, ${data.name}! Your message has been sent. I'll get back to you within 24 hours.`);
        
        // Reset form
        this.reset();
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const suffix = stat.textContent.includes('%') ? '%' : '';
                    animateCounter(stat, target, suffix);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.about-stats'));
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50; // Controls animation speed
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

// Scroll Animations
function initScrollAnimations() {
    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.quality-card, .skill-item, .timeline-content');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.classList.add('fade-element');
        fadeObserver.observe(el);
    });
    // Add CSS for fade animation
    const style = document.createElement('style');
    style.textContent = 
        .fade-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    ;
    document.head.appendChild(style);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target =