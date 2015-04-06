var expect = chai.expect;

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Render = TestUtils.renderIntoDocument;
var TabComponent = require('../src/Tab.jsx');
var Tab;

describe('Tab component', function() {
  it('should have initial `active` (state of 0) first tab', function() {
    Tab = Render(<TabComponent />);
    expect(Tab.state.active).to.equal(0);
  });

  it('should have initial `active` of the provided prop if provided', function() {
    Tab = Render(<TabComponent active={1} />);
    expect(Tab.state.active).to.equal(1);
  });

  describe('#activeHandler', function() {
    it('should set the current `active` to the provided index', function() {
      Tab = Render(<TabComponent />);
      expect(Tab.state.active).to.equal(0);
      Tab.activeHandler(3);
      expect(Tab.state.active).to.equal(3);
    });

    it('should allow its child components to change the `active` state', function() {
      var MockComponent = React.createClass({
        componentDidMount: function() { this.props.activeHandler(1); },
        render: function() { return null; }
      });
      Tab = Render(<TabComponent><MockComponent /></TabComponent>);
      // var Mock = TestUtils.scryRenderedComponentsWithType(Tab, MockComponent);
      // expect(MockComponent.props.activeHandler).to.be(undefined);
      // var mock = sinon.mock(Tab);
      // mock.expects('activeHandler').once();
      // mock.verify();
    });
  });
});
