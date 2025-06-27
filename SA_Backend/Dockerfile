# ---- Base Node image ----
FROM node:20

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript (if using precompiled .ts)
RUN npm run build

# Expose port
EXPOSE 5001

# Run server
CMD ["npm", "run", "dev"]
