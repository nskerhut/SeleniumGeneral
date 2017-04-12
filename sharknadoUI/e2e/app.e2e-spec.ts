import { SharknadoPage } from './app.po';

describe('sharknado App', function() {
  let page: SharknadoPage;

  beforeEach(() => {
    page = new SharknadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
