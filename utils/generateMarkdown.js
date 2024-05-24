// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'BSD 3-Clause License' : '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'GPL v3' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT' : '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'None' : ''
  };

  return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'BSD 3-Clause License' : '(https://opensource.org/licenses/BSD-3-Clause)',
    'GPL v3' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT' : '(https://opensource.org/licenses/MIT)',
    "None" : ''
  }
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'BSD 3-Clause License' : '',
    'GPL v3' : '',
    'MIT' : '',
    'None' : ''
  };

  return licenseSection[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection};
