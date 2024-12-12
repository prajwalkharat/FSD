var { name: acoThemeName } = Shopify.theme;
var acoThemeArray = [
  "dawn",
  "ride",
  "taste",
  "studio",
  "crave",
  "colorblock",
  "sense",
  "craft",
  "warehouse",
  "express",
  "minimal",
  "narrative",
  "supply",
  "debut",
  "simple",
  "brooklyn",
  "venture",
  "boundless",
  "impulse",
  "prestige",
  "expanse",
  "broadcast",
  "motion",
  "responsive",
  "focal",
  "ira",
  "empire",
  "editions",
  "alchemy",
  "fashionopolism",
  "boost",
  "symmetry",
  "icon",
  "envy",
  "blockshop",
  "venue",
  "streamline",
  "testament",
  "ecomsolid",
  "retina",
  "mabelchong",
  "woodmart",
  "debutify",
  "glossier",
  "kingdom",
  "turbo",
  "kalles",
  "refresh",
  "ella",
  "pacific",
  "shella",
  "masonry",
  "wokiee",
  "gecko",
  "flex",
  "electro",
  "flow",
  "modular",
  "coachksa",
  "konversion",
  "elessi",
  "shopbe",
  "showtime",
  "atlantic",
  "influence",
  "moltestore",
  "porto",
  "fastor",
  "district",
  "pipeline",
  "spark",
  "california",
  "forge",
  "expression",
  "shanghai",
  "mojave",
  "galleria",
  "evelix",
  "startup",
  "superstore",
  "zeexo",
  "habitat",
  "basel",
  "parallax",
  "booster-6.0.5",
  "avone os 2.0",
  "canopy",
  "story",
  "clevercomo",
  "lorenza",
  "muscle",
  "cospora",
  "freshio",
  "optimal",
  "7nine",
  "renoxa",
  "minimog - os 2.0",
  "meunt",
  "showcase",
  "xtra",
  "grid",
  "story thème",
  "booster premium",
  "maker",
  "emerge",
  "mera",
  "velatheme",
  "vela framework",
  "upscale",
  "baseline",
  "kvalifik",
  "bywud",
  "colors",
  "cocafe",
  "lusion",
  "legend",
  "woodstock fashionable",
  "chromium",
  "august",
  "bullet",
  "ziba update 2.0",
  "venedor",
  "claudia",
  "launch",
  "origin",
  "yanka",
  "amu",
  "care me",
  "rowie theme",
  "madheidi",
  "my-theme",
  "capital",
  "asdasd",
  "avatar",
  "pop",
  "zestyfish",
  "monstrify",
  "belle_doll",
  "lammer",
  "palo alto",
  "vantage",
  "spring",
  "impact",
  "mr parker",
  "reformation",
  "foodie",
  "halo",
  "local",
  "prestige x elkfox",
  "buy now starter",
  "shapes",
  "ap 2020",
  "barberry",
  "ap bedove",
  "ss_ecogreen",
  "publisher",
  "copy of copy of brandpa",
  "athens",
  "caros",
  "stiletto",
  "booster-6.1.0",
  "vinova salehup",
  "plain jane",
  "casablanca",
  "combine",
  "sunrise",
  "fetch",
  "spotlight",
  "wpbingo",
  "black lemon luxreaders",
  "jeweltv theme",
  "prominence - os 2.0",
  "yuva",
  "overboard uk",
  "beast-v-1-0-2",
  "dawn (modified by rolv)",
  "pursuit",
  "numin",
  "idana debut",
  "avern",
  "shoesf",
  "ttcosmetic",
  "chord",
  "smartbook",
  "sahara",
  "mi-home by rolv",
  "vegist",
  "champion",
  "vision",
  "creator",
  "lezada os 2.0",
  "sportuo",
  "shopify",
  "obus: translations updated",
  "home 03",
  "polive",
  "be yours",
  "agência aurora®",
  "minion",
  "bt vodoma active style 1",
  "custom",
  "bnkr",
  "odour-v1-0-1",
  "kedree design",
  "unsen",
  "leo ftshop 3",
  "booksbuy",
  "enterprise",
  "roam",
  "ss_flashmart",
  "woodstock",
  "taiga",
  "ecomify-lite",
  "shaik theme",
  "langshop theme",
  "exclusive 2.0",
  "black friday 2023 uk",
  "atlas resell management",
  "banita",
  "context",
  "outdoormaster@2022",
  "vogal",
  "lashzee cosmetics",
  "booster-6.1.4",
  "dacorjudaica 2024",
  "eva",
  "vean vision v1",
  "vibez",
  "cornerstone",
  "gem",
  "bt vodoma swimwear 2",
  "shirley-v1.0.4",
  "effortless",
  "oct 23 control",
  "themelcdksa",
  "foxic",
];
var boomerangAdded = false;

var marginException = [
  "warehouse",
  "coachksa",
  "ella",
  "impulse",
  "idana debut",
  "ira",
  "creator",
  "focal",
  "prestige",
  "refresh",
  "sense",
];

function getThemeName() {
  var themeName = "Dawn";
  if (
    (typeof window.BOOMR !== "undefined" || window.BOOMR?.themeName !== "") &&
    window.BOOMR?.themeName &&
    acoThemeArray.includes(window.BOOMR?.themeName.toLowerCase())
  ) {
    themeName = window.BOOMR.themeName;
  } else if (
    typeof Shopify !== "undefined" &&
    acoThemeArray.includes(Shopify.theme.name.toLowerCase())
  ) {
    themeName = Shopify.theme.name;
  } else {
    if (
      (window.BOOMR?.themeName === "" ||
        themeName === undefined ||
        !acoThemeArray.includes(window.BOOMR?.themeName?.toLowerCase())) &&
      window.BOOMR?.themeId
    )
      themeName = window.BOOMR?.themeId;
    else themeName = Shopify.theme.id;
  }
  return themeName;
}

var acoShopName = "";
var acoCountryCode = "";
var acoShopJson = "";
var subscription = undefined;
var appVersion = "v1";
var shopJSON = {};
var themeJSON = {};
var themeVersion =
  window.BOOMR === undefined ? null : window.BOOMR.themeVersion;

/**
 * Given a CSS string, return an object with the CSS properties as keys and their values as values.
 * @param cssText - the CSS string
 * @returns The function returns an object with the CSS properties as keys and their values as values.
 */
function cssToObj(cssText) {
  var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
  var style = {},
    [, , rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [, , cssTxt];
  var cssToJs = (s) =>
    s.replace(/\W+\w/g, (match) => match.slice(-1).toUpperCase());
  var properties = rule
    .split(";")
    .map((o) => o.split(":").map((x) => x && x.trim()));
  for (var [property, value] of properties) style[cssToJs(property)] = value;
  return style;
}

/**
 * Get the current page.
 * @returns The current page.
 */
let acoCurrentPage = getCurrentPage();
let converted = {};

/**
 * This function returns the URL of the labeler app.
 * @returns The function returns the URL of the labeler app.
 */
const labelerUrl = "https://cdn.labeler.apps.acowebs.com";

/**
 * A dictionary that stores values of added badges and label only once.
 * @param [value] - the value to store in the dictionary
 * @returns The function returns the value of the dictionary.
 */
var checked = {};
var pattern = /\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i;
/**
 * Given a theme, return the product selectors for that theme.
 * @param theme - the theme to get the product selectors for
 * @returns The function returns an object containing the product selectors for the given theme.
 */
var productSelectors = [];
var productMutationSelectors = [];
var mutationConfig = {};
let acoFormSelectors = [
  ".aco_product_main",
  'form[action*="/cart/add"]:not(.product-item__action-list):not(.featured-product_wrapper form[action*="/cart/add"]):not(.product-box form[action*="/cart/add"]):not(form[action*="/cart/add"].variants):not(.product-collection__buttons form[action*="/cart/add"]):not(.product-item form[action*="/cart/add"])',
  ".product-main",
  ".product__info-wrapper",
  ".product-page-section .product__media-sticky",
  'body[aco-shop-name="349af0-3"] .product-single__sticky .product-single__meta',
];
const acoProductLinkSelectors = 'a[href*="/products/"]';
const acoRulesUpdated = [
  "specificCollection",
  "specificTags",
  "productType",
  "productVendor",
  "inStock",
  "lowStock",
  "outOfStock",
  "priceRange",
  "newArrivals",
  "comingSoon",
  "publishedDate",
  "specificProducts",
  "specificVariants",
];
let acoProductsArray = [];

/**
 * Logs a value to the console if the debug property of the shopJSON object is true.
 * @param val - the value to log
 */
function logIt(val) {
  if (shopJSON.debug) {
    console.log(val);
  }
}

function updateTimer(dates, elementId, element) {
  let future = Date.parse(`${dates.end}`);
  let now = new Date();
  let diff = future - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);
  let d = days;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = secs - mins * 60;
  if (element.querySelector("#" + elementId) !== null) {
    if (parseInt(days) < 0) {
      if (dates.countdownOver) {
        element.querySelector("#" + elementId).style.display =
          "none !important";
        clearInterval(timerInterval[`${elementId}`]);
        timerInterval[`${elementId}`] = null;
        return { countdownOver: true, timerInterval };
      }
      d = 0;
      h = 0;
      m = 0;
      s = 0;
    }
    element.querySelector("#" + elementId + " svg").style.width = "100%";
    element.querySelector("#" + elementId + " svg").style.height = "auto";
    element.querySelector("#" + elementId + " svg .injected-svg").style.width =
      "inherit";
    element.querySelector("#" + elementId + " svg .injected-svg").style.height =
      "inherit";
    element.querySelector(
      "#" + elementId + " svg .injected-svg"
    ).style.blockSize = "inherit";
    element.querySelector(
      "#" + elementId + " svg .injected-svg"
    ).style.inlineSize = "inherit";
    if (element.querySelector("#" + elementId + " svg svg #Days tspan")) {
      element.querySelector(
        "#" + elementId + " svg svg #Days tspan"
      ).innerHTML = `${d.toString().length === 1 ? "0" + d : d}`;
      element.querySelector(
        "#" + elementId + " svg svg #Hours tspan"
      ).innerHTML = `${h.toString().length === 1 ? "0" + h : h}`;
    } else {
      if (d > 0) h = h + d * 24;
      if (
        element.querySelector("#" + elementId + " svg svg #Hours tspan") !==
        null
      ) {
        element.querySelector(
          "#" + elementId + " svg svg #Hours tspan"
        ).innerHTML = `${h.toString().length === 1 ? "0" + h : h}`;
      }
    }
    element.querySelector("#" + elementId + " svg svg #Min tspan").innerHTML =
      `${m.toString().length === 1 ? "0" + m : m}`;
    element.querySelector("#" + elementId + " svg svg #Sec tspan").innerHTML =
      `${s.toString().length === 1 ? "0" + s : s}`;
    if (
      element.querySelector(`#${elementId}.product-badge_aco.aco-timer-diabled`)
    ) {
      element
        .querySelector(`#${elementId}.product-badge_aco.aco-timer-diabled`)
        .classList.replace("aco-timer-diabled", "aco-timer-enable");
    }
  }
}

