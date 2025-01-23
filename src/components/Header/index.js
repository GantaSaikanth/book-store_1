import { Component } from 'react'

import {Link} from 'react-router-dom'

import { FaBook } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import './index.css'

class Header extends Component {
    render() {
        return (
            <nav className='nav-bar'>
                <Link className="links" to="/">
                    <h1 className='header-heading'>BookStore</h1>
                </Link>
                <div className='link-container'>
                    <Link className='links' to="/books">
                        <div className='link-to-booklist'>
                            <FaBook />
                            <span className='span-children'>BookList</span>
                        </div>
                    </Link>
                    <Link className='links' to="/cart">
                        <div className='link-to-cart'>
                            <FaShoppingCart />
                            <span className='span-children'>Cart</span>
                        </div>
                    </Link>
                    <button className='logout-button'>Logout</button>
                </div>
            </nav>
        )
    }
}
    


export default Header