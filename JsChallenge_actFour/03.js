const palindromo = string => {
        const object = new Object();

        (string.toLowerCase() === string.split("").reverse().join("").toLowerCase())? object.palindromo = true: object.palindromo = false;

        object.palavra = string.split("").reverse().join("");

        return object;
}