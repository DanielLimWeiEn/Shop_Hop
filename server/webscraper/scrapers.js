import puppeteer from "puppeteer";

export const scrapeFromAmazon = async (query) => {
  let data;
  try {
    await (async () => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      await page.goto("https://www.amazon.sg");

      await page.type("#twotabsearchtextbox", query, { delay: 1000 });
      await page.click("#nav-search-submit-button");
      await page.waitForNavigation();

      const grabInfo = await page.evaluate(() => {
        const items = document.querySelectorAll(
          '[data-component-type="s-search-result"]'
        );
        const info = [];
        items.forEach((item) => {
          info.push(item.querySelector(".a-offscreen").innerText);
        });
        return info;
      });

      data = grabInfo;
      await browser.close();
    })();
  } catch (error) {
    data = [];
    await browser.close();
  }
  return data;
};
