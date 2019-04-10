import React from 'react'
import {Button} from 'react-bootstrap';
import {Link } from "react-router-dom"

class ProductDetailsTab extends React.Component
{
    render()
    {
        console.log(this.props.product)
        return(
            <tr>
            <th> {this.props.product.locations[0].barCodeLocation}</th>
            <th> {this.props.product.exprDate}</th>
            <th> {this.props.product.state}</th>
            </tr>
        )

    }

}

export default ProductDetailsTab