FROM node:12.15.0-alpine

RUN apk add --update --no-cache nano bash git

RUN npm install -g lerna

WORKDIR /var/www
