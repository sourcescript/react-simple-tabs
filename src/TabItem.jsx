var React = require('react');
var extend = require('extend');

module.exports = React.createClass({
  displayName: 'TabItem',

  propTypes: {
    /**
     * The index / position of the active tab
     * provided by the `Tab` component
     */
    active: React.PropTypes.boolean.isRequired,

    /**
     * Handles the setting of the `active` state.
     */
    activeHandler: React.PropTypes.func.isRequired,

    /**
     *
     */
    activeStyle: React.PropTypes.obj
  },

  getDefaultProps: function() {
    // Set both styles to a blank object by default.
    // This looks more explicit (compared to `undefined ||`)
    // so we're going with this for now.
    return {
      style: {}
      activeStyle: {}
    };
  }

  render: function() {
    var { style, activeStyle, active, activeHandler, children, ...other } = this.props;

    return (
      <li onClick={activeHandler}
        style={ Object.extend({}, style, active ? activeStyle : {}) }
        {...other}>
        {children}
      </ul>
    )
  }
});
