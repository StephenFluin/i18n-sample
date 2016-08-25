import { I18nSamplePage } from './app.po';

describe('i18n-sample App', function() {
  let page: I18nSamplePage;

  beforeEach(() => {
    page = new I18nSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
