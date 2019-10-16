import React from "react";

function BooksContainer(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="card-title">{props.title}</h1>
                        <h3 className="card-subtitle mb-2 text-muted">by {props.author}</h3>
                    </div>
                    <div className="col-md-3">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <a href={props.link} className="card-text">Check the book on Google Books</a>
                </div>
             
                <div className="row">
                    <p className="card-text">{props.synopsis}</p>
                </div>
                <button className="card-link btn-primary" onClick={() => props.deleteBook(props)}>Delete</button>
            </div>
        </div>
        
    )
}

export default BooksContainer;




