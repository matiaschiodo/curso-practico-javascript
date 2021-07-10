const salariosArg = argentina.map(persona => persona.salary);

const salariosArgSorted = salariosArg.sort((a, b) => a - b);

function esPar(num) {
    return (num % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((acum = 0, elem) => acum + elem);
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    let mediana = 0;

    if(esPar(lista.lenght)) {
        mediana = calcularMediaAritmetica([lista[mitad - 1], lista[mitad]]);
    } else {
        mediana = lista[mitad];
    };
    return mediana;
};

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del Top10%
const spliceStart = (salariosArgSorted.length * 90 / 100);
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(spliceStart, spliceCount);

const medianaArgTop10 = medianaSalarios(salariosArgTop10);

// HTML
const personasText = document.getElementById("personas");
for(let i = 0; i < argentina.length; i++) {
    personasText.innerHTML += `Nombre: <span>${argentina[i].name}</span> Salario: <span>$${argentina[i].salary}</span><br>`;
};

const medianaGeneral = document.getElementById("medianaGeneral");
medianaGeneral.innerText = `La mediana de salario en Argentina es de: $${medianaGeneralArg} dólares`;

const medianaTop10 = document.getElementById("medianaTop10");
medianaTop10.innerText = `La mediana del top 10% de mejores salarios es de: $${medianaArgTop10} dólares`