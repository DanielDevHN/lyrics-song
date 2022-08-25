import useLetras from "../hooks/useLetras"

const Letra = () => {

    const { letra, cargando } = useLetras()

  return (
    cargando ? 'Cargando letras...' :
    <div className="letra">{letra}</div>
  )
}

export default Letra
