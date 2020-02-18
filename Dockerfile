FROM node:12.15.0-alpine

RUN apk add --update --no-cache --quiet nano bash git

RUN npm install -g lerna --loglevel notice

WORKDIR /var/app

COPY package.json .

COPY packages/api/package.json ./packages/api/
COPY packages/web/package.json ./packages/web/
COPY packages/shared/package.json ./packages/shared/

COPY lerna.json ./
