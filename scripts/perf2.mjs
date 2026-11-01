import { chromium } from 'playwright'
const url = 'https://rs-refrigeracao-three.vercel.app/'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const client = await page.context().newCDPSession(page)
await client.send('Network.emulateNetworkConditions', {
  offline: false,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
  latency: 150,
})
await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })

const t0 = Date.now()
await page.goto(url, { waitUntil: 'load', timeout: 60000 })
const loadTime = Date.now() - t0

const metrics = await page.evaluate(() => {
  const paints = performance.getEntriesByType('paint')
  return { fcp: paints.find(p => p.name === 'first-contentful-paint')?.startTime }
})
console.log('TOTAL_LOAD_MS', loadTime)
console.log('FCP_MS', metrics.fcp)
await page.screenshot({ path: 'scripts/perf-check.png' })
await browser.close()
