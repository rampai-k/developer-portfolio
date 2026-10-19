const portfolioData = {
  social: {
    github: "",
    linkedin: "",
    email: "katlego.rampai@example.com"
  },
  skills: [
    { category: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Backend Development", items: ["Node.js", "REST APIs"] },
    { category: "Databases", items: ["SQL", "PostgreSQL"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Vite", "npm"] },
    { category: "Additional Areas of Interest", items: ["Application development", "Full-stack engineering", "Problem solving"] }
  ],
  projects: [
    {
      name: "developer-portfolio",
      description: "A responsive personal portfolio to introduce my work, learning journey, and development interests.",
      technologies: ["HTML", "CSS", "JavaScript"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "Portfolio Website"
    },
    {
      name: "taskflow-task-manager",
      description: "Planned task management app exploring task organisation, useful workflows, and clear interaction design.",
      technologies: ["React", "JavaScript", "CSS"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "weather-dashboard",
      description: "Planned weather dashboard exploring API integration and presenting forecast information clearly.",
      technologies: ["JavaScript", "REST APIs", "CSS"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "expense-tracker",
      description: "Planned expense tracking experience for recording spending and making personal budgets easier to review.",
      technologies: ["React", "JavaScript", "SQL"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "student-management-system",
      description: "Planned application for organising student records and exploring practical data management workflows.",
      technologies: ["Node.js", "REST APIs", "PostgreSQL"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "rest-api-project",
      description: "Planned backend project focused on designing and documenting RESTful endpoints.",
      technologies: ["Node.js", "REST APIs", "PostgreSQL"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "ecommerce-storefront",
      description: "Planned storefront exploring product discovery, accessible interfaces, and shopping journeys.",
      technologies: ["React", "JavaScript", "CSS"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "support-ticket-system",
      description: "Planned ticket workflow for tracking support requests and their progress.",
      technologies: ["Node.js", "REST APIs", "SQL"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "data-analytics-dashboard",
      description: "Planned dashboard exploring how to turn structured data into useful visual summaries.",
      technologies: ["JavaScript", "SQL", "CSS"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    },
    {
      name: "ai-business-assistant",
      description: "Planned concept exploring how AI-powered tools might support everyday business tasks.",
      technologies: ["JavaScript", "REST APIs"],
      repositoryUrl: "",
      liveDemoUrl: "",
      status: "In Development"
    }
  ],
  experience: [
    {
      title: "NuCare Connect",
      organisation: "NuLink Solutions",
      type: "PROJECT DEVELOPMENT",
      description: "Healthcare application project work associated with NuLink Solutions. This reflects project and product-development background, not a claim of formal employment. Further details can be added when they are appropriate to share."
    },
    {
      title: "Independent software projects",
      organisation: "Ongoing",
      type: "PERSONAL PROJECTS",
      description: "Developing practical web application ideas to build technical skills, explore full-stack development, and demonstrate problem-solving through software."
    }
  ],
  education: [
    {
      programme: "Software development and application development studies",
      institution: "",
      dates: ""
    }
  ]
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function renderSkills() {
  const container = document.querySelector("#skills-grid");
  container.innerHTML = portfolioData.skills.map((group) => `
    <article class="skill-card">
      <h3>${escapeHtml(group.category)}</h3>
      <div class="skill-tags">${group.items.map((item) => `<span class="skill-tag">${escapeHtml(item)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProjectActions(project) {
  const actions = [];
  if (project.repositoryUrl) {
    actions.push(`<a href="${escapeHtml(project.repositoryUrl)}" target="_blank" rel="noreferrer">Repository <span aria-hidden="true">↗</span></a>`);
  } else {
    actions.push("<span>Repository coming soon</span>");
  }
  if (project.liveDemoUrl) {
    actions.push(`<a href="${escapeHtml(project.liveDemoUrl)}" target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>`);
  } else {
    actions.push("<span>Demo coming soon</span>");
  }
  return actions.join("");
}

function renderProjects() {
  const container = document.querySelector("#project-grid");
  container.innerHTML = portfolioData.projects.map((project, index) => {
    const statusClass = project.status === "Portfolio Website" ? " status-portfolio" : "";
    return `
      <article class="project-card">
        <div class="project-card-top">
          <span class="project-icon" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-status${statusClass}">${escapeHtml(project.status)}</span>
        </div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-tags" aria-label="Technologies">${project.technologies.map((technology) => `<span class="project-tag">${escapeHtml(technology)}</span>`).join("")}</div>
        <div class="project-actions">${renderProjectActions(project)}</div>
      </article>
    `;
  }).join("");
}

function renderExperience() {
  const container = document.querySelector("#experience-list");
  container.innerHTML = portfolioData.experience.map((entry) => `
    <article class="experience-entry">
      <div class="experience-entry-header">
        <h3>${escapeHtml(entry.title)} <span class="text-muted">/ ${escapeHtml(entry.organisation)}</span></h3>
        <span class="entry-type">${escapeHtml(entry.type)}</span>
      </div>
      <p>${escapeHtml(entry.description)}</p>
    </article>
  `).join("");
}

function renderEducation() {
  const container = document.querySelector("#education-list");
  container.innerHTML = portfolioData.education.map((entry) => `
    <article class="education-card">
      <span class="card-kicker">STUDIES</span>
      <h3>${escapeHtml(entry.programme)}</h3>
      <p>${entry.institution ? escapeHtml(entry.institution) : "Institution details to be added when confirmed."}</p>
      ${entry.dates ? `<p>${escapeHtml(entry.dates)}</p>` : ""}
      <p class="placeholder-copy">Programme and study details can be updated as confirmed.</p>
    </article>
  `).join("");
}

function configureSocialLinks() {
  for (const profile of ["github", "linkedin"]) {
    const url = portfolioData.social[profile];
    for (const link of document.querySelectorAll(`[data-profile="${profile}"]`)) {
      if (url) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noreferrer";
      } else {
        link.href = "#contact";
        link.setAttribute("aria-label", `${profile === "github" ? "GitHub" : "LinkedIn"} profile URL to be added`);
      }
    }
  }

  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  for (const link of emailLinks) {
    link.href = `mailto:${portfolioData.social.email}`;
    const value = link.querySelector(".contact-link-value");
    if (value) value.firstChild.textContent = `${portfolioData.social.email} `;
  }
}

function setupNavigation() {
  const root = document.documentElement;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");
  root.classList.add("js-enabled");
  navigation.classList.add("is-collapsed");
  menuButton.setAttribute("aria-expanded", "false");

  const setMenuOpen = (isOpen) => {
    navigation.classList.toggle("is-collapsed", !isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  const sections = [...navigation.querySelectorAll("a")]
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((item) => item.section);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const item of sections) {
          if (item.section === entry.target) item.link.setAttribute("aria-current", "location");
          else item.link.removeAttribute("aria-current");
        }
      }
    }, { rootMargin: "-25% 0px -65% 0px" });
    for (const item of sections) observer.observe(item.section);
  }
}

function initialisePortfolio() {
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  configureSocialLinks();
  setupNavigation();
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
}

initialisePortfolio();
