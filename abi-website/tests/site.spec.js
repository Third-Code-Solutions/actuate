import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { SERVICES, PROJECTS, ARTICLES, COMPANY } from '../src/data/content.js'

const routes = ['/', '/about', '/services', ...SERVICES.map(item => `/services/${item.slug}`), '/our-works', ...PROJECTS.map(item => `/our-works/${item.slug}`), '/blog', ...ARTICLES.map(item => `/blog/${item.slug}`), '/careers', '/contact', '/privacy']
for (const width of [1440, 768, 390]) {
  test(`every page loads with complete media at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    for (const route of routes) {
      const response = await page.goto(route)
      expect(response.status(), route).toBe(200)
      await expect(page.locator('h1'), route).toHaveCount(1)
      await expect(page).toHaveTitle(/Actuate Builders/)
      await page.evaluate(async () => {
        for (const image of document.images) image.loading = 'eager'
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})))
      })
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true)
      expect(await page.locator('img').evaluateAll(images => images.filter(image => !image.naturalWidth || !image.hasAttribute('alt')).map(image => image.src)), route).toEqual([])
    }
    expect(errors).toEqual([])
  })
}

test('URLs, refresh, history, aliases and section navigation', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.getByRole('link', { name: 'Explore Actuate', exact: true }).click()
  await expect(page).toHaveURL(/#about$/)
  await page.getByRole('link', { name: 'Actuate Builders home', exact: true }).first().click()
  await expect(page).toHaveURL(/\/$/)
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0)
  await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL(/\/about$/)
  await page.reload()
  await expect(page.locator('h1')).toContainText('Driven by people')
  await page.goBack()
  await expect(page.locator('h1')).toContainText('Made for')
  await page.goForward()
  await expect(page.locator('h1')).toContainText('Driven by people')
  await page.goto('/our-works')
  await page.getByRole('link', { name: 'View Alternergy gallery', exact: true }).first().click()
  await expect(page).toHaveURL(/\/our-works\/alternergy#project-gallery$/)
  await expect.poll(() => page.evaluate(() => document.getElementById('project-gallery').getBoundingClientRect().top)).toBeLessThan(150)
  await page.goto('/works/etiqa/')
  await expect(page.locator('h1')).toHaveText('Etiqa')
  await page.goto('/not-a-page')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow')
})

test('service tabs coordinate image, content, links and keyboard', async ({ page }) => {
  await page.goto('/')
  for (const service of SERVICES) {
    const tab = page.getByRole('tab', { name: new RegExp(service.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })
    await tab.click()
    await expect(tab).toHaveAttribute('aria-selected', 'true')
    await expect(page.getByRole('tabpanel').locator('img')).toHaveAttribute('src', service.image)
    await expect(page.getByRole('tabpanel').getByRole('link', { name: 'Explore service', exact: true })).toHaveAttribute('href', `/services/${service.slug}`)
  }
  await page.getByRole('tab').last().press('Home')
  await expect(page.getByRole('tab').first()).toBeFocused()
  await page.getByRole('tab').first().press('ArrowDown')
  await expect(page.getByRole('tab').nth(1)).toHaveAttribute('aria-selected', 'true')
})

test('mobile menu closes, restores scroll, supports Escape and navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Open menu' })
  await menu.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(menu).toBeFocused()
  await menu.click()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole('dialog')).not.toBeVisible()
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden')
  await page.mouse.wheel(0, 500)
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(0)
})

test('gallery opens, keyboard advances, Escape restores trigger focus', async ({ page }) => {
  await page.goto('/our-works/etiqa')
  const trigger = page.getByRole('button', { name: /^Enlarge / }).first()
  await trigger.click()
  const gallery = page.getByRole('dialog', { name: 'Project photography.' })
  await expect(gallery).toBeVisible()
  await expect(gallery.locator('img')).toHaveAttribute('src', PROJECTS.find(p => p.slug === 'etiqa').gallery[0].src)
  await page.keyboard.press('ArrowRight')
  await expect(gallery.locator('img')).toHaveAttribute('src', PROJECTS.find(p => p.slug === 'etiqa').gallery[1].src)
  await page.keyboard.press('Escape')
  await expect(gallery).not.toBeVisible()
  await expect(trigger).toBeFocused()
})

test('contact validates and prepares encoded email without sending', async ({ page }) => {
  await page.goto('/contact')
  const requests = []
  page.on('request', request => { if (request.method() !== 'GET') requests.push(request.url()) })
  await page.getByRole('button', { name: 'Prepare email draft' }).click()
  await expect(page.getByText('Your email draft is ready.')).not.toBeVisible()
  await page.getByLabel('Full name').fill('Test & Review')
  await page.getByLabel('Email (required)', { exact: true }).fill('test@example.com')
  await page.getByLabel('About your project').fill('Controlled QA test. No enquiry sent. Budget & scope?')
  await page.getByRole('button', { name: 'Prepare email draft' }).click()
  await expect(page.getByText('Your email draft is ready.')).toBeVisible()
  await expect(page.getByText(/No message has been sent/)).toBeVisible()
  const href = await page.getByRole('link', { name: 'Open email app' }).getAttribute('href')
  const url = new URL(href)
  expect(url.protocol).toBe('mailto:')
  expect(url.pathname).toBe(COMPANY.email)
  expect(url.searchParams.get('body')).toContain('Budget & scope?')
  expect(requests).toEqual([])
  await page.getByLabel('Full name').fill('Edited name')
  await expect(page.getByText('Your email draft is ready.')).not.toBeVisible()
})

test('reduced-motion hero remains static and usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('.hero-background')).toBeVisible()
  await expect(page.locator('video')).toHaveCount(0)
  expect(await page.locator('.hero-copy').evaluate(el => getComputedStyle(el).animationName)).toBe('none')
})

test('representative pages meet automated WCAG AA checks', async ({ page }) => {
  for (const route of ['/', '/services/fit-out', '/our-works/etiqa', '/contact', `/blog/${ARTICLES[0].slug}`]) {
    await page.goto(route)
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), route).toEqual([])
  }
})
