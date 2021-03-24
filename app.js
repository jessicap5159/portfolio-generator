<<<<<<< HEAD
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const promptUser = () => {
  return inquirer.prompt([
    {
       type:'input',
       name: 'name',
       message: 'What is your name? (required)' ,
       validate: nameInput => {
         if (nameInput) {
           return true;
         } else {
           console.log('Please enter your name!');
           return false;
         }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (required)',
        validate: gitHubInput => {
          if (gitHubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
         }
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some information about yourself for an "About" section?',
          default: true
        },
        
   
      {
        type:'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
          }
        },

  ]);
};
promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
  // If no 'projects' array property, create one
  if (!portfolioData.projects) {
  portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a new project
  =================
`)
return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: "What is the name of your project? (required)",
    validate: projectNameInput => {
      if (projectNameInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
     }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project (Required)',
    validate: projectDescInput => {
      if (projectDescInput) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
     }
  },
  {
    type:'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML','CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: gitLinkInput => {
      if (gitLinkInput) {
        return true;
      } else {
        console.log('Please enter the GitHub link to your project!');
        return false;
      }
     }
  },
  {
    type: 'confirm',
    name: 'feature',
    message: 'Would you like to feature this project?',
    default: false
  },
  {
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to enter another project?',
    default: false
  }
])
.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
  });
};

promptUser() // 1
.then(promptProject) // 2
.then(portfolioData => {
  return generatePage(portfolioData); // 3
})
.then(pageHTML => {
  return fs.writeFile(pageHTML); // 4
})
.then(writeFileResponse => {
  console.log(writeFileResponse); // 5
  return copyFile(); 
})
.then(copyFileResponse => {
  console.log(copyFileResponse); // 6
})
.catch(err => {
  console.log(err);
});

const fs = require('fs');
const generatePage = require('./src/page-template.js');
=======
console.log('Hello Node!');
>>>>>>> 9efad3e51e48bc91084ecf502ac653daa54e2207
