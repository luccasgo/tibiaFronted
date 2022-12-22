export class Api {
    static baseUrl = "http://localhost:8080/"
    static headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "POST"
    }
    

    static async SendPersonagemData(data) {
        console.log(this.headers)
        const url = this.baseUrl + "personagem/checar"
        let responseStatusCode = null

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