import PropTypes from 'prop-types'

function LibroCrad({ titulo, editorial, anio, estado, resumen, autores, esNovedad }) {
  return (
    <article className={`book-card ${esNovedad ? 'book-card--new' : ''}`}>
      {esNovedad && <span className="book-card__badge book-card__badge--nuevo">Nuevo</span>}

      <div className="book-card__top">
        <h2>{titulo}</h2>
        <span className={`book-card__status book-card__status--${estado.toLowerCase()}`}>
          {estado}
        </span>
      </div>

      <p className="book-card__meta">
        <strong>Autor{autores.length > 1 ? 'es' : ''}:</strong> {autores.join(', ')}
      </p>

      <p className="book-card__meta">
        <strong>Editorial:</strong> {editorial} · <strong>Año:</strong> {anio}
      </p>

      <p className="book-card__summary">{resumen}</p>
    </article>
  )
}

LibroCrad.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
  resumen: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string),
  esNovedad: PropTypes.bool,
}

LibroCrad.defaultProps = {
  titulo: 'Título no disponible',
  editorial: 'Editorial desconocida',
  anio: 'N/D',
  estado: 'Reservado',
  resumen: 'Resumen no disponible.',
  autores: ['Autor desconocido'],
  esNovedad: false,
}

export default LibroCrad
