
//Clase constructora para alimentos
class Alimento {
    constructor (nombre, cantidad, medida, peso, medidapeso){
        this.nombre = nombre;
        this.cantidad = parseFloat(cantidad);
        this.medida = medida;
        this.peso = parseFloat(peso);
        this.medidapeso = medidapeso;
    }
}
        

//Diferentes tipos de grupos de alimentos
const frutas = [];
const verduras = [];
const cereales = [];
const origenAnimal = [];
const azucar = [];
const leguminosas = [];
const grasas = [];
const lacteos = [];

//Ingreso de Frutas

frutas.push (new Alimento ("Arándano", 0.66, "taza", 100, "gr"));
frutas.push (new Alimento ("Bluberrie", null, null, 107, "gr"));
frutas.push (new Alimento ("Cereza", 20, "pieza", 88, "gr"));
frutas.push (new Alimento ("Ciruela", 1, "taza", 150, "gr"));
frutas.push (new Alimento ("Ciruela pasa", null, null, 56, ""));
frutas.push (new Alimento ("Ciruela roja", null, null, 198, ""));
frutas.push (new Alimento ("Dátil", 2, "pieza", 18, "gr"));
frutas.push (new Alimento ("Duranzno", 2, "pieza", 156, "gr"));
frutas.push (new Alimento ("Frambuesa", 1, "taza", 123, "gr"));
frutas.push (new Alimento ("Fresa", 17, "pieza", 204, "gr"));
frutas.push (new Alimento ("Granada", 1, "pieza", 87, "gr"));
frutas.push (new Alimento ("Guayaba", 3, "pieza", 108, "gr"));
frutas.push (new Alimento ("Guayaba rosada", 1, "pieza", 100, "gr"));
frutas.push (new Alimento ("Higo", 2, "pieza", 72, "gr"));
frutas.push (new Alimento ("Kiwi", 1.5, "pieza", 114, "gr"));
frutas.push (new Alimento ("Limón", 5, "pieza", 150, "gr"));
frutas.push (new Alimento ("Mamey", 0.33, "pieza", 85, "gr"));
frutas.push (new Alimento ("Mandarina", 2, "pieza", 128, "gr"));
frutas.push (new Alimento ("Mango ataulfo", 0.5, "pieza", 90, "gr"));
frutas.push (new Alimento ("Manzana", 1, "pieza", 106, "gr"));
frutas.push (new Alimento ("Melón chino", 0.5, "pieza", 240, "gr"));
frutas.push (new Alimento ("Melón", 0.33, "pieza", 179, "gr"));
frutas.push (new Alimento ("Mora", 1, "taza", 155, "gr"));
frutas.push (new Alimento ("Naranja", 2, "pieza", 152, "gr"));
frutas.push (new Alimento ("Papaya", 1, "taza", 150, "gr"));
frutas.push (new Alimento ("Pera", 0.5, "pieza", 97, "gr"));
frutas.push (new Alimento ("Pera mantequilla", 1, "pieza", 94, "gr"));
frutas.push (new Alimento ("Piña", 0.75, "taza", 114, "gr"));
frutas.push (new Alimento ("Plátano", 2, "pieza", 60, "gr"));
frutas.push (new Alimento ("Plátano macho", 0.25, "pieza", 60, "gr"));
frutas.push (new Alimento ("Sandía", 1, "taza", 180, "gr"));
frutas.push (new Alimento ("Tamarindo", 0.25, "taza", 25, "gr"));
frutas.push (new Alimento ("Uva ", 14, "pieza", 84, "gr"));
frutas.push (new Alimento ("Zapote", 0.5, "pieza", 150, "gr"));

//Ingreso de Verduras

