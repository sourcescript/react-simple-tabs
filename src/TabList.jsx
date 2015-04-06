var React = require('react');
var cloneWithProps = React.addons.cloneWithProps;

module.exports = React.createClass({
  displayName: 'TabList',

  propTypes: {
    /**
     * The index / position of the active tab
     * provided by the `Tab` component
     */
    active: React.PropTypes.number.isRequired,

    /**
     * Handles the setting of the `active` state.
     */
    activeHandler: React.PropTypes.func.isRequired
  },

  render: function() {
    var { activeHandler, active, children, ...other } = this.props;

    return (
      <ul {...other}>
        {
          // Pass in the click handler and active flag
          React.Children.map(children, function(child, i) {
            return cloneWithProps(child, {
              active: active == i,
              activeHandler: activeHandler.bind(i)
            });
          });
        }
      </ul>
    )
  }
});
