// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: colors.brightCyan("What's your title?")
  }, 
  {
    type: 'input',
    name: 'description',
    message: colors.brightCyan("Provide a short description explaining the what, why and how of your project:")
  },
  {
    type: 'input',
    name: 'installation',
    message: colors.brightCyan("Enter Installation instructions:")
  },
  {
    type: 'input',
    name: 'usage',
    message: colors.brightCyan("Enter Usage Information:")
  },
  {
    type: 'input',
    name: 'contributing',
    message: colors.brightCyan("Contribution Guidelines:")
  },  
  {
    type: 'input',
    name: 'test',
    message: colors.brightCyan("Test Instructions:")
  },
  {
    type: 'list',
    name: 'license',
    message: colors.brightCyan('Choose a license:'),
    choices: ['BSD 3-Clause License', 'GPL v3','MIT', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: colors.brightCyan("Enter your GitHub username:")
  }, 
  {
    type: 'input',
    name: 'email',
    message: colors.brightCyan("Enter your email:")
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {title, description, installation, usage, contributing, test, license, github, email} = data;

  const licenseBadge = generateMarkdown.renderLicenseBadge(license);
  const licenseLink = generateMarkdown.renderLicenseLink(license);
  const licenseSection = generateMarkdown.renderLicenseSection(license);


  const readmeContent = `
  # ${title}  ${licenseBadge}

  ## Description 
  ${description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Installation 
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ## Test
  ${test}

  ## License
  ${licenseSection}
  ${licenseLink}

  ## Questions
  If you have any questions about the repository, contact me in ${github} and @ ${email}
 
  `;


  fs.writeFile(fileName, readmeContent, (err) =>{
    err ? console.error(err) : console.log(`${fileName} created`);
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    writeToFile('README.md', data);
  });
}

// Function call to initialize app
init();
