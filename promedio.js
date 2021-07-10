// Media aritmetica

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function calcularPromedio() {
    const result = document.getElementById("resultPromedio")
    const inputNums = document.getElementById("inputNums");
    const numeros = inputNums.value;
    const numsArray = numeros.split(' ').map(Number);
    const resultado = calcularMediaAritmetica(numsArray);

    if(resultado >= 0) {
        result.innerText =  `El promedio es ${resultado.toFixed(2)}`;
    } else {
        alert('Los números tienen que estar separados por espacios.');
    }
};

// Mediana
function esPar(num) {
    return (num % 2 === 0);
};

function calcularMediana() {
    const resultMediana = document.getElementById("resultMediana");
    const inputNumsMed = document.getElementById("inputNumsMed");
    const numsMediana = inputNumsMed.value;
    const numsArrayMediana = numsMediana.split(' ').map(Number);
    numsArrayMediana.sort((a, b) => a - b);
    const midList = parseInt(numsArrayMediana.length / 2);
    let mediana;

    if(esPar(numsArrayMediana.length)) {
        mediana = calcularMediaAritmetica([
            numsArrayMediana[midList - 1],
            numsArrayMediana[midList]
        ])
    } else {
        mediana = numsArrayMediana[midList];
    }
    resultMediana.innerText = `La mediana es: ${mediana.toFixed(2)}`;
};

// Moda
function calcularModa() {
    const resultModa = document.getElementById("resultModa");
    const inputNumsModa = document.getElementById("inputNumsModa");
    const numsModa = inputNumsModa.value;

    const numsArrayModa = numsModa.split(' ').map(Number);

    const numsObject = {};

    numsArrayModa.map((elem) => {
        if(numsObject[elem]) {
            numsObject[elem] += 1;
        } else {
            numsObject[elem] = 1;
        }
    });

    const numsArrayModaOrd = Object.entries(numsObject).sort((acum, elem) => acum[1] - elem[1]);

    const moda = numsArrayModaOrd[numsArrayModaOrd.length - 1];

    resultModa.innerText = `La moda es: ${moda[0]} y se repite ${moda[1]} veces`;
};

// Media geometrica
function calcularMediaGeometrica() {
    const resultPromGeo = document.getElementById("resultMediaGeometrica");
    const inputNumsPromGeo = document.getElementById("inputNumsMediaGeometrica");
    const numsPromGeo = inputNumsPromGeo.value;
    const numsArrayPromGeo = numsPromGeo.split(' ').map(Number);

    const mult = numsArrayPromGeo.reduce((acum, elem) => acum * elem);
    const mediaGeometrica = mult ** (1 / numsArrayPromGeo.length);
    
    resultPromGeo.innerText = `La media geométrica es: ${mediaGeometrica.toFixed(2)}`;
};

// Media armónica
function calcularMediaArmonica() {
    const resultPromArm = document.getElementById("resultMediaArmonica");
    const inputNumsPromArm = document.getElementById("inputNumsMediaArmonica");
    const numsPromArm = inputNumsPromArm.value;
    const numsArrayPromArm = numsPromArm.split(' ').map(Number);

    const long = numsArrayPromArm.length;
    let suma = 0;
    numsArrayPromArm.forEach(elem => {suma += 1 / elem});
    const mediaArmonica = long / suma;
    resultPromArm.innerText = `La media armónica es: ${mediaArmonica.toFixed(2)}`;
}