verduras.push (new Alimento ("Ajo", 3, "cucharadita", 12, "gr"));
verduras.push (new Alimento ("Ajo en polvo", 2, "cucharadita", 6, "gr"));
verduras.push (new Alimento ("Alcachofa", 1, "pieza", 48, "gr"));
verduras.push (new Alimento ("Apio", 1.5, "taza", 135, "gr"));
verduras.push (new Alimento ("Betabel", 0.25, "pieza", 29, "gr"));
verduras.push (new Alimento ("Brócoli", 1.5, "taza", 92, "gr"));
verduras.push (new Alimento ("Calabaza", 1, "pieza", 60, "gr"));
verduras.push (new Alimento ("Cebolla", 0.66, "pieza", 53, "gr"));
verduras.push (new Alimento ("Cebolla en polvo", 2, "cucharadita", 5, "gr"));
verduras.push (new Alimento ("Champiñones", 1, "taza", 90, "gr"));
verduras.push (new Alimento ("Portobello", 1, "taza", 122, "gr"));
verduras.push (new Alimento ("Shiitake", 1, "pieza", 5, "gr"));
verduras.push (new Alimento ("Chayote", 1, "taza", 120, "gr"));
verduras.push (new Alimento ("Chícharos", 0.25, "taza", 40, "gr"));
verduras.push (new Alimento ("Chile poblano", null, null, 53, "gr"));
verduras.push (new Alimento ("Cilantro", 2, "taza", 120, "gr"));
verduras.push (new Alimento ("Coliflor", 0.5, "taza", 80, "gr"));
verduras.push (new Alimento ("Ejotes", 0.5, "taza", 63, "gr"));
verduras.push (new Alimento ("Espárragos", 6, "pieza", 90, "gr"));
verduras.push (new Alimento ("Espinaca", 2, "taza", 120, "gr"));
verduras.push (new Alimento ("Flor de calabaza", 1, "taza", 134, "gr"));
verduras.push (new Alimento ("Jícama", 0.5, "taza", 50, "gr"));
verduras.push (new Alimento ("Jitomate bola", null, null, 113, "gr"));
verduras.push (new Alimento ("Jitomate", null, null, 60, "gr"));
verduras.push (new Alimento ("Lechuga", 3, "taza", 135, "gr"));
verduras.push (new Alimento ("Nopales", 2, "pieza", 134, "gr"));
verduras.push (new Alimento ("Pepinillos ", 1, "taza", 177, "gr"));
verduras.push (new Alimento ("Pepino", 1, "taza", 180, "gr"));
verduras.push (new Alimento ("Perejil", 1, "taza", 60, "gr"));
verduras.push (new Alimento ("Pimiento", 1, "taza", 90, "gr"));
verduras.push (new Alimento ("Rábanos", 1, "taza", 117, "gr"));
verduras.push (new Alimento ("Romero", 10, "cucharadas", 20, "gr"));
verduras.push (new Alimento ("Tomate verde", 5, "pieza", 80, "gr"));
verduras.push (new Alimento ("Verdolagas", 2, "taza", 116, "gr"));
verduras.push (new Alimento ("Zanahoria", 0.5, "taza", 40, "gr"));

//Ingreso de Cereales

