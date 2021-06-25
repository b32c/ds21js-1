class nodo{
constructor (dato, siguiente){
    this.dato=dato;
    this.siguiente=siguiente;
    }
}
    class listaE{
        constructor(){
            this.inicio=null;
            this.tamaño=0;
        }
    }
    agregar(dato){
        let nuevoNodo = Newnodo(dato,null)
        if(!this.inicio){
            this.inicio=nuevoNodo;
        }
        else{
            let actual=this.inicio;
            while(actual.siguiente){
                actual=actual.siguiente;
            }
            actual.siguiente=nuevoNodo;
        }
    
        this.tamaño++;
    }

let lista=newListaE;
console.log (listaE);
lista.agregar(10);
lista.agregar(5);