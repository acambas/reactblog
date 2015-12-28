import React from 'react';
import {Link } from 'react-router';
import moment from 'moment';

const printSubtitle = (subTitle) => {
    if(subTitle){
        return <h3>{subTitle}</h3>
    }
};

const printDate = (date) => {
  if(date){
      return <i> {moment(date).format('DD MMM YYYY')}</i>;
  }else{
      return <i>date is unknown</i>
  }
};

export default React.createClass({
    render: function(){
        const {title, subTittle, date, id} = this.props;

        return <div className="post-preview">
            <Link to={"/post/id/" + id} >
                <h2 className="post-title">{title}</h2>
                {printSubtitle(subTittle)}
            </Link>
            <p className="post-meta">
                Posted on {printDate(date)}
            </p>
        </div>
    }
})