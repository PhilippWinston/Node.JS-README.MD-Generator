// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `[License Info](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return `
## [License](#license)

No license was used for this project.
`;
  }

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (!licenseBadge || !licenseLink) {
    return "";
  }

  return `
## [License](#license)

${licenseBadge} is being used in this project, find out more about it here ${licenseLink}
`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseSection(data.license)}

  ## [Description](#table-of-contents)
  
  ${data.description}
  
  
  ## Table of Contents
  
  - [Description](#discription)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${data.confirmContributers ? "- [Contributing](#contributing)\n" : ""}
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## [Installation](#table-of-contents)
  
  ${data.installation}
    
  ## [Usage](#table-of-contents)
  
  ${data.usage}

  Include screenshots as needed.
  To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ![alt text](assets/images/screenshot.png)
  
  ## [credits](#table-of-contents)
  
  ${data.credit}
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.

  ${
    data.confirmContributers
      ? `## Contributing
    ${data.contribute}`
      : `Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.`
  }
  


  

  ## [Tests](#table-of-contents)

  ${data.test}


  ## [Questions](#table-of-contents)

  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
  
---
`;
}

module.exports = generateMarkdown;
