import puppeteer from "puppeteer";

export const scrapeFromAmazon = async (query) => {
  let data;
  try {
    await (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("https://www.amazon.sg");

      await page.type("#twotabsearchtextbox", query);
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
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
      const browser = await puppeteer.launch({ headless: false});
      const page = await browser.newPage();

      await page.goto("https://www.ebay.com");

      await page.type("#gh-ac", query);
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png",
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

export const scrapeFromLazada = async (query) => {
  let data;
  try {
    await (async () => {
      const browser = await puppeteer.launch({ headless: false});
      const page = await browser.newPage();

      await page.goto("https://www.lazada.sg/"); 

      await page.type(".search-box__input--O34g", query);
      await page.click(".search-box__search--2fC5");
      await page.waitForNavigation();

      const grabInfo = await page.evaluate(() => {
        const items = document.querySelectorAll(".Bm3ON");
        const info = [];
        items.forEach((item) => {
          let link = "https://www.lazada.sg/"
          let item = "name";
          let itemObj = {
            name: item
            price: item
            image: item.querySelector(".jBwCF").getAttribute("src"),
            link: link,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lazada_%282019%29.svg/1454px-Lazada_%282019%29.svg.png",
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