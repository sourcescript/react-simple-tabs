var expect = chai.expect;

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Render = TestUtils.renderIntoDocument;
var TabComponent = require('../src/Tab.jsx');

describe('Tab component', function() {
  it('should have initial `active` (state of 0) first tab', function() {
    var Tab = Render(<TabComponent />);
    expect(Tab.state.active).to.equal(0);
  });

  it('should have initial `active` of the provided prop if provided', function() {
    var Tab = Render(<TabComponent active={1} />);
    expect(Tab.state.active).to.equal(1);
  });

  describe('#activeHandler', function() {
    it('should set the current `active` to the provided index', function() {
      var Tab = Render(<TabComponent />);
      expect(Tab.state.active).to.equal(0);
      Tab.activeHandler(3);
      expect(Tab.state.active).to.equal(3);
    });

    it('should allow its child components to change the `active` state', function() {
      // Calls the `activeHandler` when mounted,
      // just to check whether it actually gets
      // `activeHandler`.
      var MockComponent = React.createClass({
        componentDidMount: function() {
          this.props.activeHandler(2);
        }, render: function() { return null; }
      });

      var Tab = Render(<TabComponent><MockComponent /></TabComponent>);
      expect(Tab.state.active).to.equal(2);
    });
  });
});
