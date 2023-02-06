<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/sections/TheHeader.vue";
import TheFooter from "./components/sections/TheFooter.vue";

const headerData = {
  logoTitle1: "Ba",
  logoTitle2: "chira",
  navbarLinks: [
    {
      linkName: "Home",
      linkPath: "",
    },
    {
      linkName: "Products",
      linkPath: "",
    },
    {
      linkName: "Categories",
      linkPath: "",
    },
    {
      linkName: "Brands",
      linkPath: "",
    },
    {
      linkName: "Pricing",
      linkPath: "",
    },
  ],
};

const footerData = {
  year: new Date(),
  companyName: "Bachira",
  holderName: "Giatinaja",
  logoProperties: {
    logoTitle1: "Ba",
    logoTitle2: "chira",
  },
  footerBlurb:
    "Bachira is an online store dealing with all product Bachira provide cheap, high quality, products to customers",
  menus: [
    {
      listTitle: "For Beginner",
      listContent: [
        {
          linkName: "About",
          linkPath: "/",
        },
        {
          linkName: "Career",
          linkPath: "/",
        },
        {
          linkName: "Promotion",
          linkPath: "/",
        },
      ],
    },
    {
      listTitle: "Overview",
      listContent: [
        {
          linkName: "Product",
          linkPath: "/",
        },
        {
          linkName: "Categories",
          linkPath: "/",
        },
        {
          linkName: "Pricing",
          linkPath: "/",
        },
      ],
    },
    {
      listTitle: "Explore Us",
      listContent: [
        {
          linkName: "Our Career",
          linkPath: "/",
        },
        {
          linkName: "Privacy",
          linkPath: "/",
        },
        {
          linkName: "Terms & Conditions",
          linkPath: "/",
        },
      ],
    },
  ],
  contactInfo: {
    listTitle: "Connect Us",
    email: "support@bachira.com",
    phone: "021 - 555 -456",
    address: "Sudirman, South Jakarta",
  },
};

const bodyData = {
  sponsorProps: {
    sponsorCopy:
      "We Collaborate With 250++ Leading Top<br>E Commerce and Brands",
    sponsorList: [
      "tokopedia-logo.svg",
      "balenciaga-logo.svg",
      "adidas-logo.svg",
      "gucci-logo.svg",
      "bukalapak-logo.svg",
    ],
  },
  heroProps: {
    heroTextP1: "Best Place to Buy",
    heroTextP2: "Everything.",
    heroTextP3:
      "At Bachira, you can shop for all your favorite beauty brands, clothes, household products and more at a single place.",
    heroButtonData: {
      buttonValue: "Shop Now",
      buttonPath: "/",
    },
    heroImageData: {
      src: "Hero_Image.png",
      alt: "shopping-lady",
    },
  },
  categoriesProps: {
    topLeftCardProps: {
      cardText: {
        categoryName: "Fashion",
        itemNo: 30000,
      },
      linkPath: "/",
      imageSrc: "./static/images/categories/category-fashion.svg",
    },
    bottomLeftCardProps: {
      cardText: {
        categoryName: "Skincare",
        itemNo: 2000,
      },
      linkPath: "/",
      imageSrc: "./static/images/categories/category-skincare.svg",
    },
    centerCardProps: {
      cardText: {
        categoryName: "Shoes",
        itemNo: 10000,
      },
      linkPath: "/",
      imageSrc: "/./static/images/categories/category-shoes.svg",
    },
    rightCardProps: {
      cardText: {
        categoryName: "Electronic",
        itemNo: 10000,
      },
      linkPath: "/",
      imageSrc: "./static/images/categories/category-electronic.svg",
    },
    categoriesCopy: "Browse Categories of<br>The Store",
  },
  whyChooseProps: {
    whyChooseIntro:
      'Why Choose Ba<span style="color: var(--green)">chira</span>?',

    whyChooseList: [
      {
        itemTitle: "Free Delivery",
        itemContent:
          "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
        imgUrl: "./static/images/delivery.png",
      },
      {
        itemTitle: "Trusted Platform",
        itemContent:
          "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
        imgUrl: "./static/images/honesty.png",
      },
      {
        itemTitle: "Here For You",
        itemContent:
          "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
        imgUrl: "./static/images/24-7.png",
      },
    ],
  },
  productListIntro: "Populer Products From<br>All Brands",
  brandProductListProps: {
    brandProductListIntro: "Populer Products From<br>Apple",
    selectedBrandName: "Apple",
  },
};
</script>

<template>
  <TheHeader v-bind="headerData" />
  <Suspense>
    <RouterView v-bind="bodyData" />
  </Suspense>
  <TheFooter v-bind="footerData" />
</template>
