import calidad from './../assets/Calidad.png'
import garantia from './../assets/Garantia.png'
import delivery from './../assets/Delivery.png'

export function Banner () {
  return (
    <div id='beneficios'>
      <div className='cardBeneficio'>
        <img src={calidad} alt='Icono corona' />
        <p><b>Calidad Garantizada</b> <br /> al mejor precio </p>
      </div>
      <div className='cardBeneficio'>
        <img src={garantia} alt='Icono cerradura' />
        <p><b>Garantía de Fabrica</b> <br /> por 6 meses</p>
      </div>
      <div className='cardBeneficio'>
        <img src={delivery} alt='Icono caja con tilde' />
        <p><b>Delivery sin costo</b> <br /> desde $30.000 </p>
      </div>
    </div>
  )
}
