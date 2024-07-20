console.log("Hello, TypeScript!");

// Isso irá compilar o arquivo TypeScript e gerar um arquivo JavaScript correspondente chamado app.js. Execute o arquivo JavaScript: Agora você pode executar o arquivo JavaScript gerado usando o Node.js:
//==================================================
// node app.js                                     |
//==================================================
// Isso irá executar o código JavaScript e exibir a mensagem "Hello, TypeScript!" no console. 
//Alternativamente, você pode usar o comando tsc para compilar o arquivo TypeScript e, em seguida, usar o Node.js para executá-lo em uma única linha:
//====================================================
// tsc app.ts && node app.js                          /
//====================================================
// Isso irá compilar o arquivo TypeScript e, em seguida, executar o arquivo JavaScript gerado.

// Observações adicionais: Se você tiver um arquivo TypeScript com erros, o compilador tsc irá exibir mensagens de erro no console. Você pode configurar o TypeScript para gerar um arquivo JavaScript com um nome diferente usando a opção -out ou -o. O TypeScript também suporta a compilação de múltiplos arquivos de uma só vez. Lembrando que esses são os passos básicos para rodar um arquivo TypeScript pela primeira vez, o básico do básico. À medida que seu projeto cresce, você pode configurar um ambiente de desenvolvimento mais avançado com ferramentas como um bundler (como Webpack ou Rollup) e um servidor de desenvolvimento (como o webpack-dev-server).

//Abaixo estão os requisitos:

// Cada cliente do banco deve ter as seguintes informações:

// Nome completo
// Número de identificação (ID)
// Endereço
// Número de telefone
// Requisitos de negócio:

// Cada cliente pode ter uma ou mais contas bancárias. As contas podem ser do tipo Conta Corrente ou Conta Poupança.
// Para a conta corrente, é necessário armazenar o limite do cheque especial.
// Para a conta poupança, é necessário armazenar a taxa de juros.
// As Contas podem fazer tranferencia e saque