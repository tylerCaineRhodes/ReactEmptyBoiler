# ReactEmptyBoiler
This repository was built to provide students with a boilerplate setup for building a full stack CRUD app with a SERN stack.
There are branches with example apps utilizing various technologies such as Redux, Mongoose, MongoClient, MySQL, etc. 
<img src = ''  align="right"/>


## Technologies
<table>
   <tr>
     <td align="center"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="65" /></td>
     <td align="center"><img src="https://miro.medium.com/max/1200/1*m5RYM_Wkj4LsZewpigV5tg.jpeg" width="65" /></td>
     <td align="center"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" width="65"/></td>
     <td align="center"><img src="https://api.iconify.design/logos-redux.svg" width="65"/></td>
     <td align="center"><img src="https://api.iconify.design/logos:mongodb.svg" width="65"/></td>
     <td align="center"><img src="https://api.iconify.design/simple-icons:cypress.svg" width="65"/></td>
     <td align="center"><img src="https://api.iconify.design/logos:babel.svg" width="65"/></td>
     <td align="center"><img src="https://api.iconify.design/logos:webpack.svg" width="65"/></td>
  </tr>
</table>
 
## Prerequisites
Before you run pre-production code, ensure you have met the following requirements:
- You have NodeJS, [npm](https://www.npmjs.com/), and a code editor such as VScode. 
- You have MySQL installed on your computer.

## Setup and use
Use the package manager [npm](https://www.npmjs.com/) to install all of the dependencies. Run the following command in your project directory.
1. Fork this repository.
2. Clone your fork to your local machine:
```bash
git clone <fork_url>
```
3. In your new directory, update npm:
```bash
npm update
```
4. Install dependencies:
```bash
npm install
```
5. To start a server with nodemon:
```bash
npm run dev-server
```
6. To run webpack:
```bash
npm run dev-compile
```
7. To understand terminal commands,check the scripts in your package.json

## Working with branches
- To fetch a solution branch: 
```bash
git fetch <remote_name> <remote_branch>:<local_branch>
git checkout <local_branch>
```
- To clone a single branch:
```bash
git clone --single-branch --branch <branchname> <remote-repo>
```
- To fetch all branches: 
```bash
git fetch --all
```
