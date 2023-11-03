FROM node

WORKDIR /usr/src/client

RUN apt-get update -qq && apt-get install -y \
  apt-utils \
  build-essential

COPY /client /usr/src/client

RUN yarn install