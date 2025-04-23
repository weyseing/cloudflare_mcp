FROM node:22-alpine

# working dir
WORKDIR /usr/src/app

# install packages
COPY package*.json ./
RUN npm install

# app files
COPY . .

EXPOSE 3000
CMD ["npm", "start"]