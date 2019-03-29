FROM node:8.15
EXPOSE 8080
COPY index.js .
CMD node index.js

