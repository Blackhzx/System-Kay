

const msg = {
    SoAdm: "*_❗Voce não é adm, somente Admins podem usar esse comando_*", 
    SoDono: "*_❗Somente meu dono tem o poder de usar este comando_*",
    BotAdmin: "*_❕Eu preciso ser admin do grupo para esse comando funcionar_*",
    SoEmGrupos: "*_❕Esse comando só funciona em grupos_*",
    Download: "*_⌛ Realizando ação, aguarde.._*"
};

// TRANSFORMA EM FUNÇÃO
const Cmd = (command, NomeGrupo, prefix) => ({
    Ativado: `❕| *_O recurso "${command}" foi ativado com sucesso no grupo: "${NomeGrupo}"_*\n\n*_Para desativar use: ${prefix + command} 0_*`,
    Desativado: `❗| *_O recurso "${command}" foi desativado com sucesso no grupo: "${NomeGrupo}"_*\n\n*_Para ativar novamente use: ${prefix + command} 1_*`
});

module.exports = { msg, Cmd };
