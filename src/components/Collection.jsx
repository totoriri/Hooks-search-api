import React from "react"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';

const collection = () => {
    return (
        <div>
            <nav>
                <h1>Logo</h1>
                <div className="nav-right">
                    <Link to="/Collection" className="collection">Collection</Link>
                    <PersonIcon />
                </div>
            </nav>            
            likes
        </div>
    )
}

export default collection;