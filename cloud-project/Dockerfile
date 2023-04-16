FROM node:lts-alpine3.17 as build
WORKDIR /usr/src/app
COPY ./package.json .
COPY ./vite.config.js .
COPY ./index.html .
COPY ./src ./
RUN npm install  --legacy-peer-deps
EXPOSE 8080
CMD ["npm", "run", "dev"]