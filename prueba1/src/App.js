import '/App.css';
import tarjeta from './tarjetaPerfil';

function App(){
  return(
    <div>
      <h1>Lista de Perfiles</h1>
      <tarjeta nombre= "Ana" edad={29} ocupacion="Diseño UX"/>
    </div>
  )
}

export default App;