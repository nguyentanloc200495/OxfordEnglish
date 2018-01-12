import { OxfordEnglishAngularPage } from './app.po';

describe('oxford-english-angular App', function() {
  let page: OxfordEnglishAngularPage;

  beforeEach(() => {
    page = new OxfordEnglishAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
