import React from 'react';

export default React.createClass({
    render: function(){
        return <div className={'fa fa-camera-retro fa-lg'}>
            {this.props.message}
        </div>
    }
})