INCOME INEQUALITY DATA VISUALIZATIONS

Node.js needs to be installed in the computer for local development (https://nodejs.org/en/download/).

Built with:
1. Node.js (https://nodejs.org/en/)
2. Express.js Framework for the server (https://expressjs.com/)
3. Vue.js using vue cli for the frontend (https://vuejs.org/)
4. D3.js for data vizualizations (https://d3js.org/)

- Website is built as a single page application. Everything is controlled via Javascript (vue.js)
- In the file index.js is the server configuration where every URL route leads to /dist/index.html where lies the Vue.js app

Usage:
- To run the website locally run the command in the project directory:
node index.js
and visit http://localhost:5000 to view the application.

- To make changes run the commands:
1. cd app
2. npm run serve (which creates a local dev server)
3. visit http://localhost:8080/ to see the app running
4. make changes to the code
5. Run the command: npm run build in the app directory
6. Run the command: node index.js
7. Visit http://localhost:5000 to view the application.
