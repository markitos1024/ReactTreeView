'use strict';
import 'babel-polyfill'
require('./dom-mock')('<html><body></body></html>');

const TreeView = require('../src/treeview').default;
const assert = require('assert');
const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');


describe('Test TreeView Component', () => {
	var oneLevelTree = {items: [], label : 'Root Node Label'};
	var twoLevelTree = {label : 'First Node Label' , items: [ {label: 'Second Node Label'}, { label: 'Third Node Label'}] };

	it('should contain same label text (simple of one level tree)', function() {
		let tree = ReactTestUtils.renderIntoDocument(
		  <TreeView data={oneLevelTree}/>
		);
		let liText = ReactTestUtils.findRenderedDOMComponentWithTag(tree, 'li');
	assert.equal(liText.textContent, 'Root Node Label');
	});
	it('should contain same items length (simple of two level tree)', function() {
		let tree = ReactTestUtils.renderIntoDocument(

		  <TreeView data={twoLevelTree}/>
		);
		let li = ReactTestUtils.scryRenderedDOMComponentsWithTag(tree, 'li');

	assert.equal(li.length, 3);
	});
	it('should contain same depth - and all levels should be expanded, by default', function() {	
		let tree = ReactTestUtils.renderIntoDocument(

		  <TreeView data={twoLevelTree}/>
		);
		let ul = ReactTestUtils.scryRenderedDOMComponentsWithTag(tree, 'ul');

		assert.equal(ul.length, 3);
	});
});