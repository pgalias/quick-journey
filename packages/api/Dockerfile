FROM node:12.15.0-alpine

RUN mkdir /var/app
WORKDIR /var/app/packages/api

RUN apk add --update --no-cache bash
RUN npm install -g @nestjs/cli @nestjs/schematics

CMD [ "npm", "run", "start:dev" ]
