import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Verifica página inicial do Merx.tech com AI', async ({ page }) => {
  await page.goto('https://merx.tech/');

  const aiArgs = { page, test };

  await ai('verify that the homepage loads correctly', aiArgs);
  await ai('click on the IMPRENSA button', aiArgs);
  await ai('check that the ENTRE EM CONTATO section appears', aiArgs);
});


test('Verifica página de imprensa do Merx.tech com AI', async ({ page }) => {
  await page.goto('https://merx.tech/imprensa.html');

  const aiArgs = { page, test };

  await ai('verify that the homepage loads correctly', aiArgs);
  await ai('click on the VER NOTÍCIAS button', aiArgs);
  await ai('click on the VER COMUNICADOS button', aiArgs);
});