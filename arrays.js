/* sempre que criar arrays usar const e nao let*/
/*assim colocamos quantos itens quisermos no mesmo array*/ 
const marcaCarros = ["Ford", "Hyundai", "Fiat", "BMW", "Etios", "BMW", "Etios", "BMW"];
/*assim vc acha o elemento dentro do array, começa do 0 e não do 1*/ 
console.log (marcaCarros[0] + " e " + marcaCarros[4]);
console.log(marcaCarros.length)
/*adiciona no ultimo campo, por ultimo na lista*/
marcaCarros.push("Honda");
console.log (marcaCarros);

/*adiciona na posição que vc escolhe*/
marcaCarros[0] = "PoloCar";
console.log (marcaCarros);

/*adiciona um item no fim da lista sem o push*/
marcaCarros[marcaCarros.length] = "liscar";
console.log (marcaCarros);

/* remove o ultimo item da lista*/
marcaCarros.pop()
console.log (marcaCarros);

const massas = ["Lasanha", "Pizza", "Macarrão"];
//"Lasanha", "Nhoque", "Pizza", "Macarrão"
console.log (massas);

massas.splice(1, 0, "Nhoque");
console.log(massas);

massas.splice(2, 2, "cARBONARA");
console.log(massas);