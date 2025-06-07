FROM node:20-alpine
WORKDIR /app
# Install pnpm
RUN npm install -g pnpm
# Copy package and lock files first for caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
# Copy source
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["node","build/index.js"]
