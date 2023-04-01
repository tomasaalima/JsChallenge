function volleyball(str){
    let jogos = str.split(',');
    let vit = 0;
    let der = 0;
    let setP = 0;
    let setG = 0;
    let rett= [];
    for(let i = 0; i < jogos.length; i++){
        if(parseInt(jogos[i][0]) > parseInt(jogos[i][2]) ){
            vit++;
        }else{
            der++;
        }
        setP += parseInt(jogos[i][2]);
        setG += parseInt(jogos[i][0]);
    }
    rett= [vit, der, setG, setP];
    return rett;
}

console.log(volleyball('3x1,3x0,2x3,3x0,1x3,3x1'));