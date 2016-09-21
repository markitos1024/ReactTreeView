TreeView
========

React TreeView component that renders a hierarchical data structure

## Show Example

```shell
  npm run example
```

## Installation

```shell
  npm install treeview --save
```

## Usage

```js
  var treeView = require('treeview');

  //this is a sample of supported data
  var items = {
    label: 'Node Label',
    items: [
	        {
	            label: 'Child Node Label',
	            items: [
	                {
	                    label: 'Child Node Label',
	                    items: [
	                        {
	                            label: 'Child Node Label',
	                            items: [

	                            ]
	                        },
	                        {
	                            label: 'Child Node Label',
	                        },
	                        {
	                            label: 'Leaf Node Label'
	                        }
	                    ]
	                }
	            ]
	        },
	        {
	            label: 'Leaf Node Label'
	        }
	    ]
	};
  
	//add componet with items in the prop data
    <TreeView data={items}> 
      
```

## Tests

```shell
   npm run test
```