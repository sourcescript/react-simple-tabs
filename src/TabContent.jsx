var React = require('react');

module.exports = React.createClass({
  displayName: 'TabItem',

  propTypes: {
    /**
     * The index / position of the active tab
     * provided by the `Tab` component
     */
    active: React.PropTypes.boolean.isRequired,
  },

  render: function() {
    var { active, children, ...other } = this.props;

    return active
      ?  (
          <div {...other}>
            {children}
          </div>
        )
      : null
  }
});
