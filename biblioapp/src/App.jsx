import { useState } from 'react'
import './App.css'
import libros from './data/libros.js'
import FiltroEstado from './components/FiltroEstado.jsx'
import ListaLibros from './components/ListaLibros.jsx'

const normalizeText = (value) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')

function App() {
  const [estadoFiltro, setEstadoFiltro] = useState('todos')
  const [textoBusqueda, setTextoBusqueda] = useState('')

  const terminoBusqueda = normalizeText(textoBusqueda)

  const librosFiltrados = libros.filter((libro) => {
    const tituloNormalizado = normalizeText(libro.titulo)
    const autoresNormalizados = normalizeText(libro.autores.join(' '))
    const estadoNormalizado = normalizeText(libro.estado)

    const cumpleFiltroEstado =
      estadoFiltro === 'todos' || estadoNormalizado === estadoFiltro
    const cumpleBusqueda =
      !terminoBusqueda ||
      tituloNormalizado.includes(terminoBusqueda) ||
      autoresNormalizados.includes(terminoBusqueda)

    return cumpleFiltroEstado && cumpleBusqueda
  })

  return (
    <main className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Biblioteca</p>
          <h1>Listado de libros</h1>
          <p className="app__subtitle">
            Aquí se muestra solo la información de los libros desde el array de datos.
          </p>
        </div>
      </header>

      <section className="app__controls">
        <label className="app__search-label">
          Buscar por título o autor
          <input
            type="search"
            className="app__search"
            value={textoBusqueda}
            onChange={(event) => setTextoBusqueda(event.target.value)}
            placeholder="Escribe título o autor"
          />
        </label>

        <FiltroEstado selected={estadoFiltro} onChange={setEstadoFiltro} />
      </section>

      {librosFiltrados.length > 0 ? (
        <ListaLibros libros={librosFiltrados} />
      ) : (
        <p className="app__empty">No hay libros que coincidan</p>
      )}
    </main>
  )
}

export default App
