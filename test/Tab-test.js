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
});
