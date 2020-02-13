FROM node:12.15.0-alpine

RUN mkdir /app
WORKDIR /app

RUN apk add --update --no-cache bash

COPY package*.json ./
RUN npm install

CMD [ "npm", "start" ]
