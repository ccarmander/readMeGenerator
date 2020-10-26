
// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Github Name
${data.github}
## Project Name
${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
[GitHub license]https://img.shields.io/badge/license
## Tests
${data.tests}
## Questions
${data.questions}
## Email
${data.email}
`;
}

module.exports = generateMarkdown;
