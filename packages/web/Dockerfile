FROM node:12.15.0-alpine

RUN mkdir /var/app
WORKDIR /var/app/packages/web

RUN apk add --update --no-cache bash

CMD [ "npm", "start" ]
