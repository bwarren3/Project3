import { AppPage } from './app.po';
import { browser, logging, by, element} from 'protractor';

describe('Testing Registration', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display error message if no names were entered to register', () => {
    browser.get('/registration');
    var message = element(by.id('messagePlacement'));
    element(by.buttonText('Register Contestants')).click();
    
    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });
});
