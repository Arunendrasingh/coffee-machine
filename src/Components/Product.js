import React from 'react'

export default function Product(props) {
    let {title, price} = props
    return (
        <div className="col-md-4 my-4">
            <div className="card border-0">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3">
                        <img src={require('../assets/black_coffee.jpg')} className="card-image" alt="..." />
                    </div>
                    <div className="col-6">
                        <a href="/">
                            <div className="card-body ms-3">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <p className="card-text text-danger">${price}</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/" className="btn btn-primary">Go</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
