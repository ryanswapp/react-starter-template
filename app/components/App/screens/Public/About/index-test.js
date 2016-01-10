import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'; 
import expect from 'expect';
import About from './index'; 

describe('About', function () {
  it('renders without problems', function () {
    let about = TestUtils.renderIntoDocument(<About/>);
    expect(about).toExist();
  });
});