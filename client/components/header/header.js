import React from 'react';
import './header.scss'

import {connect} from 'react-redux';


const renderMetaText = (metaText) => {
  if(metaText){
      return <span className="meta">{metaText}</span>
  }
};

const component = React.createClass({
    render: function(){
        let {headerImageUrl , headerTitle, headerSubtitle, headerMetaText} = this.props;

        return <header className="intro-header" style={{backgroundImage : "url('" + headerImageUrl+"')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>{headerTitle}</h1>
                            <hr className="small" />
                            <span className="subheading">{headerSubtitle}</span>
                            {renderMetaText(headerMetaText)}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    }
});
const mapStateToProps = (state) => {
    return {
        headerImageUrl : state.app.headerData.headerImageUrl,
        headerTitle : state.app.headerData.headerTitle,
        headerSubtitle : state.app.headerData.headerSubtitle
    }
};

export default connect(mapStateToProps)(component);