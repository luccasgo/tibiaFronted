import { Api } from "./api.js"

class PersonagemData {
    static async SendPersonagemData() {
        
        const personagemName = document.getElementById("personagemNameInput").value;
        const pontuacao = document.getElementById("pontuacaoInput").value;
        const textPontuacao = document.getElementById("exibePontuacaoField");

        const personagem = {
            nome: personagemName,
            pontuacao: pontuacao
        }
        console.log(personagem)

        const response = await Api.SendPersonagemData(personagem)

        textPontuacao.innerHTML = "Pontuação: " +response;
    }
}

function loadEvent() {
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", async (event) => {
        event.preventDefault();
        PersonagemData.SendPersonagemData();      
    })
}

console.log("TESTE CARAIOO")

loadEvent();