export const perguntas = [
    {
        enunciado: "Você decide implementar IA para monitorar a saúde pública. Como você deseja utilizá-la?",
        alternativas: [
            { texto: "Monitoramento preventivo", afirmacao: ["Você ajuda a prevenir epidemias."], proxima: 1 },
            { texto: "Análise pós-crise", afirmacao: ["A IA ajuda a mitigar os efeitos de uma crise."], proxima: 1 }
        ]
    },
    {
        enunciado: "A IA agora tem controle sobre a segurança. Como você deseja que ela funcione?",
        alternativas: [
            { texto: "Monitoramento total", afirmacao: ["A segurança aumenta, mas a privacidade diminui."], proxima: 2 },
            { texto: "Foco em direitos individuais", afirmacao: ["A privacidade é protegida, mas há riscos de segurança."], proxima: 2 }
        ]
    },
    {
        enunciado: "Finalmente, a IA pode influenciar decisões econômicas. Qual será sua abordagem?",
        alternativas: [
            { texto: "IA focada em crescimento", afirmacao: ["A economia floresce, mas com desigualdade."], proxima: undefined },
            { texto: "IA focada em equidade", afirmacao: ["A desigualdade é reduzida, mas o crescimento é mais lento."], proxima: undefined }
        ]
    }
];
