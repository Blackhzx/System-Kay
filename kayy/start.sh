#!/bin/bash

clear

BLACK="\033[30m"
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
MAGENTA="\033[35m"
CYAN="\033[36m"
WHITE="\033[37m"
RESET="\033[0m"

BG_BLACK="\033[40m"
BG_RED="\033[41m"
BG_GREEN="\033[42m"
BG_YELLOW="\033[43m"
BG_BLUE="\033[44m"
BG_MAGENTA="\033[45m"
BG_CYAN="\033[46m"
BG_WHITE="\033[47m"

BOLD="\033[1m"
DIM="\033[2m"
UNDER="\033[4m"

echo -e "
${MAGENTA}██████╗  █████╗ ███████╗███████╗
${MAGENTA}██╔══██╗██╔══██╗██╔════╝██╔════╝
${MAGENTA}██████╔╝███████║█████╗  ███████╗
${MAGENTA}██╔══██╗██╔══██║██╔══╝  ╚════██║
${MAGENTA}██████╔╝██║  ██║███████╗███████║
${MAGENTA}╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝${RESET}
"

echo -e "${CYAN}                   KAY SYSTEM${RESET}"
echo -e "${CYAN}               SISTEMA INICIALIZANDO...${RESET}"
echo -e "${CYAN}                  CRIADO POR LOPES’ 🇪🇸${RESET}"
echo ""

sleep 0.5

printf "${CYAN}"
for i in {1..26}; do
  bar=$(printf "%-${i}s" "#" | tr ' ' '#')
  printf "\rCARREGANDO: [%-26s]" "$bar"
  sleep 0.04
done
printf "${RESET}"

echo -e "\n${GREEN}INICIALIZACAO CONCLUIDA${RESET}\n"
sleep 1


while true
do
    echo -e "${WHITE}[KAY SYSTEM]${RESET} ${GREEN}Aplicacao iniciada...${RESET}"
    node connect.js

    echo -e "\n${WHITE}[KAY SYSTEM]${RESET} ${RED}O bot caiu ou foi finalizado.${RESET}"
    echo -e "${WHITE}[KAY SYSTEM]${RESET} ${YELLOW}Reiniciando em 3 segundos...${RESET}\n"
    sleep 3
done