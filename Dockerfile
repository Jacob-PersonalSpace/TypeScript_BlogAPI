FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn install

# Bundle app source
COPY . /app
RUN yarn build

EXPOSE 3000
CMD yarn install
