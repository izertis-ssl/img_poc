import { element, by } from 'protractor';

import { AppPage } from "./app.po";
import { HomePage } from "./app.po";

describe("new App", () => {
  let page: AppPage;
  let homePage: HomePage;

  beforeEach(() => {
    page = new AppPage('','');
    homePage = new HomePage();
  });

  it("should navigate to home", () => {
    page.navigateTo();
    expect(page.getPath()).toContain("/home");
  });

  it('should click article', () => {
    homePage.clickItem('#Articulo-2');
    expect(page.getPath()).toContain("/article/2");
  });

  it('should search lorem', () => {
    homePage.enterSearchTerm('lorem');
    expect(element(by.css('.searchbar-input')).getAttribute("value")).toEqual("lorem");
  });

});
