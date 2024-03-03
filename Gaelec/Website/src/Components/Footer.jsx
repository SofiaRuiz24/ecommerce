import correo from './../assets/envio1.png'
import callcenter from './../assets/callcenter.png'
import logoGaelec from './../assets/logoGaelecMaterElec.png'
import logoInstagram from './../assets/logoInsta.png'
import logoFacebook from './../assets/logoFacebook.png'

export function Footer () {
  return (
    <footer>
      <div id='contacto'>
        <h3>Recibe nuestro catalogo</h3>
        <div id='correo'>
          <h4>Correo electrónico</h4>
          <img src={correo} alt='Icono de enviar' />
        </div>
        <div className='informacion'>
          <img src={callcenter} alt='Icono de llamadas' />
          <h4>Llámanos al (+54 9) 2615 901475</h4>
        </div>
      </div>
      <section className='footer-section'>
        <div id='redes'>
          <img src={logoGaelec} alt='Logo Gaelec Materiales Eléctricos' />
          <h3>Valentin Alsina 534,<br /> Dorrego Guaymallen Mendoza.</h3>
          <div id='imgRedes'>
            <a href='https://www.instagram.com/GaelecMaterialeselectricos/' target='_blank' rel='noreferrer'>
              <img src={logoInstagram} alt='Icono de Instagram' />
            </a>
            <a href='https://facebook.com/GaelecMaterialeselectricos' target='_blank' rel='noreferrer'>
              <img src={logoFacebook} alt='Icono de Facebook' />
            </a>
            <a href='https://wa.me/message/WNA2DAIUBEXOG1' target='_blank' rel='noreferrer'>
              <img src={callcenter} alt='Icono de WhatsApp' />
            </a>
          </div>
        </div>
        <div className='help-card'>
          <h4>¿Necesita Ayuda?</h4>
          <ul id='ayuda'>
            <li>Sobre Nosotros</li>
            <li>Contáctenos</li>
            <li>Políticas de Devoluciones</li>
            <li>Políticas de Privacidad</li>
            <li>Políticas de Pago</li>
          </ul>
        </div>
        {/* <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.2871359899455!2d-68.835978824848!3d-32.9170111703915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095de84883db%3A0xabbfd01f518e1854!2sValent%C3%ADn%20Alsina%20534%2C%20M5519%20Mendoza!5e0!3m2!1ses-419!2sar!4v1698954069337!5m2!1ses-419!2sar' width='300' height='250' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
        */}
      </section>
    </footer>
  )
}
