FROM node:19-alpine
WORKDIR /app
COPY dist/apps/header-ui/* ./build/
COPY package.json ./
ENV PORT=4201
EXPOSE ${PORT}
RUN npm install -g serve
RUN npm install
CMD ["serve", "-s", "build", "-l", "4201"]