export default class App {
    factorial(numero) {        
        let r = 1;
        for(let i = numero; i > 0; i--) {
            r = r * i;
        }
        return r;
    }












}

let app = new App();
console.log("Probando: factorial()");
console.log(app.factorial(4));

