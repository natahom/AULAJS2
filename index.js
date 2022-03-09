class Retangulo{
  constructor(altura,largura){
     this.altura= altura,
     this.largura = largura
  }
  
 calcularArea(){
   return this.altura * this.largura;
   
 }

  area(){
   return this.calcularArea()
  }
  
}


let retagulo = new Retangulo("400","200")
let retangulo = new Retangulo("10","10")
let retangule = new Retangulo("60","30")

console.log(retangulo.altura)
console.log(retangulo.largura)
console.log(retangule.altura)
console.log(retangule.largura)
console.log(retangulo.area())
console.log(retangule.area())
console.log(retagulo.area())


