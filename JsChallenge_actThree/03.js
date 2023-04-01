const email = json => {
    return json.map(e => e.email).join(";");
}