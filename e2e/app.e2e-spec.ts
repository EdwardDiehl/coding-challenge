import { CodingChallengePage } from './app.po';

describe('coding-challenge App', () => {
  let page: CodingChallengePage;

  beforeEach(() => {
    page = new CodingChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
