FROM node:16.15.0-alpine

# create destination directory
RUN mkdir -p /usr/src/tuprofe
WORKDIR /usr/src/tuprofe

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/tuprofe/
RUN yarn install

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000