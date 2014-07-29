/** @jsx React.DOM */

var React = require('react');
var CommentBox = require('./CommentBox');

window.React = React; //https://github.com/gaearon/react-hot-loader/issues/13

document.addEventListener('DOMContentLoaded', function() {
	React.renderComponent(
		<CommentBox />,
		document.getElementById('react')
	);
});