import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    // return element(by.css('app-root .content span')).getText() as Promise<string>;
    return element(by.xpath('/html/body/app-root/app-home/div[1]/div/mat-form-field/div/div[2]/div/mat-hint/small/span'))
    .getText() as Promise<string>;
  }
}
