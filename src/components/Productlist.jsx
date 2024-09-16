import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Productlist() {
  const [products, setproducts] = useState([])
  const fetchdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    setproducts(response.data)
  }
  useEffect(() => {
    fetchdata()
  }, [products])
  return (
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:"center",gap:"20px"}}>
      {products.map(el=>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={el.image} />
         <Card.Body>
           <Card.Title>
            {el.title}
           </Card.Title>
           <Card.Text>
             {el.category}
           </Card.Text>
           
           <Card.Text>
             {el.price}$
           </Card.Text>
           <Link to={"/details/"+el.id}>
           check details
           </Link>
         </Card.Body>
       </Card>
      ) }
    </div>
  )
}

export default Productlist