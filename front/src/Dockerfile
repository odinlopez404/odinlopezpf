FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY ["package*.json","./"]

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step dist/front /usr/share/nginx/html