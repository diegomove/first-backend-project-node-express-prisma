FROM node:22-alpine

WORKDIR /app

COPY package*.json .

# Install dependencies from the package.json file
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

#Define the command to run the application
CMD ["node", "src/server.js"]