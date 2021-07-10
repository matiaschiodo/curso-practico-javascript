// Codigo del cuadrado
console.group("Cuadrados: ");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado ** 2;
};

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const result = document.getElementById("resultadoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    result.innerText = `El resultado del perímetro es: ${perimetro.toFixed(2)} cm`;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const result = document.getElementById("resultadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    result.innerText = `El resultado del área es: ${area.toFixed(2)} cm`;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos: ");

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAltura(lado, base) {
    return Math.sqrt(lado**2 - base**2 / 4);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const lado3 = input3.value;
    const result = document.getElementById("resultTriangulo");

    if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(lado3));
        result.innerText = `El resultado del perímetro es ${perimetro.toFixed(2)} cm`;
    } else {
        result.innerText = `El triángulo no es isosceles`;
    };
};

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const lado3 = input3.value;
    const result = document.getElementById("resultTriangulo");

    if(lado1 == lado2) {
        const altura = calcularAltura(lado1, lado3);
        const area = areaTriangulo(altura, Number(lado3));
        result.innerText = `El resultado del área es ${area.toFixed(2)} cm`;
    } else if(lado2 == lado3) {
        const altura = calcularAltura(lado2, lado1);
        const area = areaTriangulo(altura, Number(lado1));
        result.innerText = `El resultado del área es ${area.toFixed(2)} cm`;
    } else if(lado1 == lado3) {
        const altura = calcularAltura(lado1, lado2);
        const area = areaTriangulo(altura, Number(lado2));
        result.innerText = `El resultado del área es ${area.toFixed(2)} cm`;
    } else {
        result.innerText = `El triángulo no es isosceles`
    };
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos: ");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const radio = input.value;
    const result = document.getElementById("resultCirculo");

    const perimetro = perimetroCirculo(Number(radio));
    result.innerText = `El resultado del perímetro es ${perimetro.toFixed(2)} cm`;
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const radio = input.value;
    const result = document.getElementById("resultCirculo");

    const area = areaCirculo(Number(radio));
    result.innerText = `El resultado del área es ${area.toFixed(2)} cm`;
}

console.groupEnd();

