FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.0 -g
#RUN npm install @material-ui/core
#RUN npm install react-router
#RUN npm install react-router-dom
#RUN npm install react-markdown

COPY . ./

CMD npm start
