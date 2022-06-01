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
          let link = item
            .querySelector(".a-link-normal.s-no-outline")
            .getAttribute("href");
          let itemObj = {
            name: item.querySelector(
              ".a-size-base-plus.a-color-base.a-text-normal"
            ).innerText,
            price: item.querySelector(".a-offscreen").innerText,
            image: item.querySelector(".s-image").getAttribute("src"),
            link: `https://www.amazon.sg${link}`,
          };
          info.push(itemObj);
        });
        return info;
      });

      data = grabInfo;
      await browser.close();
    })();
  } catch (error) {
    console.log(error);
    data = [];
  }
  return data;
};
