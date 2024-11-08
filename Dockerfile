FROM node:20.17 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# SSL 인증서 경로
RUN mkdir -p /etc/letsencrypt/live/main.kert.space
