FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2
FROM nginx:alpine AS frontend
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
COPY --from=build-step /app/build /usr/share/nginx/html
# FROM nginx:alpine AS frontend
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /builder/dist/ /usr/share/nginx/html
#FROM nginx:1.17.1-alpine