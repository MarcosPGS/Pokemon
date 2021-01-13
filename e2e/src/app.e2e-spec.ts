import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Testes da página inicial', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  // /html/body/app-root/app-home/div[1]/div/mat-form-field/div/div[2]/div/mat-hint/small/span

  it('deve teste a fase em baixo do input de pesquisar', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Digite o nome do Pokémon para filtrar a informação.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
