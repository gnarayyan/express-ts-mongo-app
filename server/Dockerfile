# Stage 1: Build the TypeScript application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the compiled application
FROM node:20-alpine

WORKDIR /app

# Copy only the compiled JavaScript files and necessary node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
# Copy public asset
COPY src/public ./src/publics




EXPOSE 3000

CMD ["node", "dist/server.js"]