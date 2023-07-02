import { AppPage } from './app.po';
import { browser, logging, by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brackets app title', () => {
    browser.get('/');
    var subTitle = element(by.id('subpageTitle'));
    
    expect(subTitle.getText()).toEqual('Brackets App');
  });
});