cereales.push (new Alimento ("Arroz Blanco", 0.25, "taza", 50, "gr"));
cereales.push (new Alimento ("Arroz Salvaje", 0.5, "taza", 70, "gr"));
cereales.push (new Alimento ("Avena", 0.5, "taza", 20, "gr"));
cereales.push (new Alimento ("Bagel Integral", 1, "pieza", 29, "gr"));
cereales.push (new Alimento ("Bisquet", 1, "pieza", 31, "gr"));
cereales.push (new Alimento ("Bolillo", 0.33, "pieza", 20, "gr"));
cereales.push (new Alimento ("Camote", 0.25, "taza", 60, "gr"));
cereales.push (new Alimento ("Cuernito", 0.5, "pieza", 40, "gr"));
cereales.push (new Alimento ("Cuscús", 0.33, "taza", 60, "gr"));
cereales.push (new Alimento ("Elote", 0.5, "taza", 83, "gr"));
cereales.push (new Alimento ("Espagueti", 0.33, "taza", 47, "gr"));
cereales.push (new Alimento ("Fécula de maiz", 2, "cucharadas", 16, "gr"));
cereales.push (new Alimento ("Fideo de arroz", 0.33, "taza", 60, "gr"));
cereales.push (new Alimento ("Fusili", 1, "taza", 56, "gr"));
cereales.push (new Alimento ("Galleta María", 5, "pieza", 20, "gr"));
cereales.push (new Alimento ("galleta Integla", 3, "pieza", 21, "gr"));
cereales.push (new Alimento ("Galleta Salada", 4, "pieza", 20, "gr"));
cereales.push (new Alimento ("Granola", 3, "cucharadas", 21, "gr"));
cereales.push (new Alimento ("Harina de maíz", 2, "cucharadas", 20, "gr"));
cereales.push (new Alimento ("Harina de trigo", 0.2, "taza", 20, "gr"));
cereales.push (new Alimento ("Hotcake", 1, "pieza", 40, "gr"));
cereales.push (new Alimento ("Palitos de Pan", 2, "pieza", 22, "gr"));
cereales.push (new Alimento ("Palomitas de maíz", 2, "taza", 36, "gr"));
cereales.push (new Alimento ("Pan 5 granos", 1, "pieza", 32, "gr"));
cereales.push (new Alimento ("Pan Blanco", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Pan Integral", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Pan Media Luna", 0.5, "pieza", 25, "gr"));
cereales.push (new Alimento ("Papa", 0.6, "pieza", 117, "gr"));
cereales.push (new Alimento ("Quinoa", 0.33, "taza", 70, "gr"));
cereales.push (new Alimento ("Tortilla de harina", 1, "pieza", 29, "gr"));
cereales.push (new Alimento ("Tortilla de maíz", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Tostada", 1, "pieza", 24, "gr"));
cereales.push (new Alimento ("Wafle", 1, "pieza", 36, "gr"));
cereales.push (new Alimento ("Yuca", 0.2, "taza", 40, "gr"));

//Ingreso de OA

origenAnimal.push (new Alimento ("Arrachera de res", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Atún en lata", 0.33, "lata", 30, "gr"));
origenAnimal.push (new Alimento ("Bistec de res", null, null, 35, "gr"));
origenAnimal.push (new Alimento ("Bistec de ternera", null, null, 21, "gr"));
origenAnimal.push (new Alimento ("Carne molida de res", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Caviar", 2, "cucharadas", 28, "gr"));
origenAnimal.push (new Alimento ("Cecina", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Clara de huevo", 2, "pieza", 66, "gr"));
origenAnimal.push (new Alimento ("Cuete de ternera", null, null, 35, "gr"));
origenAnimal.push (new Alimento ("Filete de carne de res", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Filete de pescado", null, null, 40, "gr"));
origenAnimal.push (new Alimento ("Guachinango", null, null, 36, "gr"));
origenAnimal.push (new Alimento ("Huevo", 1, "pieza", 50, "gr"));
origenAnimal.push (new Alimento ("Jamón de pavo", 2, "rebanada", 42, "gr"));
origenAnimal.push (new Alimento ("Jamón de pierna", 2, "rebanada", 42, "gr"));
origenAnimal.push (new Alimento ("Lomo de cerdo", 0.2, "rebanada", 30, "gr"));
origenAnimal.push (new Alimento ("Mojarra", null, null, 37, "gr"));
origenAnimal.push (new Alimento ("Pavo", null, null, 45, "gr"));
origenAnimal.push (new Alimento ("Pechuga de pavo", 2, "rebanada", 42, "gr"));
origenAnimal.push (new Alimento ("Pollo", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Queso cottage", 0.2, "taza", 40, "gr"));
origenAnimal.push (new Alimento ("Queso manchego", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Queso mozzarella", null, null, 35, "gr"));
origenAnimal.push (new Alimento ("Queso panela", null, null, 40, "gr"));
origenAnimal.push (new Alimento ("Queso suizo", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Queso parmesano", null, null, 20, "gr"));
origenAnimal.push (new Alimento ("Res", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Salami de res", 2, "rebanada", 30, "gr"));
origenAnimal.push (new Alimento ("Salchicha de res", 1, "pieza", 45, "gr"));
origenAnimal.push (new Alimento ("Salchicha de pavo", 1, "pieza", 60, "gr"));
origenAnimal.push (new Alimento ("Salmón", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Sirloin de res", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Sirloin de cordero", null, null, 28, "gr"));
origenAnimal.push (new Alimento ("Surimi", null, null, 40, "gr"));
origenAnimal.push (new Alimento ("Ternera", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Trucha", 0.25, "rebanada", 30, "gr"));

//Ingreso de Azúcar

azucar.push (new Alimento ("Azúcar de mesa", 2, "cucharadita", 8, "gr"));
azucar.push (new Alimento ("Azúcar glass", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Azúcar mascabado", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Azúcar moren", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Cacao", 2, "cucharada", 10, "gr"));
azucar.push (new Alimento ("Gelatina", 0.5, "taza", 70, "gr"));
azucar.push (new Alimento ("Gomitas", 10, "pieza", 15, "gr"));
azucar.push (new Alimento ("Helado de chocolate", 0.25, "taza", 35, "gr"));
azucar.push (new Alimento ("Helado de fresa", 0.25, "taza", 35, "gr"));
azucar.push (new Alimento ("Helado de vainilla", 0.33, "taza", 40, "gr"));
azucar.push (new Alimento ("Jarabe de maíz", 1, "cucharadita", 13, "gr"));
azucar.push (new Alimento ("Jarabe de maple", 1, "cucharada", 15, "gr"));
azucar.push (new Alimento ("Malvavisco", 2, "pieza", 12, "gr"));
azucar.push (new Alimento ("Mermelada", 2, "cucharada", 14, "gr"));
azucar.push (new Alimento ("Miel", 2, "cucharadita", 14, "gr"));
azucar.push (new Alimento ("Nieve", null, null, 40, "gr"));
azucar.push (new Alimento ("Refresco", 0.25, "lata", 92, "ml"));

//Ingreso de Leguminosas

leguminosas.push (new Alimento ("Frijoles", 0.5, "taza", 90, "gr"));
leguminosas.push (new Alimento ("Frijoles refritos", 0.33, "taza", 75, "gr"));
leguminosas.push (new Alimento ("Frijoles pintos", 0.66, "taza", 160, "gr"));
leguminosas.push (new Alimento ("Garbanzos", 0.5, "taza", 90, "gr"));
leguminosas.push (new Alimento ("Habas", 0.6, "taza", 150, "gr"));
leguminosas.push (new Alimento ("Lentejas", 0.5, "taza", 90, "gr"));
leguminosas.push (new Alimento ("Soya", 0.25, "taza", 60, "gr"));
leguminosas.push (new Alimento ("Soya texturizada", 0.5, "taza", 20, "gr"));

//Ingreso de Grasas

grasas.push (new Alimento ("Aceite en aerosol", null, null, 5, "ml"));
grasas.push (new Alimento ("Aceite de avellana", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de ajonjolí", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de canola", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de cártamo", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de oliva", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceitunas", 5, "pieza", 32, "gr"));
grasas.push (new Alimento ("Aguacate", 0.33, "pieza", 31, "gr"));
grasas.push (new Alimento ("Ajonjolí", 4, "cucharadita", 10, "gr"));
grasas.push (new Alimento ("Almendras", 10, "pieza", 10, "gr"));
grasas.push (new Alimento ("Avellanas", 8, "pieza", 8, "gr"));
grasas.push (new Alimento ("cacahuates", 10, "pieza", 10, "gr"));
grasas.push (new Alimento ("Crema agria", 1, "cucharada", 13, "ml"));
grasas.push (new Alimento ("Crema de cacahuate", 2, "cucharada", 10, "ml"));
grasas.push (new Alimento ("Leche de almendras", 2, "taza", 480, "ml"));
grasas.push (new Alimento ("Manteca de cerdo", null, null, 5, "gr"));
grasas.push (new Alimento ("Mantequilla", 1, "cucharada", 6, "gr"));
grasas.push (new Alimento ("Margarina", 1, "cucharada", 10, "gr"));
grasas.push (new Alimento ("Mayonesa", 1, "cucharada", 6, "gr"));
grasas.push (new Alimento ("Nueces de la india", 11, "pieza", 11, "gr"));
grasas.push (new Alimento ("Nuez", 3, "pieza", 9, "gr"));
grasas.push (new Alimento ("Pistaches", 18, "pieza", 13, "gr"));
grasas.push (new Alimento ("Piñón", 1, "cucharada", 10, "gr"));
grasas.push (new Alimento ("Queso crema", 1, "cucharada", 13, "gr"));
grasas.push (new Alimento ("Tocino", 2, "rebanada", 18, "gr"));

//Ingreso de Lácteos

lacteos.push (new Alimento ("Crema agria", 1, "cucharada", 13, "ml"));
lacteos.push (new Alimento ("Leche descremada", 1, "taza", 245, "ml"));
lacteos.push (new Alimento ("Leche entera", 1, "taza", 240, "ml"));
lacteos.push (new Alimento ("Leche evaporada", 1, "taza", 240, "ml"));
lacteos.push (new Alimento ("Leche humana", 1, "taza", 240, "ml"));
lacteos.push (new Alimento ("Leche semidescremada", 1, "taza", 250, "ml"));
lacteos.push (new Alimento ("Yogurt natural", 0.2, "taza", 230, "gr"));
lacteos.push (new Alimento ("yogurt griego", 0.33, "taza", 80, "gr"));

let tipoDeUsuario = 0;
let grupoDeAlimento = 0;
let alimentoIngresado = 0;
let porcionIngresada = 0;

//Funciones para recorrer alimentos

//function PorcionarAlimento (){
//    let
//}

//Funciones para agregar un nuevo alimento

function AgregarNuevoLacteo (){
    let continuar = false;

    do {
        grupoDeAlimento = lacteos;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (lacteos);
        Bienvenida();
    }

}

function AgregarNuevoFruta (){
    let continuar = false;

    do {
        grupoDeAlimento = frutas;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (frutas);
        Bienvenida();
    }

}

function AgregarNuevoVerduras (){
    let continuar = false;

    do {
        grupoDeAlimento = verduras;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (verduras);
        Bienvenida();
    }

}

function AgregarNuevoCereales (){
    let continuar = false;

    do {
        grupoDeAlimento = cereales;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (cereales);
        Bienvenida();
    }

}

function AgregarNuevoLeguminosas (){
    let continuar = false;

    do {
        grupoDeAlimento = leguminosas;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (leguminosas);
        Bienvenida();
    }

}

function AgregarNuevoOrigenAnimal (){
    let continuar = false;

    do {
        grupoDeAlimento = origenAnimal;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (origenAnimal);
        Bienvenida();
    }

}

function AgregarNuevoAzucar (){
    let continuar = false;

    do {
        grupoDeAlimento = azucar;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (azucar);
        Bienvenida();
    }

}

function AgregarNuevoGrasas (){
    let continuar = false;

    do {
        grupoDeAlimento = grasas;
        let nuevoAlimento = new Alimento (nombre = prompt ("Ingresa el nombre del alimento"), cantidad = prompt ("Ingresa la cantidad"), medidad = prompt ("Ingresa la medida"), peso = prompt ("Ingresa el peso"), medidapeso = prompt ("Ingresa la unidad de peso"));
        grupoDeAlimento.push (nuevoAlimento);
        continuar = confirm("¿Deseas ingresar otro alimento a este grupo?");
    } while (continuar) {
        console.log (grasas);
        Bienvenida();
    }

}

function modoDeUso (){
    let modalidad = parseInt (prompt("Agregar un nuevo alimento a tu conversor ingresa: 1 \n\Saber qué cantidades mandar a tus pacientes ingresa: 2"));
    if (modalidad === 2) {

    }
    if (modalidad === 1){
        grupoDeAlimento = parseInt (prompt ("Ingresa el número del grupo de alimentos \n\ 1: Frutas \n\ 2: Verduras \n\ 3: Cereales \n\ 4: Leguminosas \n\ 5: Origen animal \n\ 6: Lácteos \n\ 7: Azúcar \n\ 8: Grasas \n\ 0: Regresar al inicio"));
        } if (grupoDeAlimento === 1) {
            AgregarNuevoFruta ();
        } else if(grupoDeAlimento === 2) {
            AgregarNuevoVerduras ();
        } else if (grupoDeAlimento === 3) {
            AgregarNuevoCereales ();
        } else if (grupoDeAlimento === 4) {
            AgregarNuevoLeguminosas ();
        } else if (grupoDeAlimento === 5) {
            AgregarNuevoOrigenAnimal ();
        } else if (grupoDeAlimento === 6) {
            AgregarNuevoLacteo ();
            console.log (lacteos);
        } else if (grupoDeAlimento === 7) {
            AgregarNuevoAzucar ();
        } else if (grupoDeAlimento === 8) {
            AgregarNuevoGrasas ();
        }else if (grupoDeAlimento === 0) {
            Bienvenida()
        }else {
            while (grupoDeAlimento <= 0 || grupoDeAlimento >= 9) {
                grupoDeAlimento = parseInt (prompt ("Ingresa el número del grupo de alimentos \n\ 1: Frutas \n\ 2: Verduras \n\ 3: Cereales \n\ 4: Leguminosas \n\ 5: Origen animal \n\ 6: Lácteos \n\ 7: Azúcar \n\ 8: Grasas"));
            }
        }
    
}





function Bienvenida () {
    tipoDeUsuario = parseFloat(prompt("Qué tipo de usuario eres? \n\ 1 - Nutriologa \n\ 2 - Paciente"))
    if (tipoDeUsuario == 1){
        alert ("Bienvenido a tu conversor de alimentos, Nutri");
        modoDeUso();
    } else if (tipoDeUsuario == 2){
        alert ("Hola Paciente, dentro de esta opción podrás sacar las cantidades de alimentos que puedes comer de acuerdo a lo que tu Nutri te mandó");
    } else {
        while (tipoDeUsuario != 1 || tipoDeUsuario !=2) {
            tipoDeUsuario = parseFloat(prompt("Qué tipo de usuario eres? \n\ 1 - Nutriologa \n\ 2 - Paciente"));
        }
    }

}

Bienvenida()
modoDeUso();








