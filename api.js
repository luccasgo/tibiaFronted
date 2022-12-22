export class Api {
    static baseUrl = "https://ec2-3-88-230-247.compute-1.amazonaws.com:8080"
    static headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "POST",
        "Host": "3.88.230.247:8080",
        "Allow" : "*"
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