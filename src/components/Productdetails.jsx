import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const [product, setproduct] = useState({})
    const {id} = useParams()
    const fetchdata = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/"+id)
        console.log(response)
        setproduct(response.data)
    }
    useEffect(() => {
        fetchdata()
    }, [product])

    return (
        <div>
<div style={{ width: '80%', display:'flex' }}>
    <Card.Body>
    <Card.Img variant="top" src={product.image} />
    </Card.Body>
         <Card.Body>
           <Card.Title>
            {product.title}
           </Card.Title>
           <Card.Text>
             {product.category}
           </Card.Text>
           <Card.Text>
             {product.description}
           </Card.Text>
           <Card.Text>
             {product.price}$
           </Card.Text>
         </Card.Body>
       </div>
        </div>
    )
}

export default Productdetails