import React from 'react';

const printSubtitle = (subTitle) => {
    if(subTitle){
        return <h3 className="text-center">{subTitle}</h3>
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
        const {title, html, date, id, authorName, postUrl, subTitle} = this.props;

        return <div className="row">
            <h2 className="text-center">{title}</h2>
            {printSubtitle(subTitle)}
            <div>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div>
    }
});