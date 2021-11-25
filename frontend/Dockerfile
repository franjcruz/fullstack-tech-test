FROM node:14.17.0-alpine

WORKDIR /var/www/frontend

COPY . ./
RUN yarn --pure-lockfile

CMD ["yarn", "start"]