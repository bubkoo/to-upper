'use strict';

var expect = require('chai').expect;


describe('to-upper', function () {

  var toUpper = require('../../');

  it('common test', function () {
    expect(toUpper('--foo-bar--')).to.be.equal('--FOO-BAR--');
    expect(toUpper('fooBar')).to.be.equal('FOOBAR');
    expect(toUpper('__foo_bar__')).to.be.equal('__FOO_BAR__');
  });
});
