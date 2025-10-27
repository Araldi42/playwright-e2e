import { test, expect } from '@playwright/test';

test('Homepage do Merx.tech carrega e contém elementos esperados', async ({ page }) => {
  // 1. Acessa o site
  await page.goto('https://merx.tech/');

  // 2. Verifica o título da página
  await expect(page).toHaveTitle(/Merx/i);

  // 3. Espera que o logo ou algum texto principal apareça
  const mainHeading = page.locator('h1, h2, .hero, .main-title'); // depende da estrutura
  await expect(mainHeading.first()).toBeVisible();

  // 4. Exemplo: clicar em um botão do menu
  const menuButton = page.getByRole('link', { name: /sobre/i });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await expect(page).toHaveURL(/sobre/i);
  }

  // 5. Faz uma captura de tela (opcional)
  await page.screenshot({ path: 'screenshots/merx-home.png', fullPage: true });
});
