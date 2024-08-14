
let tipoDeUsuario = 0;
let grupoDeAlimento = 0;
let porcionIngresada = 0;

//Clase constructora para alimentos
class Alimento {
    constructor (nombre, cantidad, medida, peso, medidapeso){
        this.nombre = nombre;
        this.cantidad = parseFloat(cantidad);
        this.medida = medida;
        this.peso = parseFloat(peso);
        this.medidapeso = medidapeso;
    }

    porcionarCantidad() {
        this.cantidad = this.cantidad * parseInt(porcionIngresada);
    }

    porcionarPeso() {
        this.peso = this.peso * parseInt(porcionIngresada);
    }

    resultadoNutri (){
        console.log ("Para cumplir la porción ingresada de: " +this.nombre + " agrega a tu menú " +this.cantidad + this.medida + " o " + this.peso + this.medidapeso);
    }

    resultadoPaciente (){
        console.log ("Si quieres comer: " +this.nombre + " esta es la cantidad recomendada por tu Nutrióloga " +this.cantidad +" " + this.medida + " o " + this.peso +" "+ this.medidapeso);
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

frutas.push (new Alimento ("Arandano", 0.66, "taza", 100, "gr"));
frutas.push (new Alimento ("Bluberrie", null, null, 107, "gr"));
frutas.push (new Alimento ("Cereza", 20, "pieza", 88, "gr"));
frutas.push (new Alimento ("Ciruela", 1, "taza", 150, "gr"));
frutas.push (new Alimento ("Ciruela pasa", null, null, 56, "gr"));
frutas.push (new Alimento ("Ciruela roja", null, null, 198, "gr"));
frutas.push (new Alimento ("Datil", 2, "pieza", 18, "gr"));
frutas.push (new Alimento ("Durazno", 2, "pieza", 156, "gr"));
frutas.push (new Alimento ("Frambuesa", 1, "taza", 123, "gr"));
frutas.push (new Alimento ("Fresa", 17, "pieza", 204, "gr"));
frutas.push (new Alimento ("Granada", 1, "pieza", 87, "gr"));
frutas.push (new Alimento ("Guayaba", 3, "pieza", 108, "gr"));
frutas.push (new Alimento ("Guayaba rosada", 1, "pieza", 100, "gr"));
frutas.push (new Alimento ("Higo", 2, "pieza", 72, "gr"));
frutas.push (new Alimento ("Kiwi", 1.5, "pieza", 114, "gr"));
frutas.push (new Alimento ("Limon", 5, "pieza", 150, "gr"));
frutas.push (new Alimento ("Mamey", 0.33, "pieza", 85, "gr"));
frutas.push (new Alimento ("Mandarina", 2, "pieza", 128, "gr"));
frutas.push (new Alimento ("Mango ataulfo", 0.5, "pieza", 90, "gr"));
frutas.push (new Alimento ("Manzana", 1, "pieza", 106, "gr"));
frutas.push (new Alimento ("Melon chino", 0.5, "pieza", 240, "gr"));
frutas.push (new Alimento ("Melon", 0.33, "pieza", 179, "gr"));
frutas.push (new Alimento ("Mora", 1, "taza", 155, "gr"));
frutas.push (new Alimento ("Naranja", 2, "pieza", 152, "gr"));
frutas.push (new Alimento ("Papaya", 1, "taza", 150, "gr"));
frutas.push (new Alimento ("Pera", 0.5, "pieza", 97, "gr"));
frutas.push (new Alimento ("Pera mantequilla", 1, "pieza", 94, "gr"));
frutas.push (new Alimento ("Piña", 0.75, "taza", 114, "gr"));
frutas.push (new Alimento ("Platano", 0.5, "pieza", 60, "gr"));
frutas.push (new Alimento ("Platano macho", 0.25, "pieza", 60, "gr"));
frutas.push (new Alimento ("Sandia", 1, "taza", 180, "gr"));
frutas.push (new Alimento ("Tamarindo", 0.25, "taza", 25, "gr"));
frutas.push (new Alimento ("Uva ", 14, "pieza", 84, "gr"));
frutas.push (new Alimento ("Zapote", 0.5, "pieza", 150, "gr"));

//Ingreso de Verduras

verduras.push (new Alimento ("Ajo", 3, "cucharadita", 12, "gr"));
verduras.push (new Alimento ("Ajo en polvo", 2, "cucharadita", 6, "gr"));
verduras.push (new Alimento ("Alcachofa", 1, "pieza", 48, "gr"));
verduras.push (new Alimento ("Apio", 1.5, "taza", 135, "gr"));
verduras.push (new Alimento ("Betabel", 0.25, "pieza", 29, "gr"));
verduras.push (new Alimento ("Brocoli", 1.5, "taza", 92, "gr"));
verduras.push (new Alimento ("Calabaza", 1, "pieza", 60, "gr"));
verduras.push (new Alimento ("Cebolla", 0.66, "pieza", 53, "gr"));
verduras.push (new Alimento ("Cebolla en polvo", 2, "cucharadita", 5, "gr"));
verduras.push (new Alimento ("Champiñones", 1, "taza", 90, "gr"));
verduras.push (new Alimento ("Portobello", 1, "taza", 122, "gr"));
verduras.push (new Alimento ("Shiitake", 1, "pieza", 5, "gr"));
verduras.push (new Alimento ("Chayote", 1, "taza", 120, "gr"));
verduras.push (new Alimento ("Chicharos", 0.25, "taza", 40, "gr"));
verduras.push (new Alimento ("Chile poblano", null, null, 53, "gr"));
verduras.push (new Alimento ("Cilantro", 2, "taza", 120, "gr"));
verduras.push (new Alimento ("Coliflor", 0.5, "taza", 80, "gr"));
verduras.push (new Alimento ("Ejotes", 0.5, "taza", 63, "gr"));
verduras.push (new Alimento ("Esparragos", 6, "pieza", 90, "gr"));
verduras.push (new Alimento ("Espinaca", 2, "taza", 120, "gr"));
verduras.push (new Alimento ("Flor de calabaza", 1, "taza", 134, "gr"));
verduras.push (new Alimento ("Jicama", 0.5, "taza", 50, "gr"));
verduras.push (new Alimento ("Jitomate bola", null, null, 113, "gr"));
verduras.push (new Alimento ("Jitomate", null, null, 60, "gr"));
verduras.push (new Alimento ("Lechuga", 3, "taza", 135, "gr"));
verduras.push (new Alimento ("Nopales", 2, "pieza", 134, "gr"));
verduras.push (new Alimento ("Pepinillos ", 1, "taza", 177, "gr"));
verduras.push (new Alimento ("Pepino", 1, "taza", 180, "gr"));
verduras.push (new Alimento ("Perejil", 1, "taza", 60, "gr"));
verduras.push (new Alimento ("Pimiento", 1, "taza", 90, "gr"));
verduras.push (new Alimento ("Rabanos", 1, "taza", 117, "gr"));
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
cereales.push (new Alimento ("Cuscus", 0.33, "taza", 60, "gr"));
cereales.push (new Alimento ("Elote", 0.5, "taza", 83, "gr"));
cereales.push (new Alimento ("Espagueti", 0.33, "taza", 47, "gr"));
cereales.push (new Alimento ("Fecula de maiz", 2, "cucharadas", 16, "gr"));
cereales.push (new Alimento ("Fideo de arroz", 0.33, "taza", 60, "gr"));
cereales.push (new Alimento ("Fusili", 1, "taza", 56, "gr"));
cereales.push (new Alimento ("Galleta Maria", 5, "pieza", 20, "gr"));
cereales.push (new Alimento ("galleta Integla", 3, "pieza", 21, "gr"));
cereales.push (new Alimento ("Galleta Salada", 4, "pieza", 20, "gr"));
cereales.push (new Alimento ("Granola", 3, "cucharadas", 21, "gr"));
cereales.push (new Alimento ("Harina de maiz", 2, "cucharadas", 20, "gr"));
cereales.push (new Alimento ("Harina de trigo", 0.2, "taza", 20, "gr"));
cereales.push (new Alimento ("Hotcake", 1, "pieza", 40, "gr"));
cereales.push (new Alimento ("Palitos de Pan", 2, "pieza", 22, "gr"));
cereales.push (new Alimento ("Palomitas de maiz", 2, "taza", 36, "gr"));
cereales.push (new Alimento ("Pan 5 granos", 1, "pieza", 32, "gr"));
cereales.push (new Alimento ("Pan Blanco", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Pan Integral", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Pan Media Luna", 0.5, "pieza", 25, "gr"));
cereales.push (new Alimento ("Papa", 0.6, "pieza", 117, "gr"));
cereales.push (new Alimento ("Quinoa", 0.33, "taza", 70, "gr"));
cereales.push (new Alimento ("Tortilla de harina", 1, "pieza", 29, "gr"));
cereales.push (new Alimento ("Tortilla de maiz", 1, "pieza", 30, "gr"));
cereales.push (new Alimento ("Tostada", 1, "pieza", 24, "gr"));
cereales.push (new Alimento ("Wafle", 1, "pieza", 36, "gr"));
cereales.push (new Alimento ("Yuca", 0.2, "taza", 40, "gr"));

//Ingreso de OA

origenAnimal.push (new Alimento ("Arrachera de res", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Aton en lata", 0.33, "lata", 30, "gr"));
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
origenAnimal.push (new Alimento ("Jamon de pavo", 2, "rebanada", 42, "gr"));
origenAnimal.push (new Alimento ("Jamon de pierna", 2, "rebanada", 42, "gr"));
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
origenAnimal.push (new Alimento ("Salmon", null, null, 30, "gr"));
origenAnimal.push (new Alimento ("Sirloin de res", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Sirloin de cordero", null, null, 28, "gr"));
origenAnimal.push (new Alimento ("Surimi", null, null, 40, "gr"));
origenAnimal.push (new Alimento ("Ternera", null, null, 25, "gr"));
origenAnimal.push (new Alimento ("Trucha", 0.25, "rebanada", 30, "gr"));

//Ingreso de Azúcar

azucar.push (new Alimento ("Azucar de mesa", 2, "cucharadita", 8, "gr"));
azucar.push (new Alimento ("Azucar glass", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Azucar mascabado", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Azucar moren", 2, "cucharadita", 10, "gr"));
azucar.push (new Alimento ("Cacao", 2, "cucharada", 10, "gr"));
azucar.push (new Alimento ("Gelatina", 0.5, "taza", 70, "gr"));
azucar.push (new Alimento ("Gomitas", 10, "pieza", 15, "gr"));
azucar.push (new Alimento ("Helado de chocolate", 0.25, "taza", 35, "gr"));
azucar.push (new Alimento ("Helado de fresa", 0.25, "taza", 35, "gr"));
azucar.push (new Alimento ("Helado de vainilla", 0.33, "taza", 40, "gr"));
azucar.push (new Alimento ("Jarabe de maiz", 1, "cucharadita", 13, "gr"));
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
grasas.push (new Alimento ("Aceite de ajonjoli", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de canola", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de cartamo", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceite de oliva", 1, "cucharadita", 5, "ml"));
grasas.push (new Alimento ("Aceitunas", 5, "pieza", 32, "gr"));
grasas.push (new Alimento ("Aguacate", 0.33, "pieza", 31, "gr"));
grasas.push (new Alimento ("Ajonjoli", 4, "cucharadita", 10, "gr"));
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
grasas.push (new Alimento ("Piñon", 1, "cucharada", 10, "gr"));
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



//Función para porcionar alimento para Nutri


function porcionarAlimento () {
    grupoDeAlimento = parseInt (prompt ("Ingresa el número del grupo de alimentos \n\ 1: Frutas \n\ 2: Verduras \n\ 3: Cereales \n\ 4: Leguminosas \n\ 5: Origen animal \n\ 6: Lácteos \n\ 7: Azúcar \n\ 8: Grasas \n\ 0: Salir"));
    if (grupoDeAlimento === 1){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of frutas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso ();
            porcion.resultadoNutri ();
        }
        
    } else if (grupoDeAlimento === 2){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of verduras){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(verduras);
    } else if (grupoDeAlimento === 3){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of cereales){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(cereales);
    } else if (grupoDeAlimento === 4){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of leguminosas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(leguminosas);
    } else if (grupoDeAlimento === 5){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of origenAnimal){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(origenAnimal);
    } else if (grupoDeAlimento === 6){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of lacteos){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(lacteos);
    } else if (grupoDeAlimento === 7){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of azucar){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(azucar);
    } else if (grupoDeAlimento === 8){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción qué vas a mandar?"));
        for (const porcion of grasas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoNutri ();
        }
        console.table(grasas);
    } else {
        Bienvenida();
    }
}

//Función para porcionar alimento para Paciente

function porcionarAlimentoPaciente () {
    grupoDeAlimento = parseInt (prompt ("Ingresa el número del grupo de alimentos \n\ 1: Frutas \n\ 2: Verduras \n\ 3: Cereales \n\ 4: Leguminosas \n\ 5: Origen animal \n\ 6: Lácteos \n\ 7: Azúcar \n\ 8: Grasas \n\ 0: Salir"));
    if (grupoDeAlimento === 1){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of frutas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso ();
            porcion.resultadoPaciente ();
        }
        
    } else if (grupoDeAlimento === 2){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of verduras){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(verduras);
    } else if (grupoDeAlimento === 3){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of cereales){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(cereales);
    } else if (grupoDeAlimento === 4){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of leguminosas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(leguminosas);
    } else if (grupoDeAlimento === 5){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of origenAnimal){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(origenAnimal);
    } else if (grupoDeAlimento === 6){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of lacteos){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(lacteos);
    } else if (grupoDeAlimento === 7){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of azucar){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(azucar);
    } else if (grupoDeAlimento === 8){
        porcionIngresada = parseInt(prompt ("¿Cuál es la porción indicada por tu Nutri?"));
        for (const porcion of grasas){
            porcion.porcionarCantidad();
            porcion.porcionarPeso();
            porcion.resultadoPaciente ();
        }
        console.table(grasas);
    } else {
        Bienvenida();
    }
}

//Funciones para buscar un alimento 

function buscarAlimentosPaciente (){
    grupoDeAlimento = parseInt (prompt ("Ingresa el número del grupo de alimentos \n\ 1: Frutas \n\ 2: Verduras \n\ 3: Cereales \n\ 4: Leguminosas \n\ 5: Origen animal \n\ 6: Lácteos \n\ 7: Azúcar \n\ 8: Grasas \n\ 0: Salir"));
            if (grupoDeAlimento === 1){
                const frutaIngresada = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const frutaEncontrada = frutas.find (fruta => fruta.nombre.toLowerCase() == frutaIngresada);
                    if(frutaEncontrada) {
                    console.log (`Si quieres comer: ${frutaEncontrada.nombre}, la cantidad indicada por porción es: ${frutaEncontrada.cantidad} ${frutaEncontrada.medida} o ${frutaEncontrada.peso} ${frutaEncontrada.medidapeso}`);
                    const nuevoAlimento1 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento1 === 1) {
                            buscarAlimentosPaciente ();
                        } else {
                            alert ("Vuelve pronto");
                            Bienvenida ();
                        }
                    } else {
                    console.log(`Lo sentimos, ${frutaEncontrada} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento1 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento1 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    }      
            } else if (grupoDeAlimento === 2){ 
                const verduraIngresada = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const verduraEncontrada = verduras.find (verdura => verdura.nombre.toLowerCase() == verduraIngresada);
                    if(verduraEncontrada) {
                    console.log (`Si quieres comer: ${verduraEncontrada.nombre}, la cantidad indicada por porción es: ${verduraEncontrada.cantidad} ${verduraEncontrada.medida} o ${verduraEncontrada.peso} ${verduraEncontrada.medidapeso}`);
                    const nuevoAlimento2 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento2 === 1) {
                            buscarAlimentosPaciente ();
                        } else {
                            alert ("Vuelve pronto");
                            Bienvenida ();
                        }
                } else {
                    console.log(`Lo sentimos, ${verduraEncontrada} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento2 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento2 === 1) {
                            buscarAlimentosPaciente ();
                        } else {
                            alert ("Vuelve pronto");
                            Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 3){
                const cerealIngresado = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const cerealEncontrado = cereales.find (cereal => cereal.nombre.toLowerCase() == cerealIngresado);
                    if(cerealEncontrado) {
                    console.log (`Si quieres comer: ${cerealEncontrado.nombre}, la cantidad indicada por porción es: ${cerealEncontrado.cantidad} ${cerealEncontrado.medida} o ${cerealEncontrado.peso} ${cerealEncontrado.medidapeso}`);
                    const nuevoAlimento3 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento3 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                } else {
                    console.log(`Lo sentimos, ${cerealEncontrado} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento3 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento3 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 4){
                const leguminosaIngresada = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const leguminosaEncontrada = leguminosas.find (leguminosa => leguminosa.nombre.toLowerCase() == leguminosaIngresada);
                    if(leguminosaEncontrada) {
                    console.log (`Si quieres comer: ${leguminosaEncontrada.nombre}, la cantidad indicada por porción es: ${leguminosaEncontrada.cantidad} ${leguminosaEncontrada.medida} o ${leguminosaEncontrada.peso} ${leguminosaEncontrada.medidapeso}`);
                    const nuevoAlimento4 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento4 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                } else {
                    console.log(`Lo sentimos, ${leguminosaEncontrada} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento4 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento4 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 5){
                const origenAnimalIngresado = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const origenAnimalEncontrado = origenAnimal.find (origenAnimales => origenAnimales.nombre.toLowerCase() == origenAnimalIngresado);
                    if(origenAnimalEncontrado) {
                    console.log (`Si quieres comer: ${origenAnimalEncontrado.nombre}, la cantidad indicada por porción es: ${origenAnimalEncontrado.cantidad} ${origenAnimalEncontrado.medida} o ${origenAnimalEncontrado.peso} ${lorigenAnimalEncontrado.medidapeso}`);
                    const nuevoAlimento5 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento5 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                } else {
                    console.log(`Lo sentimos, ${origenAnimalEncontrado} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento5 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento5 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 6){
                const lacteoIngresado = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const lacteoEncontrado = lacteos.find (lacteo => lacteo.nombre.toLowerCase() == lacteoIngresado);
                    if(lacteoEncontrado) {
                    console.log (`Si quieres comer: ${lacteoEncontrado.nombre}, la cantidad indicada por porción es: ${lacteoEncontrado.cantidad} ${lacteoEncontrado.medida} o ${lacteoEncontrado.peso} ${lacteoEncontrado.medidapeso}`);
                    const nuevoAlimento6 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento6 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } else {
                    console.log(`Lo sentimos, ${lacteoEncontrado} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento6 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento6 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 7){
                const azucarIngresado = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const azucarEncontrado = azucar.find (azucares => azucares.nombre.toLowerCase() == azucarIngresado);
                    if(azucarEncontrado) {
                    console.log (`Si quieres comer: ${azucarEncontrado.nombre}, la cantidad indicada por porción es: ${azucarEncontrado.cantidad} ${azucarEncontrado.medida} o ${azucarEncontrado.peso} ${azucarEncontrado.medidapeso}`);
                    const nuevoAlimento7 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento7 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } else {
                    console.log(`Lo sentimos, ${azucarEncontrado} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento7 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento7 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else if (grupoDeAlimento === 8){
                const grasaIngresada = prompt("Ingresa el alimento que buscas:").toLowerCase();
                const grasaEncontrada = grasas.find (grasa => grasa.nombre.toLowerCase() == grasaIngresada);
                    if(grasaEncontrada) {
                    console.log (`Si quieres comer: ${grasaEncontrada.nombre}, la cantidad indicada por porción es: ${grasaEncontrada.cantidad} ${grasaEncontrada.medida} o ${agrasaEncontrada.peso} ${grasaEncontrada.medidapeso}`);
                    const nuevoAlimento8 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(nuevoAlimento8 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } else {
                    console.log(`Lo sentimos, ${grasaEncontrada} aun no está en el sistema, contacta a tu Nutriologa`);
                    const noEncontradoNuevoAlimento8 = parseInt (prompt ("¿Deseas buscar otro alimento? \n\ 1: Sí \n\ 2: No "));
                        if(noEncontradoNuevoAlimento8 === 1) {
                        buscarAlimentosPaciente ();
                        } else {
                        alert ("Vuelve pronto");
                        Bienvenida ();
                        }
                    } 
            } else {
                alert ("Vuelve pronto");
                Bienvenida();
            }
}

//Funciones para agregar un nuevo alimento Nutri

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

//Modo de usos para Paciente

function modoDeUsoNutri (){
    let modalidad = parseInt (prompt(" "+"1: Agregar un nuevo alimento a tu conversor ingresa \n\ 2: Saber qué cantidades mandar a tus pacientes ingresa \n\ 0: Salir"));
    if (modalidad === 0){
        Bienvenida();
    } else if (modalidad === 2) {
        porcionarAlimentoPaciente ();
    }else if (modalidad === 1){
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

//Modo de usos para Nutriologa 

function modoDeUsoPaciente (){
    let modalidad = parseInt (prompt(" "+"1: Saber tus porciones para cada alimento \n\ 2: Buscar un alimento y conocer cantidades por porción \n\ 0: Salir"));
    if (modalidad === 0){
        Bienvenida();
    } else if (modalidad === 2) {
        buscarAlimentosPaciente();
    } else if (modalidad === 1){
        porcionarAlimentoPaciente();
    }   
}

//Funcion de bienvenida 

function Bienvenida () {
    tipoDeUsuario = parseFloat(prompt("Qué tipo de usuario eres? \n\ 1: Nutriologa \n\ 2: Paciente"))
    if (tipoDeUsuario == 1){
        alert ("Bienvenido a tu conversor de alimentos, Nutri");
        modoDeUsoNutri();
    } else if (tipoDeUsuario == 2){
        alert ("Hola Paciente, aquí podrás ver grupos de alimentos o alimentos específicos y saber la porción adecuada de acuerdo a lo que Nutrióloga te mandó");
        modoDeUsoPaciente();
    } else {
        while (tipoDeUsuario != 1 || tipoDeUsuario !=2) {
            tipoDeUsuario = parseFloat(prompt("Qué tipo de usuario eres? \n\ 1: Nutriologa \n\ 2: Paciente"));
        }
    }

}

//Comienza a correr el programa

Bienvenida();









