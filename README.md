# Ikano Industry - Web

This page was designed and built using several advanced technologies. The structure of the page was created using the HTML markup language, which allows defining structural and semantic elements of the document. The SCSS preprocessor was used to style the page, which allows creating more complex style sheets through the use of nesting, variables and functions. The logic of the page was written in TypeScript, which is a superset of JavaScript and allows creating more scalable and easier to maintain code thanks to the introduction of static typing. PHP was used to handle server-side, which allows creating dynamic web pages and integrating with databases. JavaScript was used to create interactive elements on the page, which allows manipulating page elements and responding to user actions. The whole was placed in a Docker container using a Dockerfile, which allows for easy deployment and scaling of applications in different environments.


#### Docker
Run commands in the Angular project directory where the Dockerfile is located:

- docker build -f Dockerfile -t iiweb:0.1 dist/web/
- docker run -d -p 8080:80 --name iiweb iiweb:0.1
