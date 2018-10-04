import { newE2EPage } from '@stencil/core/testing';

describe('app-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-details></app-details>');

    const element = await page.find('app-details');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-details></app-details>');

    const element = await page.find('app-details >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
