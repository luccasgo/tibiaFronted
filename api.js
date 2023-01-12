export class Api {
    static baseUrl = "https://52.201.97.232:8080"
    static headers = {
        "Content-Type": "application/json"
    }
    

    static async SendPersonagemData(data) {
        const url = this.baseUrl + "/personagem/checar"

        const response = await fetch(url,
            {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
        return response
    }
}