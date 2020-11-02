FROM node:lts
RUN apt-get update && apt-get install -y

WORKDIR /nodecli
COPY package*.json /nodecli/
RUN npm install commander@5.0
COPY . .