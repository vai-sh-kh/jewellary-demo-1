/**
 * Data constants extracted from HTML files
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  material: string;
  image: string;
  images?: string[];
  category: string;
  featured?: boolean;
  new?: boolean;
  reference?: string;
  rating?: number;
  reviewsCount?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  material: string;
  reference: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified?: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavigationLink[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  location?: string;
}

// Navigation
export const navigationLinks: NavigationLink[] = [
  { label: "Collections", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Gifts", href: "#" },
  { label: "Bespoke", href: "#" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "#" },
  { label: "High Jewelry", href: "#" },
  { label: "Bridal", href: "#" },
  { label: "Watches", href: "#" },
];

// Products
export const products: Product[] = [
  {
    id: "1",
    name: "Celestial Diamond Pendant",
    price: 2400,
    description: "18k Gold | 0.5ct Diamond",
    material: "18k Gold | 0.5ct Diamond",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2AFGrVVRq2ZXrjISpNIXIZ5SoCk0GGXzJYO0gUfbMpIQ59_e0_Mh5T5x98Ek9vX011yyk6i8RibyRa-6Y0X_9FO9QjJ0CAIeItHM2XUsUrtMOuy-99MbUCdMrA92MnLcqkPqOTV00pi5b-m-yxwxuavXkPoZH2JHMB-2kWh4Fqdn9cA95tl-7Jd2jrCLJO_TELa0Aty_qTK20s6C6FWHI7DlRgYimUh_2sM28YI0W9XNKUfxkTXS7g93EU4FkkMQFk8z9ZYbQvg",
    category: "Necklaces",
    reference: "0012458",
  },
  {
    id: "2",
    name: "Onyx Signet Ring",
    price: 1850,
    description: "Platinum | Black Onyx",
    material: "Platinum | Black Onyx",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8TNisNIi5eqTcog6s9W5q11bZRGde20Fa4dYaH46f6f3rWDJUdaCiUEgXpRIfQxsherkZwGoONPWfiHc4DkizxZVZQTo99Xzb9TpKNtOMlDMl0XXloO4Pr2GTzc8b4MAPJAZsYTKVbqUXId7n1_E7aG44HZQ3rmm1rhOkKg5Exo_fKsjsGN06z6dT1CEE-aVYptC6n9OtyOiiq3_76szT5q9u2IAj1_CG3JSyEjyvJzQnAlVBJwB-GYE4w3NN6CWL6YV6BprLaDY",
    category: "Rings",
    reference: "0098231",
  },
  {
    id: "3",
    name: "Eternity Band",
    price: 3200,
    description: "Rose Gold | Pave Diamonds",
    material: "Rose Gold | Pave Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEC1RF45EZ8jk6dD_CSPCcV04tFgahLDfnJeCkoB0WFoPB_l7Q0_9wZpj7UeDfEgxFgGY6TlcIvionbLWP8rKrxbRCUfVaINe_FDLKMnIHepGsARGV6yEIlGpHLcGzh-4oRnutkYV-cCY-t0ryMETAvax-aTmBiJ0r0zqRWJOQzxcYwZmnAn-ESUHItyaRoBcx4RNPkTg3zXI7DHYbQPNHyP9QeCSvKm9rRmGIMq0OBVp7O6a1TE5U3aL9LRpLgQzfP-_8rZOUEM",
    category: "Rings",
    reference: "0044512",
  },
  {
    id: "4",
    name: "Celestial Pendant",
    price: 2400,
    description: "18k Gold & Diamonds",
    material: "18k Gold & Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "5",
    name: "Eternity Bangle",
    price: 5200,
    description: "24k Solid Gold",
    material: "24k Solid Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Bracelets",
  },
  {
    id: "6",
    name: "Radiance Solitaire",
    price: 8900,
    description: "Platinum & Diamond",
    material: "Platinum & Diamond",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
    new: true,
    featured: true,
  },
  {
    id: "7",
    name: "Aura Hoops",
    price: 1850,
    description: "18k Rose Gold",
    material: "18k Rose Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
  },
  {
    id: "8",
    name: "Heritage Timepiece",
    price: 12500,
    description: "Gold & Leather",
    material: "Gold & Leather",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
    category: "Watches",
  },
  {
    id: "9",
    name: "Solitaire Pendant",
    price: 1200,
    description: "18k White Gold",
    material: "18k White Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7yMhugAo171ii8aNa2xQBPA3na5AATWWHwYQO1gHBXTeyILTq2-nabPDT_qfT2wheAanOeBISseku3QTlBVH8YOA-5ySPoY8IUgHwR8f5Z-C15q6meoA7NZNNBi1ezrPJzSkUJ2NmlP_qVHpOzrxTeHlOcZ2s-ea777An7YleWHUOM0aQ0VnfAJ2ssRBPT4qj4muom5MBb5HrSGfC-UPHWMdIyB6v_Y536Hm339D4HdUbl9sagcgMShQ60u7_jF-KM8Poc7jwuPg",
    category: "Necklaces",
    featured: true,
  },
  {
    id: "10",
    name: "Gold Cuff Bracelet",
    price: 850,
    description: "24k Solid Gold",
    material: "24k Solid Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC98kDxui4tqLMliopQhDeLtzX2876oJJJjDiiTq_kvStVkDozOAAR6KFXaqE9YKzdnDJjbuBJDIgBti1MVvS0-wLESgeAm1eQFCW2Bq7lxfC8JZO3HAoUeS4gy9IkJleI9le6nBNGOnIM13iIElcq0zjeMsx6_Yg4H2iPJJUIE4EPXYmKY-IkDKk2gNsmmH5UAS4Mncq9KDVPyOUf4cRz5iLV48Ghky75MDJ-nx6EGDcTVH9UVxTART7JMdzHieWDIzri-VVdix2w",
    category: "Bracelets",
    featured: true,
  },
  {
    id: "11",
    name: "Emerald Signet",
    price: 2100,
    description: "Colombian Emerald",
    material: "Colombian Emerald",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRtrJTbXIujqwIi8UGe8Mj5A4r2YjZJuCdNgLss5L-o_ssy_jfb1GPqju-Sx3RTHaeiJgXrb51sDB1K3RKS89E-TOKzKvsjA8O72HWJRyc8S2O9RVEJGlfjwAalALxBqxClPGqDU55uFGbFfYeb2ywTUz-G5OhswrSrZqPd1AiJjf-0A3vz4YX6fg2jp_GH2M5nk2bE08stvnC_1PzajkDHI34o1_yqEoQz7EGA0V-cjoQVcu35qRXSfnFPvNaE3epPkk1CDKO2qk",
    category: "Rings",
    featured: true,
  },
  {
    id: "12",
    name: "The Eclat",
    price: 4250,
    description: "Diamond Ring - Handcrafted in 18k yellow gold, featuring a radiant cut center stone surrounded by a halo of micro-pavé diamonds.",
    material: "18k Yellow Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArEokQnZz3zk0OV_lapR1AxDh-ePXRHrRSQFcBWTq64UuNuvJ_no2HEyjfv9ZVS_Hp0DPKD_sr9HoJw3Jyaojkq-pPSWdTtoJy1HeIoAu3WCbVzY52FQQGvf5xboCm_BX9qqgJh64rz6ItIqjR3UUQyJUbs9ENNPbZEaSNqTV7om_Q_sVw89AxTKXE6bPqs7PBq3cglYhLuzRi2MqZHZ6v1r_TFTVmbhnzj5v1B4yI_qGRCG9uI_B5lflgMhtsWiZJIaqOtiR4IEU",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArEokQnZz3zk0OV_lapR1AxDh-ePXRHrRSQFcBWTq64UuNuvJ_no2HEyjfv9ZVS_Hp0DPKD_sr9HoJw3Jyaojkq-pPSWdTtoJy1HeIoAu3WCbVzY52FQQGvf5xboCm_BX9qqgJh64rz6ItIqjR3UUQyJUbs9ENNPbZEaSNqTV7om_Q_sVw89AxTKXE6bPqs7PBq3cglYhLuzRi2MqZHZ6v1r_TFTVmbhnzj5v1B4yI_qGRCG9uI_B5lflgMhtsWiZJIaqOtiR4IEU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY-cG6TYTBkHoCbKQMnGXwA2Jr8p8EC_8lKV2Ou6lm1UCQkI8lk88EPeV4SpdxfxWgFQjsL_udSw2OdCKAoHdYdynlz3JzZ3Kg46GnWqiui7vzhrQ1bF6wXg5f0ODdW3Z6nTAiPKlt3247YaVXAkDbM7N_yWy29NrmJqW9piTzzqCL-V5ZKnX5DrwZbIUO8dcQwAEJKk6EYact9fsI4HTwFocf5ryqJDwWokQWWFBpqb0nucK8e8Coysg2KljKH8bxO5J2gYfKqX8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGBpWa8Q2Sa9op8qKwFm4xvmN9sBR8nWj0G-fGhneu11eHnxZsWEt7VNpON9nSEuVWyodnPW7lwIIuQPK3gcaHGJxAn2AIZ0Oqao9d9w5fS8icftf2p03D5qjChlw8-Y4AwrDluanJBSczpXZbp_ulZQAfXDrPozzxQk4RAUbEqmx4r6joQ50oPKtTi_zXss0tt_KMvfzUftI84iKAwZ3SK_TNV87n7mVmodoG7g6J9iKM41xTSHUe1zp_V-8mzAHa-6kcS1uFLJo",
    ],
    category: "Rings",
    rating: 4.9,
    reviewsCount: 124,
    featured: true,
  },
  {
    id: "13",
    name: "Serenity Choker",
    price: 950,
    description: "Embrace delicate luxury with our signature 14k gold choker. Designed for the modern muse, perfectly balancing simplicity and statement.",
    material: "14k Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY",
    category: "Necklaces",
    featured: true,
  },
  {
    id: "14",
    name: "Solitaire Studs",
    price: 950,
    description: "Simple gold stud earrings",
    material: "Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbTZROVpV7n0tMMgGDh9c3XLEPOnCrtJxXbtHBbrVuEkzbLuHZ89toXfN9QiObzQzmn9oquyk8PWupaGn1zsgs5Ja1AMxHQhsh-BSF1DZkqtV7n2XdDDstk1MIpsGVqVShuTSEYaS5ICqcgvbk5FnWihEnO1cVTrnVHp4oFmm1xh05S7RoQYhOkSh-9nMRZB2J9aJEtRlzB1BtLORqU_sifGCWUlVoCGG1HbMltWMRuUgJq0O9HBnxe1N3wgTo1JvMG4nKFw_z5LE",
    category: "Earrings",
  },
  {
    id: "15",
    name: "Paperclip Chain",
    price: 1200,
    description: "Thin gold chain bracelet",
    material: "Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB1fCojOaFZhj_ANLZ0CPWVLqEMH3hMlHplsBsC1DXzLv_cGAIAc0ak7lEFLJOkwNwKTGlVb2ruSJzOzBlgnRlWlxumPhIErIV7vDgfeXV-okTsF--S_6apQGn_UpBLLt2XUDMzamd4-bk1_i10j1jkApZzkMuLLdi1Fyr_p2EjeAkbjGCDvzSITx2wqRWxCUDe4AcYgrH_QAg2SdeFTVvRYN9IlWn96eCNUfe-eVAiw4pB3k7RkTsoqNtfOLcawd5HCFBJKo0htA",
    category: "Bracelets",
  },
  {
    id: "16",
    name: "Care Kit",
    price: 85,
    description: "Elegant jewelry cleaning kit box",
    material: "Various",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWCTZXQ8hgeX_0WIwxsiZmNw8xZCjhPlPa0qSC-I4-VImZxR2wgzYUsMZ83czhqyewP-ffXXb-sAZg1V1wAPPiGWpZtj-qoMJPK3UIyeDaprLBpHtKIgVmuPDLIP6rWKPJ8ATvd3Jy0amz8Ifdhw41k3Z4u_ERvY796cShUupKjS_Ftn-Rmi6uyFZNC6cYBUGMVkAW0G7pwGnh00spPooj_s8O6WB20ek2IF7w-MUZsH747aEfbf7h5BAFFlZ5N1HqST2PKoh-_ck",
    category: "Accessories",
  },
  {
    id: "17",
    name: "Velvet Travel Case",
    price: 250,
    description: "Luxurious velvet jewelry travel case",
    material: "Velvet",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFU2ngpfzL40WO-HcOv7u3kuaspYKOgK5bGr7rq348UYXTrFQK8wtFGBoTrIChle96ysp1xtp3YiBqvGZ-OdRtDgFBI_1t-eJBHdB3RFsMpG3z4sElSVAG1bh6injDGGvJHRJEXNkLzHFtq4eXe5JoQU1TkC0ig52p1spaIL6SHR4OadDFPmyydU1qjKTepCLrQfOXxm57isJ3jfiM33pydClFczoZuNgcaGGgk_wwMs_AgZks0XaKn5DdyxN7JKaPNflTLdXOg_I",
    category: "Accessories",
  },
  {
    id: "18",
    name: "Pearl Drop Earrings",
    price: 1650,
    description: "18k Gold with South Sea Pearls",
    material: "18k Gold & Pearls",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Earrings",
  },
  {
    id: "19",
    name: "Diamond Tennis Bracelet",
    price: 6800,
    description: "Platinum with 5ct total diamond weight",
    material: "Platinum & Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Bracelets",
    featured: true,
  },
  {
    id: "20",
    name: "Sapphire Cluster Ring",
    price: 3200,
    description: "18k White Gold with Blue Sapphires",
    material: "18k White Gold & Sapphires",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
  },
  {
    id: "21",
    name: "Emerald Chandelier Earrings",
    price: 4500,
    description: "18k Gold with Colombian Emeralds",
    material: "18k Gold & Emeralds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
  },
  {
    id: "22",
    name: "Ruby and Diamond Necklace",
    price: 12500,
    description: "18k Gold with Rubies and Diamonds",
    material: "18k Gold, Rubies & Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "23",
    name: "Vintage Art Deco Ring",
    price: 2800,
    description: "Platinum with Art Deco design",
    material: "Platinum",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
  },
  {
    id: "24",
    name: "Gold Chain Necklace",
    price: 1100,
    description: "18k Yellow Gold Chain",
    material: "18k Yellow Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "25",
    name: "Diamond Stud Earrings",
    price: 3500,
    description: "1ct total weight diamond studs",
    material: "18k White Gold & Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
  },
  {
    id: "26",
    name: "Rose Gold Bangle",
    price: 1950,
    description: "18k Rose Gold with engraved pattern",
    material: "18k Rose Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Bracelets",
  },
  {
    id: "27",
    name: "Aquamarine Pendant",
    price: 1800,
    description: "18k White Gold with Aquamarine",
    material: "18k White Gold & Aquamarine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "28",
    name: "Tanzanite Ring",
    price: 4200,
    description: "Platinum with Tanzanite center stone",
    material: "Platinum & Tanzanite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
  },
  {
    id: "29",
    name: "Opal Drop Earrings",
    price: 2200,
    description: "18k Gold with Australian Opals",
    material: "18k Gold & Opals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
  },
  {
    id: "30",
    name: "Diamond Cuff Links",
    price: 850,
    description: "18k Gold with diamond accents",
    material: "18k Gold & Diamonds",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Accessories",
  },
  {
    id: "31",
    name: "Moonstone Pendant",
    price: 1400,
    description: "18k Gold with Moonstone",
    material: "18k Gold & Moonstone",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "32",
    name: "Garnet Cluster Ring",
    price: 1650,
    description: "18k Gold with Garnets",
    material: "18k Gold & Garnets",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
  },
  {
    id: "33",
    name: "Amethyst Choker",
    price: 950,
    description: "18k Gold with Amethyst stones",
    material: "18k Gold & Amethyst",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY",
    category: "Necklaces",
  },
  {
    id: "34",
    name: "Topaz Stud Earrings",
    price: 1200,
    description: "18k Gold with Blue Topaz",
    material: "18k Gold & Topaz",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
  },
  {
    id: "35",
    name: "Citrine Bracelet",
    price: 1350,
    description: "18k Gold with Citrine beads",
    material: "18k Gold & Citrine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Bracelets",
  },
  {
    id: "36",
    name: "Peridot Pendant",
    price: 1100,
    description: "18k Gold with Peridot",
    material: "18k Gold & Peridot",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklaces",
  },
  {
    id: "37",
    name: "Tourmaline Ring",
    price: 1950,
    description: "18k Gold with Pink Tourmaline",
    material: "18k Gold & Tourmaline",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Rings",
  },
];

// Cart Items
export const cartItems: CartItem[] = [
  {
    id: "cart-1",
    productId: "1",
    name: "Celestial Diamond Pendant",
    price: 2400,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2AFGrVVRq2ZXrjISpNIXIZ5SoCk0GGXzJYO0gUfbMpIQ59_e0_Mh5T5x98Ek9vX011yyk6i8RibyRa-6Y0X_9FO9QjJ0CAIeItHM2XUsUrtMOuy-99MbUCdMrA92MnLcqkPqOTV00pi5b-m-yxwxuavXkPoZH2JHMB-2kWh4Fqdn9cA95tl-7Jd2jrCLJO_TELa0Aty_qTK20s6C6FWHI7DlRgYimUh_2sM28YI0W9XNKUfxkTXS7g93EU4FkkMQFk8z9ZYbQvg",
    material: "18k Gold | 0.5ct Diamond",
    reference: "0012458",
  },
  {
    id: "cart-2",
    productId: "2",
    name: "Onyx Signet Ring",
    price: 1850,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8TNisNIi5eqTcog6s9W5q11bZRGde20Fa4dYaH46f6f3rWDJUdaCiUEgXpRIfQxsherkZwGoONPWfiHc4DkizxZVZQTo99Xzb9TpKNtOMlDMl0XXloO4Pr2GTzc8b4MAPJAZsYTKVbqUXId7n1_E7aG44HZQ3rmm1rhOkKg5Exo_fKsjsGN06z6dT1CEE-aVYptC6n9OtyOiiq3_76szT5q9u2IAj1_CG3JSyEjyvJzQnAlVBJwB-GYE4w3NN6CWL6YV6BprLaDY",
    material: "Platinum | Black Onyx",
    reference: "0098231",
  },
  {
    id: "cart-3",
    productId: "3",
    name: "Eternity Band",
    price: 3200,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEC1RF45EZ8jk6dD_CSPCcV04tFgahLDfnJeCkoB0WFoPB_l7Q0_9wZpj7UeDfEgxFgGY6TlcIvionbLWP8rKrxbRCUfVaINe_FDLKMnIHepGsARGV6yEIlGpHLcGzh-4oRnutkYV-cCY-t0ryMETAvax-aTmBiJ0r0zqRWJOQzxcYwZmnAn-ESUHItyaRoBcx4RNPkTg3zXI7DHYbQPNHyP9QeCSvKm9rRmGIMq0OBVp7O6a1TE5U3aL9LRpLgQzfP-_8rZOUEM",
    material: "Rose Gold | Pave Diamonds",
    reference: "0044512",
  },
];

// Reviews
export const reviews: Review[] = [
  {
    id: "review-1",
    author: "Elena D.",
    rating: 5,
    title: "Absolutely breathtaking",
    content: "The pictures honestly do not do it justice. The sparkle on this radiant cut is mesmerizing. Customer service was also impeccable when I needed help with sizing.",
    date: "2 weeks ago",
    verified: true,
  },
  {
    id: "review-2",
    author: "Michael J.",
    rating: 5,
    title: "The perfect proposal",
    content: "She said yes! The packaging was luxurious and the ring fits perfectly. Thank you Luxe Jewels for being part of our special moment.",
    date: "1 month ago",
    verified: true,
  },
];

// Timeline Events (About Page)
export const timelineEvents: TimelineEvent[] = [
  {
    year: "1985",
    title: "The First Sketch",
    description: "Founded in a small Parisian attic by Elena Vosque. Armed with nothing but a sketchbook and a vision, Lumière began as a bespoke service for a select circle who valued discretion and unparalleled artistry.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeXxhCXOBYhB0mU6aohvRwAlzA1vf3AqUkGEoSBLGJ9GLSOOj8HNj4azOf5B6JpQ9ehCZ77C_ULHyEjnj_HJsfw_TrfLKJyPrZgLgUGrplvhAhqTBG535kgbqEwd3WfIdduOZPskTHL0J-SIPWRZKsjAwgouX1C45litiH4uEuKoCwk7mLnIoYlrPKs7et6lCfBv0jth-oa4rA_sPPNcIrNqvFpb98c1gJqx2s4nE2HQ_iiwwv4gUlMk9De6YThjFXUWU-Tubef70",
  },
  {
    year: "1998",
    title: "Crossing Borders",
    description: "Expanding beyond private commissions, our first flagship boutique opened in London's Mayfair district. It was here that we established our own dedicated atelier, bringing all craftsmanship in-house.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByxlvjk3OQ7sEkb9PHzzUY4kQqguSeEyzSZDYR2CSMtc2LUUHw4PlI8xhNwjHuK0QiJTnDL7SBPZ2StvVXmFT8xz8XH5sPA0fFORtvMZDHN2pf7jIvUfEh-oGx-VjVXK_VMF1h8dCa8eKMa9BjzFm_H9P3EL-UcEFEO-4Oq0nE_7FPVdvVhK5QYHg8r9OFof4V2fJsi__dtz7ZidQExVxCIpLitVjAFM18CHfUr2g386GQlOWUBHNdWE9yYg0_HVb6_OimmFmi1jQ",
    location: "Mayfair, London",
  },
  {
    year: "2023",
    title: "A New Era",
    description: "With new ateliers in New York and Tokyo, we continue to blend traditional French savoir-faire with modern, global inspiration. Our commitment to ethical sourcing now sets the industry standard.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpqBwPaiX2RcpfgMfRo04uXHXcgX6U7-1xpA4r0HOEc04sxzLPGsskBI_OAcq5uKEeJ-F-_eEoXEOuvyzvONXcE6xFHKHG5drnzDgpkn7FVn9X0TNxKxrJ5vFLgzXUeOz_p1VKcswhBfD0wPAKiCm2UvrT7rMMimGbUeCPEX7Zs1FzPMa83BM6jM5r05n8tEIouAFvXTw5Ruwf3zo6aDdyI9OrGtYwPhYkP5FCSxcHIB2vn4Ad6KdD1vJLJsviLJ6vgQ-CIYnir2c",
  },
];

// Footer Sections
export const footerSections: FooterSection[] = [
  {
    title: "Collections",
    links: [
      { label: "New Arrivals", href: "#" },
      { label: "High Jewelry", href: "#" },
      { label: "Engagement", href: "#" },
      { label: "Watches", href: "#" },
    ],
  },
  {
    title: "Client Services",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Book Appointment", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Boutique",
    links: [
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
      { label: "High Jewelry", href: "#" },
      { label: "Bridal", href: "#" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Contact", href: "#" },
      { label: "Services", href: "#" },
      { label: "Appointments", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Bespoke Design", href: "#" },
      { label: "Restoration", href: "#" },
      { label: "Valuation", href: "#" },
      { label: "Engraving", href: "#" },
    ],
  },
];

// Category Images (Home Page)
export const categoryImages = {
  rings: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhs7Gw-aTGuloxIapZ_gN54GtZom5Vbdf_2jlPd-6_zbyDPyjo0F5gKMPmM0JyjFfGW0CHMyiWxIi77aMUnMCK5qM6Ckj5OWUG9vhWAW-xkiPNsFjpSe5q8ilAEIJI7mTKmCUBqjiuqnMB-w4m-XBo_kZCPYosquOWQ52OYmWzgQtRJlA6-NlndtdhabnFVjLQG359EXlE_HrM4tX4Kfw0yNRJuhN9MBTLyf8hX5GvpqOwqdYkesmu903zc9-STw2HX2r2nRCA68",
  necklaces: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EC-mj2bqScgs9nKtXTp5FmuvJD8T0F2xrJi__yrPufkgea4HIXkiJLv7zHcj-EiIjjbYmrPEv0V4Zq8Fb72EiI6YEXdtBHUqXWM7safyghXGxrBi8VG6mZv0mrsyJ86bUVgMavsXpQOarLU8KzjhdYji6vXnzOpmiCtElOUGHTdR6WtybYCc8bluYxPfx8iTNc27xpwpIc1ewtSrUmWnl9TZhnMKLHKqL5OBe0LFp8XqSr1Cq0h-8sIcNoOmAPKsEefgH6xuOV8",
  earrings: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUr7DHGPb1SnaVDhRMpQ55sxE_QDUwZY40QJYJWXvAWMNdCd2OlFFAFh0wL0REFyo3xk_39qf7erYg7hR2hwDR2vOjeH4NMvDtcRyzkZxwoY9oAhIxyA6-cghVMW-1Ht3INnHGcdJQlMJP8UmEGAhpQDKygm4Z1u--92WcMp4uQmLsbC-cBHCkeQVpPsNaV730jCxE7WLvGHcrdjvh28Cw11AyHCuyCAZ1g9zkDTqlFIBO4MctPV4YaIjUU-YgxxuHa0vksjp4Zf0",
  bracelets: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8qIoOOpquqjdqpd7YFOpBQ6-1RjULC1cPevb-Ww5UYINXgbWKnj_RGMUClgVfy2E08fzoMEVnGfTmEgbm7ocXojFkr9lDCrYaPCzZ_6txO2Ws2iy-Y0d-lOXAT_rjhmHNNDRxOpHpWR0C05fARw-GGxe6t0HhoJgrWLTAsZ898hNkhQX5iWYEZX1MSK0EP4d4mQby4xpzkBXhpGwy2IZN_zFMsK-B4kNBwOUvjmd9QoI8_lq4uNDYAABye3DKRQYGEG3YM4aWojc",
};

// Process Steps (About Page)
export const processSteps = [
  {
    number: "01",
    title: "Sourcing",
    description: "We travel to the remotest corners of the globe to hand-select gemstones that meet our exacting standards for clarity, color, and ethical provenance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxggxhfztzh4opyBTcMwW1Rlbb2Rw4lzJkUu_fbf2PHJX3MJ111mCB7rS57n5Eef9wKXGrSMEmdXBnu0BxWrR7LJBmXGaks2zF3SWESP09bqZlvVfEOvlOUM_5l4pouwJ81dEFdaLQoONX3xZA17n5Wc6NvWOlIHEbaIgRpicRNOQdy8p4J7zd-uCYz3dlLIe5pAwK22cq-KoPLSVURpnFP1BDu8P__3-t9cjmBjdbLLNdfpWxlQDcY3WyNH2EG3hjJ2yTHagoYu4",
  },
  {
    number: "02",
    title: "Conception",
    description: "Before gold is cast, the dream is born on paper. Our designers spend hundreds of hours refining the architecture of each piece to ensure perfect balance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeXxhCXOBYhB0mU6aohvRwAlzA1vf3AqUkGEoSBLGJ9GLSOOj8HNj4azOf5B6JpQ9ehCZ77C_ULHyEjnj_HJsfw_TrfLKJyPrZgLgUGrplvhAhqTBG535kgbqEwd3WfIdduOZPskTHL0J-SIPWRZKsjAwgouX1C45litiH4uEuKoCwk7mLnIoYlrPKs7et6lCfBv0jth-oa4rA_sPPNcIrNqvFpb98c1gJqx2s4nE2HQ_iiwwv4gUlMk9De6YThjFXUWU-Tubef70",
  },
  {
    number: "03",
    title: "Creation",
    description: "In our Paris atelier, master goldsmiths and setters work in tandem, using techniques passed down through generations to breathe life into the design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByxlvjk3OQ7sEkb9PHzzUY4kQqguSeEyzSZDYR2CSMtc2LUUHw4PlI8xhNwjHuK0QiJTnDL7SBPZ2StvVXmFT8xz8XH5sPA0fFORtvMZDHN2pf7jIvUfEh-oGx-VjVXK_VMF1h8dCa8eKMa9BjzFm_H9P3EL-UcEFEO-4Oq0nE_7FPVdvVhK5QYHg8r9OFof4V2fJsi__dtz7ZidQExVxCIpLitVjAFM18CHfUr2g386GQlOWUBHNdWE9yYg0_HVb6_OimmFmi1jQ",
  },
];

// Product Specifications (Product Detail Page)
export const productSpecs = {
  centerStone: "1.5ct Radiant Cut Diamond",
  origin: "Botswana (Ethical)",
  clarity: "VS1",
  colorGrade: "F (Colorless)",
  band: "1.8mm width, Comfort fit",
};

// Order Summary Constants
export const orderSummary = {
  subtotal: 7450,
  shipping: 0, // Complimentary
  tax: 620,
  total: 8070,
};

