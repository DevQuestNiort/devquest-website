# ── Stage 1 : build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Installe les dépendances en premier (cache Docker)
COPY package.json package-lock.json ./
RUN npm ci

# Copie le reste du projet
COPY . .

# Build statique → génère le dossier out/
RUN npm run build

# ── Stage 2 : serve ──────────────────────────────────────────────────────────
FROM nginx:alpine AS runner

# Config nginx adaptée aux SPA / sites statiques Next.js
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie les fichiers statiques buildés
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
