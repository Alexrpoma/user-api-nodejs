FROM node:20-alpine3.17
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js