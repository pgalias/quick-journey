FROM node:12.15.0-alpine

RUN apk add --update nano

RUN npm install -g lerna

WORKDIR /var/www
