function tarjeta({nombre, edad, ocupacion}){
    return(
        <div>
            <h1>{nombre}</h1>
            <p>Edad: {edad}</p>
            <p>Ocupacion: {ocupacion}</p>
            {ocupacion === "Diseñadora UX" && <p>!Diseñadora del mes¡</p>}
        </div>
    )
}
export default tarjeta;