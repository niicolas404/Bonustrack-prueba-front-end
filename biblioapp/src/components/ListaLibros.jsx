function ListaLibros({ libros }) {
  return (
    <section className="book-list">
      {libros.map((libro) => (
        <article key={libro.id} className="book-card">
          <div className="book-card__top">
            <h2>{libro.titulo}</h2>
            <span className={`book-card__status book-card__status--${libro.estado.toLowerCase()}`}>
              {libro.estado}
            </span>
          </div>
          <p className="book-card__meta">
            <strong>Autor{libro.autores.length > 1 ? 'es' : ''}:</strong> {libro.autores.join(', ')}
          </p>
          <p className="book-card__meta">
            <strong>Editorial:</strong> {libro.editorial} · <strong>Año:</strong> {libro.anio}
          </p>
          <p className="book-card__summary">{libro.resumen}</p>
          {libro.esNovedad && <span className="book-card__badge">Novedad</span>}
        </article>
      ))}
    </section>
  )
}

export default ListaLibros
