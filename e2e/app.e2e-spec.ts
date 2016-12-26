import { PokemonCliPage } from './app.po';

describe('pokemon-cli App', function() {
  let page: PokemonCliPage;

  beforeEach(() => {
    page = new PokemonCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
