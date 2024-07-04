import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwishList } from '../redux/slice/wishlistslice';
import { addTocart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

function Wishlist() {

  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(WishlistArray);
 const dispatch = useDispatch()

 const  handleCart =(item)=>{
  dispatch(removeFromwishList(item.id))
  dispatch(addTocart(item))
 }

  return (
    <>
    {WishlistArray?.length>0 ?<Row className='w-100 mt-3 p-3'>
      {WishlistArray.map((item)=>(
<Col sm={12} md={4} lg={3} className='d-flex mt-3 justify-content-center p-3'>
      <Card style={{ width: '100%' }} className='border shadow rounded-3'>
      <Card.Img variant="top" className='w-100' style={{height:'250px'}} src={item.thumbnail} />
      <Card.Body>
        <Card.Title className='text-center'>{item.title}</Card.Title>
      <Card.Text>
          <p className='text-center'>{item.price}</p>
        </Card.Text>
       <div className='d-flex justify-content-between'>
       <Button variant="danger"  onClick={()=>dispatch(removeFromwishList(item.id))}><FontAwesomeIcon icon={faTrash}/></Button>
       <Button variant="success" onClick={()=>handleCart(item)}><FontAwesomeIcon icon={faCartShopping}/></Button>
       </div>
      </Card.Body>  
    </Card>
      </Col>
      ))
        }
    </Row>
:
    <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
      <Link to="/">
      <button className='btn btn-primary mt-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2 '/>Back to Home</button></Link>
    </div>}
    </>
  )
}

export default Wishlist