var React = require('react');
var cloneWithProps = React.addons.cloneWithProps;
var ActiveMixin = require('./ActiveMixin');

module.exports = React.createClass({
  displayName: 'TabBox',

  propTypes: {
    /**
     * The index / position of the active tab
     * provided by the `Tab` component

     * @type {number}
     */
    active: React.PropTypes.number.isRequired
  },

  render: function() {
    var { active, children, ...other } = this.props;

    return (
      <div {...other}>
        {React.Children.map(children, function(Child, i) {
          return cloneWithProps(child, { active: active == i });
        })}
      </div>
    )
  }
});
