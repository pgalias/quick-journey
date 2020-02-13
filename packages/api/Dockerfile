FROM node:12.15.0-alpine

RUN mkdir /app
WORKDIR /app

RUN apk add --update --no-cache bash
RUN npm install -g @nestjs/cli @nestjs/schematics

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "start:dev" ]
