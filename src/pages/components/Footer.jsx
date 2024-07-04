import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="row  bg-primary" >
        <div className="col-md-1"></div>
        <div className="col-md-3">
           
             <h3 className='me-3 text-white ' ><FontAwesomeIcon className='mt-3 text-dark me-3 ' icon={faCartShopping} beat={2} />Ecart</h3>
             <p style={{textAlign:'justify',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quod inventore aliquam eaque minima neque libero ad voluptas quos eius excepturi </p>
           
        </div>
        <div className="col-md-2 d-md-flex justify-content-center p-4 ">
           <div >
           <h4 className='text-white'>Links</h4>
           <p  ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link></p>
           <p><Link to={'/wishlist'}  style={{textDecoration:'none',color:'white'}}>Wishlist</Link></p>
           <p> <Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}>Cart</Link></p>
           </div>
       
       </div>
       <div className="col-md-2 d-md-flex justify-content-center p-4 ">
           <div >
           <h4 className='text-white'>Guides</h4>
           <p  style={{textDecoration:'none',color:'white'}}>React</p>
           <p style={{textDecoration:'none',color:'white'}}>React Bootstrap</p>
           <p style={{textDecoration:'none',color:'white'}}>Bootswatch</p>
           </div>
       
       </div>
        <div className="col-md-3  justify-content-center p-4 ">
        <h4 className='text-white'>Contact us</h4>
        <div className='d-flex mt-4'>
        <input type="text" className='form-control' placeholder='Email ID' />
           <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between">
           <FontAwesomeIcon className='' icon={faInstagram} size='2xl' />
           <FontAwesomeIcon icon={faFacebook} size='2xl' />
           <FontAwesomeIcon icon={faTwitter} size='2xl'/>
           <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
           </div>
        </div>

        <div className="col-md-1"></div>
        <div className='d-flex justify-content-center align-items-center'>
    <p className='text-white'>Copyright © 2023 E-Cart. Build with React.</p>
   </div>
    </div>
    </>
  )
}

export default Footer