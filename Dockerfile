# Use the official Node.js image as the base image
FROM node:18-alpine as BUILD_IMAGE

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE 

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist /app/dist

COPY package.json .
COPY vite.config.mjs .

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "preview" ]