import { browser, by, element, ExpectedConditions  } from 'protractor';

export class AppPage {

  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  navigateTo() {
    return browser.get('/');
  }

  getPath() {
    return browser.getCurrentUrl();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag}${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected clickElement(sel: string) {
    const el = element(by.css(`${this.tag}${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
  
}

export class HomePage extends AppPage {
  constructor() {
    super('', '');
  }

  enterSearchTerm(searchTerm: string) {
    this.enterInputText('#searcher', searchTerm);
  }

  clickItem(idElement: string) {
    this.clickElement(idElement);
  }

}