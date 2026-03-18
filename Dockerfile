FROM node:25-alpine as builder

WORKDIR /app

COPY package.json /app/package.json

RUN npm ci

COPY . /app

RUN npm run build