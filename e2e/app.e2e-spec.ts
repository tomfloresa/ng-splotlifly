import { SplotiflyPage } from './app.po';

describe('splotifly App', () => {
  let page: SplotiflyPage;

  beforeEach(() => {
    page = new SplotiflyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
