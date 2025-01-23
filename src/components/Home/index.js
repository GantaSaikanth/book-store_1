import { Component } from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
    render() {
        return (
        <>
            <Header />
            <div className='book-store-container'>
                <div>
                    <h1 className='heading'>Book Store</h1>
                    <p className='paragraph'>A book is now a set of printed sheets of paper held together between two covers. The sheets of paper in a book are called pages. The pages have words written in them and maybe illustrations drawn. The first books were not printed, but written by hand in ink.The book is a more flexible format than the earlier idea of the scroll. The change from scrolls to books began in the Roman Empire and took many centuries to become complete.A writer of a book is often called an author. Someone who draws the pictures in a book is called an illustrator. Books can have more than one writer or illustrator.</p>
                    <button className='explore-button'>
                        Explore Books
                    </button>
                </div>
            </div>
        </>
        )
    }
}
    


export default Home