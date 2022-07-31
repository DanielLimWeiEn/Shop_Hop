import puppeteer from "puppeteer";

export const scrapeFromAmazon = async (query) => {
  let data;
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  try {
    await (async () => {
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

          let rating = 2.5;
          try {
            rating = item
              .querySelector(".a-row.a-size-small > span:nth-child(1)")
              .getAttribute("aria-label");
          } catch (error) {
            console.log("This item has no rating.");
          }
          if (rating !== 2.5) {
            rating = parseFloat(rating.split(" ")[0]);
          }

          let itemObj = {
            name: item.querySelector(
              ".a-size-base-plus.a-color-base.a-text-normal"
            ).innerText,
            price: item.querySelector(".a-offscreen").innerText,
            image: item.querySelector(".s-image").getAttribute("src"),
            link: `https://www.amazon.sg${link}`,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
            rating: rating,
          };
          info.push(itemObj);
        });
        return info;
      });

      data = grabInfo;
    })();
  } catch (error) {
    console.log(error);
    data = [];
  } finally {
    await browser.close();
  }
  return data;
};

export const scrapeFromEbay = async (query) => {
  let data;
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  try {
    await (async () => {
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

          let rating = 2.5;
          try {
            rating = item.querySelector(".x-star-rating .clipped").innerText;
          } catch (error) {
            console.log("This item has no rating.");
          }
          if (rating !== 2.5) {
            rating = parseFloat(rating.split(" ")[0]);
          }

          let itemObj = {
            name: item.querySelector(".s-item__title").innerText,
            price: item.querySelector(".s-item__price").innerText,
            image: item.querySelector(".s-item__image-img").getAttribute("src"),
            link: link,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png",
            rating: rating,
          };
          info.push(itemObj);
        });
        return info;
      });

      data = grabInfo;
    })();
  } catch (error) {
    console.log(error);
    data = [];
  } finally {
    await browser.close();
  }
  return data;
};
