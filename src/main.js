export default class App {
    factorial(numero) {        
        let r = 1;
        for(let i = numero; i > 0; i--) {
            r = r * i;
        }
        return r;
    }

    convertirAString(numero) {
        let i = 1;
        let string = "";
        
        while(i <= numero){
            string = "*" +  string;

            i++;
        }
        return string;

    }












}

let app = new App();
console.log("Probando: factorial()");
console.log(app.factorial(4));
console.log("Probando: convertirAString()");
console.log(app.convertirAString(6));