let timerInterval = {};

function timerBadge(time, elementId, element) {
  timerInterval[`${elementId}`] = undefined;
  if (!timerInterval[`${elementId}`]) {
    timerInterval[`${elementId}`] = setInterval(function () {
      const returnedResult = updateTimer(time, elementId, element);
      if (returnedResult?.countdownOver) {
        clearInterval(timerInterval[`${elementId}`]);
        if (
          element.querySelector(
            `#${elementId}.product-badge_aco.aco-timer-enable`
          )
        ) {
          element
            .querySelector(`#${elementId}.product-badge_aco.aco-timer-enable`)
            .classList.replace("aco-timer-enable", "aco-timer-diabled");
        }
      }
    }, 1000);
  }
}

/**
 * Given a object of CSS styles, return a string of CSS styles.
 * @param style - a object of CSS styles
 * @returns The function returns a string of CSS styles.
 */
const convertToStyle = (style) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      style[key] +
      ";",
    ""
  );
};

var getPreviousSibling = function (elem, selector) {
  // Get the next sibling element
  var sibling = elem.previousElementSibling;
  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
};

/**
 * This function returns the current page.
 * @returns The function returns a string representing the current page.
 */
function getCurrentPage() {
  const path = window.location.pathname;
  if (path == "/") return "home";
  if (path.includes("search")) return "search";
  if (
    path.includes("/products/") &&
    !path.includes("all-products") &&
    !path.includes("other-products") &&
    !path.includes("coffee-products") &&
    !path.includes("new-products")
  )
    return "products";
  if (path.includes("collections") && path.includes("/all-products/products"))
    return "products";
  if (path.includes("collections")) return "collections";
  if (
    path.includes("pages") &&
    Shopify.shop.replace(".myshopify.com", "") === "petitegjewelers"
  )
    return "home";
  if (
    path.includes("pages") &&
    Shopify.shop.replace(".myshopify.com", "") === "firewoodoven"
  )
    return "collections";
  if (
    path.includes("pages") &&
    Shopify.shop.replace(".myshopify.com", "") === "jackery-japan"
  )
    return "collections";
  if (
    path.includes("pages") &&
    Shopify.shop.replace(".myshopify.com", "") === "blckcoffee"
  )
    return "collections";
  if (
    path.includes("pages") &&
    Shopify.shop.replace(".myshopify.com", "") === "spotondeal"
  )
    return "collections";
  if (
    [
      "/en",
      "/en/",
      "/nl",
      "/nl/",
      "/de",
      "/de/",
      "/ar/",
      "/ar",
      "/en-in",
      "/en-in/",
    ].includes(path)
  )
    return "home";
  if (path === "/en-intl") return "home";
}

function checkIfProductImage(url) {
  if (acoShopName === "xoxowildhearts") return true;
  return url.value.includes("products/") || url.value.includes("files/");
}

/**
 * Given an element, return the product src.
 * @param element - the element to get the product src from
 * @returns The function returns the product src.
 */
function getProductSrcFromElement(element) {
  if (!element) return "";
  if (
    element.previousElementSibling &&
    element.previousElementSibling.nodeName === "SOURCE"
  ) {
    element = element.previousElementSibling;
  }
  var src = element.attributes["srcset"];
  if (!src || !checkIfProductImage(src)) src = element.attributes["src"];
  if (!src || !checkIfProductImage(src)) src = element.attributes["data-src"];
  if (!src || !checkIfProductImage(src))
    src = element.attributes["data-srcset"];
  if (!src || !checkIfProductImage(src))
    src = element.attributes["data-srcset"];
  if (!src || !checkIfProductImage(src)) src = element.attributes["aria-label"];
  if (!src || !checkIfProductImage(src)) src = element.attributes["data-bg"];
  if (
    acoShopName === "80dafb" &&
    acoCurrentPage !== "products" &&
    (!src || !checkIfProductImage(src))
  )
    src = element.attributes["data-bgset"];
  if (
    acoShopName === "orange-you-chill-boutique" &&
    (!src || !checkIfProductImage(src))
  )
    src = element.attributes["data-lazy-src"];
  if (
    acoShopName === "swissploitation" &&
    acoCurrentPage === "products" &&
    (!src || !checkIfProductImage(src))
  )
    src = element.attributes["style"];
  if (!src || !checkIfProductImage(src) || src.value === "") return "";

  var url =
    src.value.replace("_{width}x", "").split(",")[0] === ""
      ? src.value.replace("_{width}x", "").split(",")[1]
      : src.value.replace("_{width}x", "").split(",")[0];
  if (
    (acoShopName === "carmarthencameras" || acoShopName === "thujor-se") &&
    acoCurrentPage === "products"
  )
    url =
      src.value.replace("_{width}x", "").split(",")[1] ||
      src.value.replace("_{width}x", "").split(",")[0];
  if (acoShopName === "swissploitation" && acoCurrentPage === "products")
    url = src.value
      .replace("background:url(", "")
      .replace(src.value.split(".jpg").pop(), "");

  if (!/^https?:\/\//i.test(url)) {
    url = "https:" + url.replace(/\s/g, "");
  }

  var pathname;
  if (
    acoShopName === "keissy-sousa-01b7" ||
    acoShopName === "labeler-product-labels"
  ) {
    pathname = new URL(url).pathname.replace(/^(.+?)(?:\.[^.]*)?$/, "$1");
  } else if (acoShopName === "macho-cave") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/(?=_\d{2,3}x).*/g, "")
      .replace(/_.*x/, "");
  } else if (acoShopName === "dgrendel") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/(?=_\d+[Xx]\d).*/g, "");
  } else if (
    acoShopName === "innsport-ba" ||
    acoShopName === "rare-fabric-childrens-boutique"
  ) {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,3}x)$/, "$1");
  } else if (
    acoShopName === "hartford-marathon-foundation" ||
    acoShopName === "6fd8f9" ||
    acoShopName === "millworks-hot-rod"
  ) {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,3}x)$/, "$1")
      .replace("_large", "");
  } else if (acoShopName === "all-day-aesthetics-supplies") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace("_300x300", "");
  } else if (acoShopName === "nirmini" || acoShopName === "central-vitamins") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace("_small", "");
  } else if (acoShopName === "the-babycloset" || acoShopName === "offnova") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4})$/, "$1");
  } else if (acoShopName === "the-little-house-of-fragrance") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/(?=_\d{2,4}x).*/g, "");
  } else if (acoShopName === "midship-runabout-parts") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4}_crop_top)$/, "$1");
  } else if (acoShopName === "firewoodoven" || acoShopName === "e-gwc") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_x\d{2,4}@2x)$/, "$1");
  } else if (acoShopName === "digicentro") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_grande@2x)$/, "$1");
  } else if (acoShopName === "xhdata-cn") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_x\d{2,4})/, "$1")
      .replace("_large", "");
  } else if (acoShopName === "elaf-premium") {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4})$/, "$1")
      .replace(/^(.*)(_\d{2,4}x@\d{1,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4}@2x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x.progressive)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x.progressive.webp)$/, "$1");
  } else if (
    acoShopName === "swissploitation" ||
    acoShopName === "msqueend" ||
    acoShopName === "dd102b" ||
    acoShopName === "mandala-seeds-shop" ||
    acoShopName === "kambukka-nl"
  ) {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4})$/, "$1")
      .replace(/^(.*)(_\d{2,4}x_crop_center@2x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x_crop_center)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4}_crop_center)$/, "$1");
  } else {
    pathname = new URL(url).pathname
      .replace(/^(.+?)(?:\.[^.]*)?$/, "$1")
      .replace(/^(.*)(_\d{2,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4})$/, "$1")
      .replace(/^(.*)(_\d{2,4}x@\d{1,4}x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x\d{2,4}@2x)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x.progressive)$/, "$1")
      .replace(/^(.*)(_\d{2,4}x.progressive.png)$/, "$1")
      .replace(/^(.*)(_grande)$/, "$1");
  }

  const index = pathname.lastIndexOf("/");
  return -1 !== index ? pathname.substring(index + 1) : pathname;
}

/**
 * Given an element, a data source, a badge, and a type, insert the badge and its labels into the element.
 * @param element - the element to insert the badge into
 * @param dataSrc - the data source of the badge
 * @param convertedBadge - the badge to insert
 * @param type - the type of badge to insert
 */
