import { ThreadsPage } from './app.po';

describe('threads App', function() {
  let page: ThreadsPage;

  beforeEach(() => {
    page = new ThreadsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
