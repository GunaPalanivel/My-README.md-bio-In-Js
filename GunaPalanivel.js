const developerInfo = {
  name: "Guna Palanivel",
  country: "India",
  passion: "creating awesome software",
  websiteURL: "https://gunaprofile.pages.dev/",
  linksURL: "https://gunalinks.pages.dev/",
  resumeURL: "https://drive.google.com/file/d/1ewoA3QtrAObZWfSi_zE_OfVM8mkuoC4S/view?usp=sharing",
  githubURL: "https://github.com/GunaPalanivel",
  linkedinURL: "https://www.linkedin.com/in/guna-palanivel/",
  vsCodeConfigURL: "https://github.com/GunaPalanivel/vs-code-settings",
  toolbox: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    languages: ["JavaScript", "Python", "TypeScript"],
    jsLibrary: ["React", "Next.js", "AdminJS", "Bootstrap"],
    backend: ["Node.js", "Sequelize"],
    versionControl: ["Git", "GitHub"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    software: ["Visual Studio Code", "MySQL Workbench", "MongoDB Compass", "Git Bash", "GitHub Desktop"],
    os: ["Windows Subsystem for Linux (Ubuntu)", "Linux/Unix"],
    csFundamentals: ["Data Structures and Algorithms", "Object-Oriented Programming"],
    tools: ["Docker", "CI/CD Pipelines", "REST APIs", "Agile/Scrum"]
  },
  funFacts: {
    favoriteMovie: "The Pursuit of Happyness",
    moviePreference: "Hollywood over Bollywood",
    knowledgeSources: ["books", "videos", "conversations"]
  },
  contact: {
    instagram: "https://www.instagram.com/sandy_sag_",
    linkedin: "https://www.linkedin.com/in/guna-palanivel/"
  }
};

function generateReadme(userInfo) {
  const { name, country, passion, websiteURL, linksURL, resumeURL, githubURL, linkedinURL, vsCodeConfigURL, toolbox, funFacts, contact } = userInfo;

  return `
# Hi there 👋, I'm ${name}! 🌟

I'm a 21-year-old developer based in ${country} 🇮🇳, and I'm passionate about ${passion}.

- 🌟 As a [Beta member of Microsoft MLSA](https://mvp.microsoft.com/en-US/studentambassadors/profile/e9949081-2982-483b-97a7-c0a8baf88937), driving forward tech innovation.
- 🌐 Check out my [website](${websiteURL}) to learn more about me.
- 🔗 Explore my [Links](${linksURL}) to find me on various platforms.
- 📃 View the PDF version of my resume on the drive and navigate through the links [here](${resumeURL}).
- 📚 Stay updated with my journey on [GitHub](${githubURL}) and [LinkedIn](${linkedinURL}).
- ⚙️ Explore my [VS Code Configuration](${vsCodeConfigURL}) for development optimization.

## 📦 Toolbox

**Frontend Development:** \`${toolbox.frontend.join("` `")}\`

**Programming Languages:** \`${toolbox.languages.join("` `")}\`

**JavaScript Library & Frameworks:** \`${toolbox.jsLibrary.join("` `")}\`

**Backend Development:** \`${toolbox.backend.join("` `")}\`

**Version Control:** \`${toolbox.versionControl.join("` `")}\`

**Databases:** \`${toolbox.databases.join("` `")}\`

**Software:** \`${toolbox.software.join("` `")}\`

**Operating Systems:** \`${toolbox.os.join("` `")}\`

**Computer Science Fundamentals:** \`${toolbox.csFundamentals.join("` `")}\`

**Tools and Platforms:** \`${toolbox.tools.join("` `")}\`

## ✨ Fun Facts

- 🎬 "${funFacts.favoriteMovie}" is my favorite movie.
- 🍿 I prefer ${funFacts.moviePreference}.
- 🧠 I enjoy gaining knowledge from various sources, be it ${funFacts.knowledgeSources.join(", ")}.

## 📫 Contact

For a quick response, DM me on [Instagram](${contact.instagram}) or [LinkedIn](${contact.linkedin}).

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>Let's connect and chat!</b></em>
`;
}

const readmeContent = generateReadme(developerInfo);
console.log(readmeContent);
