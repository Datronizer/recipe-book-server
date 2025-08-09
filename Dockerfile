# TODO: Fix this to match current node version

# Dockerfile for Node & Express backend

# Build React client
FROM node:16.14.0

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 5000

CMD ["npm","start"]

# Shoutout to Avik Kundu for the detailed guide:
# https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136