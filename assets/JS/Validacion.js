//Names que necesito NombreCompra, Categoria, PrecioCompra
const formulario=document.querySelector('form')
formulario.addEventListener('submit', function(event){
const datos=new FormData(formulario)
var NombreCompra=datos.get('NombreCompra')
var Categoria=datos.get('Categoria')
var PrecioCompra=datos.get('PrecioCompra')
var mensaje=`La compra que hizo fue ${NombreCompra} la categoria fue ${Categoria} y gasto ${PrecioCompra} pesos`
alert(mensaje)
})