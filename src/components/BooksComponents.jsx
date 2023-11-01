import React from 'react'

const BooksComponents = ({item}) => {
    return (
        <div className="lib-container">
            <div className="lib">
                <div className="">Title</div>
                <div className="">{item.title}</div>
            </div>
            <div className="lib">
                <div className="">Author</div>
                <div className="">{item.author}</div>
            </div>
            <div className="lib">
                <div className="">Price</div>
                <div className="">{item.price}</div>
            </div>
            <div className="lib">
                <div className="">Stock</div>
                <div className="">{item.stock}</div>
            </div>
            <div className="lib">
                <div className="">Available</div>
                <div className="">{item.aval ? 'In Stock' : 'out of Stock'}</div>
            </div>
        </div>
    )
}

export default BooksComponents