FROM node:14 as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run prod

FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/spirit/ /usr/share/nginx/html