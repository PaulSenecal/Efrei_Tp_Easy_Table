# Utiliser une image node officielle plus récente comme parent
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du répertoire de travail actuel dans le répertoire de travail du conteneur
COPY . .

# Construire l'application NestJS
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "start:dev"]
