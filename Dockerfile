# imagem base
FROM node:18

# diretório de trabalho
WORKDIR /app

# copia arquivos
COPY . .

# executa o app
CMD ["node", "app.js"]
