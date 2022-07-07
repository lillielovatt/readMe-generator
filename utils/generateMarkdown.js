const licenseObj = {
    MIT: {
        link: "https://opensource.org/licenses/MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    Apache: {
        link: "https://opensource.org/licenses/Apache-2.0",
        badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    BSD: {
        link: "https://opensource.org/licenses/BSD-3-Clause",
        badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    },
    GPL: {
        link: "https://www.gnu.org/licenses/gpl-3.0",
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    },
    Mozilla: {
        link: "https://opensource.org/licenses/MPL-2.0",
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}

// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    let licenseBadge = "";

    //if the licenseObj has the license in it, then replace the link with the nested link in that licenseObj key
    // this is not strictly necessary as this function is only called if there IS a license, but, best to cover bases.
    if (licenseObj[license]) {
        licenseBadge = licenseObj[license]["badge"];
    }
    return licenseBadge;
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
    let licenseLink = ""; //if const, I couldn't change. must be let

    //if the licenseObj has the license in it, then replace the link with the nested link in that licenseObj key
    // this is not strictly necessary as this function is only called if there IS a license, but, best to cover bases.
    if (licenseObj[license]) {
        licenseLink = licenseObj[license]["link"];
    }
    return licenseLink;
}

// function that returns the license section of README
// If there is no license, returns an empty string
// sorry about the formatting here--when I indented them, it indented them in the README file too,
// and stopped it from being interpreted as markdown language, and it was formatted as plain text.
function renderLicenseSection(license) {
    if (license) {
        return `
## License

${license.map(el => {
            return `
#### **${el}**

[For more information, visit their website.](${renderLicenseLink(el)})

${renderLicenseBadge(el)}
`
        }).join('')
            }
        `
    }
    else { //if no license was selected, return empty string
        return "";
    }
}

// Create a function to generate markdown for README
// sorry about the formatting here--when I indented them, it indented them in the README file too,
// and stopped it from being interpreted as markdown language, and it was formatted as plain text.
function generateMarkdown(data) {
    return `# ${data.title}

    ${data.license.map(el => {
        return `
${renderLicenseBadge(el)}
        `
    }).join("")}

## Description

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#Questions)

## Installation

${data.install}

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing 
${data.contribution}

## Tests 
${data.test}

## Questions
Check out my [GitHub profile](https://github.com/${data.github})

If you have more questions, email me: <${data.email}>

    `;
}

module.exports = generateMarkdown;
