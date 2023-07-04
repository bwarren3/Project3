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
  
  it('should navigate to the registration page', () => {
    browser.get('/registration');
    var subTitle = element(by.id('subpageTitle'));
    
    expect(subTitle.getText()).toEqual('Register Players');
  });
  
  it('should navigate to the brackets page', () => {
    browser.get('/brackets');
    var subTitle = element(by.id('subpageTitle'));
    
    expect(subTitle.getText()).toEqual('Brackets');
  });
  
  it('should navigate to welcome page from another page', () => {
    browser.get('/brackets');
    browser.get('/welcome');
    var subTitle = element(by.id('subpageTitle'));
    
    expect(subTitle.getText()).toEqual('Brackets App');
  });
});