function insertBadgeAndLabels(element, dataSrc, convertedBadge) {
  const { imagePath, styleUpdated, schedule, dynamic, timer } = convertedBadge;

  if (schedule?.status && (subscription || subscription === undefined)) {
    if (moment(moment.utc().format()).isBefore(schedule.start)) return;
    if (moment(moment.utc().format()).isAfter(schedule.end)) return;
    if (scheduleTime(schedule, `aco-badge-${dataSrc}-${convertedBadge.id}`))
      return;
  }

  if (
    timer !== undefined &&
    timer?.status &&
    (subscription || subscription === undefined)
  ) {
    if (new Date().getTime() < new Date(timer?.start).getTime()) return true;
  }

  if (
    subscription === false &&
    (dynamic?.status || (timer !== undefined && timer?.status))
  )
    return true;

  if (!element) return;
  const id = `aco-badge-${dataSrc}-${convertedBadge.id}`; //     if (checked[id]) { //         logIt("already checked"); //     } else { //         logIt(type); //         checked[id] = true;
  if (
    element.parentElement.querySelector(`.product-badge_aco[id='${id}']`) ||
    element.parentElement.querySelector(`.product-badge_aco_img[id='${id}']`)
  )
    return null;
  if (
    element.parentElement.querySelector(`.product-badge_aco[id='${id}']`) ||
    element.parentElement.querySelector(`.product-badge_aco_img[id='${id}']`)
  )
    return null;
  if (convertedBadge.type === "badge") {
    insertBadge(
      element,
      imagePath,
      styleUpdated,
      id,
      dynamic,
      dataSrc,
      convertedBadge,
      timer
    );
  } else {
    insertLabel(
      element,
      imagePath,
      styleUpdated,
      id,
      dynamic,
      dataSrc,
      convertedBadge,
      timer
    );
  } //     }
  logIt(checked);
}

function removeInherits(margin) {
  const clone = cssToObj(margin);
  Object.keys(clone).forEach((key) => {
    if (clone[key] === "inherit") delete clone[key];
    else clone[key] = `${clone[key]} !important`;
  });
  return clone;
}

/**
 * Given an element, return the height of the element.
 * @param element - the element to get the height of
 * @returns The function returns the height of the element.
 */
function getElementHeight(element) {
  var divHeight = 0;
  if (element.offsetHeight) {
    divHeight = element.offsetHeight;
  } else if (element.style.pixelHeight) {
    divHeight = element.style.pixelHeight;
  } else if (element.clientHeight) {
    divHeight = element.clientHeight;
  }
  return divHeight;
}

/**
 * For adding 'aco_product_main' class for stores.
 */
function acoFormSelectorsClassAdd() {
  if (acoShopName.includes("luxreaders")) {
    document.querySelector(".main-image")?.classList.add("aco_product_main");
  }
}

let scheduledItems = {};
/**
 * scheduling badges for a specific time period based on user given timezone
 * @params given scheduled dates and time
 */
const scheduleTime = (schedule, idName) => {
  let timeZone = schedule?.timezone.split(" ");
  let day = new Date().toLocaleString("en-US", {
    weekday: "long",
    timeZone: timeZone[timeZone.length - 1],
  });
  let currentDay = schedule?.weekdays[day.toLocaleLowerCase()];
  let month = new Date().toLocaleString("en-US", {
    dateStyle: "short",
    timeZone: timeZone[timeZone.length - 1],
  });
  if (!currentDay.status) return true;
  const startDate = moment.utc(`${month} ${currentDay.start}`).format();
  const endDate = moment.utc(`${month} ${currentDay.end}`).format();
  const zone = timeZone[timeZone.length - 1];
  if (
    moment(moment.utc().format()).isBefore(
      moment.tz(startDate.replace("Z", ""), zone).utc().format()
    )
  )
    return true;
  if (
    moment(moment.utc().format()).isAfter(
      moment.tz(endDate.replace("Z", ""), zone).utc().format()
    )
  )
    return true;

  let duration = moment.duration(
    moment.tz(endDate.replace("Z", ""), zone).utc().diff(moment.utc().format())
  );
  let timeout = duration.as("milliseconds");
  let interValId, parentInterValId;
  if (timeout < 86400000) {
    interValId = setTimeout(() => {
      document.querySelector(`#${scheduledItems[interValId]}`)?.remove();
    }, timeout);
  }
  let parentDuration = moment.duration(
    moment
      .tz(schedule.end.replace("Z", ""), zone)
      .utc()
      .diff(moment.utc().format())
  );
  let parentTimeout = parentDuration.as("milliseconds");
  if (parentTimeout < 86400000) {
    parentInterValId = setTimeout(() => {
      document.querySelector(`#${scheduledItems[parentInterValId]}`)?.remove();
    }, parentTimeout);
  }
  scheduledItems[interValId] = idName;
  scheduledItems[parentInterValId] = idName;
  return false;
};

/**
 * Given an element, an image path, a style object, and an id, insert the badge into the element.
 * @param element - the element to insert the badge into
 * @param imagePath - the path to the badge
 * @param styleUpdated - the style object to apply to the badge
 * @param id - the id of the badge
 * @param dynamic - the dynamic configuration of the label
 * @param dataSrc - the data src of the product
 * @param convertedBadge - the badge to insert
 */
function insertBadge(
  element,
  imagePath,
  styleUpdated,
  id,
  dynamic,
  dataSrc,
  convertedBadge,
  timer,
  variantId = null,
  rule = {},
  variantData = {}
) {
  try {
    const themeSelector = themeJSON[acoCurrentPage];
    const margins = removeInherits(styleUpdated.margin);
    if (
      acoThemeName === "ecomify-lite" &&
      margins?.bottom?.includes("%") &&
      acoCurrentPage !== "products"
    ) {
      delete margins["bottom"];
    }
    const positionClass = cssToObj(styleUpdated.margin).objectPosition.replace(
      " ",
      "-"
    );
    const width = styleUpdated.width;
    const height = styleUpdated?.aspectRatio ? "auto" : styleUpdated.height;
    let parentClass = `product-badge_aco ${positionClass} `;
    if (variantId) {
      parentClass += ` aco_product_variant aco_variant-${variantId} `;
    }
    if (styleUpdated?.aspectRatio) parentClass += " aspect-ratio-enabled ";
    else parentClass += " aspect-ratio-disabled ";
    if (styleUpdated?.width.includes("px")) parentClass += " pixelified ";
    else parentClass += " percentified ";
    const childClass = `product-badge_aco_img aco_badge animate__${styleUpdated?.animation?.name} img_${positionClass}`;

    var childStyle = {
      zIndex: 2,
      visibility: "visible",
      opacity: styleUpdated?.opacity || 1,
      width: "100%",
      height: "100%",
      margin: 0,
      position: "relative",
      objectFit: "fill",
      background: "transparent",
      maxWidth: "100%",
      maxHeight: "100%",
      animationDuration: `${styleUpdated?.animation?.duration}s !important`,
      animationIterationCount: `${styleUpdated?.animation?.iteration} !important`,
      animationName: `${styleUpdated?.animation?.name} !important`,
    };

    const parentStyle = {
      width,
      height,
      position: "absolute",
      ...margins,
      // [margins?.objectPosition?.split(' ')[0]]: `${parseInt(margins[margins?.objectPosition?.split(' ')[0]])}${styleUpdated?.width.includes("px") ? "px !important" : "% !important"}`,
      // [margins?.objectPosition?.split(' ')[1]]: `${parseInt(margins[margins?.objectPosition?.split(' ')[1]])}${styleUpdated?.width.includes("px") ? "px !important" : "% !important"}`,
      transform: `rotate(${styleUpdated?.angle || 0}deg)`,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      overflow: "visible",
      zIndex: 2,
    };

    const marginTop = Math.max(
      Math.abs(parseInt(margins.top)) || 0,
      parseInt(element.style.marginTop) || 0
    );
    const marginBottom = Math.max(
      Math.abs(parseInt(margins.bottom) || 0),
      parseInt(element.style.marginBottom) || 0
    );

    if (Object.values(margins).filter((word) => word.startsWith("-"))) {
      if (
        typeof acoThemeName !== "number" &&
        !marginException.includes(acoThemeName.toLowerCase())
      ) {
        if (marginTop)
          element.closest(themeSelector.parent).style.marginTop =
            `${marginTop}px`;
        if (marginBottom)
          element.closest(themeSelector.parent).style.marginBottom =
            `${marginBottom}px`;
      }
      element.style.setProperty("overflow", "visible", "!important");
      element.style.setProperty(
        "position",
        element.style.position || "relative",
        "!important"
      );
    }

    let child = "";
    let parent = "";
    if (dynamic?.status || (timer !== undefined && timer?.status)) {
      fetch(labelerUrl + imagePath).then((response) =>
        response.text().then((svg) => {
          if (timer?.status) parentClass += " aco-timer-diabled ";
          parent = `<div id="${id}" class="${parentClass}" style="${convertToStyle(
            parentStyle
          )}">${svg}</div>`;

          if (
            element.querySelector(
              "#aco-badge-" + dataSrc + "-" + convertedBadge.id
            )
          )
            return null;
          if (
            element.querySelector(
              `.product-badge_aco_img.aco_badge.img_${positionClass}.aco_${dataSrc}_${convertedBadge.id}`
            )
          )
            return null;

          if (timer?.status) {
            timerBadge(timer, id, element);
            const selector = "aco-badge-" + dataSrc + "-" + convertedBadge.id;
            element.classList.add("product-badge_aco_parent");
            element.insertAdjacentHTML("beforeend", parent);
            element
              .querySelector("#" + selector + " svg")
              .classList.add(
                ...childClass.split(" "),
                "aco_" + dataSrc + "_" + convertedBadge.id
              );
            element.querySelector("#" + selector + " svg").style =
              convertToStyle(childStyle);
          }

          if (
            appVersion === "v2" &&
            variantData?.variants_compare_at_price &&
            parseInt(variantData?.variants_compare_at_price) > 0
          ) {
            percentageValue = Math.round(
              100 -
                (parseFloat(variantData?.variants_price) /
                  parseFloat(variantData?.variants_compare_at_price)) *
                  100
            );
          } else {
            percentageValue = convertedBadge.percentage;
          }

          if (percentageValue && !timer?.status) {
            element.classList.add("product-badge_aco_parent");
            element.insertAdjacentHTML("beforeend", parent);
            const selector = "aco-badge-" + dataSrc + "-" + convertedBadge.id;
            element
              .querySelector("#" + selector + " svg")
              .classList.add(
                ...childClass.split(" "),
                "aco_" + dataSrc + "_" + convertedBadge.id
              );
            element.querySelector("#" + selector + " svg").style =
              convertToStyle(childStyle);
            element.querySelectorAll("#" + selector + " svg")[1].style = "";
            if (dynamic?.status) {
              element.querySelector(
                "#" + selector + " svg #tchange tspan"
              ).innerHTML = percentageValue + "%";
            }
          }
        })
      );
    } else {
      child = `<img class="${childClass}" src="${labelerUrl}${imagePath}" style="${convertToStyle(
        childStyle
      )}" alt="image" />`;
      parent = `<div id="${id}" class="${parentClass}" style="${convertToStyle(
        parentStyle
      )}" aco_badge_id="badge_${convertedBadge.id}">${child}</div>`;
      if (
        element.querySelector(
          `.product-badge_aco_img.aco_badge.img_${positionClass}[src="${labelerUrl}${imagePath}"]`
        )
      )
        return null;

      element.classList.add("product-badge_aco_parent");
      element.insertAdjacentHTML("beforeend", parent);
    }

    const extra = themeSelector?.extra?.badge;
    if (extra) extra(element, styleUpdated);
  } catch (error) {
    logIt(error);
  }
}

