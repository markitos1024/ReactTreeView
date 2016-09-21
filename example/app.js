'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from '../src/treeview';
import data from './data';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

class DemoTree extends React.Component {
    constructor(props){
        super(props);
        this.state = {data};
    }
    render(){
        return (
                <div>
                    <TreeView
                        data={this.state.data}
                    />
                </div>
        );
    }
}

const content = document.getElementById('content');
ReactDOM.render(<DemoTree/>, content);