FROM node:14-alpine
WORKDIR /app
COPY dist/apps/footer-ui/* ./build/
COPY package.json ./
ENV PORT=4202
EXPOSE ${PORT}
RUN npm install -g serve
RUN npm install
CMD ["serve", "-s", "build", "-l", "4202"]