/**
 * Given a parent element and a theme selector, return the element that matches the theme selector that displays.
 * @param labelParent - the parent element
 * @param themeSelector - the theme selector
 * @returns The function returns the element that matches the theme selector.
 */
function findDisplayElement(labelParent, themeSelector, styleUpdated) {
  if (themeSelector[styleUpdated.position].join(",").includes("last-of-type"))
    return labelParent.querySelector(
      themeSelector[styleUpdated.position].join(",")
    );
  var allMatching = labelParent.querySelectorAll(
    themeSelector[styleUpdated.position].join(",")
  );
  if (
    acoCurrentPage === "products" &&
    acoShopName === "start-beauties" &&
    Array.from(allMatching).find((ele) =>
      ele.classList.contains("pmslider-root")
    )
  ) {
    return Array.from(allMatching).find((ele) =>
      ele.classList.contains("pmslider-root")
    );
  }
  if (
    acoCurrentPage === "products" &&
    acoShopName === "remarkable-outdoor-living" &&
    styleUpdated.position === "belowProductPrice"
  ) {
    allMatching = labelParent.querySelectorAll(
      [
        ".product-single__meta .product-block--price",
        ".grid-product__price",
      ].join(",")
    );
  }
  return Array.from(allMatching).find(
    (el) => window.getComputedStyle(el).display !== "none"
  );
}

const exceptionalStores = {
  "shopvoorgezondheid-nl": {
    contains: "product-single__photos",
    closest: ".product-single",
  },
  depuley: {
    contains: "grid__item",
    closest: ".product-single-wrapper",
    page: "products",
  },
  "untamed-apparel-online": {
    contains: "grid__item",
    closest: ".card-wrapper,.product,.product-section",
    page: "products",
  },
  "whippersnappers-online": {
    contains: "grid__item",
    closest: ".product",
    page: "products",
  },
  "urbanco-official-store": {
    contains: "product__media-item",
    closest: ".product",
    page: "products",
  },
  "mxunity-com": { closest: ".grid-product__content", page: "collections" },
  "l-yah-on": { contains: "grid__item", closest: ".product", page: "products" },
  overboarduk: { contains: "item", closest: ".product", page: "products" },
  humaze: { closest: ".grid-product__content", page: "home" },
  strawbrrymilkshop: { closest: ".product-single", page: "products" },
  "diwans-co-uk": {
    contains: "product__media-wrapper",
    page: "products",
    closest: ".product",
  },
  "alisas-true-colors": {
    contains: "product__media-item",
    page: "products",
    closest: ".product",
  },
  shopjantarmantar: {
    contains: "product__media-item",
    page: "products",
    closest: ".product",
  },
  "millam-accesorios": { exludeHandle: "cbb-frequently-bought-selector-link" },
};

/**
 * Given an element, an image path, a style object, and an id, insert the label into the element.
 * @param element - the element to insert the label into
 * @param imagePath - the path to the label
 * @param styleUpdated - the style object to apply to the label
 * @param id - the id of the label
 * @param dynamic - the dynamic configuration of the label
 * @param dataSrc - the data src of the product
 * @param convertedBadge - the badge to insert
 */
function insertLabel(
  element,
  imagePath,
  styleUpdated,
  id,
  dynamic,
  dataSrc,
  convertedBadge,
  timer,
  variantId = null,
  rule = {},
  variantData = {}
) {
  try {
    const themeSelector = themeJSON[acoCurrentPage];
    let labelParent = element.closest(themeSelector.parent.join(","));
    if (
      exceptionalStores[acoShopName] &&
      labelParent.classList.contains(
        exceptionalStores[acoShopName]?.contains
      ) &&
      (exceptionalStores[acoShopName]?.page === undefined ||
        exceptionalStores[acoShopName]?.page === acoCurrentPage)
    ) {
      labelParent = element.closest(exceptionalStores[acoShopName]?.closest);
    }
    const labelContainer = findDisplayElement(
      labelParent,
      themeSelector,
      styleUpdated
    );
    if (
      labelParent.querySelector(
        `.product-badge_aco.${styleUpdated.position} img.aco_label[src="${labelerUrl}${imagePath}"]`
      )
    )
      return null;
    let height = styleUpdated.height;
    if (
      typeof styleUpdated.aspectRatio !== "undefined" &&
      !styleUpdated.aspectRatio
    ) {
      const updatedHeight = styleUpdated?.height?.replace("%", "");
      height = `${(labelContainer.clientWidth * updatedHeight) / 100}px`;
    }
    logIt(labelContainer);
    let parentClass = `product-badge_aco ${styleUpdated.position}`;
    if (variantId) {
      parentClass += ` aco_product_variant aco_variant-${variantId} `;
    }
    if (styleUpdated?.aspectRatio) parentClass += " aspect-ratio-enabled ";
    else parentClass += " aspect-ratio-disabled ";
    if (styleUpdated?.width.includes("px")) parentClass += " pixelified ";
    else parentClass += " percentified ";
    const childClass = `product-badge_aco_img aco_label animate__${styleUpdated?.animation?.name}`;
    var labelAlignment = {};
    if (styleUpdated?.alignment && styleUpdated?.alignment !== "left") {
      labelAlignment = {
        margin: styleUpdated?.alignment === "center" ? "0 auto" : "0 0 0 auto",
      };
    }
    var childStyle = {
      animationDuration: `${styleUpdated?.animation?.duration}s`,
      animationIterationCount: styleUpdated?.animation?.iteration,
      animationName: `${styleUpdated?.animation?.name} !important`,
      float: "left",
      ...styleUpdated?.margin,
      width: `100%`,
      height,
      opacity: 1,
      objectFit: "fill",
      display: "block !important",
      margin: 0,
      background: "transparent",
      maxWidth: "100%",
      maxHeight: "100%",
    };

    const parentStyle = {
      opacity: styleUpdated?.opacity || 1,
      transform: `rotate(${styleUpdated?.angle || 0}deg)`,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      zIndex: 1,
      position: "relative",
      width: styleUpdated?.width,
      ...labelAlignment,
    };

    let child = "";
    let parent = "";
    if (dynamic?.status || (timer !== undefined && timer?.status)) {
      fetch(labelerUrl + imagePath).then((response) =>
        response.text().then((svg) => {
          if (timer?.status) {
            parentClass += ` aco-timer-diabled aco-timer-${convertedBadge.id}`;
            if (labelParent.querySelector(".aco-timer-" + convertedBadge.id))
              return null;
          }
          if (
            labelParent.querySelector(
              "#aco-badge-" + dataSrc + "-" + convertedBadge.id
            )
          )
            return null;
          if (
            labelParent.querySelector(
              `.product-badge_aco_img.aco_label.aco_${convertedBadge.id}`
            )
          )
            return null;
          parent = `<div id="${id}" class="${parentClass}" style="${convertToStyle(
            parentStyle
          )}">${svg}</div>`;
          if (timer?.status) {
            timerBadge(timer, id, labelParent);
            const selector = "aco-badge-" + dataSrc + "-" + convertedBadge.id;
            labelContainer?.classList.add("product-badge_aco_parent");
            labelContainer?.insertAdjacentHTML("afterend", parent);
            labelParent
              .querySelector("#" + selector + " svg")
              .classList.add(
                ...childClass.split(" "),
                "aco_" + dataSrc + "_" + convertedBadge.id
              );
            labelParent.querySelector("#" + selector + " svg").style =
              convertToStyle(childStyle);
          }
          if (
            appVersion === "v2" &&
            variantData?.variants_compare_at_price &&
            parseInt(variantData?.variants_compare_at_price) > 0
          ) {
            percentageValue = Math.round(
              100 -
                (parseFloat(variantData?.variants_price) /
                  parseFloat(variantData?.variants_compare_at_price)) *
                  100
            );
          } else {
            percentageValue = convertedBadge.percentage;
          }

          if (percentageValue && !timer?.status) {
            labelContainer.insertAdjacentHTML("afterend", parent);
            const selector = "aco-badge-" + dataSrc + "-" + convertedBadge.id;
            labelContainer.parentElement
              .querySelector("#" + selector + " svg")
              .classList.add(
                ...childClass.split(" "),
                "aco_" + convertedBadge.id
              );
            labelContainer.parentElement.querySelector(
              "#" + selector + " svg"
            ).style = convertToStyle(childStyle);
            labelContainer.parentElement.querySelectorAll(
              "#" + selector + " svg"
            )[1].style = "";
            if (dynamic?.status) {
              labelContainer.parentElement.querySelector(
                "#" + selector + " svg #tchange tspan"
              ).innerHTML = percentageValue + "%";
            }
          }
        })
      );
    } else {
      child = `<img class="${childClass}" src="${labelerUrl}${imagePath}" style="${convertToStyle(
        childStyle
      )}" alt="image" />`;
      parent = `<div id="${id}" class="${parentClass}" style="${convertToStyle(
        parentStyle
      )}">${child}</div>`;
      labelContainer.insertAdjacentHTML("afterend", parent);
    }
    const extra = themeSelector?.extra?.label;
    if (extra) extra(labelContainer);
  } catch (error) {
    logIt(error);
  }
}

