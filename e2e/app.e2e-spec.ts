import { EightDYanChaiPage } from './app.po';

describe('eight-dyan-chai App', () => {
  let page: EightDYanChaiPage;

  beforeEach(() => {
    page = new EightDYanChaiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
