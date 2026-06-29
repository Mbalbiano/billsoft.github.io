const formulario = document.querySelector(".formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const datos = new FormData(formulario);

        let NombreCompra = datos.get("NombreCompra");
        let Categoria = datos.get("Categoria");
        let PrecioCompra = datos.get("PrecioCompra");

        let mensaje = `La compra que hizo fue ${NombreCompra}, la categoría fue ${Categoria} y gastó ${PrecioCompra} pesos`;

        alert(mensaje);
    });
}

const formulario2 = document.querySelector(".formulario2");

if (formulario2) {
    formulario2.addEventListener("submit", function(event){
        event.preventDefault();

        const datos2 = new FormData(formulario2);

        let nombre = datos2.get("Nombre");
        let apellido = datos2.get("Apellido");
        let email = datos2.get("Email");
        let contraseña = datos2.get("Contraseña");
        let confirmacion = datos2.get("Confirmacion");
        const mensaje="Registro exitoso"
    
    if(contraseña!==confirmacion){
        alert("Las contraseñas no coinciden")
    }
    else{
        alert(mensaje)
        formulario2.reset()
        window.location.href="../seccion/IngresoGasto.html"
    }
    });
}
const formulario3=document.querySelector('.formulario3')
if (formulario3){
    formulario3.addEventListener("submit", function(event){
        event.preventDefault();
        const datos3= new FormData(formulario3)
        let email2=datos3.get('Email2')
        let contraseña2=datos3.get('Contraseña2')
        const mensaje=`Usuario logueado`
        alert(mensaje)
        formulario3.reset()
        window.location.href="../seccion/IngresoGasto.html"
        
    })
}