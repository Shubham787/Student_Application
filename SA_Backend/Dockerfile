
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 5001

# Run server
CMD ["npm", "run", "dev"]
