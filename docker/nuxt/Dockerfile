FROM node:14-alpine

ENV HOST 0.0.0.0

WORKDIR /var/www

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
