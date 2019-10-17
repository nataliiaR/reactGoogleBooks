import React from "react";
import API from "../utils/API";
import SavedContainer from "../components/SavedContainer";



class SavedBooks extends React.Component {

    state = {
        books: [],
        title: "",
        authors: "",
        description: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data, title: "", authors: "", description: "" }))
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        console.log(id)
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Books in your library </h1>
                    {this.state.books.map(book => (
                        <div className="row" key={book._id}>
                            <div className="col-md-12">
                                <SavedContainer
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    id={book._id}
                                    link={book.link}
                                    image={book.image}
                                    deleteBook={this.deleteBook}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SavedBooks;