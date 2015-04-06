var React = require('react/addons');
var cloneWithProps = React.addons.cloneWithProps;

module.exports = React.createClass({
  displayName: 'Tab',

  /**
   * Initialize the current active tab to
   * the provided `active` prop.
   */
  getInitialState: function() {
    // In this case, we'd rather use the `undefined || something`
    // syntax rather than use `getDefaultProps`
    // because we're not using the `active` prop anywhere
    // besides the initial state (if it was provided);
    // nor are we having any fallbacks besides the `active` prop;
    // and this looks more explicit.
    return { active: this.props.active || 0 };
  },

  propTypes: {
    /**
     * The default / starting active tab.
     */
    active: React.PropTypes.number
  },

  render: function() {
    return (
      <div>
        {React.Children.map(this.props.children, function(child, i) {
          return cloneWithProps(child, {
            active: this.state.active,
            activeHandler: this.activeHandler
          });
        })}
      </div>
    );
  },

  /**
   * Sets the `active` state to the provided index
   *
   * @usage
   * `this.handleClick.bind(this, index);
   */
  activeHandler: function(index) {
    this.setState({ active: index });
  }
});
