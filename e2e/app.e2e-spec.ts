import { SlicePage } from './app.po';

describe('slice App', function() {
  let page: SlicePage;

  beforeEach(() => {
    page = new SlicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
