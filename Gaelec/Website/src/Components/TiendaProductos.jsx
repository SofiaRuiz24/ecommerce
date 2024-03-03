import reflector30 from './../assets/Reflec30.png'
import panel6w from './../assets/Panel6w.png'
import hiPower40 from './../assets/Hipower40.png'
import guirnalda10 from './../assets/guirnalda10.png'

export function TiendaProductos () {
  return (
    <section className='productosRiel'>
      <h3>Ultimas Entradas</h3>
      <div id='rielProd'>
        <div className='cardProduct'>
          <img src={reflector30} alt='Producto Reflector Led 30w' />
          <p><b>Reflector Led 30w</b></p>
          <p>$2560</p>
          <button>Agregar al Carro</button>
        </div>
        <div className='cardProduct'>
          <img src={panel6w} alt='Producto Panel Led Cuadrado Aplicar 6w' />
          <p><b>Panel Led Aplicar 6w</b></p>
          <p>$3200</p>
          <button>Agregar al Carro</button>
        </div>
        <div className='cardProduct'>
          <img src={hiPower40} alt='Producto Hi Power 40w' />
          <p><b>Hi Power 40w</b></p>
          <p>$4900</p>
          <button>Agregar al Carro</button>
        </div>
        <div className='cardProduct'>
          <img src={guirnalda10} alt='Producto Guirnalda Led 10mts' />
          <p><b>Guirnalda Led 10mts</b></p>
          <p>$3600</p>
          <button>Agregar al Carro</button>
        </div>
      </div>
    </section>
  )
}
