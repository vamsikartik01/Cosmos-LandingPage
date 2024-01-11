FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build --prod



CMD ["npm", "start"]