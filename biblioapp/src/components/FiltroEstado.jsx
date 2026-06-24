function FiltroEstado({ selected, onChange }) {
  const opciones = ['todos', 'disponible', 'prestado', 'reservado']

  return (
    <div className="filtro-estado">
      {opciones.map((estado) => (
        <button
          key={estado}
          type="button"
          className={`filtro-estado__item ${estado === selected ? 'filtro-estado__item--active' : ''}`}
          onClick={() => onChange(estado)}
        >
          {estado}
        </button>
      ))}
    </div>
  )
}

export default FiltroEstado
