FROM alpine
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 4000
ENTRYPOINT ["node", "./app.js"]