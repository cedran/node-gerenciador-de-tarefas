# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código-fonte para o diretório de trabalho
COPY . .

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/app.js"]
