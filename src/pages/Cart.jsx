import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromcart } from '../redux/slice/cartSlice'


function Cart() {

const[total,SetTotal] = useState(0)

const cartArray = useSelector((state=>state.cartReducer))
console.log(cartArray);

const dispatch = useDispatch()

const navigate = useNavigate()
const handleCart =()=>{
  alert('your order placed successfully')
  dispatch(emptyCart())
  navigate('/')
}

const getTotal = ()=>{
  if(cartArray.length>0){
   SetTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else{
    SetTotal(0)
  }
}

useEffect(()=>{
getTotal()
},[cartArray])

  return (
    <>
    <Row className='my-5 w-100'>
      
      <Col md={1}>
        
      </Col >
      <Col md={6}>
      <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        cartArray?.length>0?
         
        <tbody>
       {cartArray.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img style={{width:'150px',height:'150px'}} src={item.thumbnail} alt="" /></td>
            <td>{item.price}</td>
            <td><Button variant="outline-danger" className='rounded-4' onClick={()=>dispatch(removeFromcart(item.id))}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></Button></td>
          </tr>
          
        ))
      }   
          
           </tbody>
            :  
        <div style={{width:'100%',height:'80vh',flexDirection:'column'}} className='ms-5 d-flex justify-content-center align-items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU" alt="" />

        <Link to="/">
        <Button className='btn rounded bg-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' style={{flexDirection:'column'}}  />Back to Home </Button>
        </Link>
      </div>
      
     
    }
     
    </Table>
      </Col>
      <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '450px' ,height:'200px'}} className='border shadow p-3 my-5'>
      <Card.Body>
        <Card.Title><h3>Cart Summary</h3> </Card.Title>
        <Card.Text>
          <h5>Total Number of Products: <span className='text-warning'>{cartArray.length}</span></h5>
          <h5>Total Price: $<span className='text-warning'>{total}</span></h5>
          
        </Card.Text>
        <Button className='border rounded d-fle' variant="success" onClick={handleCart}>CheckOut</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col Col md={1}>
        
      </Col>
    </Row>

    
    </>
  )
}

export default Cart