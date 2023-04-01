const saque = number => {
        let value = number;
        const object = new Object();

        if(number < 5 || isNaN(number)){
                return "{}";
        }

        object["R$100"] = 0;
        object["R$50"] = 0;
        object["R$20"] = 0;
        object["R$10"] = 0;
        object["R$5"] = 0;
        
        object["R$100"] = Math.trunc(value / 100);
        value -= object["R$100"] * 100;

        object["R$50"] = Math.trunc(value / 50);
        value -= object["R$50"] * 50;

        object["R$20"] = Math.trunc(value / 20);
        value -= object["R$20"] * 20;

        object["R$10"] = Math.trunc(value / 10);
        value -= object["R$10"] * 10;

        object["R$5"] = Math.trunc(value / 5);
        value -= object["R$5"] * 5;

        if(value > 0)
                return "{}";

        return object;
}