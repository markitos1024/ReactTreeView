'use strict';

import React from 'react';

class TreeNode extends React.Component {
    constructor(props){
        super(props);
        this.state = {toggled: false};
        this.onClick = this.onClick.bind(this);
    }
    onClick(event){
        event.stopPropagation();
        this.setState({toggled:!this.state.toggled});
    }
    render(){
        let items = this.props.items,
            label = this.props.label,
            classes = items.length ? (this.state.toggled ? 'expanded' : 'collapsed') : 'leaf' ;
        
        return (

            <li onClick={this.onClick} className={classes}>
             {label}
             {this.state.toggled ? "" : items.map((data,index)=>
                <ul key={index}>
                 <TreeNode
                    items={data.items}
                    label={data.label}
                />
                </ul>)}
            </li>
        );
    }
}

TreeNode.propTypes = {
    label: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired
};

TreeNode.defaultProps = {
    label:"",
    items: []
};

export default TreeNode;