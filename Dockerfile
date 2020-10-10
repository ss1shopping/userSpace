FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
RUN npm run build

# Stage 2
FROM nginx:alpine AS frontend
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 8888
CMD ["nginx","-g","daemon off;"]
# FROM nginx:alpine AS frontend
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /builder/dist/ /usr/share/nginx/html
#FROM nginx:1.17.1-alpine