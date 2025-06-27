# ---- Base Node image ----
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy frontend source
COPY . .

# Expose port used by Vite
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
