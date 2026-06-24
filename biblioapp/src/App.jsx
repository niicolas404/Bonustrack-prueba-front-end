import './App.css'
import libros from './data/libros.js'
import ListaLibros from './components/ListaLibros.jsx'

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Biblioteca</p>
          <h1>Listado de libros</h1>
          <p className="app__subtitle">Aquí se muestra solo la información de los libros desde el array de datos.</p>
        </div>
      </header>

      <ListaLibros libros={libros} />
    </main>
  )
}

export default App
