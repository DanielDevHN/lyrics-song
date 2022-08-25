import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"


const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras()


  return (
    <div>
        <>
            <header>Busqueda de Letas de Canciones</header>

            <Formulario />

            <main>
                {alerta ? <Alerta>{alerta}</Alerta> : 
                    letra ? <Letra/> : 
                    cargando ? 'Cargando letras...' :
                    <p className="text-center">
                        Busca letras de tus artistas favoritos
                    </p> 
                }
            </main>
        </>
      
    </div>
  )
}

export default AppLetras
