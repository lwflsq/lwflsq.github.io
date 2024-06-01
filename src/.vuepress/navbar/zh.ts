import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",  
    children: [
      {
        text: "uniapp",
        icon: "pen-to-square",
        prefix:'/posts/',
        children: ["uniapp"
        ]
      }
    ],
  },
  {
    text: "github仓库",
    icon: "book",
    link: "https://github.com/lwflsq/lwf-blog",
  },
]);
