FROM node:14

WORKDIR /server
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "run", "devstart"] 