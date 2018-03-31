import { expect } from 'chai';
import FizzBuzz from '../src/main';


describe('Main', () => {
    it('Should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz')
    });
});