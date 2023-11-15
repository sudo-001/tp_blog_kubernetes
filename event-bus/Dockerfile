FROM node:16-alpine
WORKDIR /event-bus
COPY . /event-bus/
RUN npm install
EXPOSE 4005
CMD ["npm", "start"]