const productSrcSelector = {
  "80dafb": [
    "img[srcset]",
    " img[src]",
    "img[data-src]",
    "img[data-srcset]",
    "div.product-item__bg[aria-label]",
    "div.hover[data-bgset]",
  ],
  "orange-you-chill-boutique": [
    "img[data-lazy-src]",
    "img[srcset]",
    "img[src]",
    "img[data-src]",
    "img[data-srcset]",
    "source[srcset]",
    "source[data-src]",
    "source[data-srcset]",
    "div.product-item__bg[aria-label]",
  ],
  "brutus-monroe": [
    "img[data-src]",
    "img[data-srcset]",
    "img[data-rimg][src]",
    "source[srcset]",
    "source[data-src]",
    "source[data-srcset]",
    "div.product-item__bg[aria-label]",
  ],
  swissploitation: [
    "img[data-src]",
    "img[data-srcset]",
    "img[data-rimg][src]",
    "source[srcset]",
    "source[data-src]",
    "source[data-srcset]",
    "div.product-item__bg[aria-label]",
    "div[style].inner-img",
  ],
  "giftwifts-lcs": [
    "img[srcset], img[data-src], img[data-srcset], source[srcset] , source[data-src], source[data-srcset], div.product-item__bg[aria-label], div[data-bg]",
  ],
};

/**
 * This function sets up the normal badges for the page.
 * @param productSelectors - an array of selectors for the product images.
 */
function setUpNormalBadges(convertedBadge) {
  const { rule, dynamic } = convertedBadge;
  appVersion = shopJSON?.version;
  if (
    (appVersion === "v2" && acoRulesUpdated.includes(rule.key)) ||
    dynamic?.status
  ) {
    setUpCollectionBadges(convertedBadge);
  } else {
    productSelectors.forEach((productSelector) => {
      const productImages = Array.from(
        document.querySelectorAll(productSelector.trim())
      );
      logIt(productImages);
      productImages.forEach((element) => {
        let dataSrc;
        if (productSrcSelector[acoShopName]) {
          dataSrc = getProductSrcFromElement(
            element.querySelector(productSrcSelector[acoShopName])
          );
        } else {
          dataSrc = getProductSrcFromElement(
            element.querySelector(
              "img[srcset], img[src], img[data-src], img[data-srcset], source[srcset] , source[data-src], source[data-srcset], div.product-item__bg[aria-label], div[data-bg]"
            )
          );
        }
        if (dataSrc && (converted[dataSrc] || converted["*"])) {
          if (converted[dataSrc]) {
            for (const convertedBadge of converted[dataSrc]) {
              if (
                appVersion === "v1" ||
                !acoRulesUpdated.includes(convertedBadge?.ruleKey)
              ) {
                insertBadgeAndLabels(element, dataSrc, convertedBadge);
              }
            }
          }
          for (const convertedBadge of converted["*"]) {
            if (
              appVersion === "v1" ||
              !acoRulesUpdated.includes(convertedBadge?.ruleKey)
            ) {
              insertBadgeAndLabels(element, dataSrc, convertedBadge);
            }
          }
        }
      });
    });
  }
}

/**
 * This function sets up the event listener for the lazyloaded event.
 */
function setUpLazyBadges(convertedBadge) {
  document.addEventListener("lazyloaded", function (e) {
    const dataSrc = getProductSrcFromElement(e.target);
    if (
      e.target.closest(productSelectors.join(",")) &&
      dataSrc &&
      (converted[dataSrc] || converted["*"])
    ) {
      if (converted[dataSrc]) {
        for (const convertedBadge of converted[dataSrc]) {
          if (
            appVersion === "v1" ||
            !acoRulesUpdated.includes(convertedBadge?.ruleKey)
          ) {
            insertBadgeAndLabels(
              e.target.closest(productSelectors.join(",")),
              dataSrc,
              convertedBadge
            );
          }
        }
      }
      for (const convertedBadge of converted["*"]) {
        if (
          appVersion === "v1" ||
          !acoRulesUpdated.includes(convertedBadge?.ruleKey)
        ) {
          insertBadgeAndLabels(
            e.target.closest(productSelectors.join(",")),
            dataSrc,
            convertedBadge
          );
        }
      }
    }
  });
}
var renderCount = 0;
var fetchDataFlag = false;
/**
 * This function sets up the mutation observer that will be used to detect changes to the product mutation selectors.
 * @param {function} setUpNormalBadges - the function that will be called to set up the normal badges.
 */
function setUpMutationBadges() {
  if (
    productMutationSelectors === undefined ||
    !productMutationSelectors.length
  )
    return null;
  var targets = Array.from(
    document.querySelectorAll(productMutationSelectors.join(","))
  );

  if (targets.length > 0) {
    for (const target of targets) {
      // create an observer instance
      var observer = new MutationObserver(async function (mutations) {
        for (const mutation of mutations) {
          if (!fetchDataFlag) {
            fetchDataFlag = true;
            if (appVersion === "v2") {
              await getProductsJson("mutation");
              if (
                acoShopName === "tumatera-co" &&
                acoCurrentPage === "products"
              ) {
                window.addEventListener("locationchange", function () {
                  const productParent = document.querySelector(
                    ".product__container [aco-handler-productpage][aco-handler-selected]"
                  );
                  let badges = Array.from(
                    productParent.querySelectorAll(".product-badge_aco")
                  );
                  for (const ele of badges) {
                    ele.remove();
                  }
                });
              }
              if (acoShopName === "tecno-store-pl" && renderCount === 0) {
                setTimeout(() => {
                  acoLoadScript();
                  renderCount++;
                }, 2000);
              }
            }
            initLabelers();
            const afterAllFunction = themeJSON[acoCurrentPage]?.extra?.afterAll;
            if (afterAllFunction) afterAllFunction();
            setTimeout(() => {
              fetchDataFlag = false;
            }, 500);
          }
        }
      }); // configuration of the observer:

      var config = mutationConfig; // pass in the target node, as well as the observer options

      observer.observe(target, config);
    }
  }
}

/**
 * This function sets up the trust badges.
 */
async function setUpTrustBadges() {
  //subscription case checking here as subscription true or undefined
  // in regenerate case of json data, will subscription value not updating.
  if (!subscription) return true;
  const trustBadges = Object.keys(shopJSON)
    .filter((key) => key.startsWith("badgeLabel"))
    .map((key) => shopJSON[key])
    .filter((badge) => badge.type === "trust" && badge.status);
  for (const trustBadge of trustBadges) {
    const { type, trust, selectedPages, styleUpdated } = trustBadge;
    const { width, badgeType, fill, animation, ...outerStyle } = styleUpdated;
    let { status, text, ...headerStyle } = trust.header;

    let fontSupport = document.createElement("link");
    fontSupport.type = "text/css";
    fontSupport.rel = "stylesheet";
    fontSupport.href = `//fonts.googleapis.com/css?family=${headerStyle?.fontFamily}`;
    document.head.appendChild(fontSupport);

    let targetEle = [];
    if (selectedPages.length > 0)
      targetEle.push(
        document.querySelectorAll('form[action="/cart/add"]')[
          document.querySelectorAll('form[action="/cart/add"]').length - 1
        ]
      );
    targetEle.push(...document.querySelectorAll(".aco-trust-badges"));
    let trustBadgeElements = "";
    if (trust?.icons?.length > 0) {
      let badgeColor = !["normal", "card"].includes(badgeType) ? fill : null;
      for (let index = 0; index < trust?.icons.length; index++) {
        const path = trust?.icons[index];
        if (path.indexOf(".svg") !== -1) {
          await fetch(labelerUrl + `/uploads/${path}`).then((response) =>
            response.text().then((svg) => {
              let svgElement = svg;
              if (badgeColor !== null) {
                if (badgeColor === undefined) badgeColor = "#9A9A9A";
                let doc = new DOMParser().parseFromString(
                  svgElement,
                  "image/svg+xml"
                );
                let mainSvg = doc.querySelector("svg");
                for (const ele of mainSvg.querySelectorAll("#aco_change")) {
                  ele.setAttribute("fill", `${badgeColor}`);
                }
                svgElement = doc.documentElement.outerHTML;
              }

              let afterSvg = svgElement.replace(
                "<svg",
                `<svg width='${width}' height='100%'`
              );
              trustBadgeElements += `<div style="display: inline-block; padding: 5px; width: ${width}" class="aco_selected_trust">${afterSvg}</div>`;
            })
          );
        } else {
          trustBadgeElements += `<div style="display: inline-block; padding: 5px; width: ${width}"><img src=${
            labelerUrl + `/uploads/${path}`
          } width='${width} !important' height='100% !important'></img></div>`;
        }
      }

      let parent = `<div style="padding: 12px; ${convertToStyle(
        outerStyle
      )}" id="animate__${animation}" class="animate__${animation} aco_trust_checkout"><h3 class="aco_trust_header" style="display: block; ${convertToStyle(
        headerStyle
      )}">${trust?.header.text}</h3><div>${trustBadgeElements}</div></div>`;
      setTimeout(() => {
        for (const target of targetEle) {
          target.insertAdjacentHTML("afterend", parent);
        }
      }, 1000);
    }
  }
}

/**
 * This function is used to update collection based rule
 */
