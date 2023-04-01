const mudar_email = json => json.map(element => {
        element.email  = element.email.replace("@discente.ifpe.edu.br", "@gmail.com")
        return element;
});