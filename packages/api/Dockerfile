FROM node:12.15.0-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g @nestjs/cli

COPY package*.json ./
RUN npm install

CMD [ "npm", "start" ]