async function setUpCollectionBadges(convertedBadge) {
  const { imagePath, styleUpdated, schedule, dynamic, timer, products, rule } =
    convertedBadge;

  if (
    timer !== undefined &&
    timer?.status &&
    (subscription || subscription === undefined)
  ) {
    if (new Date().getTime() < new Date(timer?.start).getTime()) return true;
  }

  if (
    subscription === false &&
    (dynamic?.status || (timer !== undefined && timer?.status))
  )
    return true;

  let selectedHandleArrays = [];
  if (rule.key === "specificTags") {
    const selectedTags = rule?.multiTagSelect || [];
    const excludedTags = rule?.excludedTags || [];
    if (selectedTags.length === 0) {
      selectedHandleArrays = acoProductsArray
        ?.filter(
          (item) =>
            item.product_tags.some((r) => selectedTags.includes(r)) ||
            !item.product_tags.some((r) => excludedTags.includes(r))
        )
        .map((item) => item.product_handle);
    } else {
      selectedHandleArrays = acoProductsArray
        ?.filter(
          (item) =>
            item.product_tags.some((r) => selectedTags.includes(r)) &&
            !item.product_tags.some((r) => excludedTags.includes(r))
        )
        .map((item) => item.product_handle);
    }
  } else if (rule.key === "specificCollection") {
    const collectionIds = convertedBadge?.rule.collectionShopifyIds.map(
      (item) => {
        return parseInt(item.replace("gid://shopify/Collection/", ""));
      }
    );
    if (rule?.collectionType?.[0] === "exclude") {
      selectedHandleArrays = acoProductsArray
        ?.filter(
          (item) =>
            !item.product_collections.some((r) => collectionIds.indexOf(r) >= 0)
        )
        .map((item) => item.product_handle);
    } else {
      selectedHandleArrays = acoProductsArray
        ?.filter((item) =>
          item.product_collections.some((r) => collectionIds.indexOf(r) >= 0)
        )
        .map((item) => item.product_handle);
    }
  } else if (rule.key === "productType") {
    const selectedTypes = rule?.multiTypeSelect || [];
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => selectedTypes.includes(decodeHtml(item.product_type)))
      .map((item) => item.product_handle);
  } else if (rule.key === "productVendor") {
    const selectedVendors = rule?.multiVendorSelect || [];
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => selectedVendors.includes(item.product_vendor))
      .map((item) => item.product_handle);
  } else if (rule.key === "inStock") {
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => item.product_available)
      .map((item) => item.product_handle);
  } else if (rule.key === "outOfStock") {
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => !item.product_available)
      .map((item) => item.product_handle);
  } else if (rule.key === "lowStock") {
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => {
        const sum = item?.product_variants.reduce((accumulator, object) => {
          return accumulator + object.variants_inventory_quantity;
        }, 0);
        return sum <= rule?.count && sum > 0;
      })
      .map((item) => item.product_handle);
  } else if (rule.key === "priceRange") {
    selectedHandleArrays = acoProductsArray
      ?.filter(
        (item) =>
          parseInt(item.product_price) / 100 <= rule?.minMax?.max &&
          parseInt(item.product_price) / 100 >= rule?.minMax?.min
      )
      .map((item) => item.product_handle);
  } else if (rule.key === "newArrivals") {
    const now = new Date();
    selectedHandleArrays = acoProductsArray
      ?.filter(
        (item) =>
          new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - rule?.dayCount
          ) < new Date(item.product_created_at)
      )
      .map((item) => item.product_handle);
  } else if (rule.key === "comingSoon") {
    const now = new Date();
    selectedHandleArrays = acoProductsArray
      ?.filter(
        (item) =>
          new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - rule?.dayCount
          ) < new Date(item.product_created_at) && !item.product_available
      )
      .map((item) => item.product_handle);
  } else if (rule.key === "publishedDate") {
    selectedHandleArrays = acoProductsArray
      ?.filter(
        (item) =>
          new Date(rule?.fromTo?.from) < new Date(item.product_published_at) &&
          new Date(rule?.fromTo?.to) > new Date(item.product_published_at)
      )
      .map((item) => item.product_handle);
  } else if (rule.key === "specificProducts") {
    selectedHandleArrays = acoProductsArray
      ?.filter((item) =>
        rule?.products.includes(JSON.stringify(item.product_id))
      )
      .map((item) => item.product_handle);
  } else if (rule.key === "specificVariants") {
    let variantIds = [];
    rule?.products.map((item) => {
      item.variants.map((ele) => {
        variantIds.push(ele);
      });
    });
    if (acoCurrentPage === "products") {
      const currentVariant = new URLSearchParams(window.location.search).get(
        "variant"
      );
      const productHandle = window.location.pathname.split("/").pop();
      if (currentVariant) {
        document.querySelectorAll(".aco_product_variant").forEach((item) => {
          if (!item.classList.contains(`aco_variant-${currentVariant}`)) {
            item.remove();
          }
        });
        selectedHandleArrays = acoProductsArray
          .filter(
            (item) =>
              item.product_handle === productHandle &&
              variantIds.includes(currentVariant)
          )
          .map((item) => item.product_handle);
        if (variantIds.includes(currentVariant)) {
          selectedHandleArrays.push(productHandle);
        }
        acoProductsArray
          .filter(
            (item) =>
              item.product_handle !== productHandle &&
              variantIds.includes(JSON.stringify(item.product_first_variant))
          )
          .forEach((element) => {
            selectedHandleArrays.push(element.product_handle);
          });
      } else {
        selectedHandleArrays = acoProductsArray
          .filter((item) =>
            variantIds.includes(JSON.stringify(item.product_first_variant))
          )
          .map((item) => item.product_handle);
      }
    } else {
      selectedHandleArrays = acoProductsArray
        ?.filter((item) =>
          variantIds.includes(JSON.stringify(item.product_first_variant))
        )
        .map((item) => item.product_handle);
    }
  } else {
    selectedHandleArrays = acoProductsArray
      ?.filter((item) => item)
      .map((item) => item.product_handle);
  }
  if (!selectedHandleArrays?.length) return;
  const parentSelectors = themeJSON[acoCurrentPage]?.parent;
  parentSelectors.forEach((parentSelector) => {
    productSelectors.forEach((productSelector) => {
      selectedHandleArrays.forEach((selectedHandle) => {
        const selectedHandlesCollection = Array.from(
          document.querySelectorAll(`[aco-labeler-handle="${selectedHandle}"]`)
        );
        selectedHandlesCollection.forEach((handle) => {
          const selectedElement = handle
            ?.closest(parentSelector)
            ?.querySelectorAll(productSelector);
          selectedElement?.forEach((singleSelectedElement) => {
            if (
              exceptionalStores[acoShopName] &&
              exceptionalStores[acoShopName]?.page === acoCurrentPage
            ) {
              singleSelectedElement = handle
                ?.closest(exceptionalStores[acoShopName]?.closest)
                ?.querySelector(productSelector);
            }
            if (
              exceptionalStores[acoShopName] &&
              exceptionalStores[acoShopName]?.exludeHandle
            ) {
              if (
                handle?.classList.contains(
                  exceptionalStores[acoShopName]?.exludeHandle
                )
              )
                return;
            }
            if (
              singleSelectedElement === undefined ||
              singleSelectedElement === null
            )
              return;
            if (
              acoShopName === "clean-cells" &&
              handle?.hasAttribute("title") &&
              acoCurrentPage === "products"
            )
              return;
            let elementGroups = [singleSelectedElement];
            if (handle.hasAttribute("aco-handler-productPage")) {
              elementGroups = Array.from(
                handle
                  ?.closest(parentSelector)
                  ?.querySelectorAll(productSelector)
              );
            }
            if (elementGroups?.length) {
              elementGroups.forEach((element) => {
                const id = `aco-badge-${selectedHandle}-${convertedBadge.id}`;
                if (
                  !dynamic?.status &&
                  (element.querySelector(`.product-badge_aco[id='${id}']`) ||
                    element.querySelector(`.product-badge_aco_img[id='${id}']`))
                )
                  return null;

                let variantId = null;
                let variantData = {};
                let productData = [];
                if (rule.key === "specificVariants" || dynamic?.status) {
                  const currentVariant = new URLSearchParams(
                    window.location.search
                  ).get("variant");
                  if (
                    currentVariant &&
                    parseInt(currentVariant) ===
                      acoProductsArray
                        .filter(
                          (item) => item.product_handle === selectedHandle
                        )[0]
                        ?.product_variants.filter(
                          (item) => item.variants_id == parseInt(currentVariant)
                        )[0]?.variants_id
                  ) {
                    variantId = currentVariant;
                  } else {
                    variantId = acoProductsArray
                      .filter((item) => item.product_handle === selectedHandle)
                      .map((item) => item.product_first_variant)[0];
                  }

                  if (acoCurrentPage === "products") {
                    document
                      .querySelectorAll(".aco_product_variant")
                      .forEach((item) => {
                        if (
                          !item.classList.contains(`aco_variant-${variantId}`)
                        ) {
                          item.remove();
                        }
                      });
                  }

                  acoProductsArray.forEach((product) => {
                    product.product_variants.forEach((variant) => {
                      if (
                        variantId !== undefined &&
                        JSON.stringify(variant.variants_id) ===
                          JSON.stringify(JSON.parse(variantId))
                      )
                        productData.push(variant);
                    });
                  });
                  variantData = productData[0];
                }
                if (
                  schedule?.status &&
                  (subscription || subscription === undefined)
                ) {
                  if (moment(moment.utc().format()).isBefore(schedule.start))
                    return;
                  if (moment(moment.utc().format()).isAfter(schedule.end))
                    return;
                  if (
                    scheduleTime(
                      schedule,
                      `aco-badge-${selectedHandle}-${convertedBadge.id}`
                    )
                  )
                    return;
                }
                if (convertedBadge.type === "badge") {
                  insertBadge(
                    element,
                    imagePath,
                    styleUpdated,
                    id,
                    dynamic,
                    selectedHandle,
                    convertedBadge,
                    timer,
                    variantId,
                    rule,
                    variantData
                  );
                } else {
                  insertLabel(
                    element,
                    imagePath,
                    styleUpdated,
                    id,
                    dynamic,
                    selectedHandle,
                    convertedBadge,
                    timer,
                    variantId,
                    rule,
                    variantData
                  );
                }
              });
            }
          });
        });
      });
    });
  });
}

/**
 * This funcition to fetch products details in json format
 */
