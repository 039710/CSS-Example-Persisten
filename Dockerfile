FROM node
WORKDIR /app
COPY ./app /app
RUN npm install
EXPOSE 2345
CMD ["npm", "start"]