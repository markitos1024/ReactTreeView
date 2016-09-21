'use strict';

import React from 'react';
import TreeNode from './node';

class TreeView extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let data = this.props.data;

        return (
            <ul ref="root" className="tree-node">
                <TreeNode ref="node"
                    items={data.items}
                    label={data.label}
                />
            </ul>
        );
    }
}

TreeView.propTypes = { 
	data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ]).isRequired
};
    
export default TreeView;