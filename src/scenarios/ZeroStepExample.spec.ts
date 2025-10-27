import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Verifica página inicial do Merx.tech com AI', async ({ page }) => {
  await page.goto('https://merx.tech/');

  const aiArgs = { page, test };

  await ai('verify that the homepage loads correctly', aiArgs);
  await ai('click on the IMPRENSA button', aiArgs);
  await ai('check that the about section appears', aiArgs);
});
