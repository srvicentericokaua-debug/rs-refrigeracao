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

await page.goto(url, { waitUntil: 'load', timeout: 60000 })

const entries = await page.evaluate(() => {
  return performance.getEntriesByType('resource').map(r => ({
    name: r.name.split('/').pop(),
    duration: Math.round(r.duration),
    transferSize: r.transferSize,
    startTime: Math.round(r.startTime),
  })).sort((a,b) => b.duration - a.duration)
})
console.log(JSON.stringify(entries, null, 1))
await browser.close()
