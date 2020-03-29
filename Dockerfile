FROM node:8.12

LABEL maintainer="Victor Goh Ka Hian <kahiangohvictor@gmail.com>"

ENV NODE_ENV production

WORKDIR /app

COPY package.json ./
COPY package-lock.json .
COPY internals/ ./internals/
COPY build ./build/
COPY server ./server/

RUN npm install --only=prod

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]
