import puppeteer from "puppeteer";

const AMAZON_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png";
const EBAY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png";

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
            logo: AMAZON_LOGO,
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

export const scrapeFromEbay = async (query) => {
  let data;
  try {
    await (async () => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      await page.goto("https://www.ebay.com");

      await page.type("#gh-ac", query, { delay: 1000 });
      await page.click("#gh-btn");
      await page.waitForNavigation();

      const grabInfo = await page.evaluate(() => {
        const items = document.querySelectorAll(".s-item.s-item__pl-on-bottom");
        const info = [];
        items.forEach((item) => {
          let link = item.querySelector(".s-item__link").getAttribute("href");
          let itemObj = {
            name: item.querySelector(".s-item__title").innerText,
            price: item.querySelector(".s-item__price").innerText,
            image: item.querySelector(".s-item__image-img").getAttribute("src"),
            link: link,
            logo: EBAY_LOGO,
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
