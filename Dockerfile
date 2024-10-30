FROM node:20.13.1 as build

# Set working directory
WORKDIR /ng-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

### STAGE 2: Setup ###

FROM nginx:stable-alpine

# Remove default Nginx website content
RUN rm -rf /usr/share/nginx/html/*

# Copy Nginx configuration files
COPY ./nginx/book.popoutbox.in /etc/nginx/sites-enabled/book.popoutbox.in
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy artifacts from the build stage to default Nginx public folder
COPY --from=build /ng-app/dist /usr/share/nginx/html

# Create the necessary directories and set permissions before switching to the nginx user
RUN mkdir -p /run/nginx /var/cache/nginx/client_temp && \
    touch /run/nginx/nginx.pid && \
    chown -R nginx:nginx /run/nginx /var/cache/nginx /usr/share/nginx/html

# Ensure the entrypoint script has the right permissions
RUN chmod +x /docker-entrypoint.sh

# Update Nginx PID file path in the configuration
RUN sed -i 's|pid /run/nginx.pid;|pid /var/run/nginx/nginx.pid;|' /etc/nginx/nginx.conf

# Set user to nginx
USER nginx

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
