// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseObj = {
    MIT: {
        link: "https://opensource.org/licenses/MIT",
        badge: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    Apache: {
        link: "https://opensource.org/licenses/Apache-2.0",
        badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    },
    BSD: {
        link: "https://opensource.org/licenses/BSD-2-Clause",
        badge: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"
    },
    GPL: {
        link: "https://www.gnu.org/licenses/gpl-3.0",
        badge: "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    Mozilla: {
        link: "https://opensource.org/licenses/MPL-2.0",
        badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
    }
}

function renderLicenseBadge(license) {
    const licenseArray = ["MIT", "Apache", "BSD", "GPL", "Mozilla"];

    if (license) {
        if (license === "MIT") {

        }

    } else {
        return "";
    }

}
//["MIT","Apache","BSD","GPL","Mozilla"]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = ""; //if const, I couldn't change right? must be let?
    //if the licenseObj has the license in it, then replace the link with the nested link in that license key
    if(licenseObj[license]){ 
        licenseLink=licenseObj[license]["link"];
    }
    return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `
            ## Licenses
            ========================

            ${license.map(el => {
            return `
                ${el}
                ${renderLicenseLink(el)}
                ${renderLicenseBadge(el)}
                `
            })
            }
        `
    }
    else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//x Description 
// Table of Contents
//x Installation
//x Usage
// License
//x Contributing
//x Tests
//x Questions -github, email

module.exports = generateMarkdown;
