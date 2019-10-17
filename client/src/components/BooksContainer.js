import React from "react";

function BooksContainer(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="card-title">{props.title} by {props.authors}</h1>
                    </div>
                    <div className="col-md-3">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <a href={props.link} className="card-text">Check the book on Google Books</a>
                </div>
                <div className="row">
                    <p className="card-text">{props.description}</p>
                </div>
                <button className="card-link btn-primary"  onClick={() => props.saveBook(props)}>Save</button>
            </div>
        </div>

    )
}

export default BooksContainer;