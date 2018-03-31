import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { search, searchAlbuns, searchArtists, searchTracks, searchLists } from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    it('Should exist the search metod', () => {
      expect(search).to.exist;
    });
    it('Should exist the search metod', () => {
      expect(searchAlbuns).to.exist;
    });
    it('Should exist the search metod', () => {
      expect(searchArtists).to.exist;
    });
    it('Should exist the search metod', () => {
      expect(searchTracks).to.exist;
    });
    it('Should exist the search metod', () => {
      expect(searchLists).to.exist;
    });
  });
  describe('Generic Search', () => {
    it('Should call a fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');

      const artists = search();
    });
  });
});
