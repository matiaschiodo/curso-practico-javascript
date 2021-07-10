
const coupons = [
    "3ST0ESUNCUP0N",
    "ESTOT4MB13N",
    "CUP0N"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
};

function calcularPrecio() {
    const inputPrice = document.getElementById("inputPrice");
    const precio = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const descuento = inputDiscount.value;
    const text = document.getElementById("result");
    const inputCoupon = document.getElementById("inputCoupon");
    const coupon = inputCoupon.value;
    let descuentoCupon = Number(descuento);

    switch(coupon) {
        case coupons[0]:
            descuentoCupon += 15;
        break;
        case coupons[1]:
            descuentoCupon += 25;
        break;
        case coupons[2]:
            descuentoCupon += 30;
        break;
        case "":
        break;
        default:
           alert('Cupon no valido.')
        break;
    };
    
    if(descuentoCupon <= 100) {
        const resultado = calcularPrecioConDescuento(Number(precio), Number(descuentoCupon));
        text.innerText = `El precio es $${Number(resultado.toFixed(2))} dólares gracias al descuento de ${descuentoCupon}%`;
    } else {
        alert('Se supero el maximo de descuento posible.')
    }
}