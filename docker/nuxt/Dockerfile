FROM node:14-alpine

ENV HOST 0.0.0.0

COPY . /var/www

WORKDIR /var/www

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
