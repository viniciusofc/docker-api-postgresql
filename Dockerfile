# Use a imagem Node.js oficial
FROM node:16

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start:watch"]
