function peso_ideal(number, string){
    switch(string){
        case "m":{
            return (72.7*number) - 58;
        }
        case "f":{
            return (62.1*number) - 44.7;
        }
        default:
            return false;
    }
}