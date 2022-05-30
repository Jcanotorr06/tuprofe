FROM node:14.19.3-alpine

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

CMD [ "yarn", "dev" ]