async function getProductsJson(type = "normal") {
  const handleArray = [];
  if (acoCurrentPage === "products" && type === "normal") {
    acoFormSelectorsClassAdd();
    const productHandle = decodeURIComponent(
      window.location.pathname.split("/").pop()
    );
    const productParentSelectors = themeJSON[acoCurrentPage]?.parent;
    const productFormSelectors = acoFormSelectors.find(
      (t) => document.querySelectorAll(t).length
    );
    productFormSelectors &&
      document
        .querySelectorAll(productFormSelectors)
        .forEach((formSelector) => {
          let a = formSelector.closest("[aco-labeler-element]");
          if (!a) {
            const productParentSelector = productParentSelectors.find(
              (parentSelector) => !!formSelector.closest(parentSelector)
            );
            const parentDivSelector = formSelector.closest(
              productParentSelector
            );
            parentDivSelector?.setAttribute(
              "aco-labeler-handle",
              productHandle
            );
            parentDivSelector?.setAttribute("aco-handler-selected", "");
            parentDivSelector?.setAttribute("aco-handler-productPage", "");
          }
        });
    handleArray.push(productHandle);
  } else {
    document
      .querySelectorAll(
        `${acoProductLinkSelectors}:not(body[aco-shop-name="modern-k9"][aco-theme-page="products"] a.standard-link[href*="/products/"]):not([href*="cdn.shopify.com"]):not([aco-labeler-handle]):not([aco-handler-selected])`
      )
      .forEach((element) => {
        element?.setAttribute("aco-handler-selected", "");
        let handle = element?.getAttribute("href").toString();
        if (handle && handle.indexOf("/products/") > -1) {
          let value = (function (element) {
            let handle = element.split("/products/")[1].split("#")[0];
            return (
              handle.indexOf("/") > -1
                ? (handle = handle.split("/")[0].split("&")[0])
                : handle.indexOf("?") > -1 && (handle = handle.split("?")[0]),
              handle
            );
          })(handle);
          if (
            !handleArray.includes(decodeURIComponent(value)) &&
            !decodeURIComponent(value).includes("https:")
          ) {
            value &&
              (handleArray.push(decodeURIComponent(value)),
              element.setAttribute(
                "aco-labeler-handle",
                decodeURIComponent(value)
              ));
          }
          if (
            handleArray.includes(decodeURIComponent(value)) &&
            !element.hasAttribute("aco-labeler-handle")
          ) {
            element.setAttribute(
              "aco-labeler-handle",
              decodeURIComponent(value)
            );
          }
        }
      });
  }

  const handleArrayCombined = handleArray.map((ele) => 'handle:"' + ele + '"');
  if (handleArrayCombined.length) {
    var firstGroupedHandles = [...handleArrayCombined];
    var secondGroupedHandles = [];
    if (handleArrayCombined.length > 150) {
      firstGroupedHandles = handleArrayCombined.slice(0, 150);
      secondGroupedHandles = handleArrayCombined.slice(150);
    }
    const fetchUrl = `/search?q=${firstGroupedHandles.join(
      " OR "
    )}+"&type=product&view=acoProductLabelJson`;
    await fetch(encodeURI(fetchUrl), {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .catch((err) => console.error(err))
      .then(async (data) => {
        acoProductsArray = data;
        if (secondGroupedHandles.length) {
          const fetchUrl2 = `/search?q=${secondGroupedHandles.join(
            " OR "
          )}+"&type=product&view=acoProductLabelJson`;
          await fetch(encodeURI(fetchUrl2), {
            method: "GET",
          })
            .then(async (response) => {
              return await response.json();
            })
            .catch((err) => console.error(err))
            .then((data) => {
              acoProductsArray = [...acoProductsArray, ...data];
              if (
                type === "normal" &&
                [
                  "ariat-australia-production",
                  "c2p-makeup",
                  "lvb-online",
                  "maishalifestyle",
                  "johnnys-furniture-1",
                ].includes(acoShopName)
              ) {
                getProductsJson("repeatCall");
              }
            });
          return true;
        }
        if (
          type === "normal" &&
          [
            "ariat-australia-production",
            "c2p-makeup",
            "lvb-online",
            "maishalifestyle",
            "johnnys-furniture-1",
          ].includes(acoShopName)
        ) {
          getProductsJson("repeatCall");
        }
      });
  }
  if (
    (handleArray.length &&
      ["euroelectronics", "facfa3-2", "cb9887-2"].includes(acoShopName)) ||
    ["stockitaly24"].includes(acoShopName)
  ) {
    for (const handle of handleArray) {
      if (pattern.test(handle)) return;
      let fetchUrl = `/products/${handle}.js`;
      if (window.location.pathname.includes(Shopify.locale))
        fetchUrl = `/${Shopify.locale}` + fetchUrl;
      await fetch(encodeURI(fetchUrl), {
        method: "GET",
      })
        .then(async (response) => {
          return await response.json();
        })
        .catch((err) => console.error({ err }))
        .then((data) => {
          if (!data) return;
          let updatedData = {};
          updatedData.product_id = data.id;
          updatedData.product_handle = data.handle;
          updatedData.product_type = data.type;
          updatedData.product_vendor = data.vendor;
          updatedData.product_tags = data.tags;
          updatedData.product_collections = [];
          updatedData.product_price = data.price;
          updatedData.product_compare_at_price = data.compare_at_price;
          updatedData.product_created_at = data.created_at;
          updatedData.product_published_at = data.published_at;
          updatedData.product_available = data.available;
          updatedData.product_first_variant = data.variants[0].id;
          updatedData.product_variants = data.variants.map((item) => {
            return {
              variants_id: item.id,
              variants_price: item.price,
              variants_available: item.available,
              variants_compare_at_price: item.compare_at_price,
              variants_inventory_quantity: item.inventory_quantity,
            };
          });
          !acoProductsArray.some((ele) => ele.product_id === data.id) &&
            acoProductsArray.push(updatedData);
        });
    }
  }
}

/**
 * This function sets up the labelers.
 * @param {Array} productSelectors - An array of CSS selectors for the product images.
 */
function initLabelers() {
  const badges = Object.keys(shopJSON)
    .filter((key) => key.startsWith("badgeLabel"))
    .map((key) => shopJSON[key])
    .filter(
      (badge) =>
        badge.selectedPages.includes(acoCurrentPage) &&
        badge.status &&
        badge.type !== "trust" &&
        badge.type !== "announcement"
    );
  subscription = shopJSON?.subscription;
  for (const element of badges) {
    const {
      styleUpdated,
      products,
      imagePath,
      id,
      rule,
      type,
      schedule: scheduleJson,
      timer,
      dynamic = {},
      countryRestriction = {},
    } = element;
    if (countryRestriction && Object.keys(countryRestriction).length !== 0) {
      const {
        status = false,
        type = "include",
        countries = [],
      } = countryRestriction;
      if (status) {
        if (type === "include") {
          if (!countries.includes(acoCountryCode)) continue;
        } else {
          if (countries.includes(acoCountryCode)) continue;
        }
      }
    }
    const encodedImage = encodeURI(imagePath);
    let schedule = {};
    if (scheduleJson?.status) schedule = { ...scheduleJson };
    converted["*"] = converted["*"] || [];
    if (dynamic?.status) {
      for (const [key, value] of Object.entries(products)) {
        for (const product of value) {
          converted[product] = converted[product] || [];
          converted[product].push({
            styleUpdated,
            imagePath: encodedImage,
            id,
            type,
            dynamic,
            percentage: key,
          });
        }
      }
    } else {
      if (rule.key === "allProducts") {
        converted["*"].push({
          styleUpdated,
          imagePath: encodedImage,
          id,
          type,
          schedule,
          ruleKey: rule?.key,
          timer,
        });
      } else {
        if (Array.isArray(products)) {
          for (const product of products) {
            converted[product] = converted[product] || [];
            converted[product].push({
              styleUpdated,
              imagePath: encodedImage,
              id,
              type,
              schedule,
              ruleKey: rule?.key,
              timer,
            });
          }
        }
      }
    }

    const convertedBadge = {
      styleUpdated,
      imagePath,
      id,
      type,
      schedule,
      dynamic,
      products,
      timer,
      rule,
    };

    setUpNormalBadges(convertedBadge);
    setUpLazyBadges(convertedBadge);
    const afterAllFunction = themeJSON[acoCurrentPage]?.extra?.afterAll;
    if (afterAllFunction) afterAllFunction();
  }
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

/**
 * This function sets up the labelers.
 * @param {Array} productSelectors - An array of CSS selectors for the product images.
 */
async function setUpLabelers() {
  subscription = shopJSON?.subscription;
  appVersion = shopJSON?.version;
  setUpMutationBadges();
  if (appVersion === "v2") {
    await getProductsJson();
  }
  initLabelers();
  setUpTrustBadges();

  const acoImages = document.querySelectorAll(".product-badge_aco_img");
  acoImages.forEach((el) => {
    const observerMutation = new MutationObserver((mutationlist) => {
      mutationlist.forEach((mutation) => {
        if (mutation.attributeName === "srcset") {
          el.removeAttribute("srcset");
        }
      });
    });

    observerMutation.observe(el, {
      attributes: true,
    });
  });
}

/**
 * This function is used to set up announcement badges and bars
 */
function setUpAnnouncements() {
  const announcements = Object.keys(shopJSON)
    .filter((key) => key.startsWith("badgeLabel"))
    .map((key) => shopJSON[key])
    .filter(
      (badge) =>
        badge.type === "announcement" &&
        (badge.selectedPages.includes("allPages") ||
          badge.selectedPages.includes(acoCurrentPage)) &&
        badge.status
    );

  for (const element of announcements) {
    const { styleUpdated, imagePath, id, announcement, schedule } = element;

    if (schedule?.status && (subscription || subscription === undefined)) {
      if (moment(moment.utc().format()).isBefore(schedule.start)) continue;
      if (moment(moment.utc().format()).isAfter(schedule.end)) continue;
      if (scheduleTime(schedule, `aco-badge-${id}`)) continue;
    }

    if (announcement?.type === "bar") {
      let fontSupport = document.createElement("link");
      fontSupport.type = "text/css";
      fontSupport.rel = "stylesheet";
      fontSupport.href = `//fonts.googleapis.com/css?family=${announcement?.fontFamily}`;
      document.head.appendChild(fontSupport);

      let announcementParentStyle = {};

      if (announcement?.sticky) {
        announcementParentStyle = {
          textDecoration: "none",
          position: "sticky",
          zIndex: 9,
        };
        if (announcement?.position === "top") {
          announcementParentStyle.top = 0;
        } else {
          announcementParentStyle.bottom = 0;
        }
      } else {
        announcementParentStyle = {
          textDecoration: "none",
        };
      }

      const announcementDivStyle = {
        backgroundColor: announcement?.bgColor,
        justifyContent: announcement?.textAlignment,
        animationDuration: `${styleUpdated?.animation?.duration}s`,
        animationIterationCount: styleUpdated?.animation?.iteration,
        animationName: styleUpdated?.animation?.name,
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
      };
      const announcementTextStyle = {
        color: announcement?.fontColor,
        fontSize: `${announcement?.fontSize}px`,
        lineHeight: "initial",
        fontFamily: announcement?.fontFamily,
        fontWeight: announcement?.fontWeight,
      };

      const announcementId = `aco-badge-${id}`;
      let announcementBar = "";
      if (announcement?.marqueeDirection == "None") {
        announcementBar = `<a id="${announcementId}" href="${
          announcement?.action
        }" style="${convertToStyle(
          announcementParentStyle
        )}"><div class="aco_announcement_preview" style="${convertToStyle(
          announcementDivStyle
        )}"><pre style="${convertToStyle(announcementTextStyle)}">${
          announcement?.text
        }</pre></div></a>`;
      } else {
        announcementBar = `<a id="${announcementId}" href="${
          announcement?.action
        }" style="${convertToStyle(
          announcementParentStyle
        )}"><div class="aco_announcement_preview" style="${convertToStyle(
          announcementDivStyle
        )}"><marquee direction="${
          announcement?.marqueeDirection
        }" scrolldelay="${
          announcement?.marqueeDelay
        }"><pre className="announcement_preview_text" style="${convertToStyle(
          announcementTextStyle
        )}">${announcement?.text}</pre></marquee></div></a>`;
      }

      if (announcement?.position === "top") {
        document.body.insertAdjacentHTML("afterbegin", announcementBar);
      } else {
        document.body.insertAdjacentHTML("beforeend", announcementBar);
      }
    } else {
      let transformTranslateX = "";
      const announcementId = `aco-badge-${id}`;
      const margins = removeInherits(styleUpdated.margin);
      const positionClass = cssToObj(
        styleUpdated.margin
      ).objectPosition.replace(" ", "-");
      const width = styleUpdated.width;
      const height = styleUpdated?.aspectRatio ? "auto" : styleUpdated.height;
      let parentClass = `product-badge_aco ${positionClass}`;
      if (styleUpdated?.aspectRatio) parentClass += " aspect-ratio-enabled ";
      else parentClass += " aspect-ratio-disabled ";
      if (styleUpdated?.width.includes("px")) parentClass += " pixelified ";
      else parentClass += " percentified ";
      parentClass += `animate__${styleUpdated?.animation?.name}`;
      const childClass = `product-badge_aco_img aco_badge img_${positionClass}`;
      if (styleUpdated?.margin.includes("transform")) {
        transformTranslateX = styleUpdated?.margin
          .split(";")
          .filter((word) => word.includes("transform"))[0]
          .split(":")[1];
      }

      const childStyle = {
        zIndex: 2,
        visibility: "visible",
        opacity: styleUpdated?.opacity || 1,
        width: "100%",
        height: "100%",
        margin: 0,
        position: "relative",
        objectFit: "fill",
        background: "transparent",
        maxWidth: "100%",
        maxHeight: "100%",
      };
      const parentStyle = {
        width,
        height,
        position: "fixed",
        ...margins,
        transform: `rotate(${
          styleUpdated?.angle || 0
        }deg) ${transformTranslateX}`,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        overflow: "visible",
        zIndex: "10 !important",
        animationDuration: `${styleUpdated?.animation?.duration}s`,
        animationIterationCount: styleUpdated?.animation?.iteration,
        animationName: `${styleUpdated?.animation?.name} !important`,
      };

      const child = `<img class="${childClass}" src="${labelerUrl}${imagePath}" style="${convertToStyle(
        childStyle
      )}" alt="image" />`;

      const parent = `<div id="${announcementId}" class="${parentClass}" style="${convertToStyle(
        parentStyle
      )}">${child}</div>`;
      document.body.insertAdjacentHTML("afterbegin", parent);
    }
  }
}

function scriptLoader(path, callback) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = path;
  document.head.appendChild(script);
  script.onload = function () {
    if (typeof callback == "function") {
      callback();
    }
  };
}

async function loadFiles(shopJSON) {
  const schedule = Object.keys(shopJSON)
    .filter((key) => key.startsWith("badgeLabel"))
    .map((key) => shopJSON[key])
    .filter((badge) => badge?.schedule?.status && badge.status);
  if (schedule.length !== 0) {
    scriptLoader(`${labelerUrl}/extension/moment.min.js`, function () {
      scriptLoader(
        `${labelerUrl}/extension/moment-timezone-with-data.min.js`,
        function () {
          setUpLabelers();
          setUpAnnouncements();
        }
      );
    });
  } else {
    setUpLabelers();
    setUpAnnouncements();
  }
}

function acoLoadScript() {
  acoThemeName = getThemeName();
  document.querySelector("body").setAttribute("aco-theme-name", acoThemeName);
  document
    .querySelector("body")
    .setAttribute("aco-theme-locale", Shopify.locale);
  document.querySelector("body").setAttribute("aco-theme-page", acoCurrentPage);
  acoShopName = Shopify.shop.replace(".myshopify.com", "");
  document.querySelector("body").setAttribute("aco-shop-name", acoShopName);
  document
    .querySelector("body")
    .setAttribute("aco-theme-version", themeVersion);
  acoShopJson = `${labelerUrl}/productJS/${acoShopName}.json?v=${new Date().setSeconds(
    0,
    0
  )}`;
  try {
    if (typeof acoThemeName === "number") {
      themeJSON = themeSetJSON[acoThemeName];
    } else {
      if (
        [
          "hommeboutiq",
          "commonground-farm",
          "diwans-co-uk",
          "nesting-ro",
          "romanjoyero",
        ].includes(acoShopName) &&
        acoThemeName === "Dawn"
      ) {
        themeJSON = themeSetJSON[134384353530];
      } else if (acoShopName === "rujutasheth-com") {
        themeJSON = themeSetJSON[150662316347];
      } else if (acoShopName === "pairpatola") {
        themeJSON = themeSetJSON[129669103821];
      } else if (acoShopName === "jackery-japan") {
        themeJSON = themeSetJSON[123923824718];
      } else if (acoShopName === "shopjantarmantar") {
        themeJSON = themeSetJSON[161725677869];
      } else if (acoShopName === "shopbest-store") {
        themeJSON = themeSetJSON[139004313816];
      } else {
        themeJSON = themeSetJSON[acoThemeName.toLowerCase()];
      }
    }
  } catch (error) {
    themeJSON = undefined;
  }
  if (themeJSON !== undefined) {
    productSelectors = themeJSON[acoCurrentPage]?.badge;
    productMutationSelectors = themeJSON[acoCurrentPage]?.mutations;
    mutationConfig = themeJSON[acoCurrentPage]?.mutationConfig || {
      childList: true,
    };
  }
  if (productJson) {
    shopJSON = productJson;
    if (shopJSON?.shopClass || themeJSON === undefined) {
      themeJSON = shopJSON?.shopClass;
      productSelectors = themeJSON[acoCurrentPage]?.badge;
      productMutationSelectors = themeJSON[acoCurrentPage]?.mutations;
      mutationConfig = themeJSON[acoCurrentPage]?.mutationConfig || {
        childList: true,
      };
    }
    loadFiles(shopJSON);
    logIt(converted);
  } else {
    fetch(acoShopJson)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        shopJSON = data;
        if (typeof shopJSON.status === "undefined" || shopJSON.status) {
          if (shopJSON?.shopClass || themeJSON === undefined) {
            themeJSON = shopJSON?.shopClass;
            productSelectors = themeJSON[acoCurrentPage]?.badge;
            productMutationSelectors = themeJSON[acoCurrentPage]?.mutations;
            mutationConfig = themeJSON[acoCurrentPage]?.mutationConfig || {
              childList: true,
            };
          }
          loadFiles(shopJSON);
          logIt(converted);
        }
      });
  }
}

