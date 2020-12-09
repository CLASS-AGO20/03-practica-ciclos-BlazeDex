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

    obtenerDivisibles(numero) {
        let i = numero;
        let counter = 0;
        let r = numero;
         do {
             if(r % i === 0) {
                 counter = counter + 1;
             }
             i--;
         } while(i >= 1)
         return counter;
    }

    elevar(numero, potencia) {
        let m = 1;

        for(let i = 1; i <= potencia; i++) {
            m = m * numero;
        }
        return m;
    }












}

let app = new App();
console.log("Probando: factorial()");
console.log(app.factorial(4));
console.log("Probando: convertirAString()");
console.log(app.convertirAString(6));
console.log("Probando: obtenerDivisibles()");
console.log(app.obtenerDivisibles(10));
console.log("Probando: elevar()");
console.log(app.elevar(2, 4));
