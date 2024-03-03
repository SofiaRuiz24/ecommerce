import aurora from './../assets/aurora.jpeg'
import cableUnipolar from './../assets/Cableunipolar.png'
import lamparaDia from './../assets/LamparaDia.png'
import llavesJeluz from './../assets/LlavesJeluz.png'

export function Portada () {
  return (
    <>
      <section id='portada'>
        <img src={aurora} alt='Portada Aurora Guirnaldas Led' />
      </section>
      <section id='categorias'>
        <div className='cardCateg'>
          <img src={cableUnipolar} alt='Tres rollos de cable unipolar' />
          <p><b>Cables Unipolares</b><br />(8 productos)</p>
        </div>
        <div className='cardCateg'>
          <img src={lamparaDia} alt='Lamparas Jaula Diamante Blanca y Negra' />
          <p><b>Lamparas Colgantes</b><br />(12 productos)</p>
        </div>
        <div className='cardCateg'>
          <img src={llavesJeluz} alt='Llaves de Luz Embutir marca Jeluz' />
          <p><b>Llaves Jeluz</b><br />(16 productos)</p>
        </div>
      </section>
    </>
  )
}
