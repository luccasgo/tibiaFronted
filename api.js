export class Api {
    static baseUrl = "ec2-3-88-230-247.compute-1.amazonaws.com:8080"
    static headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "POST",
        "Host": this.baseUrl,
        "Access-Control-Allow-Credentials" :false
    }
    

    static async SendPersonagemData(data) {
        console.log(this.headers)
        const url = this.baseUrl + "/personagem/checar"
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