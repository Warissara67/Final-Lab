FROM nginx:1.25-alpine
<<<<<<< HEAD
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certs/     /etc/nginx/certs/
EXPOSE 80 443
=======

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

>>>>>>> c09c62e00c012102f8c40cf0ae7060d78ef415e8
CMD ["nginx", "-g", "daemon off;"]