
FROM node:14.17.0-alpine

WORKDIR /var/www/backend

COPY . ./ 

RUN yarn --pure-lockfile

COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./
COPY development.env /var/www/backend/development.env

EXPOSE 3000
CMD [ "yarn", "start:dev", "--preserveWatchOutput" ]