let acoJqueryScript = document.createElement("script");
acoJqueryScript.setAttribute(
  "src",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"
);
acoJqueryScript.setAttribute("type", "text/javascript");

let acoDoucment =
  document.getElementsByTagName("head")[0] || document.documentElement;
acoDoucment.appendChild(acoJqueryScript);

async function scriptGetCountry($) {
  let country = "";
  await $.get("/cdn-cgi/trace").done(function (data) {
    let countryCode = data.replace(/(\r\n|\n|\r)/gm, "").split("loc=");
    countryCode = countryCode[1].split("tls=");
    countryCode = countryCode[0];
    country = countryCode;
  });
  return country;
}

if (acoJqueryScript.readyState) {
  acoJqueryScript.onreadystatechange = function () {
    if (this.readyState == "loaded" || this.readyState == "complete")
      loadScriptAfterJquery();
  };
} else {
  acoJqueryScript.onload = function () {
    loadScriptAfterJquery();
  };
}

function loadScriptAfterJquery() {
  scriptGetCountry(jQuery.noConflict(true)).then((countryCode) => {
    acoCountryCode = countryCode;
    if (typeof window.BOOMR !== "undefined") {
      acoLoadScript();
    } else if (document.addEventListener) {
      document.addEventListener("onBoomerangLoaded", function () {
        acoLoadScript();
      });
      if (!window.onBoomerangLoaded) {
        acoLoadScript();
      }
    } else {
      acoLoadScript();
    }
  });
}
