import React, { Component } from 'react';
import hombre from '../assets/img/man.jpg';
import '../styles/section.css';
import  img1 from '../assets/img/img1.jpg';
import  img2 from '../assets/img/img2.jpg';
import  img3 from '../assets/img/img3.jpg';
import  img4 from '../assets/img/img4.jpg';
import  img5 from '../assets/img/img5.jpg';
import  img6 from '../assets/img/img6.jpg';





export default class Section extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                       <img src={hombre} alt="welcome" className="img-section"/>
                    </div>
                    <div className="col-md-6">
                        <div className="texto-section">
                        <p>BIENVENIDOS </p>
                         <p> A LA IGLESIA CRISTIANA MARANATHA EN GLORIA</p>
                        <p>¡TU CASA, TU FAMILIA!</p>
                        </div>
                    </div>

                    <div className="our-service">
                    <h1 className='text-center py-4'>Nuestros Servicios</h1>

                        <div className="section-container">
                            <div className='section-wraper'>
                              <h3>Martes</h3>
                              <p>Lorem ipsum dolor sit amet. </p>
                              <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='section-wraper'>
                              <h3>viernes</h3>
                              <p>Lorem ipsum dolor sit amet. </p>
                              <p>Lorem, ipsum dolor.</p>
                              </div>

                              <div className='section-wraper'>
                        
                             <h3>Sabados</h3>
                            <p>Lorem ipsum dolor sit amet. </p>
                                <p>Lorem, ipsum dolor.</p>
                           </div>
                           <div className='section-wraper'>
                           
                                <h3>Domingos</h3>
                                <p>Lorem ipsum dolor sit amet. </p>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>


                    <div className='py-5'>
                    <h2 className='text-one text-primary text-center mb-4'>ULTIMAS PREDICAS</h2>
                    <div>
                        <div>

                        <img className='img-cont' src={img1} alt=""/>
                        <img className='img-cont' src={img2} alt=""/>
                        <img className='img-cont' src={img3} alt=""/>

                        </div>

                        <div>
                        <img className='img-cont' src={img4} alt=""/>
                        <img className='img-cont' src={img5} alt=""/>
                        <img className='img-cont' src={img6} alt=""/>

                        </div>
                    <button className='btn btn-primary'>VER MAS PREDICAS</button>


                    </div>

                    </div>

                    <div className='py-5 '>
                    <h2 className='text-two text-primary text-center mb-4'>NUESTRA MUSICA</h2>
                         <div>
                       <img className='img-cont' src={img1} alt=""/>
                        <img className='img-cont' src={img2} alt=""/>
                        <img className='img-cont' src={img3} alt=""/>

                        </div>

                        <div>
                        <img className='img-cont' src={img4} alt=""/>
                        <img className='img-cont' src={img5} alt=""/>
                        <img className='img-cont' src={img6} alt=""/>

                        </div>
                 
                    <button className='btn btn-primary'>VER MAS VIDEOS</button>
                   
                    
                    </div>

                    </div>     


               

            </div>

            
        )
    }
}
