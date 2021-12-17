FROM node:16-alpine
WORKDIR /user/src/app
copy package*.json ./


run npm install -y

copy . .
EXPOSE 5010
CMD [ "node", "src/index.js"]
