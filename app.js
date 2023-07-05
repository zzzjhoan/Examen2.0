let cantidad=document.querySelector("#cantidad");
let vc=document.querySelector("#vcan")

cantidad.oninput=()=>{vc.innerHTML=cantidad.value;calcular();}

const calcular=()=>{
  var precioC=document.querySelector("#precioC")
    var producto=document.querySelector("#producto").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#precio")
    var cantidad=document.querySelector("#cantidad")
    var precioCr=document.querySelector("#extras")
    var uno=document.querySelector("#refresco");
    var dos=document.querySelector("#papas");
    var tres=document.querySelector("#alitas");
    var vc=document.querySelector("#vcan")
    var costo=0;
    var plazo=0;
    var aumento=0;
    var can=parseInt(cantidad.value)
    img.innerHTML=`<img src="img/${producto}.jpg" width="400">`;
    switch(producto){
        case "individual":costo=100;break;
        case "grande":costo=120;break;
        case "familiar":costo=150;break;
        case "jumbo":costo=180;break;

    }
    
    if (uno.checked){
      plazo=3;
      aumento+=40;
    }
    if(dos.checked){
      plazo=3;
      aumento+=50;
    }
    if(tres.checked){
      plazo=3;
      aumento+=70;
    }
    
    var contado=costo*can;
    var cr=contado+aumento;
precio.innerHTML=`<h3>Precio: $${costo.toFixed(2)} MXN</h3>`
precioCr.innerHTML=`<h3>EXTRAS $${cr.toFixed(2)} MXN</h3>`
precioC.innerHTML=`<h3>TOTAL $${cr.toFixed(2)} MXN</h3>`
}