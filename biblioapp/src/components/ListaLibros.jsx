import LibroCrad from './LibroCrad.jsx'

function ListaLibros({ libros }) {
  return (
    <section className="book-list">
      {libros.map((libro) => (
        <LibroCrad
          key={libro.id}
          titulo={libro.titulo}
          editorial={libro.editorial}
          anio={libro.anio}
          estado={libro.estado}
          resumen={libro.resumen}
          autores={libro.autores}
          esNovedad={libro.esNovedad}
        />
      ))}
    </section>
  )
}

export default ListaLibros
