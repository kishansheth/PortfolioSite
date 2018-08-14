import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/styles.css';

export default class BurgerNav extends React.Component {
    render() {
        return (
        <div id="navigation" className = "nav">
            <Link to="/index/" className="active">home</Link>
            <Link to="/gallery/" className="inactive">gallery</Link>
            <Link to="/about/" className="inactive">about</Link>
        </div>   
        )
    }
}