# Use a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo de dependências para o diretório de trabalho
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Compila o código TypeScript
RUN npm run build --production

# Expõe a porta em que o servidor Next.js estará em execução (por padrão, a porta 3000)
EXPOSE 3000

# Inicia o servidor Next.js
CMD ["npm", "start"]
