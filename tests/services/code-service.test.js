const chai = require('chai');
const ColorService = require('../../client/services/color-service');

const { expect } = chai;

// npx mocha tests --recursive
describe('ColorService', () => {
  it('should have a searchColors method', () => {
    expect(ColorService).to.have.property('searchColors');
    expect(ColorService.searchColors).to.be.a('function');
  });
});
