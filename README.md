# react-simple-tabs [![npm version](http://img.shields.io/npm/v/react-simple-tabs.svg?style=flat)](https://npmjs.org/package/react-simple-tabs) [![Build Status](https://travis-ci.org/sourcescript/react-simple-tabs.svg)](https://travis-ci.org/sourcescript/react-simple-tabs) [![Dependencies Status](https://david-dm.org/srph/reflux-flash.svg)](https://david-dm.org/sourcescript/react-simple-tabs.svg) [![devDependency Status](https://david-dm.org/cdnjs/cdnjs/dev-status.svg)](https://david-dm.org/sourcescript/react-simple-tabs#info=devDependencies)
Tabs in React that doesn't get in your way.

## Usage

As a work-in-progress, we aim for this usage:

```jsx
<Tab>
  <TabList>
    <TabItem>Home</TabItem>
  </TabList>

  <TabBox>
    <TabContent>Whatever</TabContent>
  </TabBox>
</Tab>
```

This way, it doesn't try to assume which selector should be used to style the tabs, nor should it try to hide something away from its consumer.

## Acknowledgement

**react-simple-tabs** &copy; 2015+, Sourcescript. **react-simple-tabs** is released under the [MIT License](https://mit-license.org).
