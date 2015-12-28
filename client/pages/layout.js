import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';


export default React.createClass({
    render: function(){
        return <div>
            <Navbar />
            <Header />
            <div className="container">
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
});