#!/bin/bash

# ===========================================
#   INSTALADOR OFICIAL — SHIZUKU BASE v1.0
#   Desenvolvido por: jpzinh
# ===========================================

clear
echo -e "\033[35m========================================\033[0m"
echo -e "\033[36m     SHIZUKU BASE v1.0 — INSTALADOR\033[0m"
echo -e "\033[35m========================================\033[0m"
sleep 1

echo -e "\033[33m[6/7]\033[0m Instalando pacotes essenciais..."
apt-get update -y && apt-get upgrade -y

echo -e "\033[33m[1/7]\033[0m Atualizando Termux..."
pkg update -y && pkg upgrade -y

echo -e "\033[33m[2/7]\033[0m Instalando Node.js LTS..."
pkg install nodejs-lts -y

echo -e "\033[33m[3/7]\033[0m Instalando Git..."
pkg install git -y

echo -e "\033[33m[5/7]\033[0m Instalando FFmpeg..."
pkg install ffmpeg -y

echo -e "\033[33m[6/7]\033[0m Instalando pacotes essenciais..."
pkg install wget -y

echo -e "\033[33m[6/7]\033[0m Instalando pacotes essenciais..."
pkg install tesseract -y


echo -e "\n\033[33m[7/7]\033[0m Instalando dependências do projeto (npm install)..."
sleep 1

if [ -f package.json ]; then
    npm install
else
    echo -e "\033[31mArquivo package.json não encontrado! Coloque o instalador na mesma pasta do bot.\033[0m"
    exit 1
fi

echo -e "\n\033[32m========================================\033[0m"
echo -e "\033[32m✔ Instalação concluída com sucesso!\033[0m"
echo -e "\033[36mAgora você pode iniciar usando:\033[0m"
echo -e "\033[35m./start.sh\033[0m"
echo -e "\033[32m========================================\033[0m"
