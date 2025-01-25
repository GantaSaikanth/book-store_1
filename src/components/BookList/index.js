import { Component } from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class BookList extends Component {
    state = {bookLists: [], apiStatus: apiStatusConstants.initial}

    componentDidMount() {
        this.getBooksList()
    }

    getBooksList = async () => {
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const url = "https://api.itbook.store/1.0/new"
        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok === true) {
            const updatedData = {
                total: data.total,
                books: data.books
            }

            this.setState({bookLists: updatedData, apiStatus: apiStatusConstants.success})
        }
        else {
            this.setState({apiStatus: apiStatusConstants.failure})
        }

    }

    renderLoader = () => (
        <div className="products-loader-containers">
            <Loader type="Bars" color="#0b69ff" height={50} width={50} />
        </div>
    )

    renderBooksList = () => {
        const {apiStatus} = this.state

        switch(apiStatus) {
            case apiStatusConstants.success:
                return this.renderSuccessBooksListPage()
            case apiStatusConstants.inProgress:
                return this.renderLoader()
            case apiStatusConstants.failure:
                return this.renderFailureBooksPage()
            default:
                return null
        }
    }

    render() {
        return (
        <div className="book-list-main-container">
            <Header />
            <h1>BookList</h1>
            {this.renderLoader()}
        </div>
        )
    }
}
    


export default BookList