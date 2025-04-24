// Developer profile config for GitHub README.md generator
const developerInfo = {
  name: "Guna Palanivel",
  country: "India",
  passion:
    "building high-performance, scalable applications that solve real-world problems",
  websiteURL: "https://gunaprofile.pages.dev/",
  linksURL: "https://gunalinks.pages.dev/",
  resumeURL:
    "https://drive.google.com/file/d/1aMt5kTtPSN2K3Ft9xEKGVVgWYqpTbjRh/view?usp=sharing",
  githubURL: "https://github.com/GunaPalanivel",
  linkedinURL: "https://www.linkedin.com/in/guna-palanivel/",
  vsCodeConfigURL: "https://github.com/GunaPalanivel/vs-code-settings",
  toolbox: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    languages: ["TypeScript", "JavaScript", "Python"],
    jsLibrary: ["React.js", "Next.js", "Angular", "Bootstrap", "Material-UI"],
    backend: ["Node.js", "Express.js", "GraphQL"],
    versionControl: ["Git", "GitHub"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    software: [
      "VS Code",
      "MySQL Workbench",
      "MongoDB Compass",
      "Git Bash",
      "GitHub Desktop",
    ],
    os: ["Windows Subsystem for Linux (Ubuntu)", "Linux/Unix"],
    csFundamentals: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
    ],
    tools: [
      "Docker",
      "CI/CD Pipelines",
      "RESTful APIs",
      "GraphQL",
      "Agile (Scrum, TDD, BDD)",
    ],
  },
  funFacts: {
    favoriteMovie: "The Pursuit of Happyness",
    moviePreference: "Hollywood over Bollywood",
    knowledgeSources: [
      "books",
      "videos",
      "conversations",
      "tech talks",
      "real-world challenges",
    ],
  },
  contact: {
    instagram: "https://www.instagram.com/sandy_sag_",
    linkedin: "https://www.linkedin.com/in/guna-palanivel/",
  },
};

function generateReadme(userInfo) {
  const {
    name,
    country,
    passion,
    websiteURL,
    linksURL,
    resumeURL,
    githubURL,
    linkedinURL,
    vsCodeConfigURL,
    toolbox,
    funFacts,
    contact,
  } = userInfo;

  return `
# Hi there 👋, I'm ${name}! 🌟

I'm a 22-year-old Software Developer based in ${country} 🇮🇳, passionate about ${passion}.

- 🌟 As a [Beta member of Microsoft MLSA](https://mvp.microsoft.com/en-US/studentambassadors/profile/e9949081-2982-483b-97a7-c0a8baf88937), I love driving innovation and contributing to community knowledge.
- 💻 Here's a [JavaScript code](https://github.com/GunaPalanivel/My-README.md-bio-In-Js) snippet that dynamically generates this README.
- 🌐 Check out my [website](${websiteURL}) to know more about what I'm up to.
- 🔗 Explore my [Links](${linksURL}) to connect with me across platforms.
- 📃 View my resume [here](${resumeURL}) — it’s got clickable links too.
- 📚 Stay in the loop via [GitHub](${githubURL}) and [LinkedIn](${linkedinURL}).
- ⚙️ My [VS Code setup](${vsCodeConfigURL}) helps me stay productive.

## 📦 Toolbox

**Frontend:** \`${toolbox.frontend.join("` `")}\`

**Languages:** \`${toolbox.languages.join("` `")}\`

**JS Frameworks:** \`${toolbox.jsLibrary.join("` `")}\`

**Backend:** \`${toolbox.backend.join("` `")}\`

**Version Control:** \`${toolbox.versionControl.join("` `")}\`

**Databases:** \`${toolbox.databases.join("` `")}\`

**Software:** \`${toolbox.software.join("` `")}\`

**OS:** \`${toolbox.os.join("` `")}\`

**CS Fundamentals:** \`${toolbox.csFundamentals.join("` `")}\`

**Dev Tools:** \`${toolbox.tools.join("` `")}\`

## ✨ Fun Facts

- 🎬 Favorite movie? "${funFacts.favoriteMovie}"
- 🍿 I prefer ${funFacts.moviePreference}.
- 🧠 I learn from ${funFacts.knowledgeSources.join(
    ", "
  )} — always hungry for knowledge.

## 📫 Contact

Quickest way? DM me on [Instagram](${contact.instagram}) or [LinkedIn](${
    contact.linkedin
  }).

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>Let's connect and chat!</b></em>
`;
}

const readmeContent = generateReadme(developerInfo);
console.log(readmeContent);
