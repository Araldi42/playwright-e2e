import { test, expect } from '@playwright/test';

test('Homepage do Merx.tech carrega e contém elementos esperados', async ({ page }) => {
  // teste 1 - Carrega a página inicial
  await page.goto('https://merx.tech/');

  // teste 2 - Título da página
  await expect(page).toHaveTitle(/Merx/i);

  // teste 3 - Cabeçalho principal visível
  const mainHeading = page.locator('h1, h2, .hero, .main-title');
  await expect(mainHeading.first()).toBeVisible();

  // teste 4 - Link do menu "Sobre"
  const menuButton = page.getByRole('link', { name: /sobre/i });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await expect(page).toHaveURL(/sobre/i);
    await page.goBack();
  }

  // teste 5 - Verifica se o logo está visível
  const logo = page.locator('img[alt*="Merx"], .site-logo, header img');
  await expect(logo.first()).toBeVisible();

  // teste 6 - Verifica presença de um botão de contato ou CTA
  const ctaButton = page.getByRole('link', { name: /contato|fale conosco|get in touch/i });
  await expect(ctaButton.first()).toBeVisible();

  // teste 7 - Testa se há um rodapé visível
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();

  /// teste 8 - Verifica se o menu de navegação principal tem pelo menos 3 links
  const navLinks = page.locator('nav a');
  const linkCount = await navLinks.count();
  expect(linkCount).toBeGreaterThanOrEqual(3);

  // teste 9 - Testa se há imagens carregadas corretamente
  const images = page.locator('img');
  await expect(images.first()).toBeVisible();

  // teste 10 - Verifica se não há erros de console
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.reload();
  expect(errors).toEqual([]);

  // Captura de tela
  await page.screenshot({ path: 'screenshots/merx-home.png', fullPage: true });
});
