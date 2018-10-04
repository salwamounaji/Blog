import { newE2EPage } from '@stencil/core/testing';

describe('app-new', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-new></app-new>');

    const element = await page.find('app-new');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-new></app-new>');

    const element = await page.find('app-new >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
