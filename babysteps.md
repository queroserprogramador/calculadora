# Implementando em pequenos passos:


* html + csss (criar botoes e linkar funcoes que nao existem ainda)
* criar funcoes vazias botaoDigitoClick e botaoAcaoClick (importante dividir o problema em pedacoes e pequenos menores)
* começar com botaoDigitoClick, responsavel por guardar o primeiro valor da operacao e explicar a variavel valorTela
* fazer o botaoAcaoClick funcionar para selecionar as operacoes, explicar valorAntigoTela = valorTela;  e variavel acaoEscolhida 
* Do que temos até agora é se a pessoa digitar um numero, escolher uma operacao e digitar um outro numero, nós temos os seguintes valores nas nossas variaveis, agora nós precisamos fazer a conta ! Até agora nós assumimos que as pessoas digitaram + - / * mas olhando no html, se a pessoa apertar = , po javascript tambem vai chamar a mesma funcao  botaoAcaoClick . Precisamos agora chegar qual botao foi realmente apertado, se for o =, vamos fazer a magica. 
* fazer  botaoAcaoClick funcionar para = somente para operacao + 
* incrementar botaoAcaoClick com = para funcionar com todas as operacoes