FROM node:19-alpine
WORKDIR /app
COPY  dist/apps/content-ui/* ./build/
COPY package.json ./
ENV PORT=4203
EXPOSE ${PORT}
RUN npm install -g serve
RUN npm install
CMD ["serve", "-s", "build", "-l", "4203"]