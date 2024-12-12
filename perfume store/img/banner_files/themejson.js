const themeSetJSON = {
  dawn: {
    products: {
      parent: [
        ".card-wrapper",
        ".product",
        ".product-section",
        ".grid__item",
        ".product-card",
        ".ecom-collection__product-item",
        "#ecom-product-block",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product__media",
        ".pmslider-slide--inner",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-slide",
        ".ecom-collection__product-media--container",
        ".ecom-product-single__media--featured",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pmslider-root",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-container",
        ".ecom-collection__product-media--container",
        ".ecom-product-single__media--featured",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
        ".ecom-collection__product-title-tag",
        ".ecom-product-single__title",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".ecom-collection__product-prices",
        ".ecom-product-single__price",
      ],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
        ".ecom-collection__product-item",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
        ".ecom-collection__product-media--container",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
        ".ecom-collection__product-media--container",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
        ".ecom-collection__product-title-tag",
      ],
      belowProductPrice: [
        ".price",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
        ".ecom-collection__product-prices",
      ],
      mutations: [
        ".product__info-container .no-js-hidden",
        "#promotedWineListContainer",
        "#featuredWineListContainer",
      ],
    },
    collections: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".item-content",
        ".boost-pfs-filter-product-item",
        ".ecom-collection__product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
        ".ecom-collection__product-media--container",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
        ".ecom-collection__product-media--container",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
        ".product-single__title",
        ".boost-pfs-filter-product-item-title",
        ".product-title",
        ".ecom-collection__product-title-tag",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".gf_product-prices",
        ".boost-pfs-filter-product-item-price",
        ".product-prices",
        ".ecom-collection__product-prices",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".boost-pfs-filter-products",
        ".ss360-layer",
        ".ecom-collection__product-wrapper",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".spf-product-card",
        ".boost-pfs-filter-product-item",
        ".ecom-collection__product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
        ".ecom-collection__product-media--container",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
        ".ecom-collection__product-media--container",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
        ".spf-product-card__title",
        ".boost-pfs-filter-product-item-title",
        ".ecom-collection__product-title-tag",
      ],
      belowProductPrice: [
        ".price",
        ".spf-product-card__price-wrapper",
        ".boost-pfs-filter-product-item-price",
        ".ecom-collection__product-prices",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".ss360-layer",
        ".boost-pfs-filter-products",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  ride: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [".card--media .card__media ", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media-list"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [".card__media ", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [".product__info-container .no-js-hidden"],
    },
    collections: {
      parent: [".card--media ", ".spf-product-card"],
      badge: [".card--media .card__media  ", ".spf-product-card__inner"],
      belowProductImage: [".card > .card__inner", ".spf-product-card__inner"],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".spf-product-card__title",
      ],
      belowProductPrice: [".price", ".spf-product-card__price-wrapper"],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".pagination-wrapper",
        "body[aco-shop-name='kahanilush']",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media  "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
    },
  },
  taste: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [".card__media", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media-list"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".collection .card--media .card__media",
        "div:not(.collection-list) .product__media",
      ],
      belowProductImage: [
        ".collection .card > .card__inner",
        "div:not(.collection-list) .product__media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [".product__info-container .no-js-hidden"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
    search: {
      parent: [".card--media "],
      badge: [".card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
  },
  studio: {
    products: {
      parent: [".product", ".card-wrapper"],
      badge: [
        ".product__media",
        ".pwzrswiper-container .pwzrswiper-slide",
        ".card--media .card__media ",
      ],
      belowProductImage: [
        ".product__media",
        ".pwzrswiper-container .pwzrswiper-slide",
        ".card > .card__inner",
      ],
      belowProductName: [
        ".product__title",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card--media", ".featured-product "],
      badge: [".card__media", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media  "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
    },
  },
  crave: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [".card--media .card__media ", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media-list"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".collection .card--media .card__media",
        "div:not(.collection-list) .product__media",
      ],
      belowProductImage: [
        ".collection .card > .card__inner",
        "div:not(.collection-list) .product__media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [".product__info-container .no-js-hidden"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
  },
  colorblock: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [".card--media .card__media", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".collection .card--media .card__media",
        "div:not(.collection-list) .product__media",
      ],
      belowProductImage: [
        ".collection .card > .card__inner",
        "div:not(.collection-list) .product__media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container"],
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container"],
    },
  },
  sense: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [".card--media .card__media", ".product__media"],
      belowProductImage: [".card > .card__inner", ".product__media"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".card--media .card__media",
        "div:not(.collection-list) .product__media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        "div:not(.collection-list) .product__media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price", ".product__info-container .no-js-hidden"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
    },
  },
  craft: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".card--media .card__media",
        ".product__media",
        ".pwzrswiper-wrapper",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pwzrswiper-wrapper",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".collection .card--media .card__media",
        "div:not(.collection-list) .product__media",
      ],
      belowProductImage: [
        ".collection .card > .card__inner",
        "div:not(.collection-list) .product__media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
      ],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".collection .card > .card__inner "],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
    search: {
      parent: [".card--media "],
      badge: [".card--media .card__media "],
      belowProductImage: [".card > .card__inner"],
      belowProductName: [".card__heading.h5 .full-unstyled-link"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
  },
  warehouse: {
    products: {
      parent: [".product-item", ".product-block-list"],
      badge: [
        ".product-item__image-wrapper > div",
        ".product-gallery .product-gallery__size-limiter > div",
        ".pmslider-own--slides-wrapper",
      ],
      belowProductImage: [
        ".product-item__image-wrapper > div",
        ".product-gallery__carousel > div:last-of-type",
        ".pmslider-own--slides-wrapper",
      ],
      belowProductName: [
        ".product-item__title ",
        ".product-meta__title",
        ".product-meta__title.heading",
      ],
      belowProductPrice: [".product-form__info-item", ".price-list"],
      mutations: [".product-recommendations"],
      extra: {
        label: function fix(element) {
          if (element.closest(".product-form__info-list")) {
            element.closest(".product-form__info-list").style.display = "block";
          }
        },
        badge: (elem, styleUpdated) => {
          const margin = removeInherits(styleUpdated.margin);
          const marginTop = Math.max(
            Math.abs(parseInt(margin.top)) || 0,
            parseInt(elem.style.marginTop) || 0
          );
          const marginBottom = Math.max(
            Math.abs(parseInt(margin.bottom) || 0),
            parseInt(elem.style.marginBottom) || 0
          );
          if (Object.values(margin).filter((word) => word.startsWith("-"))) {
            if (marginTop) elem.style.marginTop = `${marginTop}px`;
            if (marginBottom) elem.style.marginBottom = `${marginBottom}px`;
          }
        },
      },
    },
    home: {
      parent: [".product-item", ".featured-product"],
      badge: [
        ".product-item__image-wrapper > div",
        ".product-gallery .product-gallery__size-limiter > div",
      ],
      belowProductImage: [
        ".product-item__image-wrapper > div",
        ".product-gallery__carousel",
      ],
      belowProductName: [".product-item__title ", ".product-meta__title"],
      belowProductPrice: [
        ".product-form__info-list > .product-form__info-item",
        ".price-list",
      ],
      extra: {
        label: function fix(element) {
          if (element.closest(".product-form__info-list")) {
            element.closest(".product-form__info-list").style.display = "block";
          }
        },
        badge: (elem, styleUpdated) => {
          const margin = removeInherits(styleUpdated.margin);
          const marginTop = Math.max(
            Math.abs(parseInt(margin.top)) || 0,
            parseInt(elem.style.marginTop) || 0
          );
          const marginBottom = Math.max(
            Math.abs(parseInt(margin.bottom) || 0),
            parseInt(elem.style.marginBottom) || 0
          );
          if (Object.values(margin).filter((word) => word.startsWith("-"))) {
            if (marginTop) elem.style.marginTop = `${marginTop}px`;
            if (marginBottom) elem.style.marginBottom = `${marginBottom}px`;
          }
        },
      },
    },
    collections: {
      parent: [".product-item", ".featured-product"],
      badge: [
        ".product-item__image-wrapper > div:last-of-type",
        ".product-gallery .product-gallery__size-limiter > div",
      ],
      belowProductImage: [
        ".product-item__image-wrapper > div",
        ".card__section",
      ],
      belowProductName: [".product-item__title", ".product-meta__title"],
      belowProductPrice: [".product-item__info .price-list", ".price-list"],
      mutations: [
        ".collection__dynamic-part",
        ".modal__inner",
        ".snize-search-results",
      ],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        badge: (elem, styleUpdated) => {
          const margin = removeInherits(styleUpdated.margin);
          const marginTop = Math.max(
            Math.abs(parseInt(margin.top)) || 0,
            parseInt(elem.style.marginTop) || 0
          );
          const marginBottom = Math.max(
            Math.abs(parseInt(margin.bottom) || 0),
            parseInt(elem.style.marginBottom) || 0
          );
          if (Object.values(margin).filter((word) => word.startsWith("-"))) {
            if (marginTop) elem.style.marginTop = `${marginTop}px`;
            if (marginBottom) elem.style.marginBottom = `${marginBottom}px`;
          }
        },
      },
    },
    search: {
      parent: [".product-item", ".featured-product", ".snize-product"],
      badge: [
        ".product-item__image-wrapper > div",
        ".product-gallery .product-gallery__size-limiter > div",
        ".snize-thumbnail-wrapper",
      ],
      belowProductImage: [
        ".product-item__image-wrapper > div",
        ".card__section",
        ".snize-thumbnail-wrapper",
      ],
      belowProductName: [
        ".product-item__title",
        ".product-meta__title",
        ".snize-title",
      ],
      belowProductPrice: [
        ".product-item__info .price-list",
        ".price-list",
        ".snize-price-list",
      ],
      mutations: [
        ".modal__inner",
        ".page__content",
        ".snize",
        ".snize-pagination",
        ".snize-search-results",
      ],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        badge: (elem, styleUpdated) => {
          const margin = removeInherits(styleUpdated.margin);
          const marginTop = Math.max(
            Math.abs(parseInt(margin.top)) || 0,
            parseInt(elem.style.marginTop) || 0
          );
          const marginBottom = Math.max(
            Math.abs(parseInt(margin.bottom) || 0),
            parseInt(elem.style.marginBottom) || 0
          );
          if (Object.values(margin).filter((word) => word.startsWith("-"))) {
            if (marginTop) elem.style.marginTop = `${marginTop}px`;
            if (marginBottom) elem.style.marginBottom = `${marginBottom}px`;
          }
        },
      },
    },
  },
  express: {
    home: {
      parent: [".product", ".featured-collections__item", ".product_card"],
      badge: [
        ".product-card__image-wrapper",
        ".gallery__image-wrapper",
        ".cardImage_wrapper",
      ],
      belowProductImage: [
        ".product-card__link .product-card__image-wrapper .media-cover",
        ".product__gallery .gallery__strip",
        ".cardImage_wrapper",
      ],
      belowProductName: [
        ".product-card__title-wrapper",
        ".product__title",
        ".productCard_title",
      ],
      belowProductPrice: [".product-card__price-wrapper", ".price"],
      mutations: [
        ".featured-collections__products",
        ".modal-wrapper .product-modal__content",
        ".visually-hidden",
      ],
      extra: {
        label: function fix(element) {
          if (element.classList.contains("product-card__image-wrapper")) {
            element.style.overflow = "inherit";
            element.querySelector(".media-cover").style.position = "relative";
          }
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product__gallery")
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            const hiddenProducts = Array.from(
              element.querySelectorAll(".gallery__strip li[aria-hidden=true]")
            );
            const visible = Array.from(
              element.querySelectorAll(".gallery__strip li")
            );
            for (const visibleItem of visible) {
              if (!visibleItem.hasAttribute("aria-hidden"))
                visibleItem.style.opacity = 1;
            }
            for (const productImg of hiddenProducts) {
              productImg.style.opacity = 0;
            }
            if (!condition) {
              element.style.overflow = "visible";
              element.querySelector(".gallery").style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
    products: {
      parent: [
        ".product-single",
        ".product",
        ".featured-collections__item",
        ".product_card",
        ".collection_block",
      ],
      badge: [
        ".product-slider-wrapper .slick-list.draggable",
        ".product-card__image-wrapper",
        ".gallery__image-wrapper",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductImage: [
        ".product-slider-wrapper .slick-list.draggable",
        ".product-card__link .product-card__image-wrapper .media-cover",
        ".product__gallery .gallery__strip",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductName: [
        ".product-card__title-wrapper",
        ".product__title",
        ".productCard_title",
      ],
      belowProductPrice: [
        ".prices-con",
        ".product-card__price-wrapper",
        ".price",
      ],
    },
    collections: {
      parent: [
        ".product",
        ".featured-collections__item",
        ".product_card",
        ".collection_block",
      ],
      badge: [
        ".product-card__image-wrapper",
        ".gallery__image-wrapper",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductImage: [
        ".product-card__link .product-card__image-wrapper .media-cover",
        ".product__gallery .gallery__strip",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductName: [
        ".product-card__title-wrapper",
        ".product__title",
        ".productCard_title",
        ".title",
      ],
      belowProductPrice: [".product-card__price-wrapper", ".price"],
    },
    search: {
      parent: [
        ".product",
        ".featured-collections__item",
        ".product_card",
        ".collection_block",
      ],
      badge: [
        ".product-card__image-wrapper",
        ".gallery__image-wrapper",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductImage: [
        ".product-card__link .product-card__image-wrapper .media-cover",
        ".product__gallery .gallery__strip",
        ".cardImage_wrapper",
        ".image-wrapper",
      ],
      belowProductName: [
        ".product-card__title-wrapper",
        ".product__title",
        ".productCard_title",
        ".title",
      ],
      belowProductPrice: [".product-card__price-wrapper", ".price"],
    },
  },
  minimal: {
    products: {
      parent: [".product-single__hero", ".grid__item .grid-link"],
      badge: [
        "#rondellCarousel .rondell-item .rondell-item-crop",
        ".product-single__image-wrapper",
        ".product__img-wrapper",
        ".pwzrswiper-wrapper",
      ],
      belowProductImage: [
        ".product-single__image-wrapper:last-of-type",
        ".product__img-wrapper",
      ],
      belowProductName: [
        ".product-single__title",
        ".grid-link__title",
        "h1[itemprop='name']",
      ],
      belowProductPrice: [".product-single__price", ".grid-link__meta"],
      extra: {
        badge: function fix(element) {
          if (
            element.parentElement.classList.contains(
              "grid-link__image-centered"
            )
          ) {
            element.parentElement.style.overflow = "visible";
          }
        },
      },
    },
    home: {
      parent: [".product-single__hero", ".grid-link "],
      badge: [".product-single__image-wrapper", ".product__img-wrapper"],
      belowProductImage: [
        ".product-single__image-wrapper",
        ".product__img-wrapper",
      ],
      belowProductName: [" .product-single__title", ".grid-link__title"],
      belowProductPrice: [".product-single__price", ".grid-link__meta"],
      extra: {
        badge: function fix(element) {
          if (
            element.parentElement.classList.contains(
              "grid-link__image-centered"
            )
          ) {
            element.parentElement.style.overflow = "visible";
          }
        },
      },
    },
    collections: {
      parent: [".grid__item .grid-link"],
      badge: [".product-single__image-wrapper", ".product__img-wrapper"],
      belowProductImage: [
        ".product-single__image-wrapper",
        ".product__img-wrapper",
      ],
      belowProductName: [".grid-link__title"],
      belowProductPrice: [".grid-link__meta"],
      extra: {
        badge: function fix(element) {
          if (
            element.parentElement.classList.contains(
              "grid-link__image-centered"
            )
          ) {
            element.parentElement.style.overflow = "visible";
          }
        },
      },
    },
    search: {
      parent: [".grid"],
      badge: [".search__image-wrapper"],
      belowProductImage: [".search__image-wrapper"],
      belowProductName: [".h3 a"],
      belowProductPrice: [`span[itemprop="price"]`],
    },
  },
  narrative: {
    products: {
      parent: [".product-template "],
      badge: [
        ".product__media-wrapper",
        ".product__image-container .product__image-wrapper",
      ],
      belowProductImage: [".product__media-wrapper"],
      belowProductName: [".product__content-header .product__title"],
      belowProductPrice: [
        ".product__content-header .product__price",
        "#currentselectionprice",
      ],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".card ", ".featured-product__wrapper "],
      badge: [".card__image-wrapper", ".product-media"],
      belowProductImage: [".card__image-wrapper", ".product-media"],
      belowProductName: [".card__info .card__name.h4", ".product__title"],
      belowProductPrice: [".card__price", ".product__price"],
    },
    collections: {
      parent: [".card"],
      badge: [".card__image-wrapper"],
      belowProductImage: [".card__image-wrapper"],
      belowProductName: [".card__info .card__name.h4"],
      belowProductPrice: [".card__price"],
    },
    search: {
      parent: [".card"],
      badge: [".card__image-wrapper"],
      belowProductImage: [".card__image-wrapper"],
      belowProductName: [".card__name"],
      belowProductPrice: [".card__price"],
    },
  },
  supply: {
    products: {
      parent: [
        ".grid-uniform .grid-item",
        ".product-template-section > div > .grid",
        "#ProductSection",
      ],
      badge: [
        ".product-grid-image > div > .lazyload__image-wrapper",
        ".product-photo-container .lazyload__image-wrapper",
        ".pmslider-root .pmslider-own--slides-wrapper",
      ],
      belowProductImage: [
        ".product-grid-image ",
        ".product-photo-container ",
        ".pmslider-root .pmslider-own--slides-wrapper",
      ],
      belowProductName: [".product-grid-item p", "h1.h2"],
      belowProductPrice: [".product-item--price", ".product-meta"],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [
        ".grid-uniform .grid-item ",
        ".product-template-section > div > .grid ",
      ],
      badge: [
        ".product-grid-image > div > .lazyload__image-wrapper",
        ".product-photo-container .lazyload__image-wrapper",
      ],
      belowProductImage: [".product-grid-image ", ".product-photo-container"],
      belowProductName: [".product-grid-item p", "h1.h2"],
      belowProductPrice: [".product-item--price", ".product-meta"],
    },
    collections: {
      parent: [".product-grid-item", ".snize-product"],
      badge: [".lazyload__image-wrapper", ".snize-thumbnail-wrapper"],
      belowProductImage: [
        ".product-grid-image ",
        ".product-list-image",
        ".snize-thumbnail-wrapper",
      ],
      belowProductName: [".product-grid-item p", ".snize-title"],
      belowProductPrice: [".product-item--price", ".snize-price-list"],
    },
    search: {
      parent: [".search-result .product-grid-item "],
      badge: [".product-grid-image > div > .lazyload__image-wrapper"],
      belowProductImage: [".product-grid-image "],
      belowProductName: [".product-grid-item p"],
      belowProductPrice: [".product-item--price"],
    },
  },
  debut: {
    products: {
      parent: [".product-single", ".product-card", "form .sc-jgrJph"],
      badge: [
        ".product-card__image-wrapper",
        ".product-single__media-wrapper",
        ".product-single__photo-wrapper:not(.product-single__photo-wrapper.slider-nav) > div",
        ".sc-gqtqkP .sc-cAhXWc",
        "body[aco-shop-name='dominique-cosmetics'] .product-single__thumbnails-item",
        ".product-single__photo--has-thumbnails",
        ".pwzrswiper-container",
      ],
      belowProductImage: [
        ".grid-view-item.product-card .product-card__image-wrapper",
        ".product-single .product-single__media-group noscript",
        ".product-single .product-single__photos > div:nth-last-of-type(2)",
        ".sc-fIITEw .sc-gqtqkP",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".product-single__title",
        ".grid-view-item__title.product-card__title",
      ],
      belowProductPrice: [".price", ".product-single__price"],
      mutations: [".product-recommendations__inner"],
      extra: {
        badge: function fix(el) {
          if (el.classList.contains("product-single__media-wrapper")) {
            el.style.position = "relative";
          }
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid--view-items")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
    home: {
      parent: [
        ".product-single",
        ".product-card",
        "form .sc-jgrJph",
        ".grid__item",
      ],
      badge: [
        ".product-card__image-wrapper",
        ".product-single__media-wrapper",
        ".product-single__photo-wrapper > div",
        ".sc-gqtqkP .sc-cAhXWc",
        ".grid-view-item__link",
      ],
      belowProductImage: [
        ".grid-view-item.product-card .product-card__image-wrapper",
        ".product-single .grid__item > div:nth-last-of-type(2)",
        ".sc-fIITEw .sc-gqtqkP",
        ".grid-view-item__image",
      ],
      belowProductName: [
        ".product-single__title",
        ".grid-view-item__title.product-card__title",
        ".grid-view-item__title",
      ],
      belowProductPrice: [".price", ".grid-view-item__meta"],
      mutations: [".product-single__media-group > div:last-of-type"],
      extra: {
        badge: function fix(el) {
          if (el.classList.contains("product-single__media-wrapper")) {
            el.style.position = "relative";
          }
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid--view-items")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
    collections: {
      parent: [".product-card", ".grid__item"],
      badge: [
        ".grid-view-item.product-card .product-card__image-wrapper",
        ".grid-view-item.product-card .grid-view-item__image-wrapper > div:not(.product-badge_aco)",
        ".grid-view-item__link:not(.grid-view-item__image-container.grid-view-item__link)",
        ".spf-product-card .spf-product-card__image-wrapper",
        ".grid-view-item .grid-view-item__image-wrapper > div:not(.product-badge_aco)",
      ],
      belowProductImage: [
        ".grid-view-item.product-card .product-card__image-wrapper",
        ".grid-view-item__image",
      ],
      belowProductName: [
        ".grid-view-item__title.product-card__title",
        ".grid-view-item__title",
      ],
      belowProductPrice: [".price", ".grid-view-item__meta"],
      mutations: ["#Collection"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid--view-items")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
    search: {
      parent: [".list-view-item"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: [".list-view-item__title"],
      belowProductPrice: [".price .price__regular .price-item"],
    },
  },
  simple: {
    products: {
      parent: [".product", ".grid"],
      badge: [
        ".product__image-wrapper",
        ".product-single__featured-image-wrapper",
      ],
      belowProductImage: [".product__image-wrapper", ".grid__item noscript"],
      belowProductName: [".product__title", ".product-single__title"],
      belowProductPrice: [".product__prices", ".product-single__prices"],
      extra: {
        badge: (elem) => {
          const element = elem.closest(".grid__item");
          const childIndex = Array.from(element.parentNode.children).indexOf(
            element
          );
          const zIndex = element.parentNode.children.length - childIndex;
          element.style.zIndex = zIndex;
        },
      },
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product-single", ".product"],
      badge: [".product__image-wrapper", ".product-single__photos"],
      belowProductImage: [".product__image-wrapper", ".product-single__photos"],
      belowProductName: [".product-single__title", ".product__title--card"],
      belowProductPrice: [".product-single__prices", ".product__prices"],
      extra: {
        badge: (elem) => {
          const element = elem.closest(".grid__item");
          const childIndex = Array.from(element.parentNode.children).indexOf(
            element
          );
          const zIndex = element.parentNode.children.length - childIndex;
          element.style.zIndex = zIndex;
        },
      },
    },
    collections: {
      parent: [".product"],
      badge: [".product__image-wrapper"],
      belowProductImage: [".product__image-wrapper"],
      belowProductName: [".product__title"],
      belowProductPrice: [".product__prices"],
      extra: {
        badge: (elem) => {
          const element = elem.closest(".grid__item");
          const childIndex = Array.from(element.parentNode.children).indexOf(
            element
          );
          const zIndex = element.parentNode.children.length - childIndex;
          element.style.zIndex = zIndex;
        },
      },
    },
    search: {
      parent: [".product"],
      badge: [".product__image-wrapper"],
      belowProductImage: [".product__image-wrapper"],
      belowProductName: [".product__title"],
      belowProductPrice: [".product__prices"],
      extra: {
        badge: (elem) => {
          const element = elem.closest(".grid__item");
          const childIndex = Array.from(element.parentNode.children).indexOf(
            element
          );
          const zIndex = element.parentNode.children.length - childIndex;
          element.style.zIndex = zIndex;
        },
      },
    },
  },
  brooklyn: {
    products: {
      parent: [
        ".grid-product__wrapper ",
        ".grid.product-single",
        ".item-content .gf_row",
      ],
      badge: [
        " .product--wrapper",
        ".product-single__media",
        ".item-content .element-wrap",
        ".product-single__photo-wrapper",
      ],
      belowProductImage: [
        " .grid-product__image-wrapper ",
        ".product-single__media-group > div:last-of-type",
        ".item-content .element-wrap",
        ".product-single__photos .product-single__photo-wrapper",
        ".product-single__photo-wrapper",
      ],
      belowProductName: [
        ".grid-product__title",
        ".product-single__title",
        ".product-single__title",
        ".product-single__photos .product-single__photo-wrapper",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-single__price",
        ".gf_product-prices",
        ".product-single__meta .price-container",
        ".product-single__photos .product-single__photo-wrapper",
      ],
      mutations: ["div[data-section-id=product-recommendations]"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid-product__image-wrapper a")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
    home: {
      parent: [
        ".grid-product__wrapper ",
        ".grid.product-single",
        ".product-container",
      ],
      badge: [
        " .product--wrapper > div",
        ".product-single__media-wrapper .product-single__media",
        ".sc-BHvUt",
        ".product.lazyloaded",
      ],
      belowProductImage: [
        " .grid-product__image-wrapper",
        ".product-single__media-wrapper",
      ],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [".grid-product__price", ".product-single__price"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid-product__image-wrapper a")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
        label: function fix(el) {
          if (el.classList.contains("product-single__media-wrapper")) {
            el.nextElementSibling.querySelector("img").style.position =
              "relative";
          }
        },
      },
    },
    collections: {
      parent: [".grid-product__wrapper "],
      badge: [".product--wrapper", ".grid-product-link"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid-product__wrapper "],
      badge: [".product--wrapper"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".grid-product__image-wrapper a")
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
  },
  venture: {
    products: {
      parent: [".grid__item .product-card ", ".product-single "],
      badge: [
        ".product-card__image-wrapper .product-card__image",
        ".photos__item .product-single__photo ",
      ],
      belowProductImage: [
        ".product-card__image-wrapper .product-card__image",
        ".photos__item > div:last-of-type",
      ],
      belowProductName: [
        ".product-card__name",
        ".product-single__info-wrapper .product-single__title ",
      ],
      belowProductPrice: [
        ".product-card__price",
        ".product-single__info-wrapper .product-single__meta-list ",
      ],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-card__image-container")
          );
          for (const element of productContainers) {
            if (!element.classList.contains("aco_badge_adjusted")) {
              const extraLabelHeight = Array.from(
                element
                  .closest(".product-card")
                  .querySelectorAll(".product-badge_aco_img.aco_label")
              )
                .map((val) => val.clientHeight)
                .reduce((partialSum, a) => partialSum + a, 0);
              element.classList.add("aco_badge_adjusted");
              element.style.height = `${
                element.clientHeight + extraLabelHeight
              }px`;
            }
          }
        },
      },
    },
    home: {
      parent: [".grid__item .product-card ", ".featured-product__image "],
      badge: [
        ".product-card__image-wrapper .product-card__image > div",
        ".product-card__image-wrapper",
        ".flex__item .product__photo-container ",
      ],
      belowProductImage: [
        ".product-card__image-wrapper .product-card__image",
        ".flex__item .product__photo-container ",
      ],
      belowProductName: [
        ".product-card__name",
        ".emphasized-title-wrapper .emphasized-title ",
      ],
      belowProductPrice: [
        ".product-card__price",
        ".emphasized-title-wrapper .featured-product__prices ",
      ],
    },
    collections: {
      parent: [".grid__item .product-card "],
      badge: [
        ".product-card__image-wrapper .product-card__image > div",
        ".product-card__image-wrapper",
      ],
      belowProductImage: [".product-card__image-wrapper .product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-card__image-container")
          );
          for (const element of productContainers) {
            if (!element.classList.contains("aco_badge_adjusted")) {
              const extraLabelHeight = Array.from(
                element
                  .closest(".product-card")
                  .querySelectorAll(".product-badge_aco_img.aco_label")
              )
                .map((val) => val.clientHeight)
                .reduce((partialSum, a) => partialSum + a, 0);
              element.classList.add("aco_badge_adjusted");
              element.style.height = `${
                element.clientHeight + extraLabelHeight
              }px`;
            }
          }
        },
      },
    },
    search: {
      parent: [".grid__item"],
      badge: [".product-card__image", ".product-card__image-wrapper"],
      belowProductImage: [".product-card__image "],
      belowProductName: [".product-card__info .product-card__name "],
      belowProductPrice: [".product-card__info .product-card__price "],
    },
  },
  boundless: {
    products: {
      parent: [".product-item ", ".product"],
      badge: [
        ".product-item__image-wrapper",
        ".product__photo--single",
        ".devSinglePhoto",
      ],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product__photo--single ",
      ],
      belowProductName: [
        ".product-item__meta .product-item__title",
        ".grid__item .h2",
      ],
      belowProductPrice: [
        ".product-item__meta .product-item__price-wrapper",
        ".grid__item .product__price ",
      ],
      mutations: [".dev_jaggu"],
      extra: {
        afterAll: function fix() {
          const productContainer = Array.from(
            document.querySelectorAll(
              ".product .product__photo .product__photo--single"
            )
          );
          for (const element of productContainer) {
            const badges = element.querySelectorAll(".product-badge_aco_img");
            for (const item of badges) {
              item.style.zIndex = 7;
            }
          }
        },
        badge: function fix(el) {
          el.closest(".product-item__link").style.overflow = "visible";
          if (el.querySelector(".img_right-top")) {
            el
              .closest(".product-item__link")
              .querySelector(".product-item__badge").style.opacity = 0;
          }
        },
      },
    },
    home: {
      parent: [".product-item ", ".featured-product "],
      badge: [".product-item__image-wrapper", ".product__photo--single "],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product__photo--single ",
      ],
      belowProductName: [
        ".product-item__meta .product-item__title",
        ".featured-product__details-content .product__form-wrapper > h2 ",
      ],
      belowProductPrice: [
        ".product-item__meta .product-item__price-wrapper",
        ".featured-product__details-content .product__price ",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-item__link").style.overflow = "visible";
          if (el.querySelector(".img_right-top")) {
            el
              .closest(".product-item__link")
              .querySelector(".product-item__badge").style.opacity = 0;
          }
        },
      },
    },
    collections: {
      parent: [".product-item "],
      badge: [".product-item__image-wrapper", "a.product-item__link"],
      belowProductImage: [
        ".product-item__image-wrapper",
        "a.product-item__link",
      ],
      belowProductName: [".product-item__meta .product-item__title"],
      belowProductPrice: [".product-item__meta .product-item__price-wrapper"],
      extra: {
        badge: function fix(el) {
          el.closest(".product-item__link").style.overflow = "visible";
          if (el.querySelector(".img_right-top")) {
            el
              .closest(".product-item__link")
              .querySelector(".product-item__badge").style.opacity = 0;
          }
        },
      },
    },
    search: {
      parent: [".product-item "],
      badge: [".product-item__image-wrapper", "a.product-item__link"],
      belowProductImage: [
        ".product-item__image-wrapper",
        "a.product-item__link",
      ],
      belowProductName: [".product-item__meta .product-item__title"],
      belowProductPrice: [
        ".product-item__meta .product-item__meta__inner > p:nth-last-child(1)",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-item__link").style.overflow = "visible";
          if (el.querySelector(".img_right-top")) {
            el
              .closest(".product-item__link")
              .querySelector(".product-item__badge").style.opacity = 0;
          }
        },
        afterAll: function fix() {
          const productContainer = Array.from(
            document.querySelectorAll(".product-item .product-item__link")
          );
          for (const element of productContainer) {
            element.style.overflow = "visible";
            const badges = element.querySelectorAll(".product-badge_aco_img");
            for (const item of badges) {
              item.style.zIndex = 7;
            }
          }
        },
      },
    },
  },
  impulse: {
    products: {
      parent: [
        ".grid-product__link",
        ".grid--product-images--partial",
        ".grid",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap",
        ".pwzrswiper-container",
        ".pf-main-media",
        ".grid__image-ratio.lazyloaded",
        ".product__main-photos .product__thumbs .image-wrap .product__thumb",
      ],
      belowProductImage: [
        ".grid-product__image-mask",
        ".flickity-viewport",
        ".pwzrswiper-container",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-single__meta .product-block--price",
        ".product__price-savings",
        ".product__policies",
        ".product-block--price",
      ],
    },
    home: {
      parent: [".grid-product__content ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    collections: {
      parent: [
        ".grid-grid__item ",
        ".grid--product-images--partial",
        ".grid__item",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
        ".grid-product__image-mask .imageVariantOnHoverLink",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
        ".boost-pfs-filter-products",
        ".collection-grid__wrapper",
        ".gf-summary",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    search: {
      parent: [
        ".grid-grid__item ",
        ".grid--product-images--partial",
        ".grid-product__content",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
        ".collection-grid__wrapper",
        ".gf-summary",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
  },
  prestige: {
    products: {
      parent: [
        ".ProductItem__Wrapper",
        ".FeaturedProduct ",
        ".Product",
        ".product",
      ],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".Product__SlideItem--image",
        ".product-gallery__media",
        ".mprdimg_item",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".Product__Slideshow .flickity-viewport",
        ".Product__SlideItem--image",
        ".product-gallery__carousel",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".ProductMeta .ProductMeta__Title ",
        ".ProductMeta .ProductMeta__Title",
        ".product-title",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
        ".price-list",
      ],
    },
    home: {
      parent: [
        ".ProductItem__Wrapper",
        ".FeaturedProduct",
        ".product",
        ".spf-product-card",
        ".product-card",
      ],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".product-gallery__media",
        ".spf-product-card__image-wrapper",
        ".product-card__media",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".product-gallery__carousel",
        ".spf-product-card__image-wrapper",
        ".product-card__media",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".ProductMeta .ProductMeta__Title",
        ".product-title",
        ".spf-product-card__title",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
        ".price-list",
        ".spf-product-card__price-wrapper",
      ],
    },
    collections: {
      parent: [".ProductItem__Wrapper", ".product-card", ".spf-product-card"],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".product-card__media",
        ".spf-product-card__image-wrapper",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".product-card__media",
        ".spf-product-card__image-wrapper",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".product-title",
        ".spf-product-card__title",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".price-list",
        ".spf-product-card__price-wrapper",
      ],
      mutations: [
        ".ProductListWrapper",
        "#main.anchor",
        ".CollectionInner__Products",
      ],
      mutationConfig: { childList: true, subtree: true, attributes: true },
      extra: {
        afterAll: function fix() {
          const element = document.querySelector(
            ".flickity-viewport .ProductItem__Wrapper"
          );
          if (element) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              const extraLabelHeight = Array.from(
                element
                  .closest(".ProductItem__Wrapper")
                  .querySelectorAll(".product-badge_aco_img.aco_label")
              )
                .map((val) => val.clientHeight)
                .reduce((partialSum, a) => partialSum + a, 0);
              element.classList.add("aco_badge_adjusted");
              document.querySelectorAll(".flickity-viewport")[0].style.height =
                `${element.clientHeight + extraLabelHeight}px`;
            }
          }
        },
      },
    },
    search: {
      parent: [".ProductItem__Wrapper", ".product-card", ".spf-product-card"],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio:last-of-type",
        ".product-card__media",
        ".spf-product-card__image-wrapper",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper",
        ".product-card__media",
        ".spf-product-card__image-wrapper",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".product-title",
        ".spf-product-card__title",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".price-list",
        ".spf-product-card__price-wrapper",
      ],
    },
  },
  expanse: {
    products: {
      parent: [".grid-item__link", ".product-grid__container"],
      badge: [
        ".grid__image-ratio",
        ".product__main-photos .product-image-main .image-wrap",
        ".product__main-photos",
      ],
      belowProductImage: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductName: [
        ".grid-item__meta .grid-product__title",
        ".product-single__title.h2",
      ],
      belowProductPrice: [
        ".product-single__meta .product-block--price",
        ".grid-product__price",
        ".product-block--price",
      ],
      mutations: ["#ProductModals"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(
            ".product-grid__container .product__main-photos"
          );
          for (const element of parentElement) {
            let condition = element.classList.contains("aco_badge_adjusted");
            let labelExist =
              element.nextElementSibling.classList.contains(
                "product-badge_aco"
              );
            if (!condition && labelExist) {
              const wrap = document.createElement("div");
              element.parentNode.insertBefore(wrap, element);
              wrap.append(element, element.nextElementSibling);
              wrap.style.flex = "1 1 auto";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
    home: {
      parent: [".grid-item__link", ".product-grid__container"],
      badge: [".grid__image-ratio", ".product__main-photos"],
      belowProductImage: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductName: [
        ".grid-item__meta .grid-product__title",
        ".product-single__title.h2",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-block--price",
        ".product__price",
      ],
      mutations: ["#ProductModals"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(
            ".product-grid__container .product__main-photos"
          );
          for (const element of parentElement) {
            let condition = element.classList.contains("aco_badge_adjusted");
            let labelExist =
              element.nextElementSibling.classList.contains(
                "product-badge_aco"
              );
            if (!condition && labelExist) {
              const wrap = document.createElement("div");
              element.parentNode.insertBefore(wrap, element);
              wrap.append(element, element.nextElementSibling);
              wrap.style.flex = "1 1 auto";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
    collections: {
      parent: [
        ".grid-item__link",
        ".product-grid__container",
        ".grid-item__content",
      ],
      badge: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductImage: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductName: [
        ".grid-item__meta .grid-product__title",
        ".product-single__title.h2",
      ],
      belowProductPrice: [".grid-product__price", ".product-block--price"],
      mutationConfig: { childList: true, subtree: true },
      mutations: [
        "#CollectionAjaxContent",
        "#ProductModals",
        ".collection-grid",
      ],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(
            ".grid-product__image-wrap"
          );
          for (const element of parentElement) {
            let conditionParent =
              element.classList.contains("aco_badge_adjusted");
            let labelCondition =
              element.nextElementSibling?.querySelector(".belowProductImage");
            if (!conditionParent && labelCondition) {
              const wrap = document.createElement("div");
              element.parentNode.insertBefore(wrap, element);
              wrap.append(element, element.nextElementSibling);
              element.classList.add("aco_badge_adjusted");
            }
          }

          const quickViewElement = document.querySelectorAll(
            ".product-grid__container .product__main-photos"
          );
          for (const element2 of quickViewElement) {
            let condition = element2.classList.contains("aco_badge_adjusted");
            let labelExist =
              element2.nextElementSibling.classList.contains(
                "product-badge_aco"
              );
            if (!condition && labelExist) {
              const wrap = document.createElement("div");
              element2.parentNode.insertBefore(wrap, element2);
              wrap.append(element2, element2.nextElementSibling);
              wrap.style.flex = "1 1 auto";
              element2.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
    search: {
      parent: [".grid-item__link", ".product-grid__container"],
      badge: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductImage: [".grid-product__image-wrap", ".product__main-photos"],
      belowProductName: [
        ".grid-item__meta .grid-product__title",
        ".product-single__title.h2",
      ],
      belowProductPrice: [".grid-product__price", ".product-block--price"],
      mutationConfig: { childList: true, subtree: true },
      mutations: ["#CollectionAjaxContent", "#ProductModals"],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(
            ".grid-product__image-wrap"
          );
          for (const element of parentElement) {
            let conditionParent =
              element.classList.contains("aco_badge_adjusted");
            let labelCondition =
              element.nextElementSibling.querySelector(".belowProductImage");
            if (!conditionParent && labelCondition) {
              const wrap = document.createElement("div");
              element.parentNode.insertBefore(wrap, element);
              wrap.append(element, element.nextElementSibling);
              element.classList.add("aco_badge_adjusted");
            }
          }

          const quickViewElement = document.querySelectorAll(
            ".product-grid__container .product__main-photos"
          );
          for (const element2 of quickViewElement) {
            let condition = element2.classList.contains("aco_badge_adjusted");
            let labelExist =
              element2.nextElementSibling.classList.contains(
                "product-badge_aco"
              );
            if (!condition && labelExist) {
              const wrap = document.createElement("div");
              element2.parentNode.insertBefore(wrap, element2);
              wrap.append(element2, element2.nextElementSibling);
              wrap.style.flex = "1 1 auto";
              element2.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
  },
  broadcast: {
    products: {
      parent: [".product-item", ".product__page"],
      badge: [".product-item__image", ".product__photo"],
      belowProductImage: [".product-item__image", ".product__photo"],
      belowProductName: [
        ".product__grid__title",
        ".product__title__wrapper .product__title",
      ],
      belowProductPrice: [".price", ".product__price span"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".recent__wrapper")) {
            element.closest(".recent__wrapper").style.overflow = "visible";
          }
          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [".search__results__products__list"],
    },
    home: {
      parent: [".product-item", ".product__page"],
      badge: [".product-item__image", ".product__photo"],
      belowProductImage: [
        ".product-item__image",
        ".grid__item .product__slides",
      ],
      belowProductName: [
        ".product__grid__title",
        ".product__title__wrapper .product__title",
      ],
      belowProductPrice: [".price", ".product__price span"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".flickity-viewport")) {
            element.closest(".product-grid").style.overflow = "visible";
            element.closest(".flickity-viewport").style.overflow = "visible";
          }

          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [".search__results__products__list"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product__grid__title"],
      belowProductPrice: [".price"],
      extra: {
        badge: function fix(element) {
          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [".search__results__products__list"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product__grid__title"],
      belowProductPrice: [".price"],
      extra: {
        badge: function fix(element) {
          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [
        ".search__results__products__list",
        ".product-link .lazyloaded",
      ],
    },
  },
  motion: {
    products: {
      parent: [".grid", ".grid-product__content"],
      badge: [
        ".product__main-photos .slick-list.draggable",
        ".product__main-photos",
        ".grid-product__image-mask",
      ],
      belowProductImage: [
        ".product__main-photos .slick-list.draggable",
        ".product__photos",
        ".grid-product__image-mask",
      ],
      belowProductName: [".product-single__title", ".grid-product__title"],
      belowProductPrice: [".product__price", ".grid-product__price"],
      extra: {
        badge: (el) => {
          if (
            document.querySelectorAll('body[aco-shop-name="cepcompression"]')
              .length !== 0
          )
            return true;
          el.closest(".product__photos .product__main-photos").style.overflow =
            "visible";
        },
      },
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".grid-product__content", ".grid__item"],
      badge: [".grid-product__image-mask", ".product__main-photos"],
      belowProductImage: [".grid-product__image-mask", ".product__photos"],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [".grid-product__price", ".product__price"],
      extra: {
        badge: (element) => {
          element.closest(
            ".product__photos .product__main-photos"
          ).style.overflow = "visible";
        },
        afterAll: function fix() {
          setTimeout(() => {
            const parentElement = Array.from(
              document.querySelectorAll(".flickity-viewport")
            );
            for (const el of parentElement) {
              const height = Math.max(
                ...Array.from(el.querySelectorAll(".grid__item")).map((val) =>
                  getElementHeight(val)
                )
              );
              el.style.height = `${height}px`;
              el.style.overflowX = `clip`;
              el.style.overflowY = `visible`;
            }
          }, 1000);
          const flkty = Flickity.data(
            document.querySelector(".collection-switcher__collection-grid")
          );
          flkty?.on("change", function listener() {
            const parentElement = Array.from(
              document.querySelectorAll(".flickity-viewport")
            );
            for (const el of parentElement) {
              const height = Math.max(
                ...Array.from(el.querySelectorAll(".grid__item")).map((val) =>
                  getElementHeight(val)
                )
              );
              el.style.height = `${height}px`;
              el.style.overflowX = `clip`;
              el.style.overflowY = `visible`;
            }
          });
        },
      },
    },
    collections: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  responsive: {
    products: {
      parent: [".thumbnail", ".product_section "],
      badge: [".image__container", ".product-gallery__main"],
      belowProductImage: [".image__container", ".product-gallery__main"],
      belowProductName: [".info__text", ".product-block--title"],
      belowProductPrice: [".price", ".product__price-container"],
      mutations: [".product-recommendations", ".product-block--price"],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(".quick_shop");
          for (const element of parentElement) {
            element.style.zIndex = 2;
            element.classList.add("aco_badge_adjusted");
          }
        },
        badge: function fix(el) {
          el.closest(
            ".product-container .product-gallery__main .flickity-viewport"
          ).style.overflow = "visible";
          el.closest(
            ".product-container .product-gallery__image"
          ).style.opacity = el
            .closest(".product-container .product-gallery__image")
            .hasAttribute("aria-hidden")
            ? 0
            : 1;
          el.closest(
            ".product-container .product-gallery__image"
          ).style.visibility = el
            .closest(".product-container .product-gallery__image")
            .hasAttribute("aria-hidden")
            ? "hidden"
            : "visible";
          const flkty = Flickity.data(
            document.querySelector(
              ".product-gallery__main.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".product-container .product-gallery__image"
            ).style.opacity = el
              .closest(".product-container .product-gallery__image")
              .hasAttribute("aria-hidden")
              ? 0
              : 1;
            el.closest(
              ".product-container .product-gallery__image"
            ).style.visibility = el
              .closest(".product-container .product-gallery__image")
              .hasAttribute("aria-hidden")
              ? "hidden"
              : "visible";
          });
        },
      },
    },
    home: {
      parent: [".thumbnail", ".featured-product-container", ".quick-shop"],
      badge: [".image__container"],
      belowProductImage: [".image__container", ".product-gallery__main"],
      belowProductName: [
        ".info__text",
        ".product__title",
        ".product-block--title",
      ],
      belowProductPrice: [
        ".price",
        ".product__price-container",
        ".product-block--price",
      ],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(".quick_shop");
          for (const element of parentElement) {
            let condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.zIndex = 2;
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
        badge: function fix(el) {
          el.closest(
            ".featured-product .product-gallery__main .flickity-viewport"
          ).style.overflow = "visible";
          el.closest(
            ".featured-product .product-gallery__image"
          ).style.opacity = el
            .closest(".featured-product .product-gallery__image")
            .hasAttribute("aria-hidden")
            ? 0
            : 1;
          el.closest(
            ".featured-product .product-gallery__image"
          ).style.visibility = el
            .closest(".featured-product .product-gallery__image")
            .hasAttribute("aria-hidden")
            ? "hidden"
            : "visible";
          const flkty = Flickity.data(
            el.closest(".product-gallery__main.flickity-enabled.is-draggable")
          );
          flkty.on("change", function listener() {
            el.closest(
              ".featured-product .product-gallery__image"
            ).style.opacity = el
              .closest(".featured-product .product-gallery__image")
              .hasAttribute("aria-hidden")
              ? 0
              : 1;
            el.closest(
              ".featured-product .product-gallery__image"
            ).style.visibility = el
              .closest(".featured-product .product-gallery__image")
              .hasAttribute("aria-hidden")
              ? "hidden"
              : "visible";
          });
        },
      },
    },
    collections: {
      parent: [".thumbnail", ".quick-shop"],
      badge: [".image__container"],
      belowProductImage: [
        ".product_container .image__container",
        ".product-gallery__main",
      ],
      belowProductName: [".info__text", ".product-block--title"],
      belowProductPrice: [".price ", ".product-block--price"],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(".quick_shop");
          for (const element of parentElement) {
            element.style.zIndex = 2;
          }
        },
      },
    },
    search: {
      parent: [".thumbnail", ".quick-shop"],
      badge: [".image__container"],
      belowProductImage: [".image__container", ".product-gallery__main"],
      belowProductName: [".info__text", ".product-block--title"],
      belowProductPrice: [".price ", ".product-block--price"],
      extra: {
        afterAll: function fix() {
          const parentElement = document.querySelectorAll(".quick_shop");
          for (const element of parentElement) {
            let condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.zIndex = 2;
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
  },
  focal: {
    products: {
      parent: [".product-item", ".product"],
      badge: [".product-item__image-wrapper", ".product__media-list-wrapper"],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product__media-list-wrapper",
      ],
      belowProductName: [".product-item-meta__title", ".product-meta__title"],
      belowProductPrice: [".price-list", ".product-meta__price-list-container"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-list__inner")
          );

          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
      mutations: ["product-recommendations"],
    },
    home: {
      parent: [".product-item", ".product"],
      badge: [".product-item__image-wrapper", ".product__media-list-wrapper"],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product__media-list-wrapper",
      ],
      belowProductName: [".product-item-meta__title", ".product-meta__title"],
      belowProductPrice: [".price-list", ".product-meta__price-list-container"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-list__inner")
          );

          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
    },
    collections: {
      parent: [".product-item "],
      badge: [".product-item__image-wrapper "],
      belowProductImage: [".product-item__image-wrapper "],
      belowProductName: [".product-item-meta__title"],
      belowProductPrice: [".price-list"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-list__inner")
          );

          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
      mutations: [".product-facet__main"],
    },
    search: {
      parent: [".product-item "],
      badge: [".product-item__image-wrapper "],
      belowProductImage: [".product-item__image-wrapper "],
      belowProductName: [".product-item-meta__title"],
      belowProductPrice: [".price-list"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-list__inner")
          );

          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
        },
      },
      mutations: [".product-facet__main"],
    },
  },
  ira: {
    products: {
      parent: [".product-single", ".product-item", ".product__content"],
      badge: [
        ".product-single__photos",
        ".product-item__media",
        ".product__media-container .image",
      ],
      belowProductImage: [
        ".product-single__photos",
        ".product-item__media",
        ".product__media-container .image",
      ],
      belowProductName: [
        ".product-item__text > h4:nth-last-child(1)",
        ".product-single__title",
      ],
      belowProductPrice: [".product-item__meta", ".product__price"],
      extra: {
        badge: function fix(elem) {
          if (elem.closest(".product__media")) {
            elem.closest(".product__media").style.overflow = "visible";
          }
          if (elem.closest(".media")) {
            elem.closest(".media").style.overflow = "visible";
          }
        },
      },
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product-item", ".featured-product"],
      badge: [".product-item__media", ".featured-product__media .media"],
      belowProductImage: [
        ".product-item__media",
        ".featured-product__media-container .featured-product__media.visible",
      ],
      belowProductName: [
        ".product-item__text > h4:nth-last-child(1)",
        "form .product-single__title",
      ],
      belowProductPrice: [".product-item__meta", "form .product__price"],
      extra: {
        badge: function fix(elem) {
          if (elem.closest(".grid-section")) {
            elem.closest(".grid-section").style.overflow = "visible";
          }
          if (elem.closest(".featured-product__media-container")) {
            elem.closest(".featured-product__media-container").style.overflow =
              "visible";
          }
          if (elem.closest(".media")) {
            elem.closest(".media").style.overflow = "visible";
          }
        },
      },
    },
    collections: {
      parent: [".product-item ", ".grid__image "],
      badge: [".product-item__media", ".cell-wrapper"],
      belowProductImage: [".product-item__media"],
      belowProductName: [".product-item__text > h4:nth-last-child(1)"],
      belowProductPrice: [".product-item__meta"],
    },
    search: {
      parent: [".product-item "],
      badge: [".product-item__media"],
      belowProductImage: [".product-item__media"],
      belowProductName: [".product-item__text > h4:nth-last-child(1)"],
      belowProductPrice: [".product-item__meta"],
    },
  },
  empire: {
    products: {
      parent: [".product--container", ".productitem", ".product--outer"],
      badge: [
        ".productitem--image",
        ".product-gallery--viewer",
        ".MagicToolboxSlide",
        "#pwzrswiper-container-wrapper .pwzrswiper-container",
      ],
      belowProductImage: [
        ".product-gallery--viewer",
        ".productitem--image",
        ".MagicToolboxSlide",
      ],
      belowProductName: [
        ".product-details .product-block--title",
        ".productitem--title",
      ],
      belowProductPrice: [".product-details .product-block--price", ".price"],
      mutations: [
        ".product-section--content",
        ".product-recently-viewed__content",
        ".static-product-recommendations",
        ".modal-content",
        ".product-section--container",
        ".variant-selection",
        ".options-selection__option-values",
        ".product-block--price",
      ],
      extra: {
        afterAll: function fix() {
          if (acoShopName === "29b51c-2" && acoCurrentPage === "products") {
            const productContainers = Array.from(
              document.querySelectorAll(".product-gallery .belowProductImage")
            );
            const wrap = document.createElement("div");
            const parent = document.querySelector(".product-gallery");
            parent.insertBefore(wrap, parent.children[1]);
            for (const element of productContainers) {
              wrap.append(element);
            }
            wrap.style.display = "flex";
            wrap.style.alignItems = "center";
          }
        },
      },
    },
    home: {
      parent: [
        ".featured-collection__content .productitem",
        ".featured-product--container",
        ".modal-content",
      ],
      badge: [
        ".productitem--image-link .productitem--image",
        ".product-gallery--viewer",
      ],
      belowProductImage: [
        ".productitem--image",
        ".featured-product--inner .product--outer",
        ".product--outer .product-gallery--viewer",
      ],
      belowProductName: [
        ".productitem--info .productitem--title",
        ".product-details .product-title",
        ".product-details .product-block--title",
      ],
      belowProductPrice: [
        ".productitem--info .price__current",
        ".product-details .product-block--price",
      ],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewer"
            )
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
          const allBadges = Array.from(
            document.querySelectorAll(".product-badge_aco")
          );

          for (const element1 of allBadges) {
            element1.style.zIndex = 4;
          }
          const slider = Array.from(
            document.querySelectorAll(".flickity-slider--wrapper")
          );
          for (const slide of slider) {
            slide.style.padding = "10px 0 0";
          }
        },
      },
      mutations: [".featured-collection__content", ".modal-content"],
    },
    collections: {
      parent: [".productitem", ".product--outer", ".snize-product"],
      badge: [
        ".productitem--image-link .productitem--image ",
        ".product-gallery--viewer",
        ".snize-thumbnail-wrapper",
      ],
      belowProductImage: [
        ".productitem--image",
        ".product-gallery--viewer",
        ".snize-thumbnail-wrapper",
      ],
      belowProductName: [
        ".productitem--info .productitem--title",
        ".product-details .product-block--title",
        ".snize-title",
      ],
      belowProductPrice: [
        ".productitem--info .price.productitem__price",
        ".productitem--actions .price",
        ".product-details .product-block--price",
        ".snize-price-list",
      ],
      mutations: [
        ".modal-content",
        ".pagination--container",
        ".collection--section",
        ".snize-search-results-content",
      ],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          const element = document.querySelectorAll(
            ".productitem--image-link .productitem--image > img"
          );
          element.forEach(function (item) {
            item.style.width = `${100}%`;
          });
          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewer"
            )
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
          if (acoShopName === "29b51c-2") {
            const productContainers = Array.from(
              document.querySelectorAll(".productitem")
            );
            for (const container of productContainers) {
              const labelExist = Array.from(
                container.querySelectorAll(".belowProductImage")
              );
              const wrap = document.createElement("div");
              for (const element of labelExist) {
                if (container.querySelector(".label-wrap")) {
                  container.querySelector(".label-wrap").appendChild(element);
                } else {
                  element.parentNode.insertBefore(wrap, element);
                  wrap.append(element);
                  wrap.style.display = "flex";
                  wrap.style.flexWrap = "wrap";
                  wrap.className = "label-wrap";
                }
              }
            }
          }
        },
      },
    },
    search: {
      parent: [
        ".productgrid--item",
        ".product--outer",
        ".boost-sd__product-item",
        ".snize-product",
      ],
      badge: [
        ".productitem--image",
        ".product-gallery--viewer",
        ".boost-sd__product-link-image",
        ".snize-thumbnail-wrapper",
      ],
      belowProductImage: [
        ".productitem--image",
        ".product-gallery--viewer",
        ".boost-sd__product-link-image",
        ".snize-thumbnail-wrapper",
      ],
      belowProductName: [
        ".productitem--info .productitem--title",
        ".product-details .product-block--title",
        ".boost-sd__product-title",
        ".snize-title",
      ],
      belowProductPrice: [
        ".productitem--info .price",
        ".product-details .product-block--price",
        ".boost-sd__product-price",
        ".snize-price-list",
      ],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewer"
            )
          );
          for (const element of productContainers) {
            element.style.overflow = "visible";
          }
          if (acoShopName === "29b51c-2") {
            const productContainers = Array.from(
              document.querySelectorAll(".boost-sd__product-item")
            );
            for (const container of productContainers) {
              const labelExist = Array.from(
                container.querySelectorAll(".belowProductImage")
              );
              const wrap = document.createElement("div");
              for (const element of labelExist) {
                if (container.querySelector(".label-wrap")) {
                  container.querySelector(".label-wrap").appendChild(element);
                } else {
                  element.parentNode.insertBefore(wrap, element);
                  wrap.append(element);
                  wrap.style.display = "flex";
                  wrap.style.flexWrap = "wrap";
                  wrap.className = "label-wrap";
                }
              }
            }
          }
        },
      },
      mutations: [
        ".modal-content",
        ".site-main",
        ".page-content",
        "body[aco-shop-name='panda-hobby-store']",
      ],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
  },
  editions: {
    products: {
      parent: [".product__wrapper", ".product-item"],
      badge: [".product-gallery--image", ".product-item__image-link"],
      belowProductImage: [".product-gallery--viewport", ".product-item__image"],
      belowProductName: [
        "form .product__heading",
        ".product-item__info .product-item__title",
      ],
      belowProductPrice: [
        "form .product-details__price-container .product-price",
        ".product-item__info .product-item__price",
      ],
      extra: {
        badge: function fix(element) {
          element.querySelector(".product-item__image-link").style.display =
            `block`;
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.height = "100%";
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.display = "block";
          element.querySelector(
            ".product-item__quick-shop-button-wrapper"
          ).style.zIndex = 3;
        },
        label: function fix(element) {
          if (
            element.closest("#content .product__wrapper") &&
            element.nextElementSibling.classList.contains("product-badge_aco")
          ) {
            element.nextElementSibling.style.justifyContent = "center";
          }
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewport"
            )
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
          const buttons = Array.from(
            document.querySelectorAll(
              ".product-item__quick-shop-button-wrapper"
            )
          );
          for (const button of buttons) {
            button.style.zIndex = 3;
          }
        },
      },
      mutations: [".product-recommendations", ".modal-content"],
    },
    home: {
      parent: [".product-item", ".product__wrapper"],
      badge: [".product-item__image", ".product-gallery--image"],
      belowProductImage: [".product-item__image", ".product-gallery--viewport"],
      belowProductName: [
        ".product-item__info .product-item__title",
        "form .product__heading",
      ],
      belowProductPrice: [
        ".product-item__info .product-item__price",
        "form .product-details__price-container",
      ],
      extra: {
        badge: function fix(element) {
          element.querySelector(".product-item__image-link").style.display =
            `block`;
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.height = "100%";
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.display = "block";
          element.querySelector(
            ".product-item__quick-shop-button-wrapper"
          ).style.zIndex = 3;
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewport"
            )
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
      mutations: [".modal-content"],
    },
    collections: {
      parent: [".product-item", ".product__wrapper"],
      badge: [".product-item__image", ".product-gallery--image"],
      belowProductImage: [".product-item__image", ".product-gallery--viewport"],
      belowProductName: [
        ".product-item__info .product-item__title",
        "form .product__heading",
      ],
      belowProductPrice: [
        ".product-item__info .product-item__price",
        "form .product-details__price-container",
      ],
      extra: {
        badge: function fix(element) {
          element.querySelector(".product-item__image-link").style.display =
            `block`;
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.height = "100%";
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.display = "block";
          element.querySelector(
            ".product-item__quick-shop-button-wrapper"
          ).style.zIndex = 3;
        },
        afterAll: function fix() {
          document.querySelector(
            ".collection-page .faceted-filters__wrapper"
          ).style.zIndex = 3;

          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewport"
            )
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
      mutations: [".collection-page__product-list", ".modal-content"],
    },
    search: {
      parent: [".product-item", ".product__wrapper"],
      badge: [".product-item__image", ".product-gallery--image"],
      belowProductImage: [".product-item__image", ".product-gallery--viewport"],
      belowProductName: [
        ".product-item__info .product-item__title",
        "form .product__heading",
      ],
      belowProductPrice: [
        ".product-item__info .product-item__price",
        "form .product-details__price-container",
      ],
      extra: {
        badge: function fix(element) {
          element.querySelector(".product-item__image-link").style.display =
            `block`;
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.height = "100%";
          element.querySelector(
            ".product-item__image-link > img.product-item__image-primary"
          ).style.display = "block";
          element.querySelector(
            ".product-item__quick-shop-button-wrapper"
          ).style.zIndex = 3;
        },
        afterAll: function fix() {
          document.querySelector(
            ".search-page .faceted-filters__wrapper"
          ).style.zIndex = 3;

          const productContainers = Array.from(
            document.querySelectorAll(
              ".product-gallery .product-gallery--viewport"
            )
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
      mutations: [".modal-content"],
    },
  },
  alchemy: {
    products: {
      parent: [".product-grid", ".card"],
      badge: [".product-media--image", ".card__image"],
      belowProductImage: [
        ".media-gallery__main > div:last-of-type",
        ".card__image",
      ],
      belowProductName: [
        ".product-grid__detail .product-title",
        ".card__content .card__title",
      ],
      belowProductPrice: [
        ".product-grid__detail .product-price",
        ".card__content .product-price",
      ],
      extra: {
        badge: function fix(element) {
          element.style.position = "relative";
        },
      },
    },
    home: {
      parent: [".card", ".product"],
      badge: [".card__image", ".product-media .lazyload-placeholder > picture"],
      belowProductImage: [
        ".card__image",
        ".media-gallery__main > div:last-of-type",
      ],
      belowProductName: [
        ".card__content .card__title",
        ".product-grid__detail .product-title",
      ],
      belowProductPrice: [
        ".card__content .product-price",
        ".product-grid__detail .product-price",
      ],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".product-media .lazyload-placeholder")
          );
          for (const element of productContainers) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              element.style.overflow = "visible";
              element.classList.add("aco_badge_adjusted");
            }
          }
        },
      },
    },
    collections: {
      parent: [".card"],
      badge: [".card__image"],
      belowProductImage: [".card__image"],
      belowProductName: [".card__content .card__title"],
      belowProductPrice: [".card__content .product-price"],
    },
    search: {
      parent: [".card"],
      badge: [".card__image"],
      belowProductImage: [".card__image"],
      belowProductName: [".card__content .card__title"],
      belowProductPrice: [".card__content .product-price"],
    },
  },
  fashionopolism: {
    products: {
      parent: [
        ".collection__page-product",
        ".product__section",
        ".modal__container",
      ],
      badge: [
        ".prod-container .reveal",
        ".product-media-container",
        ".rondell-container .rondell-item",
      ],
      belowProductImage: [
        ".flickity-viewport",
        ".prod-container .reveal",
        ".product-media-container",
      ],
      belowProductName: [
        ".product-info a h2",
        ".product__section--header .product__section-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".price .price-item",
        ".price__pricing-group",
      ],
      extra: {
        badge: function fix(element) {
          if (element.closest(".flickity-viewport")) {
            element.closest(".flickity-viewport").style.overflow = "visible";
          }
          if (element.closest(".product-quickview__container")) {
            element.closest(".product-quickview__container").style.overflow =
              "visible";
          }

          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [
        ".featured__collection-product",
        ".featured__product-container",
        ".modal__container",
      ],
      badge: [".prod-container .reveal", ".product-media-container "],
      belowProductImage: [
        ".prod-container .reveal",
        ".product__gallery--container .flickity-viewport ",
        ".product-media-container",
      ],
      belowProductName: [
        ".product-info a h2",
        ".product__section--header .product__section-title",
      ],
      belowProductPrice: [".product-info .price", ".price__pricing-group"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".flickity-viewport")) {
            element.closest(".flickity-viewport").style.overflow = "visible";
          }
          if (element.closest(".product-quickview__container")) {
            element.closest(".product-quickview__container").style.overflow =
              "visible";
          }
          if (element.closest(".slick-list")) {
            element.closest(".slick-list").style.overflow = "visible";
          }
          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
        afterAll: function fix() {
          setTimeout(() => {
            const element = document
              .querySelectorAll(
                ".featured__collection-carousel .flickity-slider"
              )[0]
              .querySelectorAll(".featured__collection-product")[0];
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              const extraLabelHeight = Array.from(
                element
                  .closest(".featured__collection-product")
                  .querySelectorAll(".product-badge_aco_img.aco_label")
              )
                .map((val) => val.clientHeight)
                .reduce((partialSum, a) => partialSum + a, 0);
              element.classList.add("aco_badge_adjusted");
              document
                .querySelectorAll(
                  ".featured__collection-carousel .flickity-slider"
                )
                .forEach(function (item) {
                  item.closest(".flickity-viewport").style.height = `${
                    element.clientHeight + extraLabelHeight + 40
                  }px`;
                });
            }
          }, 1000);
        },
      },
    },
    collections: {
      parent: [".collection__page-product", ".modal__container"],
      badge: [".prod-container .reveal", ".product-media-container"],
      belowProductImage: [
        ".prod-container .reveal",
        ".product-media-container",
      ],
      belowProductName: [
        ".product-info a h2",
        ".product__section--header .product__section-title",
      ],
      belowProductPrice: [".price", ".price__pricing-group"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".product-quickview__container")) {
            element.closest(".product-quickview__container").style.overflow =
              "visible";
          }
          if (element.closest(" .flickity-viewport")) {
            element.closest(" .flickity-viewport").style.overflow = "visible";
          }

          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
      mutations: [".product__section-contentWrapper"],
    },
    search: {
      parent: [".product-index", ".product__section", ".modal__container"],
      badge: [".prod-image .reveal", ".product-media-container"],
      belowProductImage: [".prod-image .reveal", ".product-media-container"],
      belowProductName: [
        ".product-info a h2",
        ".product__section--header .product__section-title",
      ],
      belowProductPrice: [".price", ".price__pricing-group"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".product-quickview__container")) {
            element.closest(".product-quickview__container").style.overflow =
              "visible";
          }
          if (element.closest(".flickity-viewport")) {
            element.closest(".flickity-viewport").style.overflow = "visible";
          }

          const allBadges = Array.from(
            element.querySelectorAll(".product-badge_aco")
          );

          for (const el of allBadges) {
            el.style.zIndex = 4;
          }
        },
      },
    },
  },
  boost: {
    products: {
      parent: [
        ".product-block",
        ".product-layout-grid",
        ".product-block.grid__item",
      ],
      badge: [
        ".product-detail__image .rimage-wrapper ",
        ".product-block .product-block__image-container",
      ],
      belowProductImage: [
        ".product-block__image",
        ".product-detail__images > div:nth-of-type(1)",
        ".product-block__image-container",
      ],
      belowProductName: [".product-block__title", ".product-detail__title"],
      belowProductPrice: [".product-price", ".product-detail__price"],
      mutations: [
        ".product-layout-grid",
        'div[data-section-type="recently-viewed"]',
      ],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        badge: function fix(el) {
          el.closest(".global-border-radius").style.overflow = `visible`;
          el.closest(".featured-product-image-link").style.overflow = `visible`;
          el.closest(".featured-product-image").style.overflow = `visible`;
          el.querySelector(
            ".template-product .breadcrumbs"
          ).style.marginBottom = `0px`;
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".template-product .breadcrumbs")
          );
          for (const element of productContainers) {
            element.classList.add("aco_badge_adjusted");
            element.style.marginBottom = `0px`;
          }
        },
      },
    },
    home: {
      parent: [".product-block", ".section-featured-product"],
      badge: [
        ".product-block__image-container",
        ".featured-product-image-outer",
      ],
      belowProductImage: [
        ".product-block__image-container",
        ".featured-product-image-outer",
      ],
      belowProductName: [".product-block__title", ".featured-product__title"],
      belowProductPrice: [".product-price", ".product-price"],
      extra: {
        badge: function fix(el) {
          el.closest(".featured-product-image").style.overflow = `visible`;
          el.closest(".global-border-radius").style.overflow = `visible`;
          el.closest(".image-two").style.overflow = `visible`;
          el.closest(".featured-product-image-link").style.overflow = `visible`;
        },
        afterAll: function fix() {
          const element = document.querySelector(
            ".featured-product-image-link"
          );
          const wrap = document.createElement("div");
          element.parentNode.insertBefore(wrap, element);
          wrap.append(element);
          wrap.classList.add("featured-product-image-outer");
          wrap.style.position = "relative";
        },
      },
    },
    collections: {
      parent: [".product-block"],
      badge: [".product-block__image-container"],
      belowProductImage: [".product-block__image-container"],
      belowProductName: [".product-block__title"],
      belowProductPrice: [".product-price"],
      extra: {
        badge: function fix(el) {
          el.querySelector(".image-one").style.overflow = `visible`;
          el.parentElement.style.overflow = `visible`;
        },
      },
    },
    search: {
      parent: [".product-block"],
      badge: [".product-block__image-container"],
      belowProductImage: [".product-block__image-container"],
      belowProductName: [".product-block__title"],
      belowProductPrice: [".product-price"],
      extra: {
        badge: function fix(el) {
          el.querySelector(".image-one").style.overflow = `visible`;
          el.parentElement.style.overflow = `visible`;
        },
      },
    },
  },
  symmetry: {
    products: {
      parent: [".product-block", ".product-detail"],
      badge: [
        "body[aco-shop-name='christmasjumpersau'] .main-image .slide:first-child .show-gallery",
        ".main-image",
        ".image-label-wrap",
      ],
      belowProductImage: [".image-label-wrap", ".gallery__inner"],
      belowProductName: [".product-block__title", ".title"],
      belowProductPrice: [".product-price", ".price-container"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".collection-listing")) {
            element.closest(".collection-listing").style.overflow = "visible";
          }
          if (element.closest(".image-cont")) {
            element.closest(".image-cont").style.overflow = "visible";
          }
        },
      },
    },
    home: {
      parent: [
        ".block-inner",
        ".section-featured-product",
        ".quickbuy-container",
      ],
      badge: [".product-block__image", ".main-image", ".image-label-wrap"],
      belowProductImage: [".image-label-wrap", ".gallery__inner"],
      belowProductName: [".product-block__title", ".title-row"],
      belowProductPrice: [".product-price", ".price-container"],
      extra: {
        badge: function fix(element) {
          if (
            !acoShopName.includes("neewer") &&
            element.closest(".collection-listing")
          ) {
            element.closest(".collection-listing").style.overflow = "visible";
          }
          if (element.closest(".image-cont")) {
            element.closest(".image-cont").style.overflow = "visible";
          }
        },
      },
      mutations: [".slick-list", ".product-media-wrapper"],
    },
    collections: {
      parent: [".block-inner", ".quickbuy-container"],
      badge: [".image-label-wrap", ".main-image"],
      belowProductImage: [".image-label-wrap", ".gallery__inner"],
      belowProductName: [".product-block__title", ".title-row"],
      belowProductPrice: [".product-price", ".price-container"],
      mutations: [".collection-listing", ".product-list", ".filter-container"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".image-cont")) {
            element.closest(".image-cont").style.overflow = "visible";
          }
          if (element.closest(".collection-listing")) {
            element.closest(".collection-listing").style.overflow = "visible";
          }
        },
      },
    },
    search: {
      parent: [".block-inner", ".quickbuy-container"],
      badge: [".image-label-wrap", ".main-image"],
      belowProductImage: [".image-label-wrap", ".gallery__inner"],
      belowProductName: [".product-block__title", ".title-row"],
      belowProductPrice: [".product-price", ".price-container"],
      mutations: [".collection-listing"],
      extra: {
        badge: function fix(element) {
          if (element.closest(".product-block .image-cont")) {
            element.closest(".product-block .image-cont").style.overflow =
              "visible";
          }
        },
      },
    },
  },
  icon: {
    products: {
      parent: [
        ".product__section",
        ".product",
        "div.product-index",
        "product-page.",
      ],
      badge: [
        ".product-media-container",
        ".prod-image .reveal",
        ".products-images",
      ],
      belowProductImage: [
        ".flickity-viewport",
        ".prod-image",
        ".products-images",
      ],
      belowProductName: [
        ".product__section-details__inner .section-title h1",
        ".product-details .js-product-details-link",
        ".product-description h1",
      ],
      belowProductPrice: [
        ".product__section-details__inner .price__pricing-group",
        ".product-details .price",
        ".product-description .price",
      ],
      mutations: [".product-image-container"],
      extra: {
        afterAll: function fix() {
          const featuredElement = Array.from(
            document.querySelectorAll(".product__section")
          );
          for (const element1 of featuredElement) {
            element1.querySelector(".flickity-viewport").style.overflow =
              "visible";
          }
        },
      },
    },
    home: {
      parent: [
        ".featured__collection-product",
        ".product__section",
        "div.product-index",
      ],
      badge: [".prod-image", ".product-media-container"],
      belowProductImage: [".ci", ".flickity-viewport"],
      belowProductName: [
        ".product-details > a",
        ".product__section-details h3",
      ],
      belowProductPrice: [
        ".product-details .price",
        ".product__section-details .price",
      ],
      extra: {
        afterAll: function fix() {
          setTimeout(() => {
            const parentElement = Array.from(
              document.querySelectorAll(
                ".featured__collection-carousel .flickity-viewport"
              )
            );
            for (const element of parentElement) {
              element.style.overflow = "clip";
              element.style.overflowY = "visible";
              const height = Math.max(
                ...Array.from(
                  element.querySelectorAll(".featured__collection-product")
                ).map((val) => getElementHeight(val))
              );
              if (!element.classList.contains("aco_badge_adjusted")) {
                element.classList.add("aco_badge_adjusted");
                element.style.height = `${height}px`;
              }
            }
          }, 1000);
          const featuredElement = Array.from(
            document.querySelectorAll(".product__section")
          );
          for (const element1 of featuredElement) {
            element1.querySelector(".flickity-viewport").style.overflow =
              "visible";
          }
        },
      },
    },
    collections: {
      parent: ["div.product-index"],
      badge: [".prod-image .reveal", ".ci"],
      belowProductImage: [".prod-image", ".ci"],
      belowProductName: [
        ".product-details .js-product-details-link",
        ".product-details a",
      ],
      belowProductPrice: [".product-details .price"],
    },
    search: {
      parent: ["div.product-index"],
      badge: [".ci"],
      belowProductImage: [".ci"],
      belowProductName: [
        ".product-details .js-product-details-link",
        ".product-details a",
      ],
      belowProductPrice: [".product-details .price"],
    },
  },
  envy: {
    products: {
      parent: ["#product-box", ".indiv-product"],
      badge: [
        ".product-single__medias",
        ".grid__image",
        ".grid__image .hidden",
        ".flex-viewport",
      ],
      belowProductImage: [
        ".product-single__medias",
        ".grid__image",
        ".product-description-header",
      ],
      belowProductName: [".indiv-product-title-text", ".custom-font"],
      belowProductPrice: [".money-styling", ".product-page--pricing"],
      extra: {
        afterAll: function fix() {
          const featuredProduct = Array.from(
            document.querySelectorAll(".product-single__medias")
          );
          for (const element2 of featuredProduct) {
            element2.style.position = "relative";
          }
          const productContainers = Array.from(
            document.querySelectorAll(".grid__image")
          );
          for (const element of productContainers) {
            if (!element.classList.contains("aco_badge_adjusted")) {
              element.classList.add("aco_badge_adjusted");
              element.style.position = "relative";
              element.style.display = "block";
            }
          }
        },
      },
      mutations: [".product-recommendations-wrapper", "product-single__media"],
    },
    home: {
      parent: [".indiv-product", ".product--featured-product"],
      badge: [
        ".grid__image",
        ".swiper-slide .product-single__thumbnail",
        ".grid__image .hidden",
      ],
      belowProductImage: [".grid__image", ".swiper-wrapper"],
      belowProductName: [
        ".indiv-product-title-text",
        ".homepage-headline-text__link",
      ],
      belowProductPrice: [".money-styling", ".product-page--pricing"],
      extra: {
        badge: function fix(el) {
          el.closest(".reveal").style.overflow = `visible`;
          const parentElements = Array.from(
            document.querySelectorAll(".product-badge_aco")
          );
          for (const element2 of parentElements) {
            element2.style.zIndex = 2;
          }
        },
      },
    },
    collections: {
      parent: [".indiv-product", ".product--featured-product"],
      badge: [
        ".grid__image",
        ".swiper-slide .product-single__thumbnail",
        ".grid__image .hidden",
      ],
      belowProductImage: [".grid__image", ".swiper-wrapper"],
      belowProductName: [
        ".indiv-product-title-text",
        ".homepage-headline-text__link",
      ],
      belowProductPrice: [".money-styling", ".product-page--pricing"],
      mutations: ["#CollectionProductGrid"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        badge: function fix(el) {
          el.closest(".reveal").style.overflow = `visible`;
          const parentElements = Array.from(
            document.querySelectorAll(".product-badge_aco")
          );
          for (const element2 of parentElements) {
            element2.style.zIndex = 2;
          }
        },
      },
    },
    search: {
      parent: [".indiv-product"],
      badge: [".grid__image", ".grid__image .hidden"],
      belowProductImage: [".grid__image"],
      belowProductName: [".indiv-product-title-text"],
      belowProductPrice: [".money-styling"],
      extra: {
        badge: function fix(el) {
          el.closest(".reveal").style.overflow = `visible`;
          const parentElements = Array.from(
            document.querySelectorAll(".product-badge_aco")
          );
          for (const element2 of parentElements) {
            element2.style.zIndex = 2;
          }
        },
      },
      mutations: ["#CollectionProductGrid"],
    },
  },
  blockshop: {
    products: {
      parent: [".product--root", ".product-page--main-content"],
      badge: [
        ".product--image .image--root",
        ".product-page--wrapper .product-media--wrapper",
        ".product-page--media .product-media--wrapper",
      ],
      belowProductImage: [
        ".product--image-wrapper  ",
        ".product-media--wrapper",
      ],
      belowProductName: [".product--title", ".product-page--block h2"],
      belowProductPrice: [
        ".product--price-wrapper",
        ".product-price--original",
      ],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product--root", ".featured-product--wrapper"],
      badge: [".product--image .image--root", ".product-media--featured"],
      belowProductImage: [
        ".product--image-wrapper",
        ".featured-product--media > div:nth-last-of-type(2)",
      ],
      belowProductName: [".product--title", ".featured-product--heading"],
      belowProductPrice: [
        ".product--price-wrapper",
        ".product-price--original",
      ],
      extra: {
        afterAll: function fix() {
          setTimeout(() => {
            const productContainers = Array.from(
              document.querySelectorAll(
                ".featured-collection--carousel .carousel--y-container"
              )
            );
            for (const element of productContainers) {
              const height = Math.max(
                ...Array.from(element.querySelectorAll(".carousel--block")).map(
                  (val) => getElementHeight(val)
                )
              );
              if (!element.classList.contains("aco_badge_adjusted")) {
                element.classList.add("aco_badge_adjusted");
                element.style.height = `${height}px`;
              }
            }
          }, 1000);
        },
      },
    },
    collections: {
      parent: [".product--root", ".featured-product--wrapper"],
      badge: [".product--image .image--root", ".product-media--featured"],
      belowProductImage: [
        ".product--image-wrapper",
        ".featured-product--media > div:nth-last-of-type(2)",
      ],
      belowProductName: [".product--title", ".featured-product--heading"],
      belowProductPrice: [
        ".product--price-wrapper",
        ".product-price--original",
      ],
    },
    search: {
      parent: [".product--root"],
      badge: [".product--image .image--root"],
      belowProductImage: [".product--image-wrapper"],
      belowProductName: [".product--title"],
      belowProductPrice: [".product--price-wrapper"],
      extra: {
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".search--product .product--root")
          );
          for (const element of productContainers) {
            if (!element.classList.contains("aco_badge_adjusted")) {
              element.classList.add("aco_badge_adjusted");
              element.style.display = `block`;
            }
          }
        },
      },
    },
  },
  venue: {
    products: {
      parent: [
        ".product-single",
        ".product-single__bottom",
        ".product-card",
        ".quick-shop",
        ".recommended-products",
        ".product",
      ],
      badge: [
        ".product-single__photo .slick-list",
        ".product-card__media",
        ".product__media .o-ratio__content",
      ],
      belowProductImage: [
        ".slick-list",
        ".product-card__media",
        ".product__media .o-ratio",
      ],
      belowProductName: [
        ".js-product-cart-replace .product-single__classic-title",
        ".product-card__details .product-card-link",
        ".product-featured__photo",
        ".product__details .product__title",
      ],
      belowProductPrice: [
        ".product-single__price",
        ".product-card__details__hover > .product-card-link",
        ".product__details .product__price",
      ],
      mutations: [
        ".js-section__product-recommendations",
        ".js-section__product-related",
        ".product-recommendations",
        ".section--recommended-products ",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-card-top").style.overflow = `visible`;
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".slick-list.draggable")
          );
          for (const element of productContainers) {
            element.classList.add("aco_badge_adjusted");
            element.style.overflow = `visible`;
          }
        },
      },
    },
    home: {
      parent: [".quick-shop", ".product-card", ".product"],
      badge: [
        ".product-card__media",
        ".product-featured__photo .slick-list",
        ".product__media .o-ratio__content",
      ],
      belowProductImage: [
        ".product-card__media",
        ".product-featured__photo-wrapper",
        ".product__media .o-ratio",
      ],
      belowProductName: [
        ".product-card__details .product-card-link",
        ".product-featured__details .section__title-text",
        ".product__details .product__title",
      ],
      belowProductPrice: [
        ".product-featured__price",
        ".product-card__details__hover > .product-card-link",
        ".product__details .product__price",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-card-top").style.overflow = `visible`;
        },
        afterAll: function fix() {
          const productContainers = Array.from(
            document.querySelectorAll(".slick-list.draggable")
          );
          for (const element of productContainers) {
            element.classList.add("aco_badge_adjusted");
            element.style.overflow = `visible`;
          }
          const featuredProductContainers = Array.from(
            document.querySelectorAll(".product-featured .slick-list")
          );
          for (const element1 of featuredProductContainers) {
            element1.classList.add("aco_badge_adjusted");
            element1.style.overflow = `visible`;
          }
        },
      },
      mutations: [".product-featured__photo-wrapper"],
      mutationConfig: { childList: true, subtree: true },
    },
    collections: {
      parent: [".product-card", ".quick-shop", ".product"],
      badge: [
        ".product-card__media",
        ".o-layout__item .product .product-top",
        ".product__media .o-ratio__content",
      ],
      belowProductImage: [".product-card__media", ".product__media .o-ratio"],
      belowProductName: [
        ".product-card__details .product-card-link",
        ".product__details .product__title",
      ],
      belowProductPrice: [
        ".product-card__details__hover > .product-card-link",
        ".product__details .product__price",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-card-top").style.overflow = `visible`;
        },
      },
    },
    search: {
      parent: [".product-card", ".quick-shop", ".product"],
      badge: [
        ".product-card__media",
        ".o-layout__item .product .product-top",
        ".product__media .o-ratio__content",
      ],
      belowProductImage: [".product-card__media", ".product__media .o-ratio"],
      belowProductName: [
        ".product-card__details .product-card-link",
        ".product__details .product__title",
      ],
      belowProductPrice: [
        ".product-card__details__hover > .product-card-link",
        ".product__details .product__price",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".product-card-top").style.overflow = `visible`;
        },
      },
    },
  },
  streamline: {
    products: {
      parent: [".grid", ".grid-product__link"],
      badge: [
        ".product-image-main",
        ".slideshow-wrapper .product-slide",
        ".product-slider .product-slide",
        ".pwzrswiper-wrapper .pwzrswiper-slide",
      ],
      belowProductImage: [
        ".product__main-photos-wrapper",
        ".slideshow-wrapper",
        ".pwzrswiper-wrapper",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-product__meta .grid-product__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product-single__prices",
        ".grid-product__meta .grid-product__price",
      ],
      extra: {
        badge: (el) => {
          if (el.closest(".product__main-photos")) {
            el.closest(".product__main-photos").style.overflow = "visible";
          }
          el.closest(".grid-product__link").style.overflow = "visible";
          el.closest(".grid__item").style.overflow = "visible";
          el.closest(".overflow-scroller").style.overflowX = "clip";
          el.closest(".overflow-scroller").style.overflowY = "visible";
          el.closest(".overflow-scroller").style.padding = "40px 0";
        },
      },
    },
    home: {
      parent: [".grid-product__content"],
      badge: [
        ".slideshow-wrapper .product-slide",
        ".product-image-main",
        ".product-slider .product-slide",
      ],
      belowProductImage: [
        ".slideshow-wrapper",
        ".product__main-photos-wrapper",
      ],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-single__prices",
      ],
      extra: {
        badge: function fix(el) {
          if (el.closest(".product__main-photos")) {
            el.closest(".product__main-photos").style.overflow = "visible";
          }
          el.closest(".grid-product__link").style.overflow = "visible";
          el.closest(".grid__item").style.overflow = "visible";
          el.closest(".overflow-scroller").style.overflowX = "clip";
          el.closest(".overflow-scroller").style.overflowY = "visible";
          el.closest(".overflow-scroller").style.padding = "40px 0";
        },
      },
    },
    collections: {
      parent: [".grid", ".grid__item", ".grid-product__link"],
      badge: [
        ".product__main-photos-wrapper",
        ".slideshow-wrapper .product-slide .image-wrap",
        ".product-slider .product-slide",
      ],
      belowProductImage: [
        ".product__main-photos-wrapper",
        ".slideshow-wrapper",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-product__meta .grid-product__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product-single__prices",
        ".grid-product__meta .grid-product__price",
      ],
      extra: {
        badge: function fix(el) {
          el.closest(".grid-product__link").style.overflow = "visible";
        },
      },
    },
    search: {
      parent: [".grid-product__link"],
      badge: [
        ".slideshow-wrapper .product-slide",
        ".product-slider .product-slide",
      ],
      belowProductImage: [".slideshow-wrapper"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
      extra: {
        badge: function fix(el) {
          el.closest(".grid-product__link").style.overflow = "visible";
        },
      },
    },
  },
  testament: {
    products: {
      parent: [
        ".product__section-container",
        ".product-index",
        ".product-recommendations .product",
        ".product-top",
      ],
      badge: [".product-image-container", "div.product-index .reveal"],
      belowProductImage: [".product-image-container", ".js-product-image"],
      belowProductName: [
        "#product-description > h1",
        ".product__section-details .product-title",
        ".product-info .prod-title",
      ],
      belowProductPrice: [".price > div", ".product-info .price"],
      extra: {
        afterAll: function fix() {
          var acoElement = document.querySelector(
            ".slideout__trigger-quickview__wrapper"
          );
          if (acoElement) acoElement.style.zIndex = 3;
        },
        badge: function fix(el) {
          el.closest(".js-product-listing").style.overflow = "visible";
          el.closest(".prod-image").style.overflow = "visible";
        },
      },
    },
    home: {
      parent: [
        ".js-product-listing",
        ".product__section-container",
        ".product",
      ],
      badge: [
        "div.product-index .reveal",
        ".product-image-container",
        ".prod-image .reveal",
      ],
      belowProductImage: [
        ".js-product-image",
        ".product-image-container",
        ".prod-image .reveal",
      ],
      belowProductName: [
        ".product-info .prod-title",
        ".product__section-details .product-title",
      ],
      belowProductPrice: [".product-info .price", ".price > div"],
      extra: {
        badge: function fix(el) {
          el.closest(".prod-image").style.overflow = "visible";
          el.closest(".js-product-listing ").style.overflow = "visible";
          el.closest(".js-product-listing ").style.padding = "15px";
          el.closest(".flickity-viewport").style.overflowX = "clip";
          el.closest(".flickity-viewport").style.overflowY = "visible";
        },
        afterAll: function fix() {
          setTimeout(() => {
            const parentElement = Array.from(
              document.querySelectorAll(
                ".featured__collection-carousel .flickity-viewport"
              )
            );
            for (const element of parentElement) {
              const height = Math.max(
                ...Array.from(
                  element.querySelectorAll(".featured__collection-product")
                ).map((val) => getElementHeight(val))
              );
              if (!element.classList.contains("aco_badge_adjusted")) {
                element.classList.add("aco_badge_adjusted");
                element.style.height = `${height}px`;
              }
            }
            document.querySelector(
              ".slideout__trigger-quickview__wrapper"
            ).style.zIndex = 3;
          }, 1000);
        },
      },
    },
    collections: {
      parent: [
        ".js-product-listing",
        ".product__section-container",
        ".product-index",
      ],
      badge: [
        "div.product-index .reveal",
        ".product-image-container",
        ".prod-image .reveal",
      ],
      belowProductImage: [
        ".js-product-image",
        ".product-image-container",
        ".prod-image .reveal",
      ],
      belowProductName: [
        ".product-info .prod-title",
        ".product__section-details .product-title",
      ],
      belowProductPrice: [".product-info .price", ".price > div"],
      extra: {
        afterAll: function fix() {
          if (document.querySelector(".slideout__trigger-quickview__wrapper")) {
            document.querySelector(
              ".slideout__trigger-quickview__wrapper"
            ).style.zIndex = 3;
          }
        },
      },
    },
    search: {
      parent: [".js-product-listing", ".product__section-container"],
      badge: ["div.product-index .reveal", ".product-image-container"],
      belowProductImage: [".js-product-image", ".product-image-container"],
      belowProductName: [
        ".product-info .prod-title",
        ".product__section-details .product-title",
      ],
      belowProductPrice: [".product-info .price", ".price > div"],
      extra: {
        badge: function fix(el) {
          el.closest(".prod-image").style.overflow = "visible";
        },
        afterAll: function fix() {
          document.querySelector(
            ".slideout__trigger-quickview__wrapper"
          ).style.zIndex = 3;
        },
      },
    },
  },
  ecomsolid: {
    products: {
      parent: [
        ".gt_productlist-item",
        ".gt-single-product",
        ".gt_product-element",
        ".gt_product",
      ],
      badge: [".gt_product-image", ".product__media"],
      belowProductImage: [".gt_product-images", ".product__media-list"],
      belowProductName: [
        ".title-product .gt_heading",
        ".gt_product-content .gt_heading",
        ".gt_product-info .gt_product-info--top",
        ".gt_product-info .gt_product-name",
      ],
      belowProductPrice: [
        ".wrapper_price",
        ".gt_product-content div[data-attribute=boxPrice]",
      ],
    },
    home: {
      parent: [".gt_productlist-item", ".gt_product-element"],
      badge: [".gt_product-image"],
      belowProductImage: [".gt_product-image"],
      belowProductName: [
        ".gt_product-info .gt_product-name",
        ".gt_product-info .gt_product-info--top",
      ],
      belowProductPrice: [".wrapper_price"],
    },
    collections: {
      parent: [".gt_productlist-item", ".gt_product-element"],
      badge: [".gt_product-image"],
      belowProductImage: [".gt_product-image"],
      belowProductName: [
        ".gt_product-info .gt_product-name",
        ".gt_product-info .gt_product-info--top",
      ],
      belowProductPrice: [".wrapper_price"],
    },
    search: {
      parent: [".gt_productlist-item", ".gt_product-element"],
      badge: [".gt_product-image"],
      belowProductImage: [".gt_product-image"],
      belowProductName: [
        ".gt_product-info .gt_product-name",
        ".gt_product-info .gt_product-info--top",
      ],
      belowProductPrice: [".wrapper_price"],
    },
  },
  retina: {
    home: {
      parent: [
        ".product_section",
        ".products .thumbnail",
        ".product-thumbnail",
      ],
      badge: [
        ".slides .image__container",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductImage: [
        ".product_slider",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductName: [
        ".product_name",
        ".info .title",
        ".product-thumbnail__title",
      ],
      belowProductPrice: [".info .price", ".price", ".product__price"],
    },
    collections: {
      parent: [
        ".product_section",
        ".products .thumbnail",
        ".product-thumbnail",
      ],
      badge: [
        ".slides .image__container",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductImage: [
        ".product_slider",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductName: [
        ".product_name",
        ".info .title",
        ".product-thumbnail__title",
      ],
      belowProductPrice: [".info .price", ".price", ".product__price"],
    },
    search: {
      parent: [
        ".product_section",
        ".products .thumbnail",
        ".product-thumbnail",
      ],
      badge: [
        ".slides .image__container",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductImage: [
        ".product_slider",
        ".product_image",
        ".product-thumbnail__link",
      ],
      belowProductName: [
        ".product_name",
        ".info .title",
        ".product-thumbnail__title",
      ],
      belowProductPrice: [".info .price", ".price", ".product__price"],
    },
    products: {
      parent: [".product_section", ".products .thumbnail", ".product-page"],
      badge: [
        ".slides .image__container",
        ".product_image",
        ".product-gallery__main .flickity-viewport",
      ],
      belowProductImage: [
        ".product_slider",
        ".product_image",
        ".product-gallery__main .flickity-viewport",
      ],
      belowProductName: [".product_name", ".info .title", ".product__title"],
      belowProductPrice: [".info .price", ".price", ".price-container"],
    },
  },
  mabelchong: {
    home: {
      parent: [".c-product"],
      badge: [".c-product__images"],
      belowProductImage: [".c-product__images"],
      belowProductName: [".c-product__content .c-product__ttl"],
      belowProductPrice: [".c-product__content .c-product__price"],
    },
    collections: {
      parent: [".c-product"],
      badge: [".c-product__images"],
      belowProductImage: [".c-product__images"],
      belowProductName: [".c-product__content .c-product__ttl"],
      belowProductPrice: [".c-product__content .c-product__price"],
    },
    products: {
      parent: [".c-product", ".c-single-product"],
      badge: [".c-product__images", ".c-single-product__gallery-item"],
      belowProductImage: [".c-product__images", ".c-carousel__slider"],
      belowProductName: [
        ".c-product__content .c-product__ttl",
        ".c-single-product__ttl",
      ],
      belowProductPrice: [
        ".c-product__content .c-product__price",
        ".c-single-product__price",
      ],
    },
    search: {
      parent: [".c-product"],
      badge: [".c-product__images"],
      belowProductImage: [".c-product__images"],
      belowProductName: [".c-product__content .c-product__ttl"],
      belowProductPrice: [".c-product__content .c-product__price"],
    },
  },
  woodmart: {
    products: {
      parent: [".product-image-summary-wrap", ".product-grid-item"],
      badge: [".owl-item .product-image-wrap", ".product-image-link"],
      belowProductImage: [
        ".owl-item .product-image-wrap",
        ".product-image-link",
      ],
      belowProductName: [".summary-inner .name", ".product-title"],
      belowProductPrice: [".price-box", ".price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-image-link"],
      belowProductImage: [".product-image-link"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
      mutations: [".main-page-wrapper"],
    },
    home: {
      parent: [".product-image-summary-wrap", ".product-grid-item"],
      badge: [".owl-item .product-image-wrap", ".product-image-link"],
      belowProductImage: [
        ".owl-item .product-image-wrap",
        ".product-image-link",
      ],
      belowProductName: [".summary-inner .name", ".product-title"],
      belowProductPrice: [".price-box", ".price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-image-link"],
      belowProductImage: [".product-image-link"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
    },
  },
  debutify: {
    home: {
      parent: [".grid-product", ".product-single"],
      badge: [
        ".grid-product__image-wrapper .product--wrapper",
        ".product-single__media-group .product--wrapper",
      ],
      belowProductImage: [
        ".grid-product__image-wrapper",
        ".product-single__media-group",
      ],
      belowProductName: [".grid-product__title.h6", ".product-single__title"],
      belowProductPrice: [
        ".grid-product__price-wrap",
        ".price-container-wrapper",
      ],
    },
    collections: {
      parent: [".grid-product"],
      badge: [".grid-product__image-wrapper .product--wrapper"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title.h6"],
      belowProductPrice: [".grid-product__price-wrap"],
    },
    products: {
      parent: [".grid-product", ".product-single"],
      badge: [
        ".grid-product__image-wrapper .product--wrapper",
        ".product-single__media-group .product--wrapper",
      ],
      belowProductImage: [
        ".grid-product__image-wrapper",
        ".product-single__media-group",
      ],
      belowProductName: [".grid-product__title.h6", ".product-single__title"],
      belowProductPrice: [
        ".grid-product__price-wrap",
        ".price-container-wrapper",
      ],
    },
    search: {
      parent: [".grid-product"],
      badge: [".grid-product__image-wrapper .product--wrapper"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title.h6"],
      belowProductPrice: [".grid-product__price-wrap"],
    },
  },
  glossier: {
    products: {
      parent: [".product-single"],
      badge: [".my-gallery a"],
      belowProductImage: [".my-gallery"],
      belowProductName: [".product-single__meta .product-single__title"],
      belowProductPrice: [".product-single__meta .product-single__price"],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-wr a"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-wr a"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image-wr a"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
  },
  kingdom: {
    products: {
      parent: [".product", ".product-item"],
      badge: [".product-gallery__item", ".product-item__thumbnail"],
      belowProductImage: [".product-gallery__item", ".product-item__thumbnail"],
      belowProductName: [".product__title.h0", ".product-item__title"],
      belowProductPrice: [".product__price--original", ".product-item__price"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__thumbnail"],
      belowProductImage: [".product-item__thumbnail"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
      mutations: [".featured-collection"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__thumbnail"],
      belowProductImage: [".product-item__thumbnail"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__thumbnail"],
      belowProductImage: [".product-item__thumbnail"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
  },
  turbo: {
    products: {
      parent: [
        ".product-main",
        ".product-wrap",
        ".product_section",
        "div[data-pf-type='ProductBox']",
      ],
      badge: [
        ".product_gallery .flickity-viewport",
        ".product_image a",
        ".product_gallery",
        ".pf-main-media .splide__list",
        ".main_product_slider_inner .flickity-viewport",
      ],
      belowProductImage: [
        ".product_gallery .flickity-viewport",
        ".product_image a",
        ".product__images .gallery-wrap",
      ],
      belowProductName: [".product-info__caption .title", ".product_name"],
      belowProductPrice: [
        ".product-info__caption .price ",
        ".price__container",
      ],
      mutations: [".product_gallery"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    home: {
      parent: [".product-wrap", ".product_section", ".column"],
      badge: [
        ".product_image a",
        ".product_gallery",
        ".product-wrap .product_image",
      ],
      belowProductImage: [
        ".product_image a",
        ".product__images",
        ".product-wrap .product_image",
      ],
      belowProductName: [".product-info__caption .title", ".product_name"],
      belowProductPrice: [
        ".product-info__caption .price ",
        ".price__container",
      ],
    },
    collections: {
      parent: [".product-wrap", ".column"],
      badge: [
        ".product_image a",
        ".product_image .image-element__wrap",
        ".product-wrap .product_image",
      ],
      belowProductImage: [
        ".product_image a",
        ".product_image .image-element__wrap",
        ".product-wrap .product_image",
      ],
      belowProductName: [".product-info__caption .title"],
      belowProductPrice: [".product-info__caption .price "],
      mutations: [".product-list"],
    },
    search: {
      parent: [".product-wrap", ".product_row", ".column"],
      badge: [
        ".product_image a",
        ".image-element__wrap",
        ".product-wrap .product_image",
      ],
      belowProductImage: [
        ".product_image a",
        ".image-element__wrap",
        ".product-wrap .product_image",
      ],
      belowProductName: [".product-info__caption .title"],
      belowProductPrice: [".product-info__caption .price "],
    },
  },
  kalles: {
    products: {
      parent: [".product", ".t4s-container"],
      badge: [
        ".product-images .images",
        ".product-image",
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport .flickity-slider",
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport .flickityt4s-slider",
        ".flickityt4s-viewport",
        "div[data-product-single-media-wrapper]",
      ],
      belowProductImage: [
        ".product-images .images",
        ".product-image",
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport",
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport",
        ".flickityt4s-viewport",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".summary .product_title",
        ".t4s-product__title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".summary .price-review",
        ".t4s-product__price-review",
      ],
      mutations: [".product-recommendations", ".product-extra"],
    },
    home: {
      parent: [".product", ".t4s-product", ".item-content"],
      badge: [
        ".product-image",
        ".t4s-product-inner",
        ".module-wrap .img-holder",
      ],
      belowProductImage: [
        ".product-image",
        ".t4s-product-inner",
        ".module-wrap .img-holder",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".t4s-product-title",
        ".product-single__title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".t4s-product-price",
        ".gf_product-prices",
      ],
      mutations: [".lazyloadt4sed", ".t4s-products"],
      mutationConfig: { childList: true, subtree: true },
    },
    collections: {
      parent: [".product", ".t4s-product", ".boost-pfs-filter-product-item"],
      badge: [
        ".product-image",
        ".t4s-product-inner",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductImage: [
        ".product-image",
        ".t4s-product-inner",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".t4s-product-title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".t4s-product-price",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [
        ".product",
        ".t4s-products",
        ".container",
        ".t4s-main-collection-page",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product", ".boost-pfs-filter-product-item"],
      badge: [".product-image", ".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [
        ".product-image",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".boost-pfs-filter-product-item-price",
      ],
    },
  },
  refresh: {
    products: {
      parent: [
        ".card-wrapper",
        ".product",
        ".grid-product",
        ".page-content--product",
      ],
      badge: [
        ".card--media .card__media ",
        ".product__media",
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media-list",
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".grid-product__title",
        ".product-single__title",
      ],
      belowProductPrice: [".price", ".grid-product__price", ".product__price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
      extra: {
        afterAll: function fix() {
          if (document.querySelector(".slider-buttons.quick-add-hidden")) {
            document.querySelector(
              ".slider-buttons.quick-add-hidden"
            ).style.display = `none`;
          }
        },
      },
    },
    home: {
      parent: [".card-wrapper", ".product", ".grid-product"],
      badge: [
        ".card__media ",
        ".product__media",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".grid-product__title",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [".product__info-container .no-js-hidden"],
    },
    collections: {
      parent: [".card--media ", ".product", ".grid-product"],
      badge: [
        ".card--media .card__media ",
        ".product__media",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".product__title",
        ".grid-product__title",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".quick-add-modal",
        "quick-add-modal",
      ],
    },
    search: {
      parent: [".card--media ", ".grid-product"],
      badge: [
        ".card--media .card__media ",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__link .grid-product__image-mask",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".grid-product__title",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [".product-grid-container", "#ProductGridContainer"],
    },
  },
  ella: {
    home: {
      parent: [".grid-item", ".product-item"],
      badge: [
        ".product-top",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductImage: [
        ".product-image",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductName: [".product-title", ".card-information .card-title"],
      belowProductPrice: [".price-regular", ".card-information .price"],
    },
    collections: {
      parent: [".grid-item", ".product-item"],
      badge: [
        ".product-top",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductImage: [
        ".product-image",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductName: [".product-title", ".card-information .card-title"],
      belowProductPrice: [
        ".price-regular",
        ".card-information .price",
        ".price-sale",
      ],
      mutations: [
        ".container",
        ".collection",
        ".product-collection ",
        ".js-filter",
        ".pagination-wrapper",
      ],
    },
    products: {
      parent: [".product", ".grid-item", ".productView-top", ".product-item"],
      badge: [
        ".product-img-box .wrapper-images",
        ".product-top",
        ".productView-image-wrapper .productView-img-container",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
        "#pwzrswiper-container-wrapper .pwzrswiper-container",
      ],
      belowProductImage: [
        ".product-photo-container",
        ".product-image",
        ".productView-image-wrapper .productView-img-container",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
        "#pwzrswiper-container-wrapper .pwzrswiper-container",
      ],
      belowProductName: [
        ".product-title",
        ".productView-details .productView-title",
        ".card-information .card-title",
      ],
      belowProductPrice: [
        ".price",
        ".price-regular",
        ".productView-details .productView-price",
        ".card-information .price",
      ],
      mutations: [".halo-recommendations-block"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".grid-item", ".product-item"],
      badge: [
        ".product-top",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductImage: [
        ".product-image",
        ".card-product__wrapper a.card-media",
        ".card-product__wrapper .card-media",
      ],
      belowProductName: [".product-title", ".card-information .card-title"],
      belowProductPrice: [".price-regular", ".card-information .price"],
    },
  },
  pacific: {
    products: {
      parent: [".product-list-item", ".product-wrap"],
      badge: [
        ".product-list-item-thumbnail",
        ".product-gallery--media-wrapper",
      ],
      belowProductImage: [".product-list-item-thumbnail", ".product-gallery"],
      belowProductName: [
        ".product-list-item-title",
        ".product-details .page-title",
      ],
      belowProductPrice: [
        ".product-list-item-price",
        ".product-details .product-price",
      ],
      mutations: [".recommended-products"],
    },
    home: {
      parent: [".product-list-item", ".product-wrap"],
      badge: [
        ".product-list-item-thumbnail",
        ".product-gallery--media-wrapper",
      ],
      belowProductImage: [".product-list-item-thumbnail", ".product-gallery"],
      belowProductName: [
        ".product-list-item-title",
        ".product-details .page-title",
      ],
      belowProductPrice: [
        ".product-list-item-price",
        ".product-details .product-price",
      ],
      mutations: [".recommended-products"],
    },
    collections: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
    search: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-info .product-title"],
      belowProductPrice: [".product-info .price"],
    },
  },
  shella: {
    products: {
      parent: [".product-page__main", ".product-collection"],
      badge: [
        ".product-gallery__main_single",
        ".product-gallery__main_slider-wrapper",
        ".product-collection__image",
        ".product-page-gallery__main > div:last-of-type",
      ],
      belowProductImage: [
        ".product-gallery__main_slider-wrapper",
        ".product-collection__image",
        ".product-page-gallery__main > div:last-of-type",
      ],
      belowProductName: [
        ".product-page-info__title",
        ".product-collection__title",
      ],
      belowProductPrice: [
        ".product-page-info__details",
        ".product-collection__price",
      ],
    },
    home: {
      parent: [".product-page__main", ".product-collection"],
      badge: [".product-gallery .slick-list", ".product-collection__image"],
      belowProductImage: [
        ".product-gallery .slick-list",
        ".product-collection__image",
      ],
      belowProductName: [
        ".product-page-info__title",
        ".product-collection__title",
      ],
      belowProductPrice: [
        ".product-page-info__details",
        ".product-collection__price",
      ],
    },
    collections: {
      parent: [".product-collection"],
      badge: [".product-collection__image"],
      belowProductImage: [".product-collection__image"],
      belowProductName: [".product-collection__title"],
      belowProductPrice: [".product-collection__price"],
      mutations: [".row"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          if (acoShopName === "elaf-premium") {
            const productContainers = Array.from(
              document.querySelectorAll(".product-collection")
            );
            for (const element of productContainers) {
              element.onmouseleave = function () {
                element.querySelector(".aco_badge").removeAttribute("srcset");
              };
              element.onpointermove = function () {
                element.querySelector(".aco_badge").removeAttribute("srcset");
              };
            }
          }
        },
      },
    },
    search: {
      parent: [".product-collection"],
      badge: [".product-collection__image"],
      belowProductImage: [".product-collection__image"],
      belowProductName: [".product-collection__title"],
      belowProductPrice: [".product-collection__price"],
    },
  },
  masonry: {
    products: {
      parent: [".product-container", ".product"],
      badge: [".product-gallery .swiper-container", ".product-image"],
      belowProductImage: [".product-gallery", ".product-image"],
      belowProductName: [".product-title", ".product-block-title"],
      belowProductPrice: [".pricearea", ".pricearea"],
    },
    home: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-block-title"],
      belowProductPrice: [".pricearea"],
    },
    collections: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-block-title"],
      belowProductPrice: [".pricearea"],
      mutations: [".cc-filters-results", ".pagination"],
    },
    search: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-block-title"],
      belowProductPrice: [".pricearea"],
    },
  },
  wokiee: {
    home: {
      parent: [".tt-product", ".tt-modal-quickview"],
      badge: [
        ".tt-image-box .tt-img-parent .tt-img",
        ".col-12 .product-main-image",
      ],
      belowProductImage: [".tt-image-box", ".product-main-image"],
      belowProductName: [".tt-title"],
      belowProductPrice: [".tt-price"],
      mutations: [".product-main-image", ".modal"],
    },
    collections: {
      parent: [".tt-product", ".tt-modal-quickview"],
      badge: [
        ".tt-image-box .tt-img-parent .tt-img",
        ".col-12 .product-main-image",
        ".tt-image-box .tt-img",
      ],
      belowProductImage: [".tt-image-box", ".product-main-image"],
      belowProductName: [".tt-title"],
      belowProductPrice: [".tt-price"],
      mutations: [
        ".product-main-image",
        ".tt-product",
        ".tt-product-listing",
        "#gf-grid",
      ],
    },
    products: {
      parent: [
        ".container .row",
        ".tt-product",
        ".tt-modal-quickview",
        ".container-indent",
      ],
      badge: [
        ".tt-product-single-img",
        ".tt-img",
        ".col-12 .product-main-image",
        ".tt-mobile-product-slider .slick-list.draggable",
      ],
      belowProductImage: [
        ".tt-product-vertical-layout .tt-product-single-img",
        ".tt-image-box",
        ".product-main-image",
        ".tt-mobile-product-slider .slick-list.draggable",
      ],
      belowProductName: [".tt-title"],
      belowProductPrice: [".tt-price"],
      mutations: [".slick-list"],
    },
    search: {
      parent: [".tt-product-listing .tt-col-item", ".tt-modal-quickview"],
      badge: [
        ".tt-image-box .tt-img-parent .tt-img",
        ".col-12 .product-main-image",
      ],
      belowProductImage: [".tt-image-box", ".product-main-image"],
      belowProductName: [".tt-title"],
      belowProductPrice: [".tt-price"],
      mutations: [".product-main-image"],
    },
  },
  gecko: {
    home: {
      parent: [
        ".product",
        ".product-quickview .row",
        ".thumb_bottom",
        ".t4s-product",
      ],
      badge: [
        ".product-inner .product-image",
        ".images",
        ".t4s-product-inner .t4s-product-img",
      ],
      belowProductImage: [".product-image", ".t4s-product-inner"],
      belowProductName: [
        ".product-info .product-title",
        ".entry-summary .product_title",
        ".t4s-product-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".entry-summary .price_range",
        ".t4s-product-price",
      ],
      mutations: [".products"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    collections: {
      parent: [".t4s-product", ".product", ".product-quickview .row"],
      badge: [
        ".t4s-product-inner .t4s-product-img",
        ".product-inner .product-image",
        ".product-images .images",
      ],
      belowProductImage: [".t4s-product-inner", ".product-image"],
      belowProductName: [
        ".t4s-product-title",
        ".product-info .product-title",
        ".entry-summary .product_title",
      ],
      belowProductPrice: [
        ".t4s-product-price",
        ".product-info .price",
        ".entry-summary .price_range",
      ],
      mutations: [
        ".product-image",
        ".products",
        ".products-footer",
        "[data-contentlm-replace]",
        ".product-image",
        "body",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [
        ".t4s-row__product",
        ".pr_sticky_content",
        ".related",
        ".t4s-product",
      ],
      badge: [
        "[data-product-single-media-group]",
        ".col_thumb .flickity-slider",
        ".t4s-product-inner .t4s-product-img",
        ".p-thumb.images",
      ],
      belowProductImage: [
        "[data-product-single-media-group]",
        ".theiaStickySidebar .col_nav",
        ".t4s-product-inner",
      ],
      belowProductName: [
        ".t4s-product__title",
        ".product_title",
        ".t4s-product-title",
      ],
      belowProductPrice: [
        ".t4s-price-stock",
        ".price_stock",
        ".t4s-product-price",
      ],
      mutations: [".flickity-viewport"],
    },
    search: {
      parent: [".product", ".product-quickview .row", ".t4s-product"],
      badge: [
        ".product-inner .product-image",
        ".product-images .images",
        ".t4s-product-inner .t4s-product-img",
      ],
      belowProductImage: [".product-image", ".t4s-product-inner"],
      belowProductName: [
        ".product-info .product-title",
        ".entry-summary .product_title",
        ".t4s-product-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".entry-summary .price_range",
        ".t4s-product-price",
      ],
      mutations: [".product-image", "body"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  flex: {
    home: {
      parent: [
        ".product__grid-item",
        ".product_section",
        ".quick-shop__container",
      ],
      badge: [".product-image__wrapper", ".product-gallery__image"],
      belowProductImage: [
        ".product-image__wrapper",
        ".featured-product__images",
        ".product-gallery__nav",
      ],
      belowProductName: [".product-thumbnail__title", ".quick-shop__title"],
      belowProductPrice: [".money"],
      mutations: [".js-quick-shop"],
    },
    collections: {
      parent: [".product__grid-item", ".quick-shop__container"],
      badge: [".product-image__wrapper", ".product-gallery__image"],
      belowProductImage: [".product-image__wrapper", ".product-gallery__nav"],
      belowProductName: [".product-thumbnail__title", ".quick-shop__title"],
      belowProductPrice: [".money"],
      mutations: [".js-quick-shop"],
    },
    products: {
      parent: [
        ".product_section",
        ".product__grid-item",
        ".quick-shop__container",
      ],
      badge: [
        ".product-gallery .product-gallery__main",
        ".product-image__wrapper",
        ".product-gallery__image",
      ],
      belowProductImage: [
        ".product-gallery",
        ".product-image__wrapper",
        ".product-gallery__nav",
      ],
      belowProductName: [
        ".product__information .product_name",
        ".product-thumbnail__title",
        ".quick-shop__title",
      ],
      belowProductPrice: [
        ".product__information .modal_price",
        ".money",
        ".modal_price",
      ],
      mutations: [".js-quick-shop"],
    },
    search: {
      parent: [".search__item", ".quick-shop__container"],
      badge: [".image-element__wrap", ".product-gallery__image"],
      belowProductImage: [".image-element__wrap", ".product-gallery__nav"],
      belowProductName: [".search-result__title", ".quick-shop__title"],
      belowProductPrice: [".money"],
    },
  },
  electro: {
    home: {
      parent: [".product-grid-item"],
      badge: [".featured-img"],
      belowProductImage: [".featured-img"],
      belowProductName: [".product-name"],
      belowProductPrice: [".modal .product-image-inner"],
    },
    collections: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".price-cart-wrapper", ".detail-price"],
      mutations: [".modal .product-image-inner"],
    },
    products: {
      parent: [".product-content-wrapper"],
      badge: [".slider-main-image"],
      belowProductImage: [".slider-main-image"],
      belowProductName: [".product-info-inner .page-heading"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".price-cart-wrapper", ".detail-price"],
      mutations: [".modal .product-image-inner"],
    },
  },
  flow: {
    home: {
      parent: [".grid__item", ".product-box"],
      badge: [".grid__image", ".product-medias__media"],
      belowProductImage: [".grid-view-item-image", ".product-medias__main"],
      belowProductName: [
        ".product-grid--title",
        ".product-details-product-title",
      ],
      belowProductPrice: [".product-grid--price", ".ProductPrice"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid__image"],
      belowProductImage: [".grid-view-item-image"],
      belowProductName: [".product-grid--title"],
      belowProductPrice: [".product-grid--price"],
    },
    products: {
      parent: [".product-single-wrapper", ".grid__item"],
      badge: [
        "#pwzrswiper-container-wrapper",
        ".swiper-slide > div",
        ".grid__image",
      ],
      belowProductImage: [".swiper-slide > div", ".grid-view-item-image"],
      belowProductName: [
        ".product-details-product-title",
        ".product-grid--title",
      ],
      belowProductPrice: [".price", ".product-grid--price"],
      mutations: [".product-images-container"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid__item.one-third"],
      belowProductImage: [".grid__item.one-third"],
      belowProductName: [".item--content h3"],
      belowProductPrice: [".item--content p"],
    },
  },
  modular: {
    products: {
      parent: [
        ".product__container",
        ".product-block",
        ".quickView-inner-wrap",
        ".product",
      ],
      badge: [
        ".product__images__container .flickity-viewport",
        ".product-block__image",
        ".js-productImgContainer .flickity-viewport",
      ],
      belowProductImage: [
        ".product__images__container",
        ".product-block__image",
        ".js-productImgContainer",
      ],
      belowProductName: [".product__title", ".product-block__title"],
      belowProductPrice: [".product__price", ".product-block__price"],
    },
    home: {
      parent: [".product-block", ".quickView-inner-wrap"],
      badge: [
        ".product-block__image",
        ".product__images__container .flickity-viewport",
      ],
      belowProductImage: [
        ".product-block__image",
        ".product__images__container",
      ],
      belowProductName: [".product-block__title", ".product__title"],
      belowProductPrice: [".product-block__price", ".product__price"],
    },
    collections: {
      parent: [".product-block", ".quickView-inner-wrap"],
      badge: [
        ".product-block__image",
        ".product__images__container .flickity-viewport",
      ],
      belowProductImage: [
        ".product-block__image",
        ".product__images__container",
      ],
      belowProductName: [".product-block__title", ".product__title"],
      belowProductPrice: [".product-block__price", ".product__price"],
    },
    search: {
      parent: [".product-block", ".quickView-inner-wrap"],
      badge: [
        ".product-block__image",
        ".product__images__container .flickity-viewport",
      ],
      belowProductImage: [
        ".product-block__image",
        ".product__images__container",
      ],
      belowProductName: [".product-block__title", ".product__title"],
      belowProductPrice: [".product-block__price", ".product__price"],
    },
  },
  coachksa: {
    products: {
      parent: [".product", ".grid-item"],
      badge: [".product-img-box .wrapper-images", ".product-top"],
      belowProductImage: [".product-photo-container", ".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".prices", ".price-box"],
    },
    home: {
      parent: [".product", ".grid-item"],
      badge: [".product-img-box .wrapper-images", ".product-top"],
      belowProductImage: [".product-photo-container", ".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".prices", ".price-box"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
  },
  konversion: {
    home: {
      parent: [".grid__item"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__info .product-card__title"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__info .product-card__title"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    products: {
      parent: [".grid", ".product-list__item"],
      badge: [
        ".product-images__image .slick-list.draggable",
        ".product-card__image",
      ],
      belowProductImage: [
        ".product-images__image .slick-list.draggable",
        ".product-card__image",
      ],
      belowProductName: [
        ".product-info .product-info__title",
        ".product-card__info .product-card__title",
      ],
      belowProductPrice: [
        ".product-info .product-price",
        ".product-card__info .product-card__price",
      ],
    },
    search: {
      parent: [".list-view-item"],
      badge: [".list-view-item__image-wrapper"],
      belowProductImage: [".list-view-item__image-wrapper"],
      belowProductName: [".product-info__title"],
      belowProductPrice: [".product-price"],
    },
  },
  elessi: {
    home: {
      parent: [".product-item", ".pr_grid_item"],
      badge: [
        ".product-img-wrap .product-img a",
        ".product-inner .product-image > a",
      ],
      belowProductImage: [
        ".product-img-wrap .product-img",
        ".product-inner .product-image > a",
      ],
      belowProductName: [".product-info-wrap .name", ".product-title"],
      belowProductPrice: [".product-info-wrap .info", ".wrap_swap_price"],
    },
    collections: {
      parent: [".product-item", ".pr_grid_item", ".sc-iseIHH .sc-jHkVzv"],
      badge: [
        ".product-img-wrap .product-img a",
        ".product-inner .product-image > a",
        ".pf-main-media .splide__track",
      ],
      belowProductImage: [
        ".product-img-wrap .product-img",
        ".product-inner .product-image > a",
        ".pf-main-media .splide__track",
      ],
      belowProductName: [
        ".product-info-wrap .name",
        ".product-title",
        ".sc-xiLah .sc-ehIJor",
      ],
      belowProductPrice: [
        ".product-info-wrap .info",
        ".wrap_swap_price",
        ".sc-xiLah.hBpxAH.pf-22_",
      ],
    },
    products: {
      parent: [
        ".product-image-summary",
        ".product-item",
        ".pr_sticky_content",
        ".pr_grid_item",
        ".pf-c-ct.pf-755_",
      ],
      badge: [
        ".single-product-thumbnail .images",
        ".product-img-wrap .product-img a",
        ".p-thumb",
        ".product-inner .product-image > a",
        ".sc-fivaXQ .splide__list",
      ],
      belowProductImage: [
        ".single-product-thumbnail .images",
        ".product-img-wrap .product-img",
        ".p-thumb",
        ".product-inner .product-image > a",
        ".sc-fivaXQ .splide__list",
      ],
      belowProductName: [
        ".summary .product_title",
        ".product-info-wrap .name",
        ".product-title",
        "h1[data-product-type='title']",
      ],
      belowProductPrice: [
        ".summary .price",
        ".product-info-wrap .info",
        ".wrap_swap_price",
        ".sc-uojGG",
      ],
    },
    search: {
      parent: [".product-card-items-wrapper", ".pr_grid_item"],
      badge: [".image-wrapper a", ".product-inner .product-image > a"],
      belowProductImage: [
        ".image-wrapper",
        ".product-inner .product-image > a",
      ],
      belowProductName: [".title-container", ".product-title"],
      belowProductPrice: [".price-container", ".wrap_swap_price"],
    },
  },
  shopbe: {
    home: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    products: {
      parent: [".product", ".grid-item"],
      badge: [".product-photo-container", ".product-top"],
      belowProductImage: [".product-photo-container", ".product-image"],
      belowProductName: [".product-title", ".product-title"],
      belowProductPrice: [".prices", ".price-box"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
  },
  showtime: {
    products: {
      parent: [".pro_main_c", ".\\#product", ".\\#product-card"],
      badge: [
        ".product-single__media-wrapper > a",
        ".swiper-wrapper .swiper-slide",
        ".\\#media-image-wrapper",
      ],
      belowProductImage: [
        ".\\#product-gallery-stage .\\#product-gallery-stage-inner",
        ".\\#product-card-media .\\#media",
      ],
      belowProductName: [
        ".\\#product-meta .\\#product-title",
        ".\\#product-card-title",
      ],
      belowProductPrice: [
        ".\\#product-meta .\\#product-price",
        ".\\#product-card-price",
      ],
    },
    home: {
      parent: [".swiper-slide .\\#product-card"],
      badge: [".\\#media-image-wrapper"],
      belowProductImage: [".\\#product-card-media .\\#media"],
      belowProductName: [".\\#product-card-title"],
      belowProductPrice: [".\\#product-card-price"],
    },
    collections: {
      parent: [".main_box", ".\\#product-card"],
      badge: [".product-image", ".\\#media-image-wrapper"],
      belowProductImage: [".\\#product-card-media .\\#media"],
      belowProductName: [".\\#product-card-title"],
      belowProductPrice: [".\\#product-card-price"],
      mutations: [
        ".collection-grid",
        ".\\#container",
        "div[data-collection-dynamic-block]",
      ],
    },
    search: {
      parent: [".main_box", ".\\#product-card"],
      badge: [".list-image > a", ".\\#media-image-wrapper"],
      belowProductImage: [".\\#product-card-media .\\#media"],
      belowProductName: [".\\#product-card-title"],
      belowProductPrice: [".\\#product-card-price"],
      mutations: [".\\#container"],
    },
  },
  atlantic: {
    products: {
      parent: [".product", ".product-area"],
      badge: [
        ".product-card-figure",
        ".product-gallery--viewport .product-gallery--media-wrapper",
      ],
      belowProductImage: [
        ".product-card-figure",
        ".product-gallery--viewport .product-gallery--media-wrapper",
      ],
      belowProductName: [
        ".product-card-footer .title",
        ".product-details .title",
      ],
      belowProductPrice: [
        ".product-card-footer .product-item__price",
        ".product-details .product-details__price",
      ],
    },
    home: {
      parent: [".product"],
      badge: [".product-card-figure"],
      belowProductImage: [".product-card-figure"],
      belowProductName: [".product-card-footer .title"],
      belowProductPrice: [".product-card-footer .product-item__price"],
    },
    collections: {
      parent: [".product"],
      badge: [".product-card-figure"],
      belowProductImage: [".product-card-figure"],
      belowProductName: [".product-card-footer .title"],
      belowProductPrice: [".product-card-footer .product-item__price"],
    },
    search: {
      parent: [".result"],
      badge: [".result figure"],
      belowProductImage: ["figure > img"],
      belowProductName: [".details .title"],
      belowProductPrice: [".details .price"],
    },
  },
  influence: {
    products: {
      parent: [".main-content", "product-card"],
      badge: [
        "product-thumbnail-gallery armada-modal-open",
        "a .aspect-natural",
        ".product-collage-slide",
      ],
      belowProductImage: [
        "product-thumbnail-gallery div[data-armada-selector='product-media'] > div",
        "a .aspect-natural",
      ],
      belowProductName: [
        "product-form div[data-name='title']",
        "div[data-name='title']",
      ],
      belowProductPrice: [
        "product-form div[data-name='price']",
        "div[data-name='price']",
      ],
    },
    home: {
      parent: ["product-card"],
      badge: ["a .aspect-natural"],
      belowProductImage: ["a .aspect-natural"],
      belowProductName: ["div[data-name='title']"],
      belowProductPrice: ["div[data-name='price']"],
    },
    collections: {
      parent: ["product-card"],
      badge: ["a .aspect-natural"],
      belowProductImage: ["a .aspect-natural"],
      belowProductName: ["div[data-name='title']"],
      belowProductPrice: ["div[data-name='price']"],
    },
    search: {
      parent: ["product-card"],
      badge: ["a .aspect-natural"],
      belowProductImage: ["a .aspect-natural"],
      belowProductName: ["div[data-name='title']"],
      belowProductPrice: ["div[data-name='price']"],
    },
  },
  moltestore: {
    products: {
      parent: [".wrap-detail-product ", ".item-product "],
      badge: [
        ".detail-gallery .thumb-product",
        ".wrap-item-product .product-thumb ",
      ],
      belowProductImage: [
        ".detail-gallery .thumb-product",
        ".wrap-item-product .product-thumb ",
      ],
      belowProductName: ["form .detail-info h3", ".product-info h3"],
      belowProductPrice: [
        "form .detail-info .product-price",
        ".product-info .product-price",
      ],
    },
    home: {
      parent: [".item-product "],
      badge: [".wrap-item-product .product-thumb "],
      belowProductImage: [".wrap-item-product .product-thumb "],
      belowProductName: [".product-info h3"],
      belowProductPrice: [".product-info .product-price"],
    },
    collections: {
      parent: [".item-product "],
      badge: [".wrap-item-product .product-thumb "],
      belowProductImage: [".wrap-item-product .product-thumb "],
      belowProductName: [".product-info h3"],
      belowProductPrice: [".product-info .product-price"],
    },
    search: {
      parent: [".item-product "],
      badge: [".wrap-item-product .product-thumb "],
      belowProductImage: [".wrap-item-product .product-thumb "],
      belowProductName: [".product-info h3"],
      belowProductPrice: [".product-info .product-price"],
    },
  },
  porto: {
    products: {
      parent: [".product-main"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-name.top-product-detail"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".item"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".shopify-loop-product__title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".item"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".shopify-loop-product__title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".item"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".shopify-loop-product__title"],
      belowProductPrice: [".price"],
    },
  },
  fastor: {
    home: {
      parent: [".product"],
      badge: [".aspect-product__images .main-images-wrapper"],
      belowProductImage: [".image > a"],
      belowProductName: [".product-item-content .name"],
      belowProductPrice: [".product-item-content .price"],
    },
    collections: {
      parent: [".product"],
      badge: [".aspect-product__images .main-images-wrapper"],
      belowProductImage: [".image > a"],
      belowProductName: [".product-item-content .name"],
      belowProductPrice: [".product-item-content .price"],
    },
    products: {
      parent: [".product", ".product_wrapper"],
      badge: [
        ".aspect-product__images .main-images-wrapper",
        "figure .slick-list",
      ],
      belowProductImage: [".image > a", "figure .slick-list"],
      belowProductName: [".product-item-content .name", ".summary .name"],
      belowProductPrice: [".product-item-content .price", ".summary .price"],
    },
    search: {
      parent: [".product"],
      badge: [".aspect-product__images .main-images-wrapper"],
      belowProductImage: [".image > a"],
      belowProductName: [".product-item-content .name"],
      belowProductPrice: [".product-item-content .price"],
    },
  },
  district: {
    home: {
      parent: [".product", ".grid-item"],
      badge: [
        ".image-cell .product-image .card__image-wrapper-loaded",
        ".product-card__media",
        ".product_card",
      ],
      belowProductImage: [
        ".image-cell .product-image",
        ".product-card__media",
        ".product_card",
      ],
      belowProductName: [
        ".product-title .title",
        ".product-card__content .product-card__title",
      ],
      belowProductPrice: [
        ".product-title .price",
        ".product-card__content .price",
      ],
    },
    collections: {
      parent: [
        ".product",
        ".boost-pfs-filter-product-item-grid",
        ".collection__grid-item",
      ],
      badge: [
        ".image-cell .product-image .card__image-wrapper-loaded",
        ".boost-pfs-filter-product-item-image-link",
        ".product_card",
        "a.product-card__media",
        ".product-thumbnail .product-image",
      ],
      belowProductImage: [
        ".image-cell .product-image",
        ".boost-pfs-filter-product-item-image-link",
        ".product_card",
        ".product-thumbnail .product-image",
        "a.product-card__media",
      ],
      belowProductName: [
        ".product-title .title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-title .price",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [".products"],
    },
    products: {
      parent: [".product", ".grid", ".grid-item"],
      badge: [
        ".image-cell .product-image .card__image-wrapper-loaded",
        ".card__image-container > div",
        ".splide__slide",
        ".product-card__media",
        ".product_card",
        ".product-image--slider .flickity-viewport",
      ],
      belowProductImage: [
        ".image-cell .product-image",
        ".card__image-container",
        ".splide__slide",
        ".product-card__media",
        ".product_card",
        ".product-image--slider .flickity-viewport",
        ".media__main .splide__track",
      ],
      belowProductName: [
        ".product-title .title",
        ".product-title > h1",
        ".product__details .product__title",
        ".product-card__content .product-card__title",
      ],
      belowProductPrice: [
        ".product-title .price",
        ".price",
        ".product__details .product__price",
        ".product-card__content .price",
      ],
      mutations: ["product-recommendations"],
    },
    search: {
      parent: [
        ".product",
        ".boost-pfs-filter-product-item-grid",
        ".collection__grid-item",
      ],
      badge: [
        ".image-cell .product-image .card__image-wrapper-loaded",
        ".product-card__media",
        ".product_card",
        "a.product-card__media",
      ],
      belowProductImage: [
        ".image-cell .product-image",
        ".product-card__media",
        ".product_card",
      ],
      belowProductName: [
        ".product-title .title",
        ".product-card__content .product-card__title",
      ],
      belowProductPrice: [
        ".product-title .price",
        ".product-card__content .price",
      ],
    },
  },
  pipeline: {
    home: {
      parent: [".product-grid-item", ".slick-slide"],
      badge: [".lazy-image", "a .product-grid-item__images"],
      belowProductImage: [".lazy-image", "a .product-grid-item__images"],
      belowProductName: [
        ".product__grid__title",
        ".figcaption .name_wrapper",
        ".product__grid__title__wrapper",
      ],
      belowProductPrice: [".product__grid__price ", ".figcaption .price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: ["a.lazy-image", "a .product-grid-item__images"],
      belowProductImage: [".lazy-image", "a .product-grid-item__images"],
      belowProductName: [
        ".product__title__wrapper",
        ".figcaption .name_wrapper",
        ".product__grid__title__wrapper",
      ],
      belowProductPrice: [".product__grid__price", ".figcaption .price"],
    },
    search: {
      parent: [".grid"],
      badge: [".grid__item.one-sixth "],
      belowProductImage: [".grid__item.one-sixth"],
      belowProductName: [".product__inline__title"],
      belowProductPrice: [".product__inline__price"],
    },
    products: {
      parent: [".product-single", ".product-grid-item", ".product-page"],
      badge: [
        ".product__media",
        ".lazy-image",
        ".product-single__photos .slick-list",
        ".product__slides .flickity-viewport",
      ],
      belowProductImage: [
        ".product__slides",
        ".lazy-image",
        ".product-single__photos .slick-list",
        ".product__slides .flickity-viewport",
      ],
      belowProductName: [
        ".product__title__wrapper",
        ".product__grid__title__wrapper",
        ".text-center h1",
        ".text-center .name_wrapper",
      ],
      belowProductPrice: [
        ".product__price__main",
        ".product__grid__price",
        ".text-center .product__price",
        ".price_wrapper",
        ".product__price__wrap",
      ],
    },
  },
  spark: {
    home: {
      parent: [".product-item"],
      badge: [".product-item__media .product-item__image-link"],
      belowProductImage: [".product-item__media .product-item__image-link"],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__media .product-item__image-link"],
      belowProductImage: [".product-item__media .product-item__image-link"],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
    products: {
      parent: [".product", ".mrp-product-card", ".product-item"],
      badge: [
        ".product__media-container .slick-list.draggable",
        ".mrp-image-container",
        ".product__media-item .image",
        ".product-item__media .product-item__image-link",
      ],
      belowProductImage: [
        ".product__media-container .slick-list.draggable",
        ".svelte-r88qtt",
        ".product__media-item .image",
        ".product-item__media .product-item__image-link",
      ],
      belowProductName: [
        ".product__title",
        ".mrp-product-title",
        ".product-item__meta .product-item__product-title",
      ],
      belowProductPrice: [
        ".product__price",
        ".mrp-product-price",
        ".product-item__meta .product-item__price",
      ],
    },
    search: {
      parent: [".search__result"],
      badge: [".search__result-image .image"],
      belowProductImage: [".search__result-image .image"],
      belowProductName: [".search__result-content h3"],
      belowProductPrice: [".search__result-content .ff-body"],
    },
  },
  california: {
    home: {
      parent: [".product"],
      badge: [".image .frame"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product"],
      badge: [".image .frame"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
      mutations: [".products"],
    },
    products: {
      parent: [".product"],
      badge: [".image .frame", ".product-media .media"],
      belowProductImage: [".product-media"],
      belowProductName: [".title", ".info .inner h2"],
      belowProductPrice: [".price"],
      mutations: [".product-recommendations"],
    },
    search: {
      parent: [".product"],
      badge: [".image .frame"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
  },
  forge: {
    home: {
      parent: [".product-loop__item", ".featured-product"],
      badge: [
        ".product-loop__img-wrapper",
        ".product-image-container .flickity-viewport",
      ],
      belowProductImage: [
        ".product-loop__img-wrapper",
        ".product-image-container .flickity-viewport",
      ],
      belowProductName: [
        ".product-loop__info-wrapper",
        ".product-description > h1",
      ],
      belowProductPrice: [".product-loop__price", ".product-form__prices"],
    },
    collections: {
      parent: [".product-loop__item"],
      badge: [".product-loop__img-wrapper"],
      belowProductImage: [".product-loop__img-wrapper"],
      belowProductName: [".product-loop__info-wrapper"],
      belowProductPrice: [".product-loop__price"],
    },
    products: {
      parent: [".product-loop__item", ".product-top"],
      badge: [
        ".product-loop__img-wrapper",
        ".product-gallery__media-container",
      ],
      belowProductImage: [
        ".product-loop__img-wrapper",
        ".product-gallery__media-container",
      ],
      belowProductName: [
        ".product-loop__info-wrapper",
        ".product-description > h1",
      ],
      belowProductPrice: [".product-loop__price", ".product-form__prices"],
    },
    search: {
      parent: [".product-loop__item"],
      badge: [".product-loop__img-wrapper"],
      belowProductImage: [".product-loop__img-wrapper"],
      belowProductName: [".product-loop__info-wrapper"],
      belowProductPrice: [".product-loop__price"],
    },
  },
  expression: {
    home: {
      parent: [".product-block"],
      badge: [".product-block__image"],
      belowProductImage: [".product-block__image"],
      belowProductName: [".product-block__title"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".boost-pfs-filter-product-item", ".product-block"],
      badge: [".boost-pfs-filter-product-item-image", ".product-block__image"],
      belowProductImage: [
        ".boost-pfs-filter-product-item-image",
        ".product-block__image",
      ],
      belowProductName: [
        ".boost-pfs-filter-product-item-title",
        ".product-block__title",
      ],
      belowProductPrice: [
        ".boost-pfs-filter-product-item-price",
        ".product-price",
      ],
    },
    products: {
      parent: [".section-product-template", ".product-block", ".grid"],
      badge: [
        ".section-product-template .rimage-wrapper",
        ".product-block__image",
        ".product-image__link .rimage-wrapper",
      ],
      belowProductImage: [".product-image", ".product-block__image"],
      belowProductName: [
        ".section-product-template h1",
        ".product-block__title",
      ],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".boost-pfs-filter-product-item", ".product-block"],
      badge: [".boost-pfs-filter-product-item-image", ".product-block__image"],
      belowProductImage: [
        ".boost-pfs-filter-product-item-image",
        ".product-block__image",
      ],
      belowProductName: [
        ".boost-pfs-filter-product-item-title",
        ".product-block__title",
      ],
      belowProductPrice: [
        ".boost-pfs-filter-product-item-price",
        ".product-price",
      ],
    },
  },
  shanghai: {
    home: {
      parent: [
        ".col-md-3",
        ".featured-products .owl-item",
        ".quick-view-panel .row",
      ],
      badge: [".product-image", ".col-md-7 .slider_1"],
      belowProductImage: [".box_1", ".col-md-7 .slider_1"],
      belowProductName: [".desc h5", ".col-md-5 h3"],
      belowProductPrice: [".desc .price", ".col-md-5 .money"],
    },
    collections: {
      parent: [".collection-grid .element"],
      badge: [".product-image", ".col-md-7 .slider_1"],
      belowProductImage: [".box_1", ".col-md-7 .slider_1"],
      belowProductName: [".desc h5", ".col-md-5 h3"],
      belowProductPrice: [".desc .price", ".col-md-5 .money"],
    },
    products: {
      parent: [".pro_main_c .row", ".product_c .row .owl-item"],
      badge: [".image-block .product_gallery"],
      belowProductImage: [".slider_1"],
      belowProductName: [".desc_blk h5"],
      belowProductPrice: [".desc_blk_bot"],
    },
    search: {
      parent: [".search_result .box_1"],
      badge: [".col-sm-4"],
      belowProductImage: ["col-sm-4"],
      belowProductName: [".col-sm-8 .product-details h2"],
      belowProductPrice: [".col-sm-8 .product-details .money"],
    },
  },
  mojave: {
    home: {
      parent: [
        ".products-carousel__slide",
        ".featured-collection__slider-slide",
        ".product-quickview__wrapper",
        ".item-content",
      ],
      badge: [
        ".product-card__media .media",
        ".product-quickview__media .media",
        ".module-wrap .img-holder",
      ],
      belowProductImage: [
        ".product-card__media",
        ".product-quickview__media .media",
        ".module-wrap .img-holder",
      ],
      belowProductName: [
        ".product-card__content .product-card__title",
        ".product-quickview__details .main-product__title",
        ".product-single__title",
      ],
      belowProductPrice: [
        ".product-card__content .product-card__meta",
        ".main-product__meta",
        ".gf_product-prices",
      ],
    },
    collections: {
      parent: [".grid__item", ".product-quickview__wrapper", ".item-content"],
      badge: [
        ".product-card__media .media",
        ".product-quickview__media .media",
        ".module-wrap .img-holder",
      ],
      belowProductImage: [".product-card__media", ".module-wrap .img-holder"],
      belowProductName: [
        ".product-card__content .product-card__title",
        ".product-quickview__details .main-product__title",
        ".product-single__title",
      ],
      belowProductPrice: [
        ".product-card__content .product-card__meta",
        ".main-product__meta",
        ".gf_product-prices",
      ],
    },
    products: {
      parent: [
        ".main-product__grid",
        ".products-carousel__slide",
        ".product-quickview__wrapper",
        ".item-content .gf_row:not(.gf_row-gap-0)",
      ],
      badge: [
        ".main-product__media-list .main-product__media-item .media",
        ".product-card__media .media",
        ".product-quickview__media .media",
        ".gf_product-image.gf_featured-image",
      ],
      belowProductImage: [
        ".main-product__media-list",
        ".product-card__media .media",
        ".gf_product-image.gf_featured-image",
      ],
      belowProductName: [
        ".main-product__details-wrapper .main-product__title",
        ".product-card__content .product-card__title",
        ".product-quickview__details .main-product__title",
        ".product-single__title",
      ],
      belowProductPrice: [
        ".main-product__details-wrapper .main-product__meta .price",
        ".product-card__content .product-card__meta",
        ".product-quickview__details .main-product__meta",
        ".gf_product-prices",
      ],
    },
    search: {
      parent: [".grid__item", ".product-quickview__wrapper", ".item-content"],
      badge: [
        ".product-card__media .media",
        ".product-quickview__media .media",
        ".module-wrap .img-holder",
      ],
      belowProductImage: [".product-card__media", ".module-wrap .img-holder"],
      belowProductName: [
        ".product-card__content .product-card__title",
        ".product-quickview__details .main-product__title",
        ".product-single__title",
      ],
      belowProductPrice: [
        ".product-card__content .product-card__meta",
        ".main-product__meta",
        ,
        ".gf_product-prices",
      ],
    },
  },
  galleria: {
    home: {
      parent: [".product-thumb"],
      badge: [".product-thumb-inner .product-thumb-img-wrap "],
      belowProductImage: [".product-thumb-inner .product-thumb-img-wrap "],
      belowProductName: [".product-thumb-caption .product-thumb-caption-title"],
      belowProductPrice: [
        ".product-thumb-caption .product-thumb-caption-price",
      ],
    },
    collections: {
      parent: [".product-thumb", ".\\#column"],
      badge: [
        ".product-thumb-inner .product-thumb-img-wrap ",
        ".\\#product-card-media-front",
      ],
      belowProductImage: [
        ".product-thumb-inner .product-thumb-img-wrap ",
        ".\\#product-card-media-front",
      ],
      belowProductName: [
        ".product-thumb-caption .product-thumb-caption-title",
        ".\\#product-card-title",
      ],
      belowProductPrice: [
        ".product-thumb-caption .product-thumb-caption-price",
        ".\\#product-card-price",
      ],
    },
    products: {
      parent: [".product-thumb", ".product-page-row"],
      badge: [
        ".product-thumb-inner .product-thumb-img-wrap ",
        ".swiper-wrapper .product-single__media-wrapper",
      ],
      belowProductImage: [
        ".product-thumb-inner .product-thumb-img-wrap ",
        ".swiper-wrapper .product-single__media-wrapper",
      ],
      belowProductName: [
        ".product-thumb-caption .product-thumb-caption-title",
        ".product-item-caption-title",
      ],
      belowProductPrice: [
        ".product-thumb-caption .product-thumb-caption-price",
        ".product-item-caption-price",
      ],
    },
    search: {
      parent: [".product-thumb"],
      badge: [".product-thumb-inner .product-thumb-img-wrap "],
      belowProductImage: [".product-thumb-inner .product-thumb-img-wrap "],
      belowProductName: [".product-thumb-caption .product-thumb-caption-title"],
      belowProductPrice: [
        ".product-thumb-caption .product-thumb-caption-price",
      ],
    },
  },
  evelix: {
    home: {
      parent: [".product-item .product-inner"],
      badge: [".product-img-wrap .product-img .db"],
      belowProductImage: [".product-img-wrap"],
      belowProductName: [".product-info-wrap .name"],
      belowProductPrice: [".product-info-wrap .info .price-wrap"],
    },
    collections: {
      parent: [".product-item .product-inner"],
      badge: [".product-img-wrap .product-img .db"],
      belowProductImage: [".product-img-wrap"],
      belowProductName: [".product-info-wrap .name"],
      belowProductPrice: [".product-info-wrap .info .price-wrap"],
    },
    products: {
      parent: [".product-image-summary .row", ".product-item .product-inner"],
      badge: [
        ".inner-product-images .row .single-product-thumbnail",
        ".product-img-wrap .product-img .db",
      ],
      belowProductImage: [".inner-product-images .row", ".product-img-wrap"],
      belowProductName: [
        ".product-infors .summary .product_title",
        ".product-info-wrap .name",
      ],
      belowProductPrice: [
        ".product-infors .summary .price",
        ".product-info-wrap .info .price-wrap",
      ],
    },
    search: {
      parent: [".product-item .product-inner"],
      badge: [".product-img-wrap .product-img .db"],
      belowProductImage: [".product-img-wrap"],
      belowProductName: [".product-info-wrap .name"],
      belowProductPrice: [".product-info-wrap .info .price-wrap"],
    },
  },
  startup: {
    home: {
      parent: [".module-inner", ".product-list-item"],
      badge: [".product-big-image", ".product-list-item-thumbnail a"],
      belowProductImage: [".product-big-image", ".product-list-item-thumbnail"],
      belowProductName: [".product-title", ".product-list-item-title"],
      belowProductPrice: [".product-price", ".product-list-item-price"],
    },
    collections: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail a"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
    products: {
      parent: [".product-details-inline", ".product-list-item"],
      badge: [".product-big-image", ".product-list-item-thumbnail a"],
      belowProductImage: [".product-big-image", ".product-list-item-thumbnail"],
      belowProductName: [".product-title", ".product-list-item-title"],
      belowProductPrice: [".product-price", ".product-list-item-price"],
    },
    search: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail a"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
  },
  superstore: {
    home: {
      parent: [".productgrid--item"],
      badge: [".productitem--image-link"],
      belowProductImage: [".productitem--image-link"],
      belowProductName: [".productitem--title"],
      belowProductPrice: [".productitem--price"],
    },
    collections: {
      parent: [".productgrid--item"],
      badge: [".productitem--image-link"],
      belowProductImage: [".productitem--image-link"],
      belowProductName: [".productitem--title"],
      belowProductPrice: [".productitem--price"],
      mutations: [".results--container"],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [".product--container", ".productgrid--item"],
      badge: [".product-gallery--viewer", ".productitem--image-link"],
      belowProductImage: [".product--outer", ".productitem--image-link"],
      belowProductName: [".product-title", ".productitem--title"],
      belowProductPrice: [".product-pricing-container", ".productitem--price"],
      mutations: [
        ".product-section--content",
        ".product-recommendations--section",
        ".site-main",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".productgrid--item"],
      badge: [".productitem--image-link"],
      belowProductImage: [".productitem--image-link"],
      belowProductName: [".productitem--title"],
      belowProductPrice: [".productitem--price"],
    },
  },
  zeexo: {
    home: {
      parent: [".product-grid-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content .product-name"],
      belowProductPrice: [".product-content .product-price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content .product-name"],
      belowProductPrice: [".product-content .product-price"],
    },
    products: {
      parent: [".product-grid-item", ".product"],
      badge: [".product-image a", ".slick-list.draggable .slick-slide"],
      belowProductImage: [
        ".product-image",
        ".slick-list.draggable .slick-slide",
      ],
      belowProductName: [
        ".product-content .product-name",
        ".product-info-inner .page-heading",
      ],
      belowProductPrice: [
        ".product-content .product-price",
        ".product-info-inner .product-price",
      ],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content .product-name"],
      belowProductPrice: [".product-content .product-price"],
    },
  },
  habitat: {
    home: {
      parent: [".carousel__slide"],
      badge: [".product-featured-image .product-featured-image-link"],
      belowProductImage: [
        ".product-featured-image .product-featured-image-link",
      ],
      belowProductName: [".product-card-info .product-card-title"],
      belowProductPrice: [".product-card-info .price"],
    },
    collections: {
      parent: [".column"],
      badge: [".product-featured-image .product-featured-image-link"],
      belowProductImage: [
        ".product-featured-image .product-featured-image-link",
      ],
      belowProductName: [".product-card-info .product-card-title"],
      belowProductPrice: [".product-card-info .price"],
    },
    products: {
      parent: [".product", ".column"],
      badge: [
        ".product-images__slide .product-single__media",
        ".product-featured-image .product-featured-image-link",
      ],
      belowProductImage: [
        ".product-images__slide .product-single__media",
        ".product-featured-image .product-featured-image-link",
      ],
      belowProductName: [
        ".product-information .product-title",
        ".product-card-info .product-card-title",
      ],
      belowProductPrice: [
        ".product-information .product-price-container",
        ".product-card-info .price",
      ],
    },
    search: {
      parent: [".column"],
      badge: [".product-featured-image .product-featured-image-link"],
      belowProductImage: [
        ".product-featured-image .product-featured-image-link",
      ],
      belowProductName: [".product-card-info .product-card-title"],
      belowProductPrice: [".product-card-info .price"],
    },
  },
  basel: {
    products: {
      parent: [".product-grid-item", ".product-image-summary"],
      badge: [".product-element-top .jas-pr-image-link", ".owl-stage-outer"],
      belowProductImage: [".product-element-top", ".owl-stage-outer"],
      belowProductName: [".product-title", ".product_title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-element-top .jas-pr-image-link"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".product-grid-item"],
      badge: [".product-element-top .jas-pr-image-link"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-element-top .jas-pr-image-link"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
    },
  },
  parallax: {
    products: {
      parent: [".product_section"],
      badge: [".slides"],
      belowProductImage: [".slides"],
      belowProductName: [".product_name"],
      belowProductPrice: [".modal_price"],
    },
    home: {
      parent: [".products .columns"],
      badge: [".image__container"],
      belowProductImage: [".image__container"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".products .columns"],
      badge: [".image__container"],
      belowProductImage: [".image__container"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product_row .columns"],
      badge: [".product_row .columns > a"],
      belowProductImage: [".product_row .columns > a"],
      belowProductName: [".sub_title"],
      belowProductPrice: [".price"],
    },
  },
  venedor: {
    products: {
      parent: [".product-main", ".product-card"],
      badge: [".flickity-viewport", ".product-img .main-product"],
      belowProductImage: [".flickity-viewport", ".product-img .main-product"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-img .main-product"],
      belowProductImage: [".product-img .main-product"],
      belowProductName: [".product-detail .product-name > a"],
      belowProductPrice: [".product-detail .product-price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-img .main-product"],
      belowProductImage: [".product-img .main-product"],
      belowProductName: [".product-detail .product-name > a"],
      belowProductPrice: [".product-detail .product-price"],
      mutations: [".collection-sort"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-img .main-product"],
      belowProductImage: [".product-img .main-product"],
      belowProductName: [".product-detail .product-name > a"],
      belowProductPrice: [".product-detail .product-price"],
    },
  },
  canopy: {
    products: {
      parent: [".product-block", ".product-container"],
      badge: [
        ".image__primary .rimage-wrapper",
        ".main .slick-list.draggable",
        ".main .main-img-link",
      ],
      belowProductImage: [
        ".image__primary .rimage-wrapper",
        ".main .slick-list.draggable",
      ],
      belowProductName: [
        ".product-block__title-price .title",
        "form .product-title",
      ],
      belowProductPrice: [
        ".product-block__title-price .price ",
        "form .product-price",
      ],
      mutations: [".product-recommendations", ".theme-product-reviews-full"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [".product-block", ".product-container"],
      badge: [".image__primary .rimage-wrapper", ".main .slick-list.draggable"],
      belowProductImage: [
        ".image__primary .rimage-wrapper",
        ".main .slick-list.draggable",
      ],
      belowProductName: [
        ".product-block__title-price .title",
        "form .product-title",
      ],
      belowProductPrice: [
        ".product-block__title-price .price ",
        "form .product-price",
      ],
    },
    collections: {
      parent: [".product-block"],
      badge: [".image__primary .rimage-wrapper"],
      belowProductImage: [".image__primary .rimage-wrapper"],
      belowProductName: [".product-block__title-price .title"],
      belowProductPrice: [".product-block__title-price .price "],
      mutations: [
        ".product-list-container",
        "form",
        ".container",
        "div[data-ajax-container]",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product-block"],
      badge: [".image__primary .rimage-wrapper"],
      belowProductImage: [".image__primary .rimage-wrapper"],
      belowProductName: [".product-block__title-price .title"],
      belowProductPrice: [".product-block__title-price .price "],
    },
  },
  clevercomo: {
    products: {
      parent: [".pr_grid_item", ".sp-single"],
      badge: [".product-image > a", ".product-images .images"],
      belowProductImage: [".product-image > a", ".product-images .images"],
      belowProductName: [".product-info .product-title", ".product_title"],
      belowProductPrice: [".product-info .price", ".price-review"],
    },
    home: {
      parent: [".pr_grid_item"],
      badge: [".product-image > a"],
      belowProductImage: [".product-image > a"],
      belowProductName: [".product-info .product-title"],
      belowProductPrice: [".product-info .price"],
    },
    collections: {
      parent: [".pr_grid_item"],
      badge: [".product-image > a"],
      belowProductImage: [".product-image > a"],
      belowProductName: [".product-info .product-title"],
      belowProductPrice: [".product-info .price"],
    },
    search: {
      parent: [".pr_grid_item"],
      badge: [".product-image > a"],
      belowProductImage: [".product-image > a"],
      belowProductName: [".product-info .product-title"],
      belowProductPrice: [".product-info .price"],
    },
  },
  lorenza: {
    products: {
      parent: [".product-item", ".product"],
      badge: [
        ".product-item__image-wrapper",
        ".product__media-wrapper a.media__image",
      ],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product__media-wrapper a.media__image",
      ],
      belowProductName: [
        ".product-item__details > a",
        ".product__meta .product__title",
      ],
      belowProductPrice: [
        ".product-item__details .price",
        ".product__meta .product__price",
      ],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__details > a"],
      belowProductPrice: [".product-item__details .price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__details > a"],
      belowProductPrice: [".product-item__details .price"],
      mutations: [".collection__products", ".collection__infinite-trigger"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__details > a"],
      belowProductPrice: [".product-item__details .price"],
    },
  },
  muscle: {
    home: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    products: {
      parent: [".product", ".grid-item"],
      badge: [".product-photo-container", ".product-top"],
      belowProductImage: [".product-photo-container", ".product-image"],
      belowProductName: [".product-title", ".product-title"],
      belowProductPrice: [".prices", ".price-box"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
  },
  cospora: {
    products: {
      parent: [".grid-item", ".product"],
      badge: [
        ".product-image .product-grid-image",
        ".wrapper-images .product-photo-container",
      ],
      belowProductImage: [
        ".product-image",
        ".wrapper-images .product-photo-container",
      ],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-regular", ".product-shop .price"],
    },
    home: {
      parent: [".grid-item"],
      badge: [".product-image .product-grid-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-regular"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-image .product-grid-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-regular"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-image .product-grid-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-regular"],
    },
  },
  freshio: {
    products: {
      parent: [".product-card", ".product-single"],
      badge: [
        ".product-card__image-wr .product-card__image",
        ".photos .photos__item--main",
      ],
      belowProductImage: [
        ".product-card__image-wr .product-card__image",
        ".photos .photos__item--main",
      ],
      belowProductName: [
        ".product-card__info .product-card__name",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".product-card__info .product-card__price",
        ".product-single__meta .product-single__price-container",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-wr .product-card__image"],
      belowProductImage: [".product-card__image-wr .product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-wr .product-card__image"],
      belowProductImage: [".product-card__image-wr .product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    search: {
      parent: [".product-card", "form li"],
      badge: [".product-card__image-wr .product-card__image", ".result-image"],
      belowProductImage: [
        ".product-card__image-wr .product-card__image",
        ".result-image",
      ],
      belowProductName: [".product-card__info .product-card__name", "span"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
  },
  optimal: {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [".grid_img_wr .grid_lnk", ".pr_lg_img .slick-list.draggable"],
      belowProductImage: [
        ".grid_img_wr .grid_lnk",
        ".pr_lg_img .slick-list.draggable",
      ],
      belowProductName: [
        ".details .grid_title",
        ".wrap-product-info .pr_title",
      ],
      belowProductPrice: [
        ".details .pr_price_sale",
        ".wrap-product-info .pr_price_single",
      ],
    },
    home: {
      parent: [".grid__item"],
      badge: [".grid_img_wr .grid_lnk"],
      belowProductImage: [".grid_img_wr .grid_lnk"],
      belowProductName: [".details .grid_title"],
      belowProductPrice: [".details .pr_price_sale"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid_img_wr .grid_lnk"],
      belowProductImage: [".grid_img_wr .grid_lnk"],
      belowProductName: [".details .grid_title"],
      belowProductPrice: [".details .pr_price_sale"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid_img_wr .grid_lnk"],
      belowProductImage: [".grid_img_wr .grid_lnk"],
      belowProductName: [".details .grid_title"],
      belowProductPrice: [".details .pr_price_sale"],
    },
  },
  renoxa: {
    products: {
      parent: [".product-container", ".singlepro"],
      badge: [".imgblock .featured-image", ".product-photo-container > a"],
      belowProductImage: [
        ".imgblock .featured-image",
        ".product-photo-container > a",
      ],
      belowProductName: [".wbproductdes h5", ".propage .proname"],
      belowProductPrice: [
        ".wbproductdes .product_price",
        ".propage .product_single_price",
      ],
    },
    home: {
      parent: [".product-container"],
      badge: [".imgblock .featured-image"],
      belowProductImage: [".imgblock .featured-image"],
      belowProductName: [".wbproductdes h5"],
      belowProductPrice: [".wbproductdes .product_price"],
    },
    collections: {
      parent: [".product-container"],
      badge: [".imgblock .featured-image"],
      belowProductImage: [".imgblock .featured-image"],
      belowProductName: [".wbproductdes h5"],
      belowProductPrice: [".wbproductdes .product_price"],
    },
    search: {
      parent: [".product-container"],
      badge: [".imgblock .featured-image"],
      belowProductImage: [".imgblock .featured-image"],
      belowProductName: [".wbproductdes h5"],
      belowProductPrice: [".wbproductdes .product_price"],
    },
  },
  xtra: {
    products: {
      parent: [".l4cl .li", "article.m6pr", "li.square", "li.portrait"],
      badge: [
        ".img-multiply > a",
        ".swiper-outer",
        "figure .img-multiply",
        "picture.img-multiply",
      ],
      belowProductImage: [
        ".img-multiply > a",
        ".swiper-wrapper",
        "figure .img-multiply",
        "picture.img-multiply",
      ],
      belowProductName: [".text-uppercase", "h3 > a"],
      belowProductPrice: [".price"],
      mutations: [".product-recommendations", ".recently-viewed-products"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [
        ".l4cl li",
        ".l4cl .li",
        "li.square",
        "li.portrait",
        ".w33.has-form",
      ],
      badge: [".img-multiply > a", "figure .img-multiply", "figure > a"],
      belowProductImage: [
        ".img-multiply > a",
        "figure .img-multiply",
        "figure > a",
      ],
      belowProductName: [".text-uppercase", "h3 > a"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".list li", "li.square", "li.portrait", ".w33.has-form"],
      badge: [".img-multiply a", "figure .img-multiply", "figure > a"],
      belowProductImage: [
        ".img-multiply a",
        "figure .img-multiply",
        "figure > a",
      ],
      belowProductName: [".text-uppercase", "h3 > a"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".list li", "li.square", ".w33.has-form"],
      badge: [".img-multiply a", "figure .img-multiply", "figure > a"],
      belowProductImage: [
        ".img-multiply a",
        "figure .img-multiply",
        "figure > a",
      ],
      belowProductName: [".text-uppercase", "h3 > a"],
      belowProductPrice: [".price"],
      mutations: ["#content"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  "booster-6.0.5": {
    products: {
      parent: [".product__row", ".card--holder"],
      badge: [
        ".slider--product",
        ".card__img",
        ".navigation-wrapper .keen-slider",
      ],
      belowProductImage: [
        ".slider--product",
        ".card__img--ratio",
        ".navigation-wrapper .keen-slider",
      ],
      belowProductName: [".product__title", ".card__title"],
      belowProductPrice: [".product__price--holder", ".card__price"],
    },
    home: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
    },
    collections: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
      mutations: [".product__list"],
    },
    search: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
    },
  },
  "avone os 2.0": {
    products: {
      parent: [".grid__item", ".product-single"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".prod-large-img  .slick-list.draggable",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".prod-large-img  .slick-list.draggable",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".product-single__meta .product-single__price",
      ],
    },
    home: {
      parent: [".grid__item", ".clerk-slider-item", ".custom__item"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".clerk_product_wrapper > .clerk_link",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".clerk_product_wrapper > .clerk_link",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".clerk_product_info_wrap > .clerk_link",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".clerk_product_price_wrap",
      ],
    },
    collections: {
      parent: [".grid__item", ".clerk-slider-item", ".list-view-item"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".clerk_product_wrapper > .clerk_link",
        ".list-view-item__image-wrapper > a",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".clerk_product_wrapper > .clerk_link",
        ".list-view-item__image-wrapper > a",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".clerk_product_info_wrap > .clerk_link",
        ".list-view-item__title",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".clerk_product_price_wrap",
      ],
      mutations: [".infinitpagin", ".infinitpaginOuter", ".list-view-items"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
  },
  story: {
    products: {
      parent: [".product-page", ".grid__item"],
      badge: [".product__slides .flickity-viewport", ".lazy-image"],
      belowProductImage: [".product__slides .flickity-viewport", ".lazy-image"],
      belowProductName: [".product__title__wrapper", ".name_wrapper"],
      belowProductPrice: [".product__price__wrap ", ".price_wrapper"],
      mutations: [".product__related"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".lazy-image"],
      belowProductImage: [".lazy-image"],
      belowProductName: [".name_wrapper"],
      belowProductPrice: [".price_wrapper"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".lazy-image"],
      belowProductImage: [".lazy-image"],
      belowProductName: [".name_wrapper"],
      belowProductPrice: [".price_wrapper "],
    },
    search: {
      parent: [".grid.search__results"],
      badge: [".addtc-parent .lazy-image"],
      belowProductImage: [".addtc-parent .lazy-image"],
      belowProductName: [".search__result__title"],
      belowProductPrice: [".h5--accent "],
      mutations: [".search__results__page"],
    },
  },
  "7nine": {
    products: {
      parent: [".product-details-page", ".single-product-wrap"],
      badge: [".product_img_top .slick-list", ".pro-img"],
      belowProductImage: [".slick-list", ".product-image"],
      belowProductName: [".product-title", ".product-content > h3"],
      belowProductPrice: [".price-box", ".price-box"],
    },
    home: {
      parent: [".product-list-item"],
      badge: [".pro-img"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content > h3"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".single-product-wrap"],
      badge: [".pro-img"],
      belowProductImage: [".product-action"],
      belowProductName: [".product-content > h3"],
      belowProductPrice: [".price-box"],
    },
    search: {
      parent: [".search-item"],
      badge: [".search-item-image > a"],
      belowProductImage: [".search-item-image"],
      belowProductName: [".search-item > h6"],
      belowProductPrice: [".search-price"],
      mutations: [".search-list"],
    },
  },
  "minimog - os 2.0": {
    home: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block", ".m-product-card"],
      badge: [
        ".sf__image-box",
        ".m-product-card__media",
        ".m-product-card__main-image",
      ],
      belowProductImage: [".sf__pcard-image", ".m-product-card__main-image"],
      belowProductName: [
        ".sf__pcard-content h3.text-base",
        ".m-product-card__title",
      ],
      belowProductPrice: [
        ".sf__pcard-content .sf__pcard-price",
        ".m-product-card__price",
      ],
      mutations: [
        "#CollectionProductGrid",
        "body[aco-shop-name='finessewellness'] #MainContent",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [
        ".sf-prod__container",
        ".sf-prod__block",
        ".rktheme-grid-product",
        ".m-main-product--wrapper",
      ],
      badge: [
        ".swiper-container",
        ".sf-preview__wrapper",
        ".sf__image-box",
        ".rktheme-product-image-wrap",
        ".m-product-media--slider__images .swiper-container",
      ],
      belowProductImage: [
        ".sf-pis__wrapper",
        ".sf__pcard-image",
        ".rktheme-product-image-wrap",
        ".m-product-media--slider__images .swiper-container",
      ],
      belowProductName: [
        ".main-product__blocks .prod__title",
        ".sf__pcard-content h3.text-base",
        ".rktheme-product-title",
        ".m-product-title",
      ],
      belowProductPrice: [
        ".main-product__blocks .product-prices",
        ".sf__pcard-content .sf__pcard-price",
        ".rktheme-product-price-wrap",
        ".main-product__block-price",
      ],
    },
    search: {
      parent: [".sf-prod__block", ".m-search-item"],
      badge: [".sf__image-box", ".m-search-item--image"],
      belowProductImage: [".sf__pcard-image", ".m-search-item--image"],
      belowProductName: [
        ".sf__pcard-content h3.text-base",
        ".m-search-item--title",
      ],
      belowProductPrice: [
        ".sf__pcard-content .sf__pcard-price",
        ".m-search-item--price",
      ],
    },
  },
  "story thème": {
    home: {
      parent: [".grid-product"],
      badge: [".grid-product__image-wrapper .grid-product__image-link"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    collections: {
      parent: [".grid-product"],
      badge: [".grid-product__image-wrapper .grid-product__image-link"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    products: {
      parent: [".grid-product", ".product_container"],
      badge: [
        ".grid-product__image-wrapper .grid-product__image-link",
        ".product_images_part .mySwiper2",
      ],
      belowProductImage: [
        ".grid-product__image-wrapper",
        ".product_images_part .mySwiper",
      ],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [".grid-product__price", ".price-container"],
    },
    search: {
      parent: [".grid-product"],
      badge: [".grid-product__image-wrapper .grid-product__image-link"],
      belowProductImage: [".grid-product__image-wrapper"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  meunt: {
    products: {
      parent: [".product", ".row"],
      badge: [".img-product", ".gallery-control .img_thumb"],
      belowProductImage: [".img-product", ".gallery-control .img_thumb"],
      belowProductName: [".title-product", ".detail-info .product-title"],
      belowProductPrice: [".price-product", ".detail-info .product-price"],
    },
    home: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    collections: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    search: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
  },
  showcase: {
    products: {
      parent: [".product-area", ".product-block__inner"],
      badge: [".rimage-wrapper", ".product-block__inner .image-inner"],
      belowProductImage: [".rimage-wrapper", ".image-inner"],
      belowProductName: [".product-area__details__title", ".title"],
      belowProductPrice: [".price-area", ".price"],
      mutations: [".price-area", ".option-selectors label"],
    },
    home: {
      parent: [".product-block__inner"],
      badge: [".product-block__inner .image-inner"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-block__inner"],
      badge: [".product-block__inner .image-inner"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
      mutations: [".product-list", ".cc-product-filter-container"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product-block__inner"],
      badge: [".product-block__inner .image-inner"],
      belowProductImage: [".image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
  },
  grid: {
    products: {
      parent: [".product-container", ".product-list-item"],
      badge: [".product-main-image", ".product-list-item-thumbnail"],
      belowProductImage: [
        ".product-main-image",
        ".product-list-item-thumbnail",
      ],
      belowProductName: [".product-title", ".product-list-item-title"],
      belowProductPrice: [".product-price", ".product-list-item-price"],
    },
    home: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
    collections: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
    search: {
      parent: [".product-list-item"],
      badge: [".product-list-item-thumbnail"],
      belowProductImage: [".product-list-item-thumbnail"],
      belowProductName: [".product-list-item-title"],
      belowProductPrice: [".product-list-item-price"],
    },
  },
  "booster premium": {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [
        ".grid__item.product-single__photos .product-single__photo",
        ".grid-view-item__link .reveal",
      ],
      belowProductImage: [
        ".grid__item.product-single__photos",
        ".grid-view-item__link .reveal",
      ],
      belowProductName: [".product-single__title", ".grid-view-item__title"],
      belowProductPrice: [".product-single__price", ".grid-view-item__meta"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link .reveal"],
      belowProductImage: [".grid-view-item__link .reveal"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link .reveal"],
      belowProductImage: [".grid-view-item__link .reveal"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link .reveal"],
      belowProductImage: [".grid-view-item__link .reveal"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
  },
  maker: {
    products: {
      parent: [".product-page--top-panel", ".product--root"],
      badge: [".image--root", ".product--image-wrapper"],
      belowProductImage: [".image--root", ".product--image-wrapper"],
      belowProductName: [".product-page--heading", ".product--title"],
      belowProductPrice: [
        ".product-price--wrapper",
        ".product--price-container",
      ],
    },
    home: {
      parent: [".shg-category-col", ".product--root"],
      badge: [".shg-product-image-wrapper", ".product--image-wrapper"],
      belowProductImage: [
        ".shg-product-image-wrapper",
        ".product--image-wrapper",
      ],
      belowProductName: [".shg-product-title-component", ".product--title"],
      belowProductPrice: [
        ".shg-c.shg-align-center:nth-child(2)",
        ".product--price-container",
      ],
    },
    collections: {
      parent: [".product--root"],
      badge: [".product--image-wrapper"],
      belowProductImage: [".product--image-wrapper"],
      belowProductName: [".product--title"],
      belowProductPrice: [".product--price-container"],
    },
    search: {
      parent: [".product--root"],
      badge: [".product--image-wrapper"],
      belowProductImage: [".product--image-wrapper"],
      belowProductName: [".product--title"],
      belowProductPrice: [".product--price-container"],
    },
  },
  emerge: {
    products: {
      parent: [".product--root", ".product-page--wrapper"],
      badge: [
        ".product--image-wrapper",
        ".product-page--media .product-media--wrapper",
      ],
      belowProductImage: [
        ".product--image-wrapper",
        ".product-page--media .product-media--wrapper",
      ],
      belowProductName: [
        ".product--title",
        ".product-page--info .product-page--heading",
      ],
      belowProductPrice: [
        ".product--price-container",
        ".product-page--info .product-price--root",
      ],
    },
    home: {
      parent: [".product--root"],
      badge: [".product--image-wrapper"],
      belowProductImage: [".product--image-wrapper"],
      belowProductName: [".product--title"],
      belowProductPrice: [".product--price-container"],
    },
    collections: {
      parent: [".product--root", ".fs-sr-grid-item"],
      badge: [".product--image-wrapper", ".fs-product-image__main-image"],
      belowProductImage: [
        ".product--image-wrapper",
        ".fs-product-image__main-image",
      ],
      belowProductName: [
        ".product--title",
        ".fs-sr-grid-item__info .fs-product-title",
      ],
      belowProductPrice: [".product--price-container", ".fs-price"],
    },
    search: {
      parent: [".product--root", ".fs-sr-grid-item"],
      badge: [".product--image-wrapper", ".fs-product-image__main-image"],
      belowProductImage: [
        ".product--image-wrapper",
        ".fs-product-image__main-image",
      ],
      belowProductName: [
        ".product--title",
        ".fs-sr-grid-item__info .fs-product-title",
      ],
      belowProductPrice: [".product--price-container", ".fs-price"],
    },
  },
  mera: {
    products: {
      parent: [".product-item", ".row"],
      badge: [".product-thumb", ".product-images .main-img"],
      belowProductImage: [".product-thumb", ".product-images .main-img"],
      belowProductName: [
        ".product-info .product-name",
        ".single-product-info > h1",
      ],
      belowProductPrice: [
        ".product-info .product-price",
        ".single-product-info .product-price",
      ],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".product-info .product-name"],
      belowProductPrice: [".product-info .product-price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".product-info .product-name"],
      belowProductPrice: [".product-info .product-price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".product-info .product-name"],
      belowProductPrice: [".product-info .product-price"],
    },
  },
  velatheme: {
    products: {
      parent: [".product-card", ".product"],
      badge: [
        ".product-card__image-link",
        ".product__media-wrapper .product-single__main-media",
      ],
      belowProductImage: [
        ".product-card__image-link",
        ".product__media-wrapper .product-single__main-media",
      ],
      belowProductName: [
        ".product-card__name > a",
        ".product__info-wrapper .product-single__title",
      ],
      belowProductPrice: [
        ".product-group-price",
        ".product__info-wrapper .price-container",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-link"],
      belowProductImage: [".product-card__image-link"],
      belowProductName: [".product-card__name > a"],
      belowProductPrice: [".product-group-price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-link"],
      belowProductImage: [".product-card__image-link"],
      belowProductName: [".product-card__name > a"],
      belowProductPrice: [".product-group-price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image-link"],
      belowProductImage: [".product-card__image-link"],
      belowProductName: [".product-card__name > a"],
      belowProductPrice: [".product-group-price"],
    },
  },
  "vela framework": {
    products: {
      parent: [".owl-item", ".boxProduct"],
      badge: [".proFeaturedImage"],
      belowProductImage: [".proFeaturedImage"],
      belowProductName: ["._productItem__name", ".classic-headers__text"],
      belowProductPrice: ["._productItem__prices", ".priceProduct"],
    },
    home: {
      parent: [".owl-item"],
      badge: [".proFeaturedImage"],
      belowProductImage: [".proFeaturedImage"],
      belowProductName: ["._productItem__name"],
      belowProductPrice: ["._productItem__prices"],
    },
    collections: {
      parent: [".owl-item", "._productItem"],
      badge: [".proFeaturedImage"],
      belowProductImage: [".proFeaturedImage"],
      belowProductName: ["._productItem__name"],
      belowProductPrice: ["._productItem__prices"],
    },
    search: {
      parent: [".owl-item", "._productItem"],
      badge: [".proFeaturedImage"],
      belowProductImage: [".proFeaturedImage"],
      belowProductName: ["._productItem__name"],
      belowProductPrice: ["._productItem__prices"],
    },
  },
  upscale: {
    products: {
      parent: [".main-product", ".featured-collection .card"],
      badge: [".main-product__media-gallery", ".card__image"],
      belowProductImage: [".main-product__media-gallery", ".card__image"],
      belowProductName: [".main-product__blocks > h1", ".card__title"],
      belowProductPrice: [".main-product__block-price", ".price-details"],
    },
    home: {
      parent: [".featured-collection .card"],
      badge: [".card__image"],
      belowProductImage: [".card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price-details"],
    },
    collections: {
      parent: [".product-grid .card"],
      badge: [".card__image"],
      belowProductImage: [".card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price-details"],
      mutations: ["loess-product-filters"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product-grid .card"],
      badge: [".card__image"],
      belowProductImage: [".card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price-details"],
      mutations: ["loess-product-filters"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  baseline: {
    products: {
      parent: [
        ".type-product-grid-item",
        ".grid[data-section-type='product']",
        ".featured-collection .card",
      ],
      badge: [
        ".type-product-grid-item .relative",
        ".responsive-image-wrapper",
        ".card__image",
      ],
      belowProductImage: [
        ".featured-collection__image",
        ".splide__list",
        ".card__image",
      ],
      belowProductName: [
        ".product-grid-title",
        ".product-title-block",
        ".card__title",
      ],
      belowProductPrice: [
        ".text-left > span",
        ".product-price-block",
        ".price-details",
      ],
    },
    collections: {
      parent: [".type-product-grid-item"],
      badge: [".type-product-grid-item .relative"],
      belowProductImage: [".featured-collection__image"],
      belowProductName: [".product-grid-title"],
      belowProductPrice: [".text-left > span"],
    },
    home: {
      parent: [".type-product-grid-item"],
      badge: [".type-product-grid-item .relative"],
      belowProductImage: [".featured-collection__image"],
      belowProductName: [".product-grid-title"],
      belowProductPrice: [".text-left > span"],
    },
    search: {
      parent: [".type-product-grid-item"],
      badge: [".type-product-grid-item .relative"],
      belowProductImage: [".featured-collection__image"],
      belowProductName: [".product-grid-title"],
      belowProductPrice: [".text-left > span"],
    },
  },
  kvalifik: {
    products: {
      parent: [".productGridItem", "div[data-section-type='product'] .grid"],
      badge: [".product-card__image-wrapper", ".product-single__media"],
      belowProductImage: [
        ".product-card__image-wrapper",
        ".product-single__media",
      ],
      belowProductName: ["h4", ".product-single__meta > h1"],
      belowProductPrice: [".price", ".product-single__meta .product__price"],
    },
    collections: {
      parent: [".productGridItem"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: ["h4"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".productGridItem"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: ["h4"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".productGridItem"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: ["h4"],
      belowProductPrice: [".price"],
    },
  },
  bywud: {
    home: {
      parent: [".product-item", ".product-block-list"],
      badge: [".product-item__image-wrapper", ".main_img .Slider__principal"],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".main_img .Slider__principal",
      ],
      belowProductName: [
        ".product-item__title",
        ".product-meta .product-meta__title",
      ],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".price"],
      mutations: [".collection__dynamic-part"],
    },
    products: {
      parent: [".product-item", ".product-block-list"],
      badge: [
        ".product-item__image-wrapper",
        ".main_img .slick-list.draggable",
      ],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".main_img .slick-list.draggable",
      ],
      belowProductName: [
        ".product-item__title",
        ".product-meta .product-meta__title",
      ],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".price"],
    },
  },
  colors: {
    products: {
      parent: [".grid-product", ".featured-box_product", ".product"],
      badge: [
        ".grid-view-item__image",
        ".box_product_img",
        ".big-imagegallery-pc .media",
      ],
      belowProductImage: [
        ".grid-view-item__image",
        ".box_product_img",
        ".big-imagegallery-pc",
      ],
      belowProductName: [".info .title", ".box_product_title", ".pro-titles"],
      belowProductPrice: [
        ".info .price",
        "span[nclass='box_product_price']",
        ".offers",
      ],
    },
    home: {
      parent: [".product-card_k", ".grid-product", ".featured-box_product"],
      badge: [
        ".image-box .image-box-alink",
        ".grid-view-item__image",
        ".box_product_img",
      ],
      belowProductImage: [
        ".image-box .image-box-alink",
        ".grid-view-item__image",
        ".box_product_img",
      ],
      belowProductName: [".info .title", ".box_product_title"],
      belowProductPrice: [".info .price", "span[nclass='box_product_price']"],
    },
    collections: {
      parent: [".grid-product"],
      badge: [".table"],
      belowProductImage: [".table"],
      belowProductName: [".info .title"],
      belowProductPrice: [".info .price"],
    },
    search: {
      parent: [".grid-product", ".featured-box_product", ".collection-product"],
      badge: [".grid-view-item__image", ".box_product_img", ".table"],
      belowProductImage: [
        ".grid-view-item__image",
        ".box_product_img",
        ".table",
      ],
      belowProductName: [".info .title", ".box_product_title", ".info .title"],
      belowProductPrice: [
        ".info .price",
        "span[nclass='box_product_price']",
        ".info .price",
      ],
    },
  },
  cocafe: {
    products: {
      parent: [".product", ".content-page-detail"],
      badge: [
        ".img-product",
        ".gallery-control .relative .slick-list.draggable",
      ],
      belowProductImage: [
        ".img-product",
        ".gallery-control .relative .slick-list.draggable",
      ],
      belowProductName: [".title-product", ".product-title"],
      belowProductPrice: [".price-product", ".product-price "],
    },
    home: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    collections: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    search: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
  },
  lusion: {
    products: {
      parent: [".item", ".product-card-item", ".row"],
      badge: [".product-card-item .image", "#gp-media-main-slider .slick-list"],
      belowProductImage: [
        ".product-card-item .image",
        "#gp-media-main-slider .slick-list",
      ],
      belowProductName: [
        ".title",
        ".gp-product-col-main-inner .product-detail-name",
      ],
      belowProductPrice: [
        ".price-wrapper",
        ".gp-product-col-main-inner .product-info-price",
      ],
    },
    home: {
      parent: [".item"],
      badge: [".product-card-item .image"],
      belowProductImage: [".product-card-item .image"],
      belowProductName: [".title"],
      belowProductPrice: [".price-wrapper"],
    },
    collections: {
      parent: [".item", ".product-card-item"],
      badge: [".product-card-item .image"],
      belowProductImage: [".product-card-item .image"],
      belowProductName: [".title"],
      belowProductPrice: [".price-wrapper"],
    },
    search: {
      parent: [".item", ".product-card-item"],
      badge: [".product-card-item .image"],
      belowProductImage: [".product-card-item .image"],
      belowProductName: [".title"],
      belowProductPrice: [".price-wrapper"],
    },
  },
  legend: {
    products: {
      parent: [".item-inner", ".row"],
      badge: [".images-container .carousel-inner", ".thumbnails .thumbnail"],
      belowProductImage: [
        ".images-container .carousel-inner",
        ".thumbnails .thumbnail",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-label", ".price-product"],
    },
    home: {
      parent: [".item-inner"],
      badge: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductImage: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-label"],
    },
    collections: {
      parent: [".item-inner"],
      badge: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductImage: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-label"],
    },
    search: {
      parent: [".item-inner"],
      badge: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductImage: [
        ".images-container .carousel-inner",
        ".images-container > .image",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-label"],
    },
  },
  "woodstock fashionable": {
    home: {
      parent: [".grid__item"],
      badge: [".item__image"],
      belowProductImage: [".item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".item__image"],
      belowProductImage: [".item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
      mutations: [".collection__products"],
    },
    products: {
      parent: [".grid__item", ".product-single"],
      badge: [".item__image", ".pg__mains .slick-list.draggable"],
      belowProductImage: [".item__image", ".pg__mains .slick-list.draggable"],
      belowProductName: [".item__name", ".product-single__title"],
      belowProductPrice: [".product-price", ".product-price-wrap"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".item__image"],
      belowProductImage: [".item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
  },
  chromium: {
    home: {
      parent: [".product-grid-item"],
      badge: [".featured-img"],
      belowProductImage: [".featured-img"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".price-cart-wrapper", ".detail-price"],
    },
    products: {
      parent: [".product-content-wrapper", ".product-grid-item"],
      badge: [
        ".slider-main-image",
        ".product-image .main-image",
        ".featured-img",
      ],
      belowProductImage: [
        ".slider-main-image",
        ".product-image .main-image",
        ".featured-img",
      ],
      belowProductName: [".page-heading", ".product-name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".price-cart-wrapper", ".detail-price"],
      mutations: [".product-price"],
    },
  },
  august: {
    home: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    products: {
      parent: [".product-card", ".product-single"],
      badge: [".product-card__image", ".photos__item .product__photo-wrapper"],
      belowProductImage: [
        ".product-card__image",
        ".photos__item .product__photo-wrapper",
      ],
      belowProductName: [".product-card__name", ".product-single__title "],
      belowProductPrice: [
        ".product-card__price",
        ".product-single__price-container",
      ],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
  },
  bullet: {
    home: {
      parent: ["c.card"],
      badge: [".cover"],
      belowProductImage: [".cover"],
      belowProductName: [".prodtitle"],
    },
    collections: {
      parent: ["c.card"],
      badge: [".cover"],
      belowProductImage: [".cover"],
      belowProductName: [".prodtitle"],
    },
    products: {
      parent: ["c.card", ".product-page"],
      badge: [".cover", ".media .image"],
      belowProductImage: [".cover", ".media .image"],
      belowProductName: [".prodtitle", ".title"],
      belowProductPrice: [".price"],
      mutations: ["product-recommendations"],
    },
    search: {
      parent: ["c.card"],
      badge: [".cover"],
      belowProductImage: [".cover"],
      belowProductName: [".prodtitle"],
    },
  },
  "ziba update 2.0": {
    products: {
      parent: [".grid__item", ".product"],
      badge: [".card__media .media", ".product__media-list"],
      belowProductImage: [".card--media .card__inner", ".product__media-list"],
      belowProductName: [".card__heading.h5", ".product__title"],
      belowProductPrice: [".price "],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__heading.h5"],
      belowProductPrice: [".price "],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__heading.h5"],
      belowProductPrice: [".price "],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__heading.h5"],
      belowProductPrice: [".price "],
    },
  },
  venedor: {
    home: {
      parent: ["c.card"],
      badge: [".cover"],
      belowProductImage: [".cover"],
      belowProductName: [".prodtitle"],
    },
    collections: {
      parent: [".collection-card__wrapper"],
      badge: [".main-product"],
      belowProductImage: [".main-product"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-info"],
      mutations: [".collection-sort"],
    },
    products: {
      parent: [".product-layout"],
      badge: [".flickity-viewport"],
      belowProductImage: [".flickity-viewport"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".collection-card__wrapper"],
      badge: [".main-product"],
      belowProductImage: [".main-product"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-info"],
    },
  },
  claudia: {
    products: {
      parent: [".card--media", ".product"],
      badge: [".card__media", ".product__media-item .product__media"],
      belowProductImage: [
        ".card__inner",
        ".product__media-item .product__media",
      ],
      belowProductName: [".card__heading", ".product__title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".card--media"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card--media"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".card--media"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
  },
  launch: {
    products: {
      parent: [".module-product", ".bcsell-item"],
      badge: [".product-gallery--media-wrapper", ".bcsell-img"],
      belowProductImage: [
        ".product-gallery--viewport .flickity-viewport",
        ".bcsell-img",
      ],
      belowProductName: [".bcsell-product-name"],
      belowProductPrice: [".bcsell-product-prices"],
    },
    home: {
      parent: [".list-item", ".bcsell-item"],
      badge: [".list-image-wrapper", ".bcsell-img"],
      belowProductImage: [".list-image-wrapper", ".bcsell-img"],
      belowProductName: [".list-title", ".bcsell-product-name"],
      belowProductPrice: [".price", ".bcsell-product-prices"],
    },
    collections: {
      parent: [".list-item", ".bcsell-item"],
      badge: [".list-image-wrapper", ".bcsell-img"],
      belowProductImage: [".list-image-wrapper", ".bcsell-img"],
      belowProductName: [".list-title", ".bcsell-product-name"],
      belowProductPrice: [".price", ".bcsell-product-prices"],
    },
    search: {
      parent: [".list-item", ".bcsell-item"],
      badge: [".list-image-wrapper", ".bcsell-img"],
      belowProductImage: [".list-image-wrapper", ".bcsell-img"],
      belowProductName: [".list-title", ".bcsell-product-name"],
      belowProductPrice: [".price", ".bcsell-product-prices"],
    },
  },
  origin: {
    products: {
      parent: [".grid__item", ".product"],
      badge: [".card__inner .card__media", ".product__media-list"],
      belowProductImage: [".card__inner", ".product__media-list"],
      belowProductName: [".card__heading", ".product__title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item", ".spf-product-card"],
      badge: [".card__inner .card__media", ".spf-product-card__inner"],
      belowProductImage: [".card__inner", ".spf-product-card__inner"],
      belowProductName: [".card__heading", ".spf-product-card__title"],
      belowProductPrice: [".price", ".spf-product-card__price-wrapper"],
      mutations: ["facet-filters-form"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
      mutations: [".facets-wrapper"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  yanka: {
    products: {
      parent: [".pt-product"],
      badge: [".pt-image-box"],
      belowProductImage: [".pt-image-box"],
      belowProductName: [".pt-title"],
      belowProductPrice: [".pt-price"],
    },
    home: {
      parent: [".container.container-fluid-mobile", ".pt-product"],
      badge: [".pt-product-single-img", ".pt-image-box"],
      belowProductImage: [".pt-product-vertical-layout", ".pt-image-box"],
      belowProductName: [".pt-title"],
      belowProductPrice: [".pt-price"],
    },
    collections: {
      parent: [".pt-product"],
      badge: [".pt-image-box"],
      belowProductImage: [".pt-image-box"],
      belowProductName: [".pt-title"],
      belowProductPrice: [".pt-price"],
      mutations: [".pt-product-listing"],
    },
    search: {
      parent: [".pt-product"],
      badge: [".pt-image-box"],
      belowProductImage: [".pt-image-box"],
      belowProductName: [".pt-title"],
      belowProductPrice: [".pt-price"],
    },
  },
  amu: {
    products: {
      parent: [".product"],
      badge: [".product-image", ".p-thumb"],
      belowProductImage: [".product-image", ".p-thumb"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price", ".price-review"],
    },
    home: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
      mutations: [".product-inner .product-image"],
    },
    collections: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
      mutations: [
        ".product-inner .product-image",
        ".load-on-scroll",
        ".products",
        ".id_collection_page .container",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
      mutations: [".product-inner .product-image"],
    },
  },
  "care me": {
    products: {
      parent: [".grid-item", ".product_top.row"],
      badge: [".product-top", ".wrapper-images"],
      belowProductImage: [".product-top", ".wrapper-images"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box", ".prices"],
    },
    home: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
      mutations: ["#main-collection-product-grid"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-top"],
      belowProductImage: [".product-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
  },
  "rowie theme": {
    home: {
      parent: [".collection__grid-item"],
      badge: ["a.collection-product__image-link"],
      belowProductImage: ["a.collection-product__image-link"],
      belowProductName: [".collection-product__title"],
      belowProductPrice: [".collection-product__price"],
    },
    collections: {
      parent: [".collection__grid-item"],
      badge: ["a.collection-product__image-link"],
      belowProductImage: ["a.collection-product__image-link"],
      belowProductName: [".collection-product__title"],
      belowProductPrice: [".collection-product__price"],
    },
    products: {
      parent: [".collection__grid-item", ".product"],
      badge: ["a.collection-product__image-link", ".product-images__img"],
      belowProductImage: [
        "a.collection-product__image-link",
        ".product-images__img",
      ],
      belowProductName: [".collection-product__title", ".product__title"],
      belowProductPrice: [".collection-product__price", ".product__price"],
    },
    search: {
      parent: [".collection__grid-item"],
      badge: ["a.collection-product__image-link"],
      belowProductImage: ["a.collection-product__image-link"],
      belowProductName: [".collection-product__title"],
      belowProductPrice: [".collection-product__price"],
    },
  },
  madheidi: {
    products: {
      parent: [".card-wrapper", ".row"],
      badge: [
        ".product-inner-img",
        ".product-container__slider .slick-list.draggable",
      ],
      belowProductImage: [
        ".product-inner-img",
        ".product-container__slider .slick-list.draggable",
      ],
      belowProductName: [".product-inner-title", ".product-container__title"],
      belowProductPrice: [".product-inner-price", ".product-container__price"],
    },
    home: {
      parent: [".card-wrapper"],
      badge: [".product-inner-img"],
      belowProductImage: [".product-inner-img"],
      belowProductName: [".product-inner-title "],
      belowProductPrice: [".product-inner-price"],
    },
    collections: {
      parent: [".card-wrapper"],
      badge: [".product-inner-img"],
      belowProductImage: [".product-inner-img"],
      belowProductName: [".product-inner-title "],
      belowProductPrice: [".product-inner-price"],
    },
    search: {
      parent: [".card-wrapper"],
      badge: [".product-inner-img"],
      belowProductImage: [".product-inner-img"],
      belowProductName: [".product-inner-title "],
      belowProductPrice: [".product-inner-price"],
    },
  },
  "my-theme": {
    products: {
      parent: [".product-item", ".product-block-list"],
      badge: [
        ".product-item__image-wrapper",
        ".product-gallery__carousel-wrapper .flickity-viewport",
      ],
      belowProductImage: [
        ".product-item__image-wrapper",
        ".product-gallery__carousel-wrapper .flickity-viewport",
      ],
      belowProductName: [".product-item__title", ".product-meta__title"],
      belowProductPrice: [
        ".product-item__price-list",
        ".product-form__info-content",
      ],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price-list"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price-list"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price-list"],
    },
  },
  capital: {
    products: {
      parent: [".product-page-wrapper", ".product-item__wrapper"],
      badge: [".product-media-inner", ".product-item__image-wrapper"],
      belowProductImage: [
        ".product-media-inner",
        ".product-item__image-wrapper",
      ],
      belowProductName: [".product-title", ".product--item-title"],
      belowProductPrice: [".product-price", ".product-item-price"],
      mutations: [".product-media-inner", ".product-media-item"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [".product-item__wrapper"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product--item-title"],
      belowProductPrice: [".product-item-price"],
    },
    collections: {
      parent: [".product-item__wrapper"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product--item-title"],
      belowProductPrice: [".product-item-price"],
      mutations: [".collection-wrapper", ".has-secondary-image"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: [".product-item__wrapper"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product--item-title"],
      belowProductPrice: [".product-item-price"],
    },
  },
  asdasd: {
    products: {
      parent: [".grid__item", ".product"],
      badge: [".card__inner .card__media", ".product__media-list"],
      belowProductImage: [".card__inner", ".product__media-list"],
      belowProductName: [".card__heading", ".product__title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
      mutations: [".gf-summary", "facet-filters-form"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
      mutations: [".facets-wrapper"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  avatar: {
    products: {
      parent: [".product-card", ".container > .row"],
      badge: [".product-card-image > a", ".product-media"],
      belowProductImage: [".product-card-image", ".product-media"],
      belowProductName: [".product-card-title", ".product-title"],
      belowProductPrice: [".product-card-prices", ".product-prices"],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card-image > a"],
      belowProductImage: [".product-card-image"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".product-card-prices"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card-image > a"],
      belowProductImage: [".product-card-image"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".product-card-prices"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card-image > a"],
      belowProductImage: [".product-card-image"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".product-card-prices"],
    },
  },
  pop: {
    products: {
      parent: [".grid-item", ".product-single"],
      badge: [".product-thumb", ".product-single__photos"],
      belowProductImage: [".product-thumb", ".product-single__photos"],
      belowProductName: [".grid-view-item__title", ".product-single__title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".grid-item", ".owl-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".product-thumb"],
      belowProductImage: [".product-thumb"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".price"],
    },
  },
  zestyfish: {
    home: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    collections: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    products: {
      parent: [".product", ".content-page-detail"],
      badge: [".img-product", ".img_thumb"],
      belowProductImage: [".img-product", ".img_thumb"],
      belowProductName: [".title-product", ".product-title"],
      belowProductPrice: [".price-product", ".product-price"],
    },
    search: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
  },
  monstrify: {
    home: {
      parent: [".product_item"],
      badge: [".product_img"],
      belowProductImage: [".product_img"],
      belowProductName: [".product_name"],
      belowProductPrice: [".product_price"],
    },
    collections: {
      parent: [".product_item"],
      badge: [".product_img"],
      belowProductImage: [".product_img"],
      belowProductName: [".product_name"],
      belowProductPrice: [".product_price"],
    },
    products: {
      parent: [".section_product", ".product_item"],
      badge: [".swiper-container", ".single_product__img", ".product_img"],
      belowProductImage: [
        ".swiper-container",
        ".single_product__img",
        ".product_img",
      ],
      belowProductName: [".single_product__title", ".product_name"],
      belowProductPrice: [".single_product__price", ".product_price"],
    },
    search: {
      parent: [".product_item"],
      badge: [".product_img"],
      belowProductImage: [".product_img"],
      belowProductName: [".product_name"],
      belowProductPrice: [".product_price"],
    },
  },
  belle_doll: {
    products: {
      parent: [".product-single", ".product-card"],
      badge: [".product-single__photos-wrapper", ".product-card__image"],
      belowProductImage: [
        ".product-single__photos-wrapper",
        ".product-card__image",
      ],
      belowProductName: [".product__title", ".product-card__title"],
      belowProductPrice: [".product__price", ".product-card__price"],
    },
    home: {
      parent: [".product-single", ".product-card"],
      badge: [".product-single__photos-wrapper", ".product-card__image"],
      belowProductImage: [
        ".product-single__photos-wrapper",
        ".product-card__image",
      ],
      belowProductName: [".product__title", ".product-card__title"],
      belowProductPrice: [".product__price", ".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__price"],
    },
  },
  lammer: {
    products: {
      parent: [".product-card", ".product-single"],
      badge: [
        ".product-card__image-wr .product-card__image",
        ".photos .photos__item--main",
      ],
      belowProductImage: [
        ".product-card__image-wr .product-card__image",
        ".photos .photos__item--main",
      ],
      belowProductName: [
        ".product-card__info .product-card__name",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".product-card__info .product-card__price",
        ".product-single__meta .product-single__price-container",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-wr .product-card__image"],
      belowProductImage: [".product-card__image-wr .product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-wr .product-card__image"],
      belowProductImage: [".product-card__image-wr .product-card__image"],
      belowProductName: [".product-card__info .product-card__name"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
    search: {
      parent: [".product-card", "form li"],
      badge: [".product-card__image-wr .product-card__image", ".result-image"],
      belowProductImage: [
        ".product-card__image-wr .product-card__image",
        ".result-image",
      ],
      belowProductName: [".product-card__info .product-card__name", "span"],
      belowProductPrice: [".product-card__info .product-card__price"],
    },
  },
  "palo alto": {
    home: {
      parent: [".product-single", ".product-grid-item"],
      badge: [".product-single__media", ".product-grid-item__image"],
      belowProductImage: [
        ".product-single__media",
        ".product-grid-item__image",
      ],
      belowProductName: [".product__title", ".product-grid-item__title"],
      belowProductPrice: [".product__price", ".product-grid-item__price"],
    },
    products: {
      parent: [".product-single", ".product-grid-item"],
      badge: [
        ".product-single__media-slider .product-single__media",
        ".product-grid-item__image",
      ],
      belowProductImage: [
        ".product-single__media-slider .product-single__media",
        ".product-grid-item__image",
      ],
      belowProductName: [".product__title", ".product-grid-item__title"],
      belowProductPrice: [".product__price", ".product-grid-item__price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-grid-item__image"],
      belowProductImage: [".product-grid-item__image"],
      belowProductName: [".product-grid-item__title"],
      belowProductPrice: [".product-grid-item__price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-grid-item__image"],
      belowProductImage: [".product-grid-item__image"],
      belowProductName: [".product-grid-item__title"],
      belowProductPrice: [".product-grid-item__price"],
    },
  },
  vantage: {
    products: {
      parent: [".product-index", ".product-page"],
      badge: [
        ".prod-image > a",
        ".product-media-container",
        ".product-main-images",
      ],
      belowProductImage: [
        ".prod-image",
        ".product-media-container",
        ".product-main-images",
      ],
      belowProductName: [
        ".product-title",
        ".product-blocks__block--title",
        "#product-description h1:nth-child(1)",
      ],
      belowProductPrice: [
        ".price",
        ".product-blocks__block--price",
        "#product-price",
      ],
    },
    home: {
      parent: [".product-index"],
      badge: [".prod-image > a"],
      belowProductImage: [".prod-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-index", ".boost-sd__product-item"],
      badge: [".prod-image > a", ".boost-sd__product-image-wrapper"],
      belowProductImage: [".prod-image", ".boost-sd__product-image-wrapper"],
      belowProductName: [".product-title", ".boost-sd__product-title"],
      belowProductPrice: [".price", ".boost-sd__product-price"],
      mutations: [".boost-sd__filter-block"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product-index", ".boost-sd__product-item"],
      badge: [".prod-image > a", ".boost-sd__product-image-wrapper"],
      belowProductImage: [".prod-image", ".boost-sd__product-image-wrapper"],
      belowProductName: [".product-title", ".boost-sd__product-title"],
      belowProductPrice: [".price", ".boost-sd__product-price"],
    },
  },
  spring: {
    products: {
      parent: [".products-content"],
      badge: [".slick-list"],
      belowProductImage: [".slick-list"],
      belowProductName: [".product-name-normal"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".product-grid-item"],
      badge: [".product_item--thumbnail"],
      belowProductImage: [".product_item--thumbnail"],
      belowProductName: [".product_item--title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product_item--thumbnail"],
      belowProductImage: [".product_item--thumbnail"],
      belowProductName: [".product_item--title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product_item--thumbnail"],
      belowProductImage: [".product_item--thumbnail"],
      belowProductName: [".product_item--title"],
      belowProductPrice: [".price"],
    },
  },
  impact: {
    products: {
      parent: [".product", "product-card"],
      badge: [
        ".product-gallery__media-list-wrapper",
        ".product-card__figure > a",
      ],
      belowProductImage: [
        ".product-gallery__media-list-wrapper",
        ".product-card__figure > a",
      ],
      belowProductName: [".product-info__title", ".product-card__title"],
      belowProductPrice: [".product-info__price", ".price-list"],
    },
    home: {
      parent: ["product-card"],
      badge: [".product-card__figure > a"],
      belowProductImage: [".product-card__figure > a"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".price-list"],
    },
    collections: {
      parent: ["product-card"],
      badge: [".product-card__figure > a"],
      belowProductImage: [".product-card__figure > a"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".price-list"],
      mutations: [
        "#main",
        "body[aco-shop-name='paninisport'] .shopify-section--main-collection",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: ["product-card"],
      badge: [".product-card__figure > a"],
      belowProductImage: [".product-card__figure > a"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".price-list"],
    },
  },
  "mr parker": {
    products: {
      parent: [".product__section", ".product-index"],
      badge: [".product-media-container", ".box-ratio"],
      belowProductImage: [".product-media-container", ".box-ratio"],
      belowProductName: [".product-title", ".prod-title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".product-index"],
      badge: ["a > .reveal"],
      belowProductImage: ["a > .reveal"],
      belowProductName: [".prod-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".spf-product-card", ".product-index"],
      badge: [".spf-product-card__image-wrapper ", "a > .reveal"],
      belowProductImage: [".spf-product-card__image-wrapper ", "a > .reveal"],
      belowProductName: [".spf-product-card__title", ".prod-title"],
      belowProductPrice: [".spf-product-card__price-wrapper", ".price"],
      mutations: [".collection__grid-loop"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
      extra: {
        afterAll: function fix() {
          if (acoShopName === "ellen-vandamme-make-up-style") {
            const productContainers = Array.from(
              document.querySelectorAll(".product-badge_aco")
            );
            for (const element of productContainers) {
              if (element.style.height === "auto") {
                element.style.height = element.style.width;
              }
            }
          }
        },
      },
    },
    search: {
      parent: [".spf-product-card"],
      badge: [".spf-product-card__image-wrapper "],
      belowProductImage: [".spf-product-card__image-wrapper "],
      belowProductName: [".spf-product-card__title"],
      belowProductPrice: [".spf-product-card__price-wrapper"],
      mutations: [".collection__grid-loop"],
    },
  },
  reformation: {
    products: {
      parent: [".product", ".product-card"],
      badge: [".product-single__media-image", ".product-featured-image > a"],
      belowProductImage: [
        ".product-single__media-image",
        ".product-featured-image > a",
      ],
      belowProductName: [".product-title", ".product-card-title"],
      belowProductPrice: [".product-price-container", ".price"],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-featured-image > a"],
      belowProductImage: [".product-featured-image > a"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-featured-image > a"],
      belowProductImage: [".product-featured-image > a"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
      mutations: ["pagination-theme"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-featured-image > a"],
      belowProductImage: [".product-featured-image > a"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
    },
  },
  foodie: {
    products: {
      parent: [".product-listing", ".product-top"],
      badge: [
        ".product-image .reveal",
        ".product-image-container .flickity-viewport",
      ],
      belowProductImage: [
        ".product-image .reveal",
        ".product-image-container .flickity-viewport",
      ],
      belowProductName: [".product-title", "#product-description .lh2"],
      belowProductPrice: [".product-price"],
    },
    home: {
      parent: [".product-listing"],
      badge: [".product-image .reveal"],
      belowProductImage: [".product-image .reveal"],
      belowProductName: [".product-title"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-listing"],
      badge: [".product-image .reveal"],
      belowProductImage: [".product-image .reveal"],
      belowProductName: [".product-title"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-listing"],
      badge: [".product-image .reveal"],
      belowProductImage: [".product-image .reveal"],
      belowProductName: [".product-title"],
      belowProductPrice: [".product-price"],
    },
  },
  halo: {
    home: {
      parent: [".product-item"],
      badge: [".card-media"],
      belowProductImage: [".card-media"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".card-media"],
      belowProductImage: [".card-media"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
    },
    products: {
      parent: [".productView", ".product-item"],
      badge: [".product-single__media", ".card-media"],
      belowProductImage: [".product-single__media", ".card-media"],
      belowProductName: [".productView-title", ".card-title"],
      belowProductPrice: [".productView-price", ".card-price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".card-media"],
      belowProductImage: [".card-media"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
    },
  },
  local: {
    home: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
    products: {
      parent: [".main-product", ".product-item"],
      badge: [".product-gallery-item", ".product-item__image"],
      belowProductImage: [
        ".product-gallery > .grid--slider",
        ".product-item__image",
      ],
      belowProductName: [".product__title", ".product-item__title"],
      belowProductPrice: [".product-price", ".product-item__price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
  },
  "prestige x elkfox": {
    products: {
      parent: [".ProductItem__Wrapper", ".FeaturedProduct ", ".Product "],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".Product__SlideItem--image",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
        ".Product__Slideshow .flickity-viewport",
        ".Product__SlideItem--image",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".ProductMeta .ProductMeta__Title ",
        ".ProductMeta .ProductMeta__Title",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
      ],
    },
    home: {
      parent: [".ProductItem__Wrapper", ".FeaturedProduct "],
      badge: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
      ],
      belowProductImage: [
        ".ProductItem__ImageWrapper .AspectRatio",
        ".FeaturedProduct__Gallery .AspectRatio",
      ],
      belowProductName: [
        ".ProductItem__Info .ProductItem__Title",
        ".ProductMeta .ProductMeta__Title ",
      ],
      belowProductPrice: [
        ".ProductItem__Info .ProductItem__PriceList",
        ".ProductMeta .ProductMeta__PriceList",
      ],
    },
    collections: {
      parent: [".ProductItem__Wrapper"],
      badge: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductImage: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
      extra: {
        afterAll: function fix() {
          const element = document.querySelector(
            ".flickity-viewport .ProductItem__Wrapper"
          );
          if (element) {
            const condition = element.classList.contains("aco_badge_adjusted");
            if (!condition) {
              const extraLabelHeight = Array.from(
                element
                  .closest(".ProductItem__Wrapper")
                  .querySelectorAll(".product-badge_aco_img.aco_label")
              )
                .map((val) => val.clientHeight)
                .reduce((partialSum, a) => partialSum + a, 0);
              element.classList.add("aco_badge_adjusted");
              document.querySelectorAll(".flickity-viewport")[0].style.height =
                `${element.clientHeight + extraLabelHeight}px`;
            }
          }
        },
      },
    },
    search: {
      parent: [".ProductItem__Wrapper "],
      badge: [".ProductItem__ImageWrapper .AspectRatio:last-of-type"],
      belowProductImage: [".ProductItem__ImageWrapper "],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
  },
  "buy now starter": {
    home: {
      parent: ["li.pb-5"],
      badge: [".product-tile .h-full .relative"],
      belowProductImage: [".product-tile .h-full .relative"],
      belowProductName: [".product-tile > h3"],
      belowProductPrice: [".product-tile .price"],
    },
    collections: {
      parent: ["li.pb-5"],
      badge: [".product-tile .h-full .relative"],
      belowProductImage: [".product-tile .h-full .relative"],
      belowProductName: [".product-tile > h3"],
      belowProductPrice: [".product-tile .price"],
    },
    products: {
      parent: ["li.pb-5", "section[data-product-section]"],
      badge: [".product-tile .h-full .relative", ".feature-media-list"],
      belowProductImage: [
        ".product-tile .h-full .relative",
        ".feature-media-list",
      ],
      belowProductName: [".product-tile > h3", ".product-block-title"],
      belowProductPrice: [".product-tile .price", ".product-block-price"],
    },
    search: {
      parent: ["li[bss-pl-media-id]"],
      badge: [".pb-5 .relative"],
      belowProductImage: [".pb-5 .relative"],
      belowProductName: [".mt-1 > h3"],
      belowProductPrice: [".mt-1 .price"],
    },
  },
  shapes: {
    products: {
      parent: ["#facets-results li", "section[data-product-section]"],
      badge: [
        ".product-tile .media-style-container",
        ".feature-media-list .media-style-container",
      ],
      belowProductImage: [
        ".product-tile .media-style-container",
        ".feature-media-list .media-style-container",
      ],
      belowProductName: [
        ".product-tile h3.text-base",
        ".product-block-container .product-block-title",
      ],
      belowProductPrice: [
        ".product-tile > p",
        ".product-block-container .product-block-price",
      ],
    },
    home: {
      parent: ["#facets-results li"],
      badge: [".product-tile .media-style-container"],
      belowProductImage: [".product-tile .media-style-container"],
      belowProductName: [".product-tile h3.text-base"],
      belowProductPrice: [".product-tile > p"],
    },
    collections: {
      parent: ["#facets-results li"],
      badge: [".product-tile .media-style-container"],
      belowProductImage: [".product-tile .media-style-container"],
      belowProductName: [".product-tile h3.text-base"],
      belowProductPrice: [".product-tile > p"],
    },
    search: {
      parent: ["#facets-results li"],
      badge: [".product-tile .media-style-container"],
      belowProductImage: [".product-tile .media-style-container"],
      belowProductName: [".product-tile h3.text-base"],
      belowProductPrice: [".product-tile > p"],
    },
  },
  "ap 2020": {
    home: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    products: {
      parent: [".product-card", ".product-single"],
      badge: [
        ".product-card__image",
        ".photos__item--main .product-single__photo",
      ],
      belowProductImage: [
        ".product-card__image",
        ".photos__item--main .product-single__photo",
      ],
      belowProductName: [".product-card__name", ".product-single__title"],
      belowProductPrice: [
        ".product-card__price",
        ".product-single__price-container",
      ],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
  },
  barberry: {
    products: {
      parent: [".product__item", ".product-single"],
      badge: [
        ".product__image-wrapper .product__image",
        ".product-single__photo-wrapper .product-single__photo",
      ],
      belowProductImage: [
        ".product__image-wrapper .product__image",
        ".product-single__photo-wrapper .product-single__photo",
      ],
      belowProductName: [
        ".product__details .product__title",
        ".product-single__content .product-single__title",
      ],
      belowProductPrice: [
        ".product__details .product__price",
        ".product-single__content .product-single__price",
      ],
    },
    home: {
      parent: [".product__item"],
      badge: [".product__image-wrapper .product__image"],
      belowProductImage: [".product__image-wrapper .product__image"],
      belowProductName: [".product__details .product__title"],
      belowProductPrice: [".product__details .product__price"],
    },
    collections: {
      parent: [".product__item"],
      badge: [".product__image-wrapper .product__image"],
      belowProductImage: [".product__image-wrapper .product__image"],
      belowProductName: [".product__details .product__title"],
      belowProductPrice: [".product__details .product__price"],
    },
    search: {
      parent: [".product__item"],
      badge: [".product__image-wrapper .product__image"],
      belowProductImage: [".product__image-wrapper .product__image"],
      belowProductName: [".product__details .product__title"],
      belowProductPrice: [".product__details .product__price"],
    },
  },
  "ap bedove": {
    home: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    products: {
      parent: [".product-single", ".product-card"],
      badge: [".product__photo-wrapper", ".product-card__image"],
      belowProductImage: [".product__photo-wrapper", ".product-card__image"],
      belowProductName: [".product-single__title", ".product-card__name"],
      belowProductPrice: [
        ".product-single__price-container",
        ".product-card__price",
      ],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image"],
      belowProductImage: [".product-card__image"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
  },
  ss_ecogreen: {
    home: {
      parent: [".product-item"],
      badge: [".product-image-container .grid-view-item__link"],
      belowProductImage: [".product-image-container .grid-view-item__link"],
      belowProductName: [".caption .title-vendor"],
      belowProductPrice: [".caption .price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-image-container .grid-view-item__link"],
      belowProductImage: [".product-image-container .grid-view-item__link"],
      belowProductName: [".caption .title-vendor"],
      belowProductPrice: [".caption .price"],
    },
    products: {
      parent: [".product-single", ".product-item", ".vtl-product-card"],
      badge: [
        ".product-photo-container .slick-list.draggable .thumb.slick-slide",
        ".thumb .fancybox",
        ".product-image-container .grid-view-item__link",
        ".vtl-product-card__image",
      ],
      belowProductImage: [
        ".product-photo-container .slick-list.draggable",
        ".thumb .fancybox",
        ".product-image-container .grid-view-item__link",
        ".vtl-product-card__image",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".caption .title-vendor",
        ".vtl-product-card__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product-price",
        ".caption .price",
        ".vtl-product-card__price",
      ],
      mutations: [".product-single", ".thumb", ".product"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: [".product-item"],
      badge: [".product-image-container .grid-view-item__link"],
      belowProductImage: [".product-image-container .grid-view-item__link"],
      belowProductName: [".caption .title-vendor"],
      belowProductPrice: [".caption .price"],
    },
  },
  publisher: {
    products: {
      parent: [".product-card-wrapper", ".product"],
      badge: [".card__media .media", ".product__media-item .product__media"],
      belowProductImage: [
        ".card__media .media",
        ".product__media-item .product__media",
      ],
      belowProductName: [
        ".card__content .card__heading",
        ".product__info-wrapper .product__title",
      ],
      belowProductPrice: [
        ".card__content .price",
        ".product__info-wrapper .price",
      ],
    },
    home: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
    },
  },
  wpbingo: {
    products: {
      parent: [".product", ".product-card"],
      badge: [
        ".product-single__media-item .product-media__wrapper ",
        ".product-card__image-wrapper .product-card__image-link",
      ],
      belowProductImage: [
        ".product-single__media-item",
        ".product-card__image-wrapper",
      ],
      belowProductName: [
        ".product-single__metas .product-single__title",
        ".product-card__name",
      ],
      belowProductPrice: [
        ".product-single__metas .price-container",
        ".product-card__price",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-wrapper .product-card__image-link"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-wrapper .product-card__image-link"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
      mutations: ["#JsCollectionProduct"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image-wrapper .product-card__image-link"],
      belowProductImage: [".product-card__image-wrapper"],
      belowProductName: [".product-card__name"],
      belowProductPrice: [".product-card__price"],
    },
  },
  "copy of copy of brandpa": {
    home: {
      parent: [".product-grid-item"],
      badge: [".product-container .reveal", ".product-container .image_group"],
      belowProductImage: [
        ".product-container .reveal",
        ".product-container .image_group",
      ],
      belowProductName: [".product-detail .grid-link__title"],
      belowProductPrice: [".product-detail .grid-link__meta"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-container .reveal", ".product-container .image_group"],
      belowProductImage: [
        ".product-container .reveal",
        ".product-container .image_group",
      ],
      belowProductName: [".product-detail .grid-link__title"],
      belowProductPrice: [".product-detail .grid-link__meta"],
    },
    products: {
      parent: [".product-page-row", ".product-grid-item"],
      badge: [
        ".product-item-wrap .swiper-slide .zoom-img-wrap",
        ".product-container .reveal",
        ".product-container .image_group",
      ],
      belowProductImage: [
        ".product-item-wrap .swiper-slide .zoom-img-wrap",
        ".product-container .reveal",
        ".product-container .image_group",
      ],
      belowProductName: [
        ".product-meta-block .product-title",
        ".product-detail .grid-link__title",
      ],
      belowProductPrice: [
        ".product-meta-block .product-price",
        ".product-detail .grid-link__meta",
      ],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-container .reveal", ".product-container .image_group"],
      belowProductImage: [
        ".product-container .reveal",
        ".product-container .image_group",
      ],
      belowProductName: [".product-detail .grid-link__title"],
      belowProductPrice: [".product-detail .grid-link__meta"],
    },
  },
  athens: {
    products: {
      parent: [".product", ".card-product"],
      badge: [
        ".product-media-wrapper .product-media-main .aspect-ratio",
        "#figure.card-media > a",
        ".card-media > a",
      ],
      belowProductImage: [
        ".product-media-wrapper .product-media-main .aspect-ratio",
        "#figure.card-media > a",
        ".card-media > a",
      ],
      belowProductName: [
        ".product-info-main .product-info-heading",
        ".card-info.card-heading",
      ],
      belowProductPrice: [".product-info-main .price", ".card-info .price"],
    },
    home: {
      parent: [".card-product"],
      badge: ["#figure.card-media > a", ".card-media > a"],
      belowProductImage: ["#figure.card-media > a", ".card-media > a"],
      belowProductName: [".card-info.card-heading"],
      belowProductPrice: [".card-info .price"],
    },
    collections: {
      parent: [".card-product"],
      badge: ["#figure.card-media > a", ".card-media > a"],
      belowProductImage: ["#figure.card-media > a", ".card-media > a"],
      belowProductName: [".card-info.card-heading"],
      belowProductPrice: [".card-info .price"],
    },
    search: {
      parent: [".card-product"],
      badge: ["#figure.card-media > a", ".card-media > a"],
      belowProductImage: ["#figure.card-media > a", ".card-media > a"],
      belowProductName: [".card-info.card-heading"],
      belowProductPrice: [".card-info .price"],
    },
  },
  caros: {
    products: {
      parent: [".product-card", ".page-product-detail"],
      badge: [
        ".product-image .product-link",
        ".product-single__photos .product-single__photos_container",
      ],
      belowProductImage: [
        ".product-image .product-link",
        ".product-single__photos .product-single__photos_container",
      ],
      belowProductName: [
        ".product-content .product-title",
        ".product_shop .product-title",
      ],
      belowProductPrice: [
        ".product-content .product-price",
        ".product_shop .product-price",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-image .product-link"],
      belowProductImage: [".product-image .product-link"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .product-price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-image .product-link"],
      belowProductImage: [".product-image .product-link"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .product-price"],
      mutations: ["#collection-page"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-image .product-link"],
      belowProductImage: [".product-image .product-link"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .product-price"],
    },
  },
  stiletto: {
    products: {
      parent: [".product", "product-item", ".product-item"],
      badge: [
        ".product__media-container .product__media-item",
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product__media-container .product__media-item",
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [
        ".product__details .product__title .product__price",
        ".product-item__meta .product-item__product-title",
      ],
      belowProductPrice: [
        ".product__details",
        ".product-item__meta .product-item__price",
      ],
    },
    home: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
    collections: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
      mutations: [
        ".collection__products",
        ".filter-bar-filters",
        ".filter-bar",
      ],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
  },
  casablanca: {
    products: {
      parent: [".product", ".product-card-wrapper"],
      badge: [".product__media-item .product__media", ".card__inner .media"],
      belowProductImage: [".product__media-list", ".card--media .card__inner"],
      belowProductName: [
        ".product__title",
        ".card__information .card__heading.h5",
      ],
      belowProductPrice: [".price", ".card__information .price"],
    },
    home: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
  },
  combine: {
    products: {
      parent: [".main-product", ".product-item"],
      badge: [".product-gallery-item .lazy-image", ".product-item__image"],
      belowProductImage: [
        ".product-gallery-item .lazy-image",
        ".product-item__image",
      ],
      belowProductName: [".product__title", ".product-item__title"],
      belowProductPrice: [".product-price", ".product-item__price"],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image"],
      belowProductImage: [".product-item__image"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item__price"],
    },
  },
  sunrise: {
    products: {
      parent: ["[data-section-type='product']", ".prod-th"],
      badge: [
        ".product-images .product-single__media-wrapper",
        ".media.media--square",
        ".media",
      ],
      belowProductImage: [
        ".product-images .product-single__media-wrapper",
        ".media.media--square",
        ".media",
      ],
      belowProductName: [".page-title", ".title"],
      belowProductPrice: [".product-price-wrap", ".price"],
    },
    home: {
      parent: [".prod-th"],
      badge: [".media.media--square", ".media"],
      belowProductImage: [".media.media--square", ".media"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".prod-th"],
      badge: [".media.media--square", ".media"],
      belowProductImage: [".media.media--square", ".media"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
      mutations: [".collection-main"],
    },
    search: {
      parent: [".prod-th"],
      badge: [".media.media--square", ".media"],
      belowProductImage: [".media.media--square", ".media"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
  },
  fetch: {
    products: {
      parent: [".product-grid__container", ".grid-item"],
      badge: [
        ".product__photos .product-image-main .image-wrap",
        ".grid-product__image-wrap",
      ],
      belowProductImage: [
        ".product__photos .flickity-viewport",
        ".grid-product__image-wrap",
      ],
      belowProductName: [".product-single__title", ".grid-product__title"],
      belowProductPrice: [".product-block--price", ".grid-product__price"],
    },
    home: {
      parent: [".grid-item"],
      badge: [".grid-product__image-wrap"],
      belowProductImage: [".grid-product__image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    collections: {
      parent: [".grid-item"],
      badge: [".grid-product__image-wrap"],
      belowProductImage: [".grid-product__image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid-item"],
      badge: [".grid-product__image-wrap"],
      belowProductImage: [".grid-product__image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  spotlight: {
    products: {
      parent: [".product", ".grid__item"],
      badge: [".product__media", ".card__media"],
      belowProductImage: [".product__media", ".card__inner"],
      belowProductName: [".product__title", ".card__heading"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__heading"],
      belowProductPrice: [".price"],
    },
  },
  pursuit: {
    products: {
      parent: [".product-single"],
      badge: [".flickity-viewport"],
      belowProductImage: [".flickity-viewport"],
      belowProductName: [".product-single__title"],
      belowProductPrice: [".product__price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-item--media"],
      belowProductName: [".item__link-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-item--media"],
      belowProductName: [".item__link-title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".product-card__image-wrapper"],
      belowProductImage: [".product-item--media"],
      belowProductName: [".item__link-title"],
      belowProductPrice: [".price"],
    },
  },
  "booster-6.1.0": {
    products: {
      parent: [".product__row", ".card--holder"],
      badge: [
        ".gallery__default .slider--product__holder .slide--product",
        ".card__img--container .card__img",
      ],
      belowProductImage: [
        ".gallery__default .slider--product__holder .slide--product",
        ".card__img--container .card__img",
      ],
      belowProductName: [
        ".product__page--info .product__title",
        ".card__info .card__title",
      ],
      belowProductPrice: [
        ".product__page--info .product__price--holder",
        ".card__info .card__price",
      ],
    },
    home: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
    collections: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
    search: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
  },
  "vinova salehup": {
    products: {
      parent: [".product-single", ".item-product"],
      badge: [".proFeaturedImage .item > a", ".thumbnail-container > a"],
      belowProductImage: [
        ".proFeaturedImage .item > a",
        ".thumbnail-container > a",
      ],
      belowProductName: [
        ".info_contents .product-single__title",
        ".product__info .product__title",
      ],
      belowProductPrice: [
        ".info_contents .product-single__price",
        ".product__info .product__price",
      ],
    },
    home: {
      parent: [".item-product"],
      badge: [".thumbnail-container > a"],
      belowProductImage: [".thumbnail-container > a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
    collections: {
      parent: [".item-product"],
      badge: [".thumbnail-container > a"],
      belowProductImage: [".thumbnail-container > a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
    search: {
      parent: [".item-product"],
      badge: [".thumbnail-container > a"],
      belowProductImage: [".thumbnail-container > a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
  },
  "plain jane": {
    products: {
      parent: [".columns-3.w-row", ".product-index"],
      badge: [".w-dyn-item", "a > .reveal"],
      belowProductImage: [".column-3 w-col", "a > .reveal"],
      belowProductName: [".product-title", ".prod-title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".collection-item"],
      badge: ["a.link-block-2"],
      belowProductImage: ["a.link-block-2"],
      belowProductName: [".prouduct-title"],
    },
    collections: {
      parent: [".collection-item"],
      badge: ["a.link-block-2"],
      belowProductImage: ["a.link-block-2"],
      belowProductName: [".prouduct-title"],
    },
    search: {
      parent: [".collection-item"],
      badge: ["a.link-block-2"],
      belowProductImage: ["a.link-block-2"],
      belowProductName: [".prouduct-title"],
    },
  },
  "black lemon luxreaders": {
    products: {
      parent: [
        ".product-detail",
        ".owl-item",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".product-detail .slick-slide .show-gallery",
        ".image-cont .product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductImage: [
        ".product-detail .slick-slide .show-gallery",
        ".image-cont .product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".detail .title",
        ".product-info .product-block__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".detail .price-area",
        ".product-info .price",
        ".boost-pfs-filter-product-item-price",
      ],
    },
    home: {
      parent: [".owl-item", ".boost-pfs-filter-product-item"],
      badge: [
        ".image-cont .product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductImage: [
        ".image-cont .product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-info .product-block__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".boost-pfs-filter-product-item-price",
      ],
    },
    collections: {
      parent: [".owl-item", ".boost-pfs-filter-product-item"],
      badge: [".product-link", ".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [
        ".product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-info .product-block__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [".boost-pfs-filter-btn-load-previous-page-wrapper"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: [".owl-item", ".boost-pfs-filter-product-item"],
      badge: [".product-link", ".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [
        ".product-link",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-info .product-block__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".boost-pfs-filter-product-item-price",
      ],
    },
  },
  "jeweltv theme": {
    products: {
      parent: [".product", ".grid__item"],
      badge: [".product__media-item .product__media", ".card--product .media"],
      belowProductImage: [
        ".product__media-item .product__media",
        ".card--product .media",
      ],
      belowProductName: [
        ".product__title",
        ".card-information .card-information__text",
      ],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card--product .media"],
      belowProductImage: [".card--product .media"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card--product .media"],
      belowProductImage: [".card--product .media"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card--product .media"],
      belowProductImage: [".card--product .media"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".price"],
    },
  },
  "prominence - os 2.0": {
    products: {
      parent: [".sf-prod__container", ".sf-prod__block"],
      badge: [
        ".sf-prod-media__wrapper .swiper-container",
        ".sf__image-box .items-center > a",
      ],
      belowProductImage: [
        ".sf-prod-media__wrapper .swiper-container",
        ".sf__image-box",
      ],
      belowProductName: [".main-product__block-title", ".sf__pcard-name"],
      belowProductPrice: [".main-product__block-price", ".sf__pcard-price"],
    },
    home: {
      parent: [".sf-prod__container", ".sf-prod__block"],
      badge: [
        ".sf-prod-media__wrapper .swiper-container",
        ".sf__image-box .items-center > a",
      ],
      belowProductImage: [
        ".sf-prod-media__wrapper .swiper-container",
        ".sf__image-box",
      ],
      belowProductName: [".main-product__block-title", ".sf__pcard-name"],
      belowProductPrice: [".main-product__block-price", ".sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box .items-center > a"],
      belowProductImage: [".sf__image-box"],
      belowProductName: [".sf__pcard-name"],
      belowProductPrice: [".sf__pcard-price"],
    },
    search: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box .items-center > a"],
      belowProductImage: [".sf__image-box"],
      belowProductName: [".sf__pcard-name"],
      belowProductPrice: [".sf__pcard-price"],
    },
  },
  "overboard uk": {
    home: {
      parent: [".product", ".item"],
      badge: [".owl-item .item", ".product-image-wrap .image"],
      belowProductImage: [
        ".product-photo-container",
        ".product-image-wrap .image",
      ],
      belowProductName: [
        ".product-caption .product-name > a",
        ".product-details .product-name",
      ],
      belowProductPrice: [
        ".product-caption .product-price",
        ".product-details .product-price",
      ],
    },
    collections: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-caption .product-name > a"],
      belowProductPrice: [".product-caption .product-price"],
    },
    products: {
      parent: [".product", ".item"],
      badge: [".owl-item .item", ".product-image-wrap .image"],
      belowProductImage: [
        ".product-photo-container",
        ".product-image-wrap .image",
      ],
      belowProductName: [
        ".product-caption .product-name > a",
        ".product-details .product-name",
      ],
      belowProductPrice: [
        ".product-caption .product-price",
        ".product-details .product-price",
      ],
    },
    search: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-caption .product-name > a"],
      belowProductPrice: [".product-caption .product-price"],
    },
  },
  "beast-v-1-0-2": {
    products: {
      parent: [".product-details-area", ".ht-product"],
      badge: [".zoompro-wrap", ".ht-product-image-wrap .ht-product-image"],
      belowProductImage: [".zoompro-wrap", ".ht-product-image-wrap"],
      belowProductName: ["#popup_cart_title", ".ht-product-title"],
      belowProductPrice: [".product-details-price", ".ht-product-price "],
    },
    home: {
      parent: [".ht-product"],
      badge: [".ht-product-image-wrap .ht-product-image"],
      belowProductImage: [".ht-product-image-wrap"],
      belowProductName: [".ht-product-title"],
      belowProductPrice: [".ht-product-price "],
    },
    collections: {
      parent: [".ht-product"],
      badge: [".ht-product-image-wrap .ht-product-image"],
      belowProductImage: [".ht-product-image-wrap"],
      belowProductName: [".ht-product-title"],
      belowProductPrice: [".ht-product-price "],
    },
    search: {
      parent: [".ht-product"],
      badge: [".ht-product-image-wrap .ht-product-image"],
      belowProductImage: [".ht-product-image-wrap"],
      belowProductName: [".ht-product-title"],
      belowProductPrice: [".ht-product-price "],
    },
  },
  "dawn (modified by rolv)": {
    products: {
      parent: [".product", ".product-card-wrapper"],
      badge: [".pwzrswiper-container .pwzrswiper-slide", ".card__media .media"],
      belowProductImage: [".pwzrswiper-container", ".card__media .media"],
      belowProductName: [
        ".product__info-wrapper .product__title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [
        ".product__info-wrapper .price",
        ".card__information .price",
      ],
    },
    home: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
  },
  yuva: {
    products: {
      parent: [".yv_product_content_section", ".yv-product-card"],
      badge: [
        ".yv-product-gallery-items .product-slider-item-wrapper",
        ".yv-product-img",
      ],
      belowProductImage: [
        ".yv-product-gallery-items .product-slider-item-wrapper",
        ".yv-product-img",
      ],
      belowProductName: [
        ".yv-main-product-detail .yv-product-detail-title",
        ".yv-product-information .yv-product-title",
      ],
      belowProductPrice: [
        ".yv-main-product-detail .yv-prizebox",
        ".yv-product-information .yv-prizebox",
      ],
    },
    home: {
      parent: [".yv-product-card"],
      badge: [".yv-product-img"],
      belowProductImage: [".yv-product-img"],
      belowProductName: [".yv-product-information .yv-product-title"],
      belowProductPrice: [".yv-product-information .yv-prizebox"],
    },
    collections: {
      parent: [".yv-product-card"],
      badge: [".yv-product-img"],
      belowProductImage: [".yv-product-img"],
      belowProductName: [".yv-product-information .yv-product-title"],
      belowProductPrice: [".yv-product-information .yv-prizebox"],
    },
    search: {
      parent: [".yv-product-card"],
      badge: [".yv-product-img"],
      belowProductImage: [".yv-product-img"],
      belowProductName: [".yv-product-information .yv-product-title"],
      belowProductPrice: [".yv-product-information .yv-prizebox"],
    },
  },
  numin: {
    products: {
      parent: [".product-single"],
      badge: [".slick-list"],
      belowProductImage: [".slick-list"],
      belowProductName: [".product-single__title"],
      belowProductPrice: [".product-single__price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link"],
      belowProductImage: [".grid-view-item__link"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link"],
      belowProductImage: [".grid-view-item__link"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link"],
      belowProductImage: [".grid-view-item__link"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
  },
  avern: {
    products: {
      parent: [".container"],
      badge: [".thumbnail.pl-parent .mfp-image"],
      belowProductImage: [".thumbnail.pl-parent .mfp-image"],
      belowProductName: [".col-description > h1"],
      belowProductPrice: [".col-description .mt-3:nth-last-child(1)"],
    },
    home: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
    },
    collections: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
    },
    search: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
    },
  },
  "idana debut": {
    home: {
      parent: [".list-collection li[data-product-id]"],
      badge: [".hover_img"],
      belowProductImage: [".hover_img"],
      belowProductName: [".list-color"],
      belowProductPrice: [".price-span"],
    },
    collections: {
      parent: [".list-collection li[data-product-id]"],
      badge: [".hover_img"],
      belowProductImage: [".hover_img"],
      belowProductName: [".list-color"],
      belowProductPrice: [".price-span"],
      mutations: ["li[data-product-id]", "html"],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [".module-product", ".list-collection li[data-product-id]"],
      badge: [".owl-stage-outer .owl-item", ".hover_img"],
      belowProductImage: [".owl-stage-outer", ".hover_img"],
      belowProductName: [".mobile-hide", ".list-color"],
      belowProductPrice: [".price", ".price-span"],
    },
    search: {
      parent: [".list-collection li[data-product-id]"],
      badge: [".hover_img"],
      belowProductImage: [".hover_img"],
      belowProductName: [".list-color"],
      belowProductPrice: [".price-span"],
    },
  },
  shoesf: {
    home: {
      parent: [".product", ".banner-item"],
      badge: [".img-product", "a.box-img"],
      belowProductImage: [".img-product", "a.box-img"],
      belowProductName: [".info-product .title-product", ".title-banner"],
      belowProductPrice: [".info-product .price-product"],
    },
    collections: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".info-product .title-product"],
      belowProductPrice: [".info-product .price-product"],
      mutations: [".loadmore"],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [".content-page-detail", ".product"],
      badge: [".img_thumb .slick-list.draggable", ".img-product"],
      belowProductImage: [".img_thumb .slick-list.draggable", ".img-product"],
      belowProductName: [
        ".detail-info .product-title",
        ".info-product .title-product",
      ],
      belowProductPrice: [
        ".detail-info .product-price",
        ".info-product .price-product",
      ],
    },
    search: {
      parent: [".product"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".info-product .title-product"],
      belowProductPrice: [".info-product .price-product"],
    },
  },
  ttcosmetic: {
    products: {
      parent: [".content-page-detail", ".product-item-v9"],
      badge: [".img_thumb .slick-list.draggable", ".img-product"],
      belowProductImage: [".gallery-control", ".img-product"],
      belowProductName: [".product-title", ".title-product"],
      belowProductPrice: [".product-price", ".price-product"],
      mutations: [".related-product", ".nav-tabs"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [".product-item-v9"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
      mutations: [".trans-product"],
      mutationConfig: { childList: true, subtree: true },
    },
    collections: {
      parent: [".product-item-v9"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
      mutations: [".trans-product"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product-item-v9"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
      mutations: [".trans-product"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  chord: {
    home: {
      parent: [".ProductCard"],
      badge: [".ProductCard__ImageWrapper"],
      belowProductImage: [".ProductCard__ImageWrapper"],
      belowProductName: [".ProductCard__Title"],
      belowProductPrice: [".Product__PriceList"],
    },
    collections: {
      parent: [".ProductCard", ".usf-sr-product"],
      badge: [".ProductCard__ImageWrapper", ".usf-img-wrapper"],
      belowProductImage: [".ProductCard__ImageWrapper", ".usf-img-wrapper"],
      belowProductName: [".ProductCard__Title", ".usf-title"],
      belowProductPrice: [".Product__PriceList", ".usf-price-wrapper"],
      mutations: [".Grid__Item", ".usf-results"],
    },
    products: {
      parent: [".Product", ".ProductCard", ".usf-sr-product"],
      badge: [
        ".ProductGallery .Product__MediaWrapper",
        ".ProductCard__ImageWrapper",
        ".usf-img-wrapper",
      ],
      belowProductImage: [
        ".ProductGallery .Product__MediaWrapper",
        ".ProductCard__ImageWrapper",
        ".usf-img-wrapper",
      ],
      belowProductName: [
        ".Product__Title",
        ".ProductCard__Title",
        ".usf-title",
      ],
      belowProductPrice: [
        ".Product__PriceList",
        ".Product__PriceList",
        ".usf-price-wrapper",
      ],
    },
    search: {
      parent: [".ProductCard", ".usf-sr-product"],
      badge: [".ProductCard__ImageWrapper", ".usf-img-wrapper"],
      belowProductImage: [".ProductCard__ImageWrapper", ".usf-img-wrapper"],
      belowProductName: [".ProductCard__Title", ".usf-title"],
      belowProductPrice: [".Product__PriceList", ".usf-price-wrapper"],
      mutations: [".Grid__Item", ".usf-results"],
    },
  },
  smartbook: {
    home: {
      parent: [".product-thumb"],
      badge: [".carousel-inner", ".images-container .image > a"],
      belowProductImage: [".carousel-inner", ".images-container .image > a"],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-box"],
      mutations: [".owl-stage"],
    },
    collections: {
      parent: [".product-thumb"],
      badge: [".carousel-inner", ".images-container .image > a"],
      belowProductImage: [".carousel-inner", ".images-container .image > a"],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-box"],
      mutations: [".product-list"],
    },
    products: {
      parent: ["#content > .row", ".product-thumb"],
      badge: [
        ".product-zoom-image .main-image",
        ".images-container .image > a",
      ],
      belowProductImage: [
        ".product-zoom-image .main-image",
        ".images-container .image > a",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-box"],
    },
    search: {
      parent: [".product-thumb"],
      badge: [".carousel-inner", ".images-container .image > a"],
      belowProductImage: [".carousel-inner", ".images-container .image > a"],
      belowProductName: [".product-name"],
      belowProductPrice: [".price-box"],
    },
  },
  sahara: {
    home: {
      parent: [".card-product"],
      badge: ["a.media"],
      belowProductImage: ["a.media"],
      belowProductName: [".card-product__title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card-product"],
      badge: ["a.media"],
      belowProductImage: ["a.media"],
      belowProductName: [".card-product__title"],
      belowProductPrice: [".price"],
    },
    products: {
      parent: [".product__grid", ".card-product"],
      badge: [
        ".swiper-wrapper .swiper-slide .media:not(.media.media--thumb)",
        "a.media",
      ],
      belowProductImage: [".swiper-wrapper .swiper-slide .media", "a.media"],
      belowProductName: [".product__title", ".card-product__title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".card-product"],
      badge: ["a.media"],
      belowProductImage: ["a.media"],
      belowProductName: [".card-product__title"],
      belowProductPrice: [".price"],
    },
  },
  "mi-home by rolv": {
    products: {
      parent: [".product", ".product-card-wrapper"],
      badge: [".pwzrswiper-container .pwzrswiper-slide", ".card__media .media"],
      belowProductImage: [".pwzrswiper-container", ".card__media .media"],
      belowProductName: [
        ".product__info-wrapper .product__title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [
        ".product__info-wrapper .price",
        ".card__information .price",
      ],
    },
    home: {
      parent: [".product-card-wrapper", ".mi-flash-sale"],
      badge: [".card__media .media", ".mi-flash-sale-image"],
      belowProductImage: [".card__media .media", ".mi-flash-sale-image"],
      belowProductName: [
        ".card__information .card__heading",
        ".mi-flash-sale-title",
      ],
      belowProductPrice: [".card__information .price", ".mi-flash-sale-price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
  },
  vegist: {
    home: {
      parent: [".single-product-wrap"],
      badge: [".product-image .pro-img"],
      belowProductImage: [".product-image .pro-img"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .price-box"],
    },
    collections: {
      parent: [".single-product-wrap"],
      badge: [".product-image .pro-img"],
      belowProductImage: [".product-image .pro-img"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .price-box"],
    },
    products: {
      parent: [".product-details", ".single-product-wrap"],
      badge: [".product_detail_img .product-img", ".product-image .pro-img"],
      belowProductImage: [
        ".product_detail_img .product-img",
        ".product-image .pro-img",
      ],
      belowProductName: [".product-title", ".product-content .product-title"],
      belowProductPrice: [".pro-price-label", ".product-content .price-box"],
    },
    search: {
      parent: [".single-product-wrap"],
      badge: [".product-image .pro-img"],
      belowProductImage: [".product-image .pro-img"],
      belowProductName: [".product-content .product-title"],
      belowProductPrice: [".product-content .price-box"],
    },
  },
  champion: {
    products: {
      parent: [".main-product", "loess-product-card"],
      badge: [".main-product__media-gallery__inner", "a.card__image"],
      belowProductImage: [
        ".main-product__media-gallery__inner",
        "a.card__image",
      ],
      belowProductName: [".main-product__blocks h1", ".card__title"],
      belowProductPrice: [".price"],
      mutations: [".main-product__block-price"],
    },
    home: {
      parent: ["loess-product-card"],
      badge: ["a.card__image"],
      belowProductImage: ["a.card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: ["loess-product-card"],
      badge: ["a.card__image"],
      belowProductImage: ["a.card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: ["loess-product-card"],
      badge: ["a.card__image"],
      belowProductImage: ["a.card__image"],
      belowProductName: [".card__title"],
      belowProductPrice: [".price"],
    },
  },
  vision: {
    products: {
      parent: [".product-grid-container", ".product-card"],
      badge: [
        ".product-image-container .product-images",
        "a.product-featured-image-link",
      ],
      belowProductImage: [
        ".product-image-container .product-images",
        "a.product-featured-image-link",
      ],
      belowProductName: [".product-title", ".product-card-title"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".product-card"],
      badge: ["a.product-featured-image-link"],
      belowProductImage: ["a.product-featured-image-link"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-card"],
      badge: ["a.product-featured-image-link"],
      belowProductImage: ["a.product-featured-image-link"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-card"],
      badge: ["a.product-featured-image-link"],
      belowProductImage: ["a.product-featured-image-link"],
      belowProductName: [".product-card-title"],
      belowProductPrice: [".price"],
    },
  },
  creator: {
    products: {
      parent: [".product", ".product-card"],
      badge: [".swiper-wrapper", ".image-link"],
      belowProductImage: [".swiper-wrapper", ".image-link"],
      belowProductName: [".product__text", ".product-card__title"],
      belowProductPrice: [".product-price", ".product-card__price"],
      mutations: [".container"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [".product-card"],
      badge: [".image-link"],
      belowProductImage: [".image-link"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".image-link"],
      belowProductImage: [".image-link"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__price"],
      mutations: [".product-grid-container", "#scentbutler-pagination"],
    },
    search: {
      parent: [".product-card"],
      badge: [".image-link"],
      belowProductImage: [".image-link"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__price"],
    },
  },
  "lezada os 2.0": {
    products: {
      parent: [".shop-product", ".single-product"],
      badge: [".product-photo-container", ".single-product__image"],
      belowProductImage: [".product-photo-container", ".single-product__image"],
      belowProductName: [".shop-product__title", ".title"],
      belowProductPrice: [".shop-product__price", ".price"],
    },
    home: {
      parent: [".single-product"],
      badge: [".single-product__image"],
      belowProductImage: [".single-product__image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".single-product"],
      badge: [".single-product__image"],
      belowProductImage: [".single-product__image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".single-product"],
      badge: [".single-product__image"],
      belowProductImage: [".single-product__image"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
  },
  sportuo: {
    products: {
      parent: [".content-page-detail", ".product-item-v1"],
      badge: [".img_thumb", ".img-product"],
      belowProductImage: [".img_thumb", ".img-product"],
      belowProductName: [".product-title", ".title-product"],
      belowProductPrice: [".product-price ", ".price-product"],
    },
    home: {
      parent: [".product-item-v1"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    collections: {
      parent: [".product-item-v1"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    search: {
      parent: [".product-item-v1"],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
  },
  shopify: {
    products: {
      parent: [".product-block-list", ".product-item"],
      badge: [".product-gallery__carousel", ".product-item__image-wrapper"],
      belowProductImage: [
        ".product-gallery__carousel",
        ".product-item__image-wrapper",
      ],
      belowProductName: [".product-meta__title", ".product-item__title"],
      belowProductPrice: [".price-list", ".price"],
      mutations: [".price-list"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".price"],
      mutations: [".collection", ".collection__dynamic-part"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".price"],
    },
  },
  "obus: translations updated": {
    products: {
      parent: [".product", ".item"],
      badge: [
        ".product-photo-container .owl-stage-outer",
        ".product-image-wrap .image",
      ],
      belowProductImage: [
        ".product-photo-container .owl-stage-outer",
        ".product-image-wrap .image",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    home: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
  },
  "home 03": {
    home: {
      parent: [".product-card"],
      badge: [".featured-product_wrapper .product-card_image"],
      belowProductImage: [".featured-product_wrapper .product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".featured-product_wrapper .product-card_image"],
      belowProductImage: [".featured-product_wrapper .product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    products: {
      parent: [".product_details", ".product-card"],
      badge: [
        ".product-media_main .tns-outer",
        ".featured-product_wrapper .product-card_image",
      ],
      belowProductImage: [
        ".product-media_main .tns-outer",
        ".featured-product_wrapper .product-card_image",
      ],
      belowProductName: [".product_name", ".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".featured-product_wrapper .product-card_image"],
      belowProductImage: [".featured-product_wrapper .product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
  },
  polive: {
    products: {
      parent: [".content-page-detail", ".product "],
      badge: [".img_thumb .slick-list.draggable", ".img-product"],
      belowProductImage: [".img_thumb", ".img-product"],
      belowProductName: [".product-title ", ".title-product"],
      belowProductPrice: [".product-price ", ".price-product"],
      mutations: [".img_thumb "],
    },
    home: {
      parent: [".product "],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
    collections: {
      parent: [".product "],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
      mutations: ["#Huratips-Pagination"],
    },
    search: {
      parent: [".product "],
      badge: [".img-product"],
      belowProductImage: [".img-product"],
      belowProductName: [".title-product"],
      belowProductPrice: [".price-product"],
    },
  },
  "be yours": {
    home: {
      parent: [".product", ".card-wrapper"],
      badge: [".product__media-list", ".card__media.media-wrapper"],
      belowProductImage: [".product__media-list", ".card__media.media-wrapper"],
      belowProductName: [
        ".product__title",
        ".card-information .card-information__text",
      ],
      belowProductPrice: [
        ".product__info-wrapper .price",
        ".card-information .price",
      ],
      extra: {
        afterAll: function fix() {
          if (acoShopName !== "casa-de-fieras") return;
          const productContainers = Array.from(
            document.querySelectorAll(".card-wrapper")
          );
          for (const container of productContainers) {
            const labelExist = Array.from(
              container.querySelectorAll(".belowProductName")
            );
            const wrap = document.createElement("div");
            for (const element of labelExist) {
              if (container.querySelector(".label-wrap")) {
                container.querySelector(".label-wrap").appendChild(element);
              } else {
                element.parentNode.insertBefore(wrap, element);
                wrap.append(element, element.nextElementSibling);
                wrap.style.display = "flex";
                wrap.style.flexWrap = "wrap";
                wrap.className = "label-wrap";
              }
            }
          }
        },
      },
    },
    collections: {
      parent: [".card-wrapper"],
      badge: [".card__media.media-wrapper"],
      belowProductImage: [".card__media.media-wrapper"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".card-information .price"],
      mutations: ["#ProductGridContainer", ".facet-filters"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          if (acoShopName !== "casa-de-fieras") return;
          const productContainers = Array.from(
            document.querySelectorAll(".card-wrapper")
          );
          for (const container of productContainers) {
            const labelExist = Array.from(
              container.querySelectorAll(".belowProductName")
            );
            const wrap = document.createElement("div");
            for (const element of labelExist) {
              if (container.querySelector(".label-wrap")) {
                container.querySelector(".label-wrap").appendChild(element);
              } else {
                element.parentNode.insertBefore(wrap, element);
                wrap.append(element, element.nextElementSibling);
                wrap.style.display = "flex";
                wrap.style.flexWrap = "wrap";
                wrap.className = "label-wrap";
              }
            }
          }
        },
      },
    },
    products: {
      parent: [".product", ".card-wrapper"],
      badge: [".product__media-list", ".card__media.media-wrapper"],
      belowProductImage: [".product__media-list", ".card__media.media-wrapper"],
      belowProductName: [
        ".product__title",
        ".card-information .card-information__text",
      ],
      belowProductPrice: [
        ".product__info-wrapper .price",
        ".card-information .price",
      ],
      mutations: [
        ".product-recommendations",
        ".product__info-wrapper .no-js-hidden",
      ],
      extra: {
        afterAll: function fix() {
          if (acoShopName !== "casa-de-fieras") return;
          const productContainers = Array.from(
            document.querySelectorAll(".card-wrapper")
          );
          const mainProduct = Array.from(document.querySelectorAll(".product"));
          productContainers.push(...mainProduct);
          for (const container of productContainers) {
            const labelExist = Array.from(
              container.querySelectorAll(".belowProductName")
            );
            const wrap = document.createElement("div");
            for (const element of labelExist) {
              if (container.querySelector(".label-wrap")) {
                container.querySelector(".label-wrap").appendChild(element);
              } else {
                element.parentNode.insertBefore(wrap, element);
                wrap.append(element, element.nextElementSibling);
                wrap.style.display = "flex";
                wrap.style.flexWrap = "wrap";
                wrap.className = "label-wrap";
              }
            }
          }
        },
      },
    },
    search: {
      parent: [".card-wrapper"],
      badge: [".card__media.media-wrapper"],
      belowProductImage: [".card__media.media-wrapper"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".card-information .price"],
      extra: {
        afterAll: function fix() {
          if (acoShopName !== "casa-de-fieras") return;
          const productContainers = Array.from(
            document.querySelectorAll(".card-wrapper")
          );
          for (const container of productContainers) {
            const labelExist = Array.from(
              container.querySelectorAll(".belowProductName")
            );
            const wrap = document.createElement("div");
            for (const element of labelExist) {
              if (container.querySelector(".label-wrap")) {
                container.querySelector(".label-wrap").appendChild(element);
              } else {
                element.parentNode.insertBefore(wrap, element);
                wrap.append(element, element.nextElementSibling);
                wrap.style.display = "flex";
                wrap.style.flexWrap = "wrap";
                wrap.className = "label-wrap";
              }
            }
          }
        },
      },
    },
  },
  "agência aurora®": {
    products: {
      parent: [".product-block-list__wrapper", ".product-item"],
      badge: [
        ".product-gallery__carousel-wrapper .product-gallery__carousel",
        ".product-item__image-wrapper .aspect-ratio",
      ],
      belowProductImage: [
        ".product-gallery__carousel-wrapper .product-gallery__carousel",
        ".product-item__image-wrapper .aspect-ratio",
      ],
      belowProductName: [
        ".product-meta__title",
        ".product-item__info .product-item__title",
      ],
      belowProductPrice: [
        ".price-list",
        ".product-item__info .product-item__price-list",
      ],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper .aspect-ratio"],
      belowProductImage: [".product-item__image-wrapper .aspect-ratio"],
      belowProductName: [".product-item__info .product-item__title"],
      belowProductPrice: [".product-item__info .product-item__price-list"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper .aspect-ratio"],
      belowProductImage: [".product-item__image-wrapper .aspect-ratio"],
      belowProductName: [".product-item__info .product-item__title"],
      belowProductPrice: [".product-item__info .product-item__price-list"],
      mutations: [".collection__dynamic-part"],
    },
    search: {
      badge: [".product-item__image-wrapper .aspect-ratio"],
      belowProductImage: [".product-item__image-wrapper .aspect-ratio"],
      belowProductName: [".product-item__info .product-item__title"],
      belowProductPrice: [".product-item__info .product-item__price-list"],
    },
  },
  minion: {
    products: {
      parent: [".product-page-section", ".product-card"],
      badge: [".product__media-list", ".product-card__image-holder"],
      belowProductImage: [
        ".product__media-list",
        ".product-card__image-holder",
      ],
      belowProductName: [".product__title", ".product-card__heading"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-holder"],
      belowProductImage: [".product-card__image-holder"],
      belowProductName: [".product-card__heading"],
      belowProductPrice: [".price"],
      mutations: ["#ProductGridContainer"],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-holder"],
      belowProductImage: [".product-card__image-holder"],
      belowProductName: [".product-card__heading"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card__image-holder"],
      belowProductImage: [".product-card__image-holder"],
      belowProductName: [".product-card__heading"],
      belowProductPrice: [".price"],
    },
  },
  "bt vodoma active style 1": {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [".product-single__photos .pg__mains", "a.item__image"],
      belowProductImage: [
        ".product-single__photos .pg__mains",
        "a.item__image",
      ],
      belowProductName: [".product-single__title", ".item__name"],
      belowProductPrice: [".product-price"],
    },
    home: {
      parent: [".grid__item"],
      badge: ["a.item__image"],
      belowProductImage: ["a.item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: ["a.item__image"],
      belowProductImage: ["a.item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
      mutations: [".collection__products"],
    },
    search: {
      parent: [".grid__item"],
      badge: ["a.item__image"],
      belowProductImage: ["a.item__image"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
  },
  custom: {
    products: {
      parent: [".product-section", ".grid-product__content"],
      badge: [".product-image-main .image-wrap", ".grid-product__image-mask"],
      belowProductImage: [
        ".flickity-enabled.is-draggable",
        ".grid-product__image-mask",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-product__meta .grid-product__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product__price",
        ".grid-product__meta .grid-product__price",
      ],
    },
    home: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
    collections: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
    search: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
  },
  bnkr: {
    products: {
      parent: [".product", ".grid__item"],
      badge: [
        ".product__main-image .product__media-list",
        ".card__media .media",
      ],
      belowProductImage: [
        ".product__main-image .product__media-list",
        ".card__media .media",
      ],
      belowProductName: [".product__title", ".card__content .card__heading"],
      belowProductPrice: [".price", ".card__content .price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
      mutations: ["#ProductGridContainer"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__media .media"],
      belowProductImage: [".card__media .media"],
      belowProductName: [".card__content .card__heading"],
      belowProductPrice: [".card__content .price"],
    },
  },
  "odour-v1-0-1": {
    home: {
      parent: [".ht-product"],
      badge: [".ht-product-image"],
      belowProductImage: [".ht-product-image-wrap"],
      belowProductName: [".ht-product-content .ht-product-title"],
      belowProductPrice: [".ht-product-content .ht-product-price"],
    },
    collections: {
      parent: [".ht-product"],
      badge: [".ht-product-image"],
      belowProductImage: [".ht-product-image-wrap"],
      belowProductName: [".ht-product-content .ht-product-title"],
      belowProductPrice: [".ht-product-content .ht-product-price"],
    },
    products: {
      parent: [".product-details-area", ".ht-product"],
      badge: [".owl-item .img-popup", ".ht-product-image"],
      belowProductImage: [".owl-stage-outer", ".ht-product-image-wrap"],
      belowProductName: [
        "#popup_cart_title",
        ".ht-product-content .ht-product-title",
      ],
      belowProductPrice: [
        ".product-details-price",
        ".ht-product-content .ht-product-price",
      ],
      mutations: [".arrivals-wrap"],
    },
    search: {
      parent: [".shop-list-wrap", ".ht-product"],
      badge: [".product-list-img", ".ht-product-image"],
      belowProductImage: [".product-list-img", ".ht-product-image-wrap"],
      belowProductName: [
        ".popup_cart_title",
        ".ht-product-content .ht-product-title",
      ],
      belowProductPrice: [
        ".ht-product-list-price",
        ".ht-product-content .ht-product-price",
      ],
    },
  },
  "kedree design": {
    products: {
      parent: [".Product", ".ProductItem"],
      badge: [
        ".Product__Gallery .flickity-viewport",
        ".ProductItem__ImageWrapper .AspectRatio",
      ],
      belowProductImage: [
        ".Product__Gallery .flickity-viewport",
        ".ProductItem__ImageWrapper .AspectRatio",
      ],
      belowProductName: [".ProductMeta__Title", ".ProductItem__Title"],
      belowProductPrice: [".ProductMeta__PriceList", ".ProductItem__PriceList"],
    },
    home: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductImage: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
    collections: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductImage: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
    search: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductImage: [".ProductItem__ImageWrapper .AspectRatio"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
  },
  unsen: {
    products: {
      parent: [".product", ".t4s-container"],
      badge: [
        ".product-images .images",
        ".product-image",
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport .flickity-slider",
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport .flickityt4s-slider",
        ".flickityt4s-viewport",
        "div[data-product-single-media-wrapper]",
      ],
      belowProductImage: [
        ".product-images .images",
        ".product-image",
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport",
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport",
        ".flickityt4s-viewport",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".summary .product_title",
        ".t4s-product__title",
      ],
      belowProductPrice: [
        ".product-info .price",
        ".summary .price-review",
        ".t4s-product__price-review",
      ],
      mutations: [".product-recommendations", ".product-extra"],
    },
    home: {
      parent: [".product", ".t4s-product"],
      badge: [".product-image", ".t4s-product-inner"],
      belowProductImage: [".product-image", ".t4s-product-inner"],
      belowProductName: [".product-info .product-title", ".t4s-product-title"],
      belowProductPrice: [".product-info .price", ".t4s-product-price"],
      mutations: [".lazyloadt4sed", ".t4s-products"],
      mutationConfig: { childList: true, subtree: true },
    },
    collections: {
      parent: [".product", ".t4s-product"],
      badge: [".product-image", ".t4s-product-inner"],
      belowProductImage: [".product-image", ".t4s-product-inner"],
      belowProductName: [".product-info .product-title", ".t4s-product-title"],
      belowProductPrice: [".product-info .price", ".t4s-product-price"],
      mutations: [
        ".product",
        ".t4s-products",
        ".container",
        ".t4s-main-collection-page",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".product"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-info .product-title"],
      belowProductPrice: [".product-info .price"],
    },
  },
  "leo ftshop 3": {
    home: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item-meta__title"],
      belowProductPrice: [".product-item-meta__price-list-container"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item-meta__title"],
      belowProductPrice: [".product-item-meta__price-list-container"],
    },
    products: {
      parent: [".main-product", ".product-item"],
      badge: [
        ".product__media .ap-flickity-viewport",
        ".product-item__image-wrapper",
      ],
      belowProductImage: [
        ".product__media .ap-flickity-viewport",
        ".product-item__image-wrapper",
      ],
      belowProductName: [".ap-productmeta__title", ".product-item-meta__title"],
      belowProductPrice: [
        ".ap-productmeta__price-list-container",
        ".product-item-meta__price-list-container",
      ],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__image-wrapper"],
      belowProductImage: [".product-item__image-wrapper"],
      belowProductName: [".product-item-meta__title"],
      belowProductPrice: [".product-item-meta__price-list-container"],
    },
  },
  booksbuy: {
    products: {
      parent: [".collection-wrapper", ".product-box"],
      badge: [
        ".product-right-slick .slick-list.draggable",
        ".img-wrapper .front",
      ],
      belowProductImage: [
        ".product-right-slick .slick-list.draggable",
        ".img-wrapper .front",
      ],
      belowProductName: [
        ".product-right [itemprop=name]",
        ".product-detail [itemprop=name]",
      ],
      belowProductPrice: [
        ".product-right #product_price",
        ".product-detail [data-price]",
      ],
    },
    home: {
      parent: [".product-box"],
      badge: [".img-wrapper .front"],
      belowProductImage: [".img-wrapper .front"],
      belowProductName: [".product-detail [itemprop=name]"],
      belowProductPrice: [".product-detail [data-price]"],
    },
    collections: {
      parent: [".product-box"],
      badge: [".img-wrapper .front"],
      belowProductImage: [".img-wrapper .front"],
      belowProductName: [".product-detail [itemprop=name]"],
      belowProductPrice: [".product-detail [data-price]"],
    },
    search: {
      parent: [".product-box"],
      badge: [".img-wrapper .front"],
      belowProductImage: [".img-wrapper .front"],
      belowProductName: [".product-detail [itemprop=name]"],
      belowProductPrice: [".product-detail [data-price]"],
    },
  },
  enterprise: {
    products: {
      parent: [".product", ".card--product"],
      badge: [".media-gallery__viewer", ".card__media.has-hover-image"],
      belowProductImage: [
        ".media-gallery__viewer",
        ".card__media.has-hover-image",
      ],
      belowProductName: [
        ".product-info .product-title",
        ".card__info .card__title",
      ],
      belowProductPrice: [
        ".product-info .product-info__price",
        ".card__info .price",
      ],
    },
    home: {
      parent: [".card--product"],
      badge: [".card__media.has-hover-image"],
      belowProductImage: [".card__media.has-hover-image"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .price"],
    },
    collections: {
      parent: [".card--product"],
      badge: [".card__media.has-hover-image"],
      belowProductImage: [".card__media.has-hover-image"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .price"],
    },
    search: {
      parent: [".card--product"],
      badge: [".card__media.has-hover-image"],
      belowProductImage: [".card__media.has-hover-image"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .price"],
    },
  },
  roam: {
    products: {
      parent: [".product", ".product-item"],
      badge: [".product-gallery--viewport", ".product-item-image"],
      belowProductImage: [".product-gallery--viewport", ".product-item-image"],
      belowProductName: [".product-title", ".product-item-title"],
      belowProductPrice: [".product-details-price", ".product-price"],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item-image"],
      belowProductImage: [".product-item-image"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item-image"],
      belowProductImage: [".product-item-image"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item-image"],
      belowProductImage: [".product-item-image"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-price"],
    },
  },
  ss_flashmart: {
    products: {
      parent: [".product-single", ".spf-product-card", ".product-item"],
      badge: [
        ".product-photo-container",
        ".spf-product-card__image-wrapper",
        ".product-image",
      ],
      belowProductImage: [
        ".product-photo-container .slick-list.draggable",
        ".spf-product-card__image-wrapper",
        ".product-image",
      ],
      belowProductName: [
        ".product-single__title",
        ".spf-product-card__title",
        ".title-product",
      ],
      belowProductPrice: [
        ".product-price",
        ".spf-product-card__price-wrapper",
        ".caption .price",
      ],
      mutations: [".products-listing"],
    },
    collections: {
      parent: [".spf-product-card", ".product-item"],
      badge: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductImage: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductName: [".spf-product-card__title", ".title-product"],
      belowProductPrice: [
        ".spf-product-card__price-wrapper",
        ".caption .price",
      ],
      mutations: [".loadmore"],
    },
    home: {
      parent: [".spf-product-card", ".product-item"],
      badge: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductImage: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductName: [".spf-product-card__title", ".title-product"],
      belowProductPrice: [
        ".spf-product-card__price-wrapper",
        ".caption .price",
      ],
    },
    search: {
      parent: [".spf-product-card", ".product-item"],
      badge: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductImage: [".spf-product-card__image-wrapper", ".product-image"],
      belowProductName: [".spf-product-card__title", ".title-product"],
      belowProductPrice: [
        ".spf-product-card__price-wrapper",
        ".caption .price",
      ],
    },
  },
  woodstock: {
    products: {
      parent: [".product", ".boost-sd__product-item"],
      badge: [".product__media-list", ".boost-sd__product-image-wrapper"],
      belowProductImage: [
        ".product__media-list",
        ".boost-sd__product-image-wrapper",
      ],
      belowProductName: [".product__title", ".boost-sd__product-title"],
      belowProductPrice: [".price", ".boost-sd__product-price"],
      mutations: [".product-recommendations", "#MainContent"],
      mutationConfig: { childList: true, subtree: true },
      extra: {
        afterAll: function fix() {
          if (acoShopName !== "7a8268-2") return;
          const moveLabels = (container, selector, labelClass) => {
            const labels = Array.from(container.querySelectorAll(selector));
            const wrap = document.createElement("div");
            for (const element of labels) {
              const labelWrap = container.querySelector(
                `.label-wrap.${labelClass}`
              );
              if (labelWrap) {
                labelWrap.appendChild(element);
              } else {
                element.parentNode.insertBefore(wrap, element);
                wrap.append(element);
                wrap.style.display = "flex";
                wrap.style.flexWrap = "wrap";
                wrap.className = `label-wrap ${labelClass}`;
              }
            }
          };
          const productContainers = Array.from(
            document.querySelectorAll(".product")
          );
          for (const container of productContainers) {
            moveLabels(container, ".belowProductPrice", "label-Price");
            moveLabels(container, ".belowProductImage", "label-Image");
            moveLabels(container, ".belowProductTitle", "label-Title");
          }
        },
      },
    },
    collections: {
      parent: [".boost-sd__product-item", ".card-wrapper--product"],
      badge: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductImage: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductName: [
        ".boost-sd__product-title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [
        ".boost-sd__product-price",
        ".card__information .price",
      ],
      mutations: [".boost-sd__filter-block", ".collection"],
      mutationConfig: { childList: true, subtree: true },
    },
    home: {
      parent: [".boost-sd__product-item", ".card-wrapper--product"],
      badge: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductImage: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductName: [
        ".boost-sd__product-title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [
        ".boost-sd__product-price",
        ".card__information .price",
      ],
    },
    search: {
      parent: [".boost-sd__product-item", ".card-wrapper--product"],
      badge: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductImage: [
        ".boost-sd__product-image-wrapper",
        ".card--product .card__inner",
      ],
      belowProductName: [
        ".boost-sd__product-title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [
        ".boost-sd__product-price",
        ".card__information .price",
      ],
      mutations: [".boost-sd__filter-block"],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  taiga: {
    products: {
      parent: [".product-main", ".card--product"],
      badge: [".product-media-slider", ".card-media .card-hover-images"],
      belowProductImage: [
        ".product-media-slider",
        ".card-media .card-hover-images",
      ],
      belowProductName: [".product-block__title", ".card-title"],
      belowProductPrice: [".price"],
      mutations: ["product-recommendations"],
    },
    home: {
      parent: [".card--product"],
      badge: [".card-media .card-hover-images"],
      belowProductImage: [".card-media .card-hover-images"],
      belowProductName: [".card-title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".card--product"],
      badge: [".card-media .card-hover-images"],
      belowProductImage: [".card-media .card-hover-images"],
      belowProductName: [".card-title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".card--product"],
      badge: [".card-media .card-hover-images"],
      belowProductImage: [".card-media .card-hover-images"],
      belowProductName: [".card-title"],
      belowProductPrice: [".price"],
    },
  },
  "ecomify-lite": {
    products: {
      parent: ["#product-template .container", ".product-item"],
      badge: [
        ".main-splide .splide__track ",
        ".product-link .product-carousel",
      ],
      belowProductImage: [
        ".main-splide .splide__track",
        ".product-link .product-carousel",
      ],
      belowProductName: [".product-content .title", ".product-item-title"],
      belowProductPrice: [
        ".product-content .product-price",
        ".product-item-price",
      ],
      mutations: [".product-price"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-link"],
      belowProductImage: [".product-link"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-item-price"],
      extra: {
        badge: function fix(ele) {
          if (acoShopName !== "2931ac-2") return;
          let imagesHeight = ele.querySelector(
            "img.product-item-img"
          ).clientHeight;
          let badges = Array.from(
            ele.querySelectorAll(".product-badge_aco.left-bottom")
          );
          for (const badge of badges) {
            let badgeHeight = badge.clientHeight;
            badge.style.top = imagesHeight - badgeHeight - 34 + "px";
          }
        },
      },
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-link"],
      belowProductImage: [".product-link"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-item-price"],
      extra: {
        badge: function fix(ele) {
          if (acoShopName !== "2931ac-2") return;
          let imagesHeight = ele.querySelector(
            "img.product-item-img"
          ).clientHeight;
          let badges = Array.from(
            ele.querySelectorAll(".product-badge_aco.left-bottom")
          );
          for (const badge of badges) {
            let badgeHeight = badge.clientHeight;
            badge.style.top = imagesHeight - badgeHeight - 34 + "px";
          }
        },
      },
    },
    search: {
      parent: [".product-item"],
      badge: [".product-link .product-carousel"],
      belowProductImage: [".product-link .product-carousel"],
      belowProductName: [".product-item-title"],
      belowProductPrice: [".product-item-price"],
      extra: {
        badge: function fix(ele) {
          if (acoShopName !== "2931ac-2") return;
          let imagesHeight = ele.querySelector(
            "img.product-item-img"
          ).clientHeight;
          let badges = Array.from(
            ele.querySelectorAll(".product-badge_aco.left-bottom")
          );
          for (const badge of badges) {
            let badgeHeight = badge.clientHeight;
            badge.style.top = imagesHeight - badgeHeight - 34 + "px";
          }
        },
      },
    },
  },
  "shaik theme": {
    products: {
      parent: [".product-image-summary", ".product-grid-item"],
      badge: [
        ".shopify-product-gallery__wrapper .owl-stage-outer",
        ".product-element-top",
      ],
      belowProductImage: [
        ".shopify-product-gallery__wrapper .owl-stage-outer",
        ".product-element-top",
      ],
      belowProductName: [".product-title"],
      belowProductPrice: [".price", ".wrap-price"],
    },
    home: {
      parent: [".product-grid-item"],
      badge: [".product-element-top"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".wrap-price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-element-top"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".wrap-price"],
      mutations: [".main-page-wrapper"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-element-top"],
      belowProductImage: [".product-element-top"],
      belowProductName: [".product-title"],
      belowProductPrice: [".wrap-price"],
    },
  },
  "langshop theme": {
    products: {
      parent: [".page-content .grid", ".grid-product__content"],
      badge: [
        ".product__photos .slick-list.draggable",
        ".grid-product__image-mask",
      ],
      belowProductImage: [
        ".product__photos .slick-list.draggable",
        ".grid-product__image-mask",
      ],
      belowProductName: [".product-single__title", ".grid-product__title"],
      belowProductPrice: [".product__price", ".grid-product__price"],
    },
    home: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    collections: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  "exclusive 2.0": {
    products: {
      parent: [".page-content .grid", ".grid-product__content"],
      badge: [
        ".product__photos .slick-list.draggable",
        ".grid-product__image-mask",
      ],
      belowProductImage: [
        ".product__photos .slick-list.draggable",
        ".grid-product__image-mask",
      ],
      belowProductName: [".product-single__title", ".grid-product__title"],
      belowProductPrice: [".product__price", ".grid-product__price"],
    },
    home: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    collections: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask"],
      belowProductImage: [".grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  "black friday 2023 uk": {
    products: {
      parent: [".product", ".item"],
      badge: [
        ".product-photo-container .owl-stage-outer",
        ".product-image-wrap .image",
      ],
      belowProductImage: [
        ".product-photo-container .product-gallery-owl",
        ".product-image-wrap .image",
      ],
      belowProductName: [".product-name"],
      belowProductPrice: ["#product-price", ".product-price"],
    },
    home: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".item"],
      badge: [".product-image-wrap .image"],
      belowProductImage: [".product-image-wrap .image"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
  },
  "atlas resell management": {
    products: {
      parent: [".product-single", ".boost-pfs-filter-product-item"],
      badge: [
        ".product-single__media",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductImage: [
        ".product-single__media",
        ".boost-pfs-filter-product-item-image-link",
      ],
      belowProductName: [
        ".product-single__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".product__price",
        ".boost-pfs-filter-product-item-price",
      ],
    },
    home: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
    },
    collections: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
      mutations: [".boost-pfs-filter-products", ".boost-pfs-filter-load-more"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: [".boost-pfs-filter-product-item"],
      badge: [".boost-pfs-filter-product-item-image-link"],
      belowProductImage: [".boost-pfs-filter-product-item-image-link"],
      belowProductName: [".boost-pfs-filter-product-item-title"],
      belowProductPrice: [".boost-pfs-filter-product-item-price"],
    },
  },
  banita: {
    products: {
      parent: [".product-block", ".product-item"],
      badge: [
        ".product-gallery-wrap .main-image-holder",
        ".product-item-photo",
      ],
      belowProductImage: [
        ".product-gallery-wrap .main-image-holder",
        ".product-item-photo",
      ],
      belowProductName: [
        ".product-name",
        ".product-item-details .product-item-name",
      ],
      belowProductPrice: [".product-item-details .price-box"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item-photo"],
      belowProductImage: [".product-item-photo"],
      belowProductName: [".product-item-details .product-item-name"],
      belowProductPrice: [".product-item-details .price-box"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item-photo"],
      belowProductImage: [".product-item-photo"],
      belowProductName: [".product-item-details .product-item-name"],
      belowProductPrice: [".product-item-details .price-box"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item-photo"],
      belowProductImage: [".product-item-photo"],
      belowProductName: [".product-item-details .product-item-name"],
      belowProductPrice: [".product-item-details .price-box"],
    },
  },
  context: {
    products: {
      parent: [".product", ".blog-posts__article", ".product-tile"],
      badge: [
        ".product__image",
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductImage: [
        ".product__image",
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductName: [".product__title", "h2.type-body-regular"],
      belowProductPrice: [".meta.type-body-regular"],
    },
    home: {
      parent: [".blog-posts__article"],
      badge: [".responsive-image__wrapper"],
      belowProductImage: [".responsive-image__wrapper"],
      belowProductName: [".blog-posts__article-heading"],
    },
    collections: {
      parent: [".blog-posts__article", ".product-tile"],
      badge: [
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductImage: [
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductName: ["h2.type-body-regular"],
      belowProductPrice: [".meta.type-body-regular"],
    },
    search: {
      parent: [".blog-posts__article", ".product-tile"],
      badge: [
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductImage: [
        ".responsive-image__wrapper",
        ".product-tile__images .product-tile__image",
      ],
      belowProductName: ["h2.type-body-regular"],
      belowProductPrice: [".meta.type-body-regular"],
    },
  },
  "outdoormaster@2022": {
    products: {
      parent: [".sf-prod-template", ".sf__col-item"],
      badge: [
        ".sf-preview__wrapper .swiper-container",
        "#pwzrswiper-container-wrapper .pwzrswiper-container",
        ".sf__pcard-image",
      ],
      belowProductImage: [
        ".sf-preview__wrapper .swiper-container",
        "#pwzrswiper-container-wrapper .pwzrswiper-container",
        ".sf__pcard-image",
      ],
      belowProductName: [".main-product__block-title", ".sf__pcard-content h3"],
      belowProductPrice: [
        ".main-product__block-price",
        ".sf__pcard-content .sf__pcard-price",
      ],
      mutations: ["button[data-load-more]"],
    },
    home: {
      parent: [".pf-product-form", ".sf__col-item"],
      badge: [".pf-main-media-wrapper", ".sf__pcard-image"],
      belowProductImage: [".pf-main-media-wrapper", ".sf__pcard-image"],
      belowProductName: [
        "[data-product-type='title']",
        ".sf__pcard-content h3",
      ],
      belowProductPrice: [
        "[data-pf-type='ProductPrice2']",
        ".sf__pcard-content .sf__pcard-price",
      ],
      mutations: ["[data-pf-type='ProductList']", "button[data-load-more]"],
    },
    collections: {
      parent: [".sf__col-item"],
      badge: [".sf__pcard-image"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
      mutations: ["#CollectionProductGrid", "button[data-load-more]"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".sf__col-item"],
      badge: [".sf__pcard-image"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
      mutations: ["button[data-load-more]"],
    },
  },
  vogal: {
    products: {
      parent: [".product-single", ".gitem", ".lv_item"],
      badge: [".pr_lg_img .primgSlider", "a.grid_lnk", "a.db"],
      belowProductImage: [".pr_lg_img .primgSlider", "a.grid_lnk", "a.db"],
      belowProductName: [".pr_title", ".grid_title", ".lv_item_ttl"],
      belowProductPrice: [".priceSingle", ".price"],
    },
    home: {
      parent: [".gitem", ".lv_item"],
      badge: ["a.grid_lnk", "a.db"],
      belowProductImage: ["a.grid_lnk", "a.db"],
      belowProductName: [".grid_title", ".lv_item_ttl"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".gitem", ".lv_item"],
      badge: ["a.grid_lnk", "a.db"],
      belowProductImage: ["a.grid_lnk", "a.db"],
      belowProductName: [".grid_title", ".lv_item_ttl"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".gitem", ".lv_item"],
      badge: ["a.grid_lnk", "a.db"],
      belowProductImage: ["a.grid_lnk", "a.db"],
      belowProductName: [".grid_title", ".lv_item_ttl"],
      belowProductPrice: [".price"],
    },
  },
  "lashzee cosmetics": {
    products: {
      parent: [".t4s-container", ".t4s-product"],
      badge: [
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport .flickity-slider",
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport .flickityt4s-slider",
        ".flickityt4s-viewport",
        "div[data-product-single-media-wrapper]",
        ".t4s-product-inner",
      ],
      belowProductImage: [
        "div[data-pr-single-media-group] .col_thumb .flickityt4s-viewport",
        "div[data-pr-single-media-group] .col_thumb .flickity-viewport",
        ".flickityt4s-viewport",
        ".t4s-product-inner",
      ],
      belowProductName: [".t4s-product-title"],
      belowProductPrice: [".t4s-product-price"],
    },
    home: {
      parent: [".t4s-product"],
      badge: [".t4s-product-inner"],
      belowProductImage: [".t4s-product-inner"],
      belowProductName: [".t4s-product-title"],
      belowProductPrice: [".t4s-product-price"],
      mutations: [".lazyloadt4sed", ".t4s-products"],
      mutationConfig: { childList: true, subtree: true },
    },
    collections: {
      parent: [".t4s-product"],
      badge: [".t4s-product-inner"],
      belowProductImage: [".t4s-product-inner"],
      belowProductName: [".t4s-product-title"],
      belowProductPrice: [".t4s-product-price"],
      mutations: [".lazyloadt4sed", ".t4s-products"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".t4s-product"],
      badge: [".t4s-product-inner"],
      belowProductImage: [".t4s-product-inner"],
      belowProductName: [".t4s-product-title"],
      belowProductPrice: [".t4s-product-price"],
    },
  },
  "booster-6.1.4": {
    products: {
      parent: [".product__row", ".card--holder"],
      badge: [
        ".gallery__default .slider--product__holder .slide--product",
        ".card__img--container .card__img",
      ],
      belowProductImage: [
        ".gallery__default .slider--product__holder .slide--product",
        ".card__img--container .card__img",
      ],
      belowProductName: [
        ".product__page--info .product__title",
        ".card__info .card__title",
      ],
      belowProductPrice: [
        ".product__page--info .product__price--holder",
        ".card__info .card__price",
      ],
    },
    home: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
    collections: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
    search: {
      parent: [".card--holder"],
      badge: [".card__img--container .card__img"],
      belowProductImage: [".card__img--container .card__img"],
      belowProductName: [".card__info .card__title"],
      belowProductPrice: [".card__info .card__price"],
    },
  },
  "dacorjudaica 2024": {
    products: {
      parent: [".product-details-page", ".single-product-wrap"],
      badge: [".product_detail_img .product_img_top", ".product-image"],
      belowProductImage: [
        ".product_detail_img .product_img_top",
        ".product-image",
      ],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    home: {
      parent: [".single-product-wrap"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".single-product-wrap"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
    search: {
      parent: [".single-product-wrap"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-title"],
      belowProductPrice: [".price-box"],
    },
  },
  eva: {
    products: {
      parent: [".product_content_wrapper", ".product"],
      badge: [".product-images-wrapper .owl-stage-outer", ".product_thumbnail"],
      belowProductImage: [
        ".product-images-wrapper .owl-stage-outer",
        ".product_thumbnail",
      ],
      belowProductName: [".product_title", ".shop_product_title"],
      belowProductPrice: [
        ".product-single__price-product-template",
        ".product_after_shop_loop",
      ],
    },
    home: {
      parent: [".product"],
      badge: [".product_thumbnail"],
      belowProductImage: [".product_thumbnail"],
      belowProductName: [".shop_product_title"],
      belowProductPrice: [".product_after_shop_loop"],
    },
    collections: {
      parent: [".product"],
      badge: [".product_thumbnail"],
      belowProductImage: [".product_thumbnail"],
      belowProductName: [".shop_product_title"],
      belowProductPrice: [".product_after_shop_loop"],
    },
    search: {
      parent: [".product"],
      badge: [".product_thumbnail"],
      belowProductImage: [".product_thumbnail"],
      belowProductName: [".shop_product_title"],
      belowProductPrice: [".product_after_shop_loop"],
    },
  },
  "vean vision v1": {
    products: {
      parent: [".product", ".product-card-wrapper"],
      badge: [
        ".product__media-item .product__media",
        ".card__inner .card__media",
      ],
      belowProductImage: [".product__media-list", ".card--media .card__inner"],
      belowProductName: [
        ".product__title",
        ".card__information .card__heading.h5",
      ],
      belowProductPrice: [".price", ".card__information .price"],
    },
    home: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card--media .card__inner"],
      belowProductName: [".card__information .card__heading.h5"],
      belowProductPrice: [".card__information .price"],
    },
  },
  vibez: {
    products: {
      parent: [".product", ".product-card-wrapper"],
      badge: [
        ".product__media-list .flickity-viewport",
        ".card__inner .card__media",
      ],
      belowProductImage: [
        ".product__media-list .flickity-viewport",
        ".card__inner",
      ],
      belowProductName: [
        ".product__title",
        ".card__information .card__heading",
      ],
      belowProductPrice: [".price", ".card__information .price"],
    },
    home: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
    collections: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
    search: {
      parent: [".product-card-wrapper"],
      badge: [".card__inner .card__media"],
      belowProductImage: [".card__inner"],
      belowProductName: [".card__information .card__heading"],
      belowProductPrice: [".card__information .price"],
    },
  },
  cornerstone: {
    products: {
      parent: [".product", "product-item", ".product-item"],
      badge: [
        ".product__media-container .product__media-item",
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product__media-container .product__media-item",
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [
        ".product__details .product__title .product__price",
        ".product-item__meta .product-item__product-title",
      ],
      belowProductPrice: [
        ".product__details",
        ".product-item__meta .product-item__price",
      ],
    },
    home: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
    collections: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
      mutations: [
        ".collection__products",
        ".filter-bar-filters",
        ".filter-bar",
      ],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: ["product-item", ".product-item"],
      badge: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductImage: [
        ".product-item__image-link .product-item__image .image__inner",
        ".product-item__image-link",
      ],
      belowProductName: [".product-item__meta .product-item__product-title"],
      belowProductPrice: [".product-item__meta .product-item__price"],
    },
  },
  gem: {
    products: {
      parent: [
        ".product-grid__container",
        ".grid-product",
        ".boost-sd__product-item",
      ],
      badge: [
        ".product__photos .product__main-photos",
        ".grid-product__image-wrap",
        ".boost-sd__product-link-image",
      ],
      belowProductImage: [
        ".product__photos .product__main-photos",
        ".grid-product__image-wrap",
        ".boost-sd__product-link-image",
      ],
      belowProductName: [
        ".product-single__title",
        ".grid-product__title",
        ".boost-sd__product-title",
      ],
      belowProductPrice: [
        ".product-block--price",
        ".grid-product__price",
        ".boost-sd__product-price",
      ],
    },
    home: {
      parent: [".grid-product", ".boost-sd__product-item"],
      badge: [".grid-product__image-wrap", ".boost-sd__product-link-image"],
      belowProductImage: [
        ".grid-product__image-wrap",
        ".boost-sd__product-link-image",
      ],
      belowProductName: [".grid-product__title", ".boost-sd__product-title"],
      belowProductPrice: [".grid-product__price", ".boost-sd__product-price"],
    },
    collections: {
      parent: [".grid-product", ".boost-sd__product-item"],
      badge: [".grid-product__image-wrap", ".boost-sd__product-link-image"],
      belowProductImage: [
        ".grid-product__image-wrap",
        ".boost-sd__product-link-image",
      ],
      belowProductName: [".grid-product__title", ".boost-sd__product-title"],
      belowProductPrice: [".grid-product__price", ".boost-sd__product-price"],
      mutations: [
        ".boost-sd__filter-option-itemwrapper",
        ".boost-sd__product-list",
        ".boost-sd__filter-tree-vertical-content",
        ".boost-sd__product-filter-fallback",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".grid-product", ".boost-sd__product-item"],
      badge: [".grid-product__image-wrap", ".boost-sd__product-link-image"],
      belowProductImage: [
        ".grid-product__image-wrap",
        ".boost-sd__product-link-image",
      ],
      belowProductName: [".grid-product__title", ".boost-sd__product-title"],
      belowProductPrice: [".grid-product__price", ".boost-sd__product-price"],
    },
  },
  "bt vodoma swimwear 2": {
    products: {
      parent: [".product-single", ".item"],
      badge: [".product-single__photos .pg__mains", ".item__top"],
      belowProductImage: [".product-single__photos .pg__mains", ".item__top"],
      belowProductName: [".product-single__title", ".item__name"],
      belowProductPrice: [".product-price-wrap", ".product-price"],
    },
    home: {
      parent: [".item"],
      badge: [".item__top"],
      belowProductImage: [".item__top"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".item"],
      badge: [".item__top"],
      belowProductImage: [".item__top"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
      mutations: ["#collection-template"],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [".item"],
      badge: [".item__top"],
      belowProductImage: [".item__top"],
      belowProductName: [".item__name"],
      belowProductPrice: [".product-price"],
    },
  },
  "shirley-v1.0.4": {
    products: {
      parent: [".product-details-area", ".ht-product", ".shop-list-wrap"],
      badge: [
        ".product-details-img",
        ".ht-product-image-wrap .ht-product-image",
        ".product-list-img",
      ],
      belowProductImage: [
        ".product-details-img",
        ".ht-product-image-wrap .ht-product-image",
        ".product-list-img",
      ],
      belowProductName: [
        "#popup_cart_title",
        ".ht-product-title",
        ".popup_cart_title",
      ],
      belowProductPrice: [
        ".product-details-price",
        ".ht-product-price",
        ".ht-product-list-price",
      ],
    },
    home: {
      parent: [".ht-product"],
      badge: [".ht-product-image-wrap .ht-product-image"],
      belowProductImage: [".ht-product-image-wrap .ht-product-image"],
      belowProductName: [".ht-product-title"],
      belowProductPrice: [".ht-product-price"],
    },
    collections: {
      parent: [".ht-product", ".shop-list-wrap"],
      badge: [".ht-product-image-wrap .ht-product-image", ".product-list-img"],
      belowProductImage: [
        ".ht-product-image-wrap .ht-product-image",
        ".product-list-img",
      ],
      belowProductName: [".ht-product-title", ".popup_cart_title"],
      belowProductPrice: [".ht-product-price", ".ht-product-list-price"],
    },
    search: {
      parent: [".ht-product", ".shop-list-wrap"],
      badge: [".ht-product-image-wrap .ht-product-image", ".product-list-img"],
      belowProductImage: [
        ".ht-product-image-wrap .ht-product-image",
        ".product-list-img",
      ],
      belowProductName: [".ht-product-title", ".popup_cart_title"],
      belowProductPrice: [".ht-product-price", ".ht-product-list-price"],
    },
  },
  effortless: {
    home: {
      parent: [".collection-product-item", ".collection_slide"],
      badge: [".card--product .card__inner"],
      belowProductImage: [".card--product .card__inner"],
      belowProductName: [".card-details__text"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".collection-product-item"],
      badge: [".card--product .card__inner"],
      belowProductImage: [".card--product .card__inner"],
      belowProductName: [".card-details__text"],
      belowProductPrice: [".price"],
    },
    products: {
      parent: [".main__product", ".collection-product-item"],
      badge: [
        ".product__main-photos .flickity-viewport",
        ".card--product .card__inner",
      ],
      belowProductImage: [
        ".product__main-photos .product-slider-main",
        ".card--product .card__inner",
      ],
      belowProductName: [".product__title", ".card-details__text"],
      belowProductPrice: [".price__box", ".price"],
    },
    search: {
      parent: [".collection-product-item"],
      badge: [".card--product .card__inner"],
      belowProductImage: [".card--product .card__inner"],
      belowProductName: [".card-details__text"],
      belowProductPrice: [".price"],
    },
  },
  "oct 23 control": {
    home: {
      parent: [".product-grid-item"],
      badge: [".product-grid-item__image"],
      belowProductImage: [".product-grid-item__image"],
      belowProductName: [".product-grid-item__product-name"],
      belowProductPrice: [".product-grid-item__price"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".product-grid-item__image"],
      belowProductImage: [".product-grid-item__image"],
      belowProductName: [".product-grid-item__product-name"],
      belowProductPrice: [".product-grid-item__price"],
    },
    products: {
      parent: [".product__main", ".product-grid-item"],
      badge: [".product-images__slider", ".product-grid-item__image"],
      belowProductImage: [
        ".product-images__slider",
        ".product-grid-item__image",
      ],
      belowProductName: [
        ".product-info__title",
        ".product-grid-item__product-name",
      ],
      belowProductPrice: [".product-price", ".product-grid-item__price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".product-grid-item__image"],
      belowProductImage: [".product-grid-item__image"],
      belowProductName: [".product-grid-item__product-name"],
      belowProductPrice: [".product-grid-item__price"],
    },
  },
  themelcdksa: {
    home: {
      parent: [".product"],
      badge: [".card-product__wrapper"],
      belowProductImage: [".card-product__wrapper"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
    },
    collections: {
      parent: [".product"],
      badge: [".card-product__wrapper"],
      belowProductImage: [".card-product__wrapper"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
      mutations: [".pagination"],
    },
    products: {
      parent: [".productView-top", ".product"],
      badge: [
        ".productView-image-wrapper .slick-list.draggable",
        ".card-product__wrapper",
      ],
      belowProductImage: [
        ".productView-image-wrapper .slick-list.draggable",
        ".card-product__wrapper",
      ],
      belowProductName: [".productView-title", ".card-title"],
      belowProductPrice: [".productView-price", ".card-price"],
    },
    search: {
      parent: [".product"],
      badge: [".card-product__wrapper"],
      belowProductImage: [".card-product__wrapper"],
      belowProductName: [".card-title"],
      belowProductPrice: [".card-price"],
    },
  },
  foxic: {
    home: {
      parent: [".prd"],
      badge: [".prd-img-area"],
      belowProductImage: [".prd-img-area"],
      belowProductName: [".prd-title"],
      belowProductPrice: [".prd-price"],
    },
    collections: {
      parent: ["#ProductSection-product-template", ".prd"],
      badge: [".prd-block_main-image", ".prd-img-area"],
      belowProductImage: [".prd-block_main-image", ".prd-img-area"],
      belowProductName: [".prd-block_title", ".prd-title"],
      belowProductPrice: [".prd-block_price", ".prd-price"],
    },
    products: {
      parent: [".prd"],
      badge: [".prd-img-area"],
      belowProductImage: [".prd-img-area"],
      belowProductName: [".prd-title"],
      belowProductPrice: [".prd-price"],
    },
    search: {
      parent: [".prd"],
      badge: [".prd-img-area"],
      belowProductImage: [".prd-img-area"],
      belowProductName: [".prd-title"],
      belowProductPrice: [".prd-price"],
    },
  },
  134586728672: {
    home: {
      parent: [".grid__item", ".product-single"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".product-single__meta .grid_item-title",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".product-single__meta .product-single__price",
      ],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductImage: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductName: ["product-single__title", ".grid-view-item__title"],
      belowProductPrice: ["product-single__price", ".product-price__price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
  },
  133857935591: {
    products: {
      parent: [".product-template__container", ".product-item"],
      badge: [".product-gallery .swiper-container", ".product-item__link"],
      belowProductImage: [".product-gallery", ".product-item__link"],
      belowProductName: [".product-template__title", ".product-item__title"],
      belowProductPrice: [".price", ".product-item-group"],
    },
    home: {
      parent: [".product-item"],
      badge: [".product-item__link"],
      belowProductImage: [".product-item__link"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item-group"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item__link"],
      belowProductImage: [".product-item__link"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item-group"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item__link"],
      belowProductImage: [".product-item__link"],
      belowProductName: [".product-item__title"],
      belowProductPrice: [".product-item-group"],
    },
  },
  125287497878: {
    products: {
      parent: [".grid_collection_box", ".product-single .clearfix"],
      badge: [
        ".grid__product-image .grid__image",
        ".product-single__photos .bx-wrapper",
      ],
      belowProductImage: [
        ".grid__product-image .grid__image",
        ".product--images",
        ".product-single__photos .bx-wrapper",
      ],
      belowProductName: [".grid__product-content h4", ".main-prod-desc h1"],
      belowProductPrice: [
        ".grid__product-content .price-section ",
        "form .price",
      ],
    },
    home: {
      parent: [".grid_collection_box"],
      badge: [".grid__product-image .grid__image"],
      belowProductImage: [".grid__product-image .grid__image"],
      belowProductName: [".grid__product-content h4"],
      belowProductPrice: [".grid__product-content .price-section"],
    },
    collections: {
      parent: [".grid_collection_box"],
      badge: [".grid__product-image .grid__image"],
      belowProductImage: [".grid__product-image .grid__image"],
      belowProductName: [".grid__product-content h4"],
      belowProductPrice: [".grid__product-content .price-section "],
    },
    search: {
      parent: [".grid_collection_box"],
      badge: [".grid__product-image .grid__image"],
      belowProductImage: [".grid__product-image .grid__image"],
      belowProductName: [".grid__product-content h4"],
      belowProductPrice: [".grid__product-content .price-section "],
    },
  },
  130599878841: {
    products: {
      parent: [".Product", ".flickity-viewport .ProductItem"],
      badge: [".Product__SlideItem", ".ProductItem__ImageWrapper"],
      belowProductImage: [".Product__Slideshow", ".ProductItem__ImageWrapper"],
      belowProductName: [".ProductMeta__Title", ".ProductItem__Title"],
      belowProductPrice: [".ProductMeta__PriceList", ".ProductItem__PriceList"],
      extra: {
        afterAll: function fix() {
          document.querySelector(
            ".Product__Aside .product-badge_aco"
          ).style.display = "none";
        },
      },
    },
    home: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
    collections: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
    search: {
      parent: [".ProductItem"],
      badge: [".ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Title"],
      belowProductPrice: [".ProductItem__PriceList"],
    },
  },
  133204934907: {
    products: {
      parent: [".sf-prod__container", ".rktheme-grid-product"],
      badge: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductImage: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductName: [
        ".main-product__blocks .prod__title",
        ".rktheme-product-title",
      ],
      belowProductPrice: [
        ".main-product__blocks .product-prices",
        ".rktheme-product-price-wrap",
      ],
    },
    home: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    search: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
  },
  125349396532: {
    products: {
      parent: [".sf-prod__container", ".rktheme-grid-product"],
      badge: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductImage: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductName: [
        ".main-product__blocks .prod__title",
        ".rktheme-product-title",
      ],
      belowProductPrice: [
        ".main-product__blocks .product-prices",
        ".rktheme-product-price-wrap",
      ],
    },
    home: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    search: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
  },
  132661805269: {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [
        ".grid__item.product-single__photos .product-single__photo",
        ".grid-view-item__link .reveal",
      ],
      belowProductImage: [
        ".grid__item.product-single__photos",
        ".grid-view-item__link .reveal",
      ],
      belowProductName: [".product-single__title", ".grid-view-item__title"],
      belowProductPrice: [".product-single__price", ".grid-view-item__meta"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".grid-view-item__link .reveal"],
      belowProductImage: [".grid-view-item__link .reveal"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    collections: {
      parent: [".spf-product-card"],
      badge: [".spf-product-card__image-wrapper "],
      belowProductImage: [".spf-product-card__image-wrapper "],
      belowProductName: [".spf-product-card__title"],
      belowProductPrice: [".spf-product-card__price-wrapper"],
    },
    search: {
      parent: [".spf-product-card"],
      badge: [".spf-product-card__image-wrapper "],
      belowProductImage: [".spf-product-card__image-wrapper "],
      belowProductName: [".spf-product-card__title"],
      belowProductPrice: [".spf-product-card__price-wrapper"],
    },
  },
  43734990937: {
    products: {
      parent: [".full-width-collection", ".product"],
      badge: [
        ".single-variants-product .single-product-image",
        ".product .position-r > a",
      ],
      belowProductImage: [".single-variants-product", ".position-r"],
      belowProductName: [
        ".pro-detail .paira-product-title",
        ".product-title-price h5",
      ],
      belowProductPrice: [
        ".pro-detail .price-preview",
        ".product-title-price .text-center",
      ],
    },
    home: {
      parent: [".full-width-collection", ".product"],
      badge: [
        ".single-variants-product .single-product-image",
        ".product .position-r > a",
      ],
      belowProductImage: [".single-variants-product", ".position-r"],
      belowProductName: [
        ".pro-detail .paira-product-title",
        ".product-title-price h5",
      ],
      belowProductPrice: [
        ".pro-detail .price-preview",
        ".product-title-price .text-center",
      ],
    },
    collections: {
      parent: [".product"],
      badge: [".product .position-r > a"],
      belowProductImage: [".position-r"],
      belowProductName: [".product-title-price h5"],
      belowProductPrice: [".product-title-price .text-center"],
    },
    search: {
      parent: [".product"],
      badge: [".product .position-r > a"],
      belowProductImage: [".position-r"],
      belowProductName: [".product-title-price h5"],
      belowProductPrice: [".product-title-price .text-center"],
    },
  },
  130329247929: {
    home: {
      parent: [".grid-product__content", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask .grid__image-ratio",
        ".product-image-main .image-wrap",
      ],
      belowProductImage: [
        ".grid-product__image-mask .grid__image-ratio",
        ".product-image-main .flickity-viewport",
      ],
      belowProductName: [
        ".grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-single__meta .product__price",
      ],
    },
    collections: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask .grid__image-ratio"],
      belowProductImage: [".grid-product__image-mask .grid__image-ratio"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    products: {
      parent: [".grid--product-images--partial", ".grid-product__content"],
      badge: [
        ".product-image-main .image-wrap",
        ".grid-product__image-mask .grid__image-ratio",
      ],
      belowProductImage: [
        ".product-image-main .flickity-viewport",
        ".grid-product__image-mask .grid__image-ratio",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-product__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product__price",
        ".grid-product__price",
      ],
    },
    search: {
      parent: [".grid-product__content"],
      badge: [".grid-product__image-mask .grid__image-ratio"],
      belowProductImage: [".grid-product__image-mask .grid__image-ratio"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  122781990946: {
    home: {
      parent: [".product-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content h3"],
      belowProductPrice: [".price-box"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content h3"],
      belowProductPrice: [".price-box"],
      mutations: [".collection-grid"],
    },
    products: {
      parent: [".product", ".product-item"],
      badge: [".products-desktops .video-wr > a", ".product-image a"],
      belowProductImage: [".products-desktops .video-wr", ".product-image"],
      belowProductName: [
        ".shop-detail-content .product-title ",
        ".product-content h3",
      ],
      belowProductPrice: [".shop-detail-content .prices-wr", ".price-box"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-image a"],
      belowProductImage: [".product-image"],
      belowProductName: [".product-content h3"],
      belowProductPrice: [".price-box"],
    },
  },
  135100104944: {
    home: {
      parent: [
        ".product-tab-type-2 .owl-stage-outer .owl-item",
        ".grid__item",
        ".quick-view .content",
      ],
      badge: [
        ".products .product-container .grid-link",
        ".quickview-featured-image a",
      ],
      belowProductImage: [".products .product-container"],
      belowProductName: [".products .product-detail .grid-link__title"],
      belowProductPrice: [".products .product-detail .grid-link__meta"],
    },
    collections: {
      parent: [
        ".products-grid-view .grid__item",
        ".products-list-view .grid__item",
      ],
      badge: [
        ".products .product-container .grid-link",
        ".quickview-featured-image",
      ],
      belowProductImage: [".products .product-container"],
      belowProductName: [".products .product-detail .grid-link__title"],
      belowProductPrice: [".products .product-detail .grid-link__meta"],
      mutations: [".grid__item"],
    },
    products: {
      parent: [
        ".product-single",
        ".recently-viewed-products .products-grid",
        ".owl-item",
      ],
      badge: [
        ".grid__item .product-photo-container",
        ".products .product-container .grid-link",
        ".product-image .product-grid-image",
      ],
      belowProductImage: [
        ".grid__item .product-photo-container",
        ".products .product-container",
      ],
      belowProductName: [
        ".grid__item .product-single__title",
        ".products .product-detail .grid-link__title",
      ],
      belowProductPrice: [
        ".grid__item .product_single_price",
        ".products .product-detail .grid-link__meta",
      ],
    },
    search: {
      parent: [".search-products .grid__item", ".quick-view"],
      badge: [
        ".products .product-container .grid-link",
        ".content .product-img .quickview-featured-image a",
      ],
      belowProductImage: [".products .product-container"],
      belowProductName: [".products .product-detail .grid-link__title"],
      belowProductPrice: [".products .product-detail .grid-link__meta"],
      mutations: [
        ".grid__item",
        ".quick-view .content",
        ".quickview-featured-image",
        ".quick-view .overlay",
      ],
    },
  },
  126066851976: {
    home: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    products: {
      parent: [".sf-prod__container", ".sf-prod__block"],
      badge: [".sf-preview__wrapper", ".sf__image-box"],
      belowProductImage: [".sf-pis__wrapper", ".sf__pcard-image"],
      belowProductName: [
        ".main-product__blocks .prod__title",
        ".sf__pcard-content h3.text-base",
      ],
      belowProductPrice: [
        ".main-product__blocks .product-prices",
        ".sf__pcard-content .sf__pcard-price",
      ],
    },
    search: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
  },
  122799325346: {
    home: {
      parent: [".grid__item", ".product-single"],
      badge: [".grid-view_image", ".product-photos"],
      belowProductImage: [".grid-view_image", ".product-photos"],
      belowProductName: [".grid-view-item__title", ".product-single__title"],
      belowProductPrice: [".product-price__price", ".product-single__price"],
    },
    collections: {
      parent: [".grid__item", ".list-view-item", ".product-single"],
      badge: [
        ".grid-view_image",
        ".list-view-item__image-wrapper",
        ".product-photos",
      ],
      belowProductImage: [
        ".grid-view_image",
        ".list-view-item__image-wrapper",
        ".product-photos",
      ],
      belowProductName: [
        ".grid-view-item__title",
        ".list-view-item__title",
        ".product-single__title",
      ],
      belowProductPrice: [".product-price__price", ".product-single__price"],
    },
    products: {
      parent: [".product-single"],
      badge: [".prod-large-img"],
      belowProductImage: [".prod-large-img"],
      belowProductName: [".product-single__title"],
      belowProductPrice: [".product-single__price"],
    },
    search: {
      parent: [".list-view-item", ".product-single"],
      badge: [".list-view-item__image-wrapper", ".prod-large-img"],
      belowProductImage: [".list-view-item__image-wrapper", ".prod-large-img"],
      belowProductName: [".list-view-item__title", ".product-single__title"],
      belowProductPrice: [".product-price__price", ".product-single__price"],
    },
  },
  129695580325: {
    home: {
      parent: [".grid__item", ".product-single"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".product-single__meta .grid_item-title",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".product-single__meta .product-single__price",
      ],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductImage: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductName: ["product-single__title", ".grid-view-item__title"],
      belowProductPrice: ["product-single__price", ".product-price__price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
  },
  131355213989: {
    home: {
      parent: [".grid__item", ".product-single"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".product-single__photos .product-single__photo",
      ],
      belowProductName: [
        ".details .grid-view-item__title",
        ".product-single__meta .grid_item-title",
      ],
      belowProductPrice: [
        ".details .grid-view-item__meta",
        ".product-single__meta .product-single__price",
      ],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductImage: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__image",
      ],
      belowProductName: [".product-single__title", ".grid-view-item__title"],
      belowProductPrice: [".product-single__price", ".product-price__price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view_image .grid-view-item__link"],
      belowProductImage: [".grid-view_image .grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
  },
  131175710914: {
    products: {
      parent: [".sf-prod__container", ".rktheme-grid-product"],
      badge: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductImage: [
        ".sf-prod-media__wrapper .sf-prod-media-item",
        ".rktheme-product-image-wrap",
      ],
      belowProductName: [
        ".main-product__blocks .prod__title",
        ".rktheme-product-title",
      ],
      belowProductPrice: [
        ".main-product__blocks .product-prices",
        ".rktheme-product-price-wrap",
      ],
    },
    home: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    collections: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
    search: {
      parent: [".sf-prod__block"],
      badge: [".sf__image-box"],
      belowProductImage: [".sf__pcard-image"],
      belowProductName: [".sf__pcard-content h3.text-base"],
      belowProductPrice: [".sf__pcard-content .sf__pcard-price"],
    },
  },
  121632161895: {
    products: {
      parent: [".product-single", ".owl-item"],
      badge: [".owl-stage-outer", ".product-image-wrapper"],
      belowProductImage: [".owl-stage-outer", ".product-image-wrapper"],
      belowProductName: [".page-title", ".product-item-name"],
      belowProductPrice: [".product-main-price", ".product-price"],
    },
    home: {
      parent: [".product-miniature"],
      badge: [".product-image-container"],
      belowProductImage: [".product-image-container"],
      belowProductName: [".product-item-bottom .product-item-link"],
      belowProductPrice: [".product-item-bottom .price"],
    },
    collections: {
      parent: [".product-miniature"],
      badge: [".product-image-container"],
      belowProductImage: [".product-image-container"],
      belowProductName: [".product-item-details .product-item-link"],
      belowProductPrice: [".product-item-details .price"],
    },
    search: {
      parent: [".product-miniature"],
      badge: [".product-image-container"],
      belowProductImage: [".product-image-container"],
      belowProductName: [".product-item-details .product-item-link"],
      belowProductPrice: [".product-item-details .price"],
    },
  },
  122434879547: {
    products: {
      parent: [".product-single", ".item-product"],
      badge: [
        ".product-single__photos .block_content > span",
        ".thumbnail-container a",
      ],
      belowProductImage: [
        ".product-single__photos .block_content > span",
        ".thumbnail-container a",
      ],
      belowProductName: [
        ".block_information .product-single__title",
        ".product__info .product__title",
      ],
      belowProductPrice: [
        ".block_information .product-single__price",
        ".product__info .product__price",
      ],
    },
    home: {
      parent: [".item-product"],
      badge: [".thumbnail-container a"],
      belowProductImage: [".thumbnail-container a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
    collections: {
      parent: [".item-product"],
      badge: [".thumbnail-container a"],
      belowProductImage: [".thumbnail-container a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
    search: {
      parent: [".item-product"],
      badge: [".thumbnail-container a"],
      belowProductImage: [".thumbnail-container a"],
      belowProductName: [".product__info .product__title"],
      belowProductPrice: [".product__info .product__price"],
    },
  },
  120721506433: {
    home: {
      parent: [".grid__item"],
      badge: [".card-wrapper a.media-wrapper"],
      belowProductImage: [".card-wrapper a.media-wrapper"],
      belowProductName: [".card-information .card-information__text"],
      belowProductPrice: [".card-information .price"],
    },
    products: {
      parent: [".product", "li.grid__item"],
      badge: [".product__media-list", ".card__media.media-wrapper"],
      belowProductImage: [".product__media-list", ".card__media.media-wrapper"],
      belowProductName: [".product__title", ".card-information__text"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card__media.media-wrapper"],
      belowProductImage: [".card__media.media-wrapper"],
      belowProductName: [".card-information__text"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card__media.media-wrapper"],
      belowProductImage: [".card__media.media-wrapper"],
      belowProductName: [".card-information__text"],
      belowProductPrice: [".price"],
    },
  },
  134989807861: {
    products: {
      parent: [".product__row", ".card--holder"],
      badge: [".slider--product", ".card__img"],
      belowProductImage: [".slider--product", ".card__img--ratio"],
      belowProductName: [".product__title", ".card__title"],
      belowProductPrice: [".product__price--holder", ".card__price"],
    },
    home: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
    },
    collections: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
      mutations: [".product__list"],
    },
    search: {
      parent: [".card--holder"],
      badge: [".card__img"],
      belowProductImage: [".card__img--ratio"],
      belowProductName: [".card__title"],
      belowProductPrice: [".card__price"],
    },
  },
  129509654680: {
    products: {
      parent: [
        ".grid-product__link",
        ".grid--product-images--partial",
        ".grid",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap",
        ".pwzrswiper-container",
        ".pf-main-media",
        ".grid__image-ratio.lazyloaded",
      ],
      belowProductImage: [
        ".grid-product__image-mask",
        ".flickity-viewport",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-single__meta .product-block--price",
        ".product__price-savings",
      ],
    },
    home: {
      parent: [".grid-product__content ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    collections: {
      parent: [
        ".grid-grid__item ",
        ".grid--product-images--partial",
        ".grid__item",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    search: {
      parent: [".grid-grid__item ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
  },
  66264581: {
    products: {
      parent: [".product-single"],
      badge: [".product-single__photos"],
      belowProductImage: [".product-single__photos"],
      belowProductName: [".product-single__title"],
      belowProductPrice: [".product-single__prices"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".product__image"],
      belowProductImage: [".product__image "],
      belowProductName: [".product__title"],
      belowProductPrice: [".product__prices"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".product__image"],
      belowProductImage: [".product__image "],
      belowProductName: [".product__title"],
      belowProductPrice: [".product__prices"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".product__image"],
      belowProductImage: [".product__image "],
      belowProductName: [".product__title"],
      belowProductPrice: [".product__prices"],
    },
  },
  122884227269: {
    products: {
      parent: [".grid__item", ".grid"],
      badge: [".image-wrap", ".product__main-photos "],
      belowProductImage: [".image-wrap", ".product__photos"],
      belowProductName: [".grid-product__title", ".product-single__title.h2"],
      belowProductPrice: [".grid-product__price", ".product-block--price"],
    },
    home: {
      parent: [".grid__item"],
      badge: [".image-wrap"],
      belowProductImage: [".image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".image-wrap"],
      belowProductImage: [".image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".image-wrap"],
      belowProductImage: [".image-wrap"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  132257644779: {
    products: {
      parent: [
        ".grid-product__link",
        ".grid--product-images--partial",
        ".grid",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap",
        ".pwzrswiper-container",
        ".pf-main-media",
        ".grid__image-ratio.lazyloaded",
      ],
      belowProductImage: [
        ".grid-product__image-mask",
        ".flickity-viewport",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__price",
        ".product-single__meta .product-block--price",
        ".product__price-savings",
      ],
    },
    home: {
      parent: [".grid-product__content ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    collections: {
      parent: [
        ".grid-grid__item ",
        ".grid--product-images--partial",
        ".grid__item",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    search: {
      parent: [".grid-grid__item ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        ".grid-product__meta .grid-product__price",
        ".product-single__meta .product-block--price ",
      ],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
  },
  122835828772: {
    home: {
      parent: [".owl-item"],
      badge: [".featured-img"],
      belowProductImage: [".featured-img"],
      belowProductName: [".product-name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".product-price", ".detail-price"],
      mutations: ["div[data-sectionid='collection-template']"],
      mutationConfig: { childList: true, subtree: true },
    },
    products: {
      parent: [".product-content-wrapper"],
      badge: [".slider-main-image"],
      belowProductImage: [".slider-main-image"],
      belowProductName: [".product-info-inner .page-heading"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-grid-item", ".modal-body"],
      badge: [".featured-img", ".product-image-inner"],
      belowProductImage: [".featured-img", ".product-image-inner"],
      belowProductName: [".product-name", ".product-info h2"],
      belowProductPrice: [".product-price", ".detail-price"],
      mutations: [".modal .product-image-inner"],
    },
  },
  131605758134: {
    home: {
      parent: [".grid__item", ".grid"],
      badge: [
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductImage: [
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [".grid-product__price", ".product__price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-product__link .grid-product__image-mask"],
      belowProductImage: [".grid-product__link .grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
    products: {
      parent: [".grid__item", ".grid"],
      badge: [
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductImage: [
        ".grid-product__link .grid-product__image-mask",
        ".product__main-photos .slick-list.draggable",
      ],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [".grid-product__price", ".product__price"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-product__link .grid-product__image-mask"],
      belowProductImage: [".grid-product__link .grid-product__image-mask"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price"],
    },
  },
  97683079306: {
    products: {
      parent: [".pro_main_c", ".owl-item"],
      badge: [".product-single__media-wrapper > a", ".product-image"],
      belowProductImage: [
        ".product-single__media-wrapper > a",
        ".product-image",
      ],
      belowProductName: [".desc_blk > h5", ".desc > h5"],
      belowProductPrice: [".price"],
    },
    home: {
      parent: [".owl-item"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".desc > h5"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".main_box"],
      badge: [".product-image"],
      belowProductImage: [".product-image"],
      belowProductName: [".desc > h5"],
      belowProductPrice: [".price"],
      mutations: [".collection-grid"],
    },
    search: {
      parent: [".main_box"],
      badge: [".list-image > a"],
      belowProductImage: [".list-image > a"],
      belowProductName: [".product-details > h5"],
      belowProductPrice: [".price"],
      mutations: [".search-list"],
    },
  },
  92541943948: {
    home: {
      parent: [".product-tile"],
      badge: [".img-fluid"],
      belowProductImage: ["a.text-center"],
      belowProductName: [".product-tile-name > h2"],
      belowProductPrice: [".product-tile-price"],
    },
    collections: {
      parent: [".product-tile"],
      badge: [".img-fluid"],
      belowProductImage: ["a.text-center"],
      belowProductName: [".product-tile-name > h2"],
      belowProductPrice: [".product-tile-price"],
    },
    products: {
      parent: [".product-tile", "div[data-section-type='product']"],
      badge: [".img-fluid", ".product-picture .slick-list.draggable"],
      belowProductImage: [
        "a.text-center",
        ".product-picture .slick-list.draggable",
      ],
      belowProductName: [".product-tile-name > h2", ".row h1"],
      belowProductPrice: [
        ".product-tile-price",
        ".container.product-store-data",
      ],
    },
    search: {
      parent: [".product-tile"],
      badge: [".img-fluid"],
      belowProductImage: ["a.text-center"],
      belowProductName: [".product-tile-name > h2"],
      belowProductPrice: [".product-tile-price"],
    },
  },
  134788841693: {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [".slick-list", ".grid-view_image a"],
      belowProductImage: [".slick-list", ".grid-view_image"],
      belowProductName: [".product-single__title", ".grid-view-item__title"],
      belowProductPrice: [".product-single__price", ".grid-view-item__meta"],
    },
    home: {
      parent: [".l4cl li", ".l4cl .li"],
      badge: [".img-multiply > a"],
      belowProductImage: [".img-multiply > a"],
      belowProductName: [".text-uppercase"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".grid-view_image a"],
      belowProductImage: [".grid-view_image"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".grid-view_image a"],
      belowProductImage: [".grid-view_image"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
  },
  4267495: {
    home: {
      parent: ["div[data-handle]"],
      badge: ["div[data-handle] > a"],
      belowProductImage: ["a[title] > img"],
      belowProductName: ["big"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: ["div[data-handle]"],
      badge: ["div[data-handle] > a"],
      belowProductImage: ["a[title] > img"],
      belowProductName: ["big"],
      belowProductPrice: [".price"],
    },
    products: {
      parent: [".content"],
      badge: [".product-images"],
      belowProductImage: [".product-images"],
      belowProductName: [".product h2"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: ["#search li"],
      badge: [".result-image"],
      belowProductImage: [".result-image"],
      belowProductName: ["h3[data-handle]"],
      belowProductPrice: [".price"],
    },
  },
  10790309: {
    home: {
      parent: [".product-detail", ".product-block"],
      badge: [".main-image", ".image-link"],
      belowProductImage: [".main-image", ".image-link"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    collections: {
      parent: [".product-block"],
      badge: [".image-link"],
      belowProductImage: [".image-link"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    products: {
      parent: [".product-detail", ".product-block"],
      badge: [".gallery", ".image-link"],
      belowProductImage: [".gallery", ".image-link"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
    search: {
      parent: [".product-block"],
      badge: [".image-link"],
      belowProductImage: [".image-link"],
      belowProductName: [".title"],
      belowProductPrice: [".price"],
    },
  },
  140527599919: {
    home: {
      parent: [".product-item"],
      badge: [".product-item-top .product-image-container"],
      belowProductImage: [".product-item-top .product-image-container"],
      belowProductName: [".product-item-name"],
      belowProductPrice: [".product-single__prices"],
    },
    collections: {
      parent: [".product-item"],
      badge: [".product-item-top .product-image-container"],
      belowProductImage: [".product-item-top .product-image-container"],
      belowProductName: [".product-item-name"],
      belowProductPrice: [".product-price"],
    },
    products: {
      parent: [".product-single"],
      badge: [".product-main-image .product-single__image-wrapper"],
      belowProductImage: [".product-main-image .product-single__image-wrapper"],
      belowProductName: [".page-title"],
      belowProductPrice: [".product-main-price"],
    },
    search: {
      parent: [".product-item"],
      badge: [".product-item-top .product-image-container"],
      belowProductImage: [".product-item-top .product-image-container"],
      belowProductName: [".product-item-name"],
      belowProductPrice: [".product-price"],
    },
  },
  142176256287: {
    home: {
      parent: [".product-grid-item"],
      badge: [".image_group .reveal"],
      belowProductImage: [".image_group .reveal"],
      belowProductName: [".grid-link__title"],
      belowProductPrice: [".grid-link__meta"],
    },
    collections: {
      parent: [".product-grid-item"],
      badge: [".image_group .reveal"],
      belowProductImage: [".image_group .reveal"],
      belowProductName: [".grid-link__title"],
      belowProductPrice: [".grid-link__meta"],
    },
    products: {
      parent: [".product-grid-item", ".product-template__container"],
      badge: [".image_group .reveal", ".main-swiper-container"],
      belowProductImage: [".image_group .reveal", ".main-swiper-container"],
      belowProductName: [".grid-link__title", ".product-title"],
      belowProductPrice: [".grid-link__meta", ".product-price"],
    },
    search: {
      parent: [".product-grid-item"],
      badge: [".image_group .reveal"],
      belowProductImage: [".image_group .reveal"],
      belowProductName: [".grid-link__title"],
      belowProductPrice: [".grid-link__meta"],
    },
  },
  121484017827: {
    products: {
      parent: [".product-single", ".grid-view-item"],
      badge: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__link",
      ],
      belowProductImage: [
        ".product-single__photos .product-single__photo",
        ".grid-view-item__link",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-view-item__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product-single__price",
        ".grid-view-item__meta",
      ],
    },
    home: {
      parent: [".grid-view-item"],
      badge: [".grid-view-item__link"],
      belowProductImage: [".grid-view-item__link"],
      belowProductName: [".grid-view-item__title"],
      belowProductPrice: [".grid-view-item__meta"],
    },
    collections: {
      parent: [".spf-product-card"],
      badge: [".spf-product-card__image-wrapper "],
      belowProductImage: [".spf-product-card__image-wrapper "],
      belowProductName: [".spf-product-card__title"],
      belowProductPrice: [".spf-product-card__price-wrapper"],
      mutations: [".grid--view-items"],
      mutationConfig: { childList: true, subtree: true, attributes: true },
    },
    search: {
      parent: [".spf-product-card"],
      badge: [".spf-product-card__image-wrapper "],
      belowProductImage: [".spf-product-card__image-wrapper "],
      belowProductName: [".spf-product-card__title"],
      belowProductPrice: [".spf-product-card__price-wrapper"],
    },
  },
  123388362830: {
    products: {
      parent: [".grid--product-images-right", ".grid-product"],
      badge: [
        ".product__main-photos .image-wrap",
        ".grid-product__image-mask .image-wrap",
      ],
      belowProductImage: [
        ".product__main-photos .image-wrap",
        ".grid-product__image-mask .image-wrap",
      ],
      belowProductName: [
        ".product-single__meta .product-single__title",
        ".grid-product__meta .grid-product__title",
      ],
      belowProductPrice: [
        ".product-single__meta .product__price",
        ".grid-product__meta .grid-product__price",
      ],
    },
    home: {
      parent: [".grid-product"],
      badge: [".grid-product__image-mask .image-wrap"],
      belowProductImage: [".grid-product__image-mask .image-wrap"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
    collections: {
      parent: [".grid-product"],
      badge: [".grid-product__image-mask .image-wrap"],
      belowProductImage: [".grid-product__image-mask .image-wrap"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
    search: {
      parent: [".grid-product"],
      badge: [".grid-product__image-mask .image-wrap"],
      belowProductImage: [".grid-product__image-mask .image-wrap"],
      belowProductName: [".grid-product__meta .grid-product__title"],
      belowProductPrice: [".grid-product__meta .grid-product__price"],
    },
  },
  131920527531: {
    products: {
      parent: [".product-details", ".product-wrapper"],
      badge: [".product-details-img", ".product-img > a"],
      belowProductImage: [".product-details-img", ".product-img > a"],
      belowProductName: [
        ".product-details-content #popup_cart_title",
        ".product-content .popup_cart_title",
      ],
      belowProductPrice: [
        ".product-details-content #ProductPrice",
        ".product-content .product-price-wrapper",
      ],
    },
    home: {
      parent: [".owl-item"],
      badge: [".product-img > a"],
      belowProductImage: [".product-img > a"],
      belowProductName: [".product-content .popup_cart_title"],
      belowProductPrice: [".product-content .product-price-wrapper"],
    },
    collections: {
      parent: [".product-wrapper"],
      badge: [".product-img > a"],
      belowProductImage: [".product-img > a"],
      belowProductName: [".product-content .popup_cart_title"],
      belowProductPrice: [".product-content .product-price-wrapper"],
    },
    search: {
      parent: [".product-wrapper"],
      badge: [".product-img > a"],
      belowProductImage: [".product-img > a"],
      belowProductName: [".product-content .popup_cart_title"],
      belowProductPrice: [".product-content .product-price-wrapper"],
    },
  },
  139847401737: {
    products: {
      parent: [".Product__Wrapper", ".ProductItem"],
      badge: [
        ".Product__Slideshow .Product__SlideItem",
        ".ProductItem__Wrapper .ProductItem__ImageWrapper",
      ],
      belowProductImage: [
        ".Product__Slideshow .Product__SlideItem",
        ".ProductItem__Wrapper .ProductItem__ImageWrapper",
      ],
      belowProductName: [
        ".Product__Info .ProductMeta__Title",
        ".ProductItem__Info .ProductItem__Title",
      ],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
    home: {
      parent: [".ProductItem"],
      badge: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
    collections: {
      parent: [".ProductItem"],
      badge: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
    search: {
      parent: [".ProductItem"],
      badge: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
  },
  136149139682: {
    products: {
      parent: [".product-wrapper", ".product-link"],
      badge: [
        ".product-images .swiper-slide .img--wrapper",
        ".product-link__image .img--wrapper",
      ],
      belowProductImage: [
        ".product-images .swiper-wrapper",
        ".product-link__image .img--wrapper",
      ],
      belowProductName: [
        ".product-subtitle",
        ".product-link__meta .product-link__title",
      ],
      belowProductPrice: [
        ".product-asset",
        ".product-link__meta .product-price",
      ],
    },
    home: {
      parent: [".product-link"],
      badge: [".product-link__image .img--wrapper"],
      belowProductImage: [".product-link__image .img--wrapper"],
      belowProductName: [".product-link__meta .product-link__title"],
      belowProductPrice: [".product-link__meta .product-price"],
    },
    collections: {
      parent: [".product-link"],
      badge: [".product-link__image .img--wrapper"],
      belowProductImage: [".product-link__image .img--wrapper"],
      belowProductName: [".product-link__meta .product-link__title"],
      belowProductPrice: [".product-link__meta .product-price"],
    },
    search: {
      parent: [".product-link"],
      badge: [".product-link__image .img--wrapper"],
      belowProductImage: [".product-link__image .img--wrapper"],
      belowProductName: [".product-link__meta .product-link__title"],
      belowProductPrice: [".product-link__meta .product-price"],
    },
  },
  136545599746: {
    products: {
      parent: [".product-single", ".grid__item"],
      badge: [".product-single__media-wrapper", ".card-image"],
      belowProductImage: [".product-single__media-wrapper", ".card-image"],
      belowProductName: [".product-single__title", ".grid-product__title"],
      belowProductPrice: [
        ".price-container-wrapper",
        ".grid-product__price-wrap",
      ],
    },
    home: {
      parent: [".grid__item", ".product-single"],
      badge: [".card-image", ".product-single__media-wrapper"],
      belowProductImage: [".card-image", ".product-single__media-wrapper"],
      belowProductName: [".grid-product__title", ".product-single__title"],
      belowProductPrice: [
        ".grid-product__price-wrap",
        ".price-container-wrapper",
      ],
    },
    collections: {
      parent: [".grid__item"],
      badge: [".card-image"],
      belowProductImage: [".card-image"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price-wrap"],
    },
    search: {
      parent: [".grid__item"],
      badge: [".card-image"],
      belowProductImage: [".card-image"],
      belowProductName: [".grid-product__title"],
      belowProductPrice: [".grid-product__price-wrap"],
    },
  },
  150662316347: {
    products: {
      parent: [
        ".grid-product__link",
        ".grid--product-images--partial",
        ".grid",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap",
        ".pwzrswiper-container",
        ".pf-main-media",
        ".grid__image-ratio.lazyloaded",
      ],
      belowProductImage: [
        ".grid-product__image-mask",
        ".flickity-viewport",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [
        "div[data-product-blocks] .product-block .inventory--low",
        "div[data-product-blocks] .product-block .sales-points li.sales-point",
        ".swatch-wrap.swatchprimarywrap",
      ],
    },
    home: {
      parent: [".grid-product__content ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [".swatch-wrap.swatchprimarywrap"],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    collections: {
      parent: [
        ".grid-grid__item ",
        ".grid--product-images--partial",
        ".grid__item",
      ],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [".swatch-wrap.swatchprimarywrap"],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
        ".boost-pfs-filter-products",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
    search: {
      parent: [".grid-grid__item ", ".grid--product-images--partial"],
      badge: [
        ".grid-product__image-mask",
        ".product-image-main .image-wrap:last-of-type",
      ],
      belowProductImage: [".grid-product__image-mask ", ".flickity-viewport"],
      belowProductName: [
        ".grid-product__meta .grid-product__title",
        ".product-single__meta .product-single__title",
      ],
      belowProductPrice: [".swatch-wrap.swatchprimarywrap"],
      mutations: [
        ".grid--product-images--partial .product__thumb",
        ".grid--product-images--partial a",
        ".product-main-slide",
        ".flickity-slider",
        ".product__main-photos",
        ".product-slideshow",
      ],
      extra: {
        badge: (el) => {
          el.closest(".product-main-slide").style.overflow = "visible";
          el.closest(
            ".grid--product-images--partial .flickity-viewport"
          ).style.overflow = "visible";
          const mainSlide = el.closest(".product-main-slide");
          mainSlide.style.overflow = "visible";
          mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
            ? 0
            : 1;
          const flkty = Flickity.data(
            document.querySelector(
              ".product-slideshow.flickity-enabled.is-draggable"
            )
          );
          flkty.on("change", function listener() {
            el.closest(
              ".grid--product-images--partial .flickity-viewport"
            ).style.overflow = "visible";
            mainSlide.style.opacity = mainSlide.hasAttribute("aria-hidden")
              ? 0
              : 1;
          });
        },
      },
    },
  },
  134384353530: {
    products: {
      parent: [
        ".card-wrapper",
        ".product",
        ".product-section",
        ".grid__item",
        ".product-card",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product__media",
        ".pmslider-slide--inner",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".product-full-image > div:first-child",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pmslider-root",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [".product-recommendations"],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
        ".producttab-item",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
      ],
    },
    collections: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: ["#CollectionProductGrid", ".boost-pfs-filter-products"],
    },
    search: {
      parent: [".card--media", ".grid__item", ".product-grid-item"],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
      ],
      belowProductImage: [".card > .card__inner", ".product-grid-media"],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
      ],
      belowProductPrice: [".price"],
    },
  },
  129669103821: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product__media",
        ".pmslider-slide--inner",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pmslider-root",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price .price__sale dd:last-child",
        ".grid-product__price",
      ],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price .price__sale dd:last-child",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
      ],
    },
    collections: {
      parent: [".card--media", ".grid__item", ".product-grid-item"],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
      ],
      belowProductPrice: [
        ".price .price__sale dd:last-child",
        ".grid-product__price",
      ],
    },
    search: {
      parent: [".card--media", ".grid__item", ".product-grid-item"],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
      ],
      belowProductImage: [".card > .card__inner", ".product-grid-media"],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
      ],
      belowProductPrice: [".price .price__sale dd:last-child"],
    },
  },
  160091406631: {
    products: {
      parent: [".product-main__wrapper", ".product-card"],
      badge: [
        ".product-main-gallery-scroll .image-scroller__item",
        ".product-card__image-link",
      ],
      belowProductImage: [
        ".product-main-gallery-scroll .image-scroller__item",
        ".product-card__image-link",
      ],
      belowProductName: [
        ".product-main-details__title",
        ".product-card__title",
      ],
      belowProductPrice: [
        ".product-main-details__price",
        ".product-card__prices",
      ],
    },
    home: {
      parent: [".product-card"],
      badge: [".product-card__image-link"],
      belowProductImage: [".product-card__image-link"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__prices"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card__image-link"],
      belowProductImage: [".product-card__image-link"],
      belowProductName: [".product-card__title"],
      belowProductPrice: [".product-card__prices"],
    },
    search: {
      parent: [".ProductItem"],
      badge: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductImage: [".ProductItem__Wrapper .ProductItem__ImageWrapper"],
      belowProductName: [".ProductItem__Info .ProductItem__Title"],
      belowProductPrice: [".ProductItem__Info .ProductItem__PriceList"],
    },
  },
  129210482825: {
    products: {
      parent: [".card-wrapper", ".product"],
      badge: [
        ".card--media .card__media",
        ".product__media-item .product__media.media",
      ],
      belowProductImage: [".card > .card__inner", ".product__media-list"],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
      ],
      mutations: [
        ".product__info-container .no-js-hidden",
        "#promotedWineListContainer",
        "#featuredWineListContainer",
      ],
    },
    collections: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".item-content",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
        ".product-single__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".gf_product-prices",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [".collection"],
    },
    search: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".spf-product-card",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
        ".spf-product-card__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".price",
        ".spf-product-card__price-wrapper",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [
        ".product-grid-container",
        ".facets__disclosure",
        ".ss360-layer",
        ".boost-pfs-filter-products",
      ],
    },
  },
  137527787734: {
    products: {
      parent: [".product-single", ".grid-view-item"],
      badge: [".prod-large-img", "a.grid-view-item__link"],
      belowProductImage: [".prod-large-img", "a.grid-view-item__link"],
      belowProductName: [
        ".product-single__title",
        ".details .grid-view-item__title",
      ],
      belowProductPrice: [
        ".product-single__price",
        ".details .grid-view-item__meta",
      ],
    },
    home: {
      parent: [".grid-view-item"],
      badge: ["a.grid-view-item__link"],
      belowProductImage: ["a.grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
    collections: {
      parent: [".grid-view-item"],
      badge: ["a.grid-view-item__link"],
      belowProductImage: ["a.grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
    search: {
      parent: [".grid-view-item"],
      badge: ["a.grid-view-item__link"],
      belowProductImage: ["a.grid-view-item__link"],
      belowProductName: [".details .grid-view-item__title"],
      belowProductPrice: [".details .grid-view-item__meta"],
    },
  },
  131188588601: {
    home: {
      parent: [".product-card"],
      badge: [".product-card_image"],
      belowProductImage: [".product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    collections: {
      parent: [".product-card"],
      badge: [".product-card_image"],
      belowProductImage: [".product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    products: {
      parent: [".product_details", ".product-card"],
      badge: [".product-media_main", ".product-card_image"],
      belowProductImage: [".product-media_main", ".product-card_image"],
      belowProductName: [".product_name", ".product-card_name"],
      belowProductPrice: [".product-price"],
    },
    search: {
      parent: [".product-card"],
      badge: [".product-card_image"],
      belowProductImage: [".product-card_image"],
      belowProductName: [".product-card_name"],
      belowProductPrice: [".product-price"],
    },
  },
  123923824718: {
    products: {
      parent: [
        ".product-main-block",
        ".product-card",
        ".index-product-slide-content",
        ".collection-products-item",
      ],
      badge: [
        ".gallery .swiper.photo",
        ".product-img",
        "div.relative",
        ".collection-products-item-img",
      ],
      belowProductImage: [
        ".gallery .swiper.photo",
        ".product-img",
        "div.relative",
      ],
      belowProductName: [".meta h2.text-xl", ".product-title"],
      belowProductPrice: [
        ".main-product__price_box",
        ".product-prices",
        ".product-price-wrapper",
      ],
      extra: {
        afterAll: function fix() {
          const elements = Array.from(
            document.querySelectorAll(
              ".collection-products-item .product-badge_aco"
            )
          );
          for (const parentEle of elements) {
            const parentDiv = parentEle.closest(".collection-products-item");
            parentDiv.appendChild(parentEle);
          }
        },
      },
    },
    home: {
      parent: [".index-product-slide-content", ".collection-products-item"],
      badge: ["div.relative", ".collection-products-item-img"],
      belowProductImage: ["div.relative"],
      belowProductName: [".product-title"],
      belowProductPrice: [".product-price-wrapper"],
      extra: {
        afterAll: function fix() {
          const elements = Array.from(
            document.querySelectorAll(
              ".collection-products-item .product-badge_aco"
            )
          );
          for (const parentEle of elements) {
            const parentDiv = parentEle.closest(".collection-products-item");
            parentDiv.appendChild(parentEle);
          }
        },
      },
    },
    collections: {
      parent: [
        ".product-card",
        ".index-product-slide-content",
        ".shg-box-content",
        ".collection-products-item",
      ],
      badge: [
        ".product-img",
        "div.relative",
        ".shg-product-image-wrapper",
        ".collection-products-item-img",
      ],
      belowProductImage: [
        ".product-img",
        "div.relative",
        ".shg-product-image-wrapper",
      ],
      belowProductName: [".product-title", ".shg-product-title-component"],
      belowProductPrice: [
        ".product-prices",
        ".product-price-wrapper",
        ".shg-box.shg-c .shg-box-content",
      ],
      extra: {
        afterAll: function fix() {
          const elements = Array.from(
            document.querySelectorAll(
              ".collection-products-item .product-badge_aco"
            )
          );
          for (const parentEle of elements) {
            const parentDiv = parentEle.closest(".collection-products-item");
            parentDiv.appendChild(parentEle);
          }
        },
      },
    },
    search: {
      parent: [
        ".product-card",
        ".index-product-slide-content",
        ".collection-products-item",
      ],
      badge: [".product-img", "div.relative", ".collection-products-item-img"],
      belowProductImage: [".product-img", "div.relative"],
      belowProductName: [".product-title"],
      belowProductPrice: [".product-prices", ".product-price-wrapper"],
      extra: {
        afterAll: function fix() {
          const elements = Array.from(
            document.querySelectorAll(
              ".collection-products-item .product-badge_aco"
            )
          );
          for (const parentEle of elements) {
            const parentDiv = parentEle.closest(".collection-products-item");
            parentDiv.appendChild(parentEle);
          }
        },
      },
    },
  },
  163535585560: {
    products: {
      parent: [".product-single", ".grid-view-item", ".list-view-item"],
      badge: [
        ".prod-large-img .slick-list.draggable",
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductImage: [
        ".prod-large-img .slick-list.draggable",
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductName: [
        ".product-single__title",
        ".grid-view-item__title",
        ".list-view-item__title",
      ],
      belowProductPrice: [".product-single__price", ".product-price__price"],
    },
    home: {
      parent: [".grid-view-item", ".list-view-item"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductName: [".grid-view-item__title", ".list-view-item__title"],
      belowProductPrice: [".product-price__price"],
    },
    collections: {
      parent: [".grid-view-item", ".list-view-item"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductName: [".grid-view-item__title", ".list-view-item__title"],
      belowProductPrice: [".product-price__price"],
    },
    search: {
      parent: [".grid-view-item", ".list-view-item"],
      badge: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductImage: [
        ".grid-view_image .grid-view-item__link",
        ".list-view-item__image-wrapper",
      ],
      belowProductName: [".grid-view-item__title", ".list-view-item__title"],
      belowProductPrice: [".product-price__price"],
    },
  },
  161725677869: {
    products: {
      parent: [
        ".card-wrapper",
        ".product",
        ".product-section",
        ".grid__item",
        ".product-card",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product__media",
        ".pmslider-slide--inner",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-slide",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pmslider-root",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
      ],
      belowProductPrice: [".product-form__input.product-form__quantity"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
      ],
      mutations: [
        ".product__info-container .no-js-hidden",
        "#promotedWineListContainer",
        "#featuredWineListContainer",
      ],
    },
    collections: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".item-content",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
        ".product-single__title",
        ".boost-pfs-filter-product-item-title",
        ".product-title",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".gf_product-prices",
        ".boost-pfs-filter-product-item-price",
        ".product-prices",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".boost-pfs-filter-products",
        ".ss360-layer",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".spf-product-card",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
        ".spf-product-card__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".price",
        ".spf-product-card__price-wrapper",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".ss360-layer",
        ".boost-pfs-filter-products",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
  },
  139004313816: {
    products: {
      parent: [".product-card-wrapper", ".product"],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product__media",
        ".pmslider-slide--inner",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-slide",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".pmslider-root",
        ".product-main-slide.is-selected",
        ".grid-product__image-mask",
        ".product-card-media",
        ".pwzrswiper-container",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-single__title",
        ".grid-product__title",
        ".product-card-heading",
      ],
      belowProductPrice: [".price", ".grid-product__price"],
      mutations: [
        ".product-recommendations",
        ".product__info-container .no-js-hidden",
      ],
    },
    home: {
      parent: [
        ".card-wrapper.underline-links-hover",
        ".product",
        ".grid__item",
        ".owl-item.active",
        ".pf-c",
        ".product_wrapper",
        ".product-card",
      ],
      badge: [
        ".card__media ",
        ".product__media",
        ".card--product .media",
        ".owl-item .product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product__media",
        ".product-img > a",
        ".sc-bUhFKy .splide__list",
        ".pf-main-media .splide__list",
        ".media-card",
        ".product-card-media",
      ],
      belowProductName: [
        ".product__title ",
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-info .pn-ellipsis",
        ".sc-gHjyzD",
        ".product-card-heading",
      ],
      belowProductPrice: [
        ".price",
        ".product-info .product-price",
        "sc-cjrPHo",
        ".price-review_wrapper",
      ],
      mutations: [
        ".product__info-container .no-js-hidden",
        "#promotedWineListContainer",
        "#featuredWineListContainer",
      ],
    },
    collections: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".item-content",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".grid-product__image-mask",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        "a.img-holder",
        ".boost-pfs-filter-product-item-image",
        ".product-img",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".grid-product__title",
        ".product-grid-heading",
        ".product-single__title",
        ".boost-pfs-filter-product-item-title",
        ".product-title",
      ],
      belowProductPrice: [
        ".price",
        ".grid-product__price",
        ".gf_product-prices",
        ".boost-pfs-filter-product-item-price",
        ".product-prices",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".boost-pfs-filter-products",
        ".ss360-layer",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
    search: {
      parent: [
        ".card--media",
        ".grid__item",
        ".product-grid-item",
        ".ss360-suggests__wrap",
        ".spf-product-card",
        ".boost-pfs-filter-product-item",
      ],
      badge: [
        ".card--media .card__media",
        ".card--product .media",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductImage: [
        ".card > .card__inner",
        ".product-grid-media",
        ".ss360-suggests__image-wrap",
        ".spf-product-card__image-wrapper",
        ".boost-pfs-filter-product-item-image",
      ],
      belowProductName: [
        ".card__heading.h5 .full-unstyled-link",
        ".card-information__text.h5",
        ".product-grid-heading",
        ".spf-product-card__title",
        ".boost-pfs-filter-product-item-title",
      ],
      belowProductPrice: [
        ".price",
        ".spf-product-card__price-wrapper",
        ".boost-pfs-filter-product-item-price",
      ],
      mutations: [
        ".product-grid-container",
        "#ProductGridContainer",
        ".ss360-layer",
        ".boost-pfs-filter-products",
      ],
      mutationConfig: { childList: true, subtree: true },
    },
  },
};
