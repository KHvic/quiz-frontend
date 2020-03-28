FROM node:8.12

LABEL maintainer="Victor Goh Ka Hian <kahiangohvictor@gmail.com>"

ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./
COPY internals/ ./internals/

RUN npm install --only=prod
COPY . ./
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]
