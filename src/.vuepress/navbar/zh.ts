import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square", 
    children: [{
      text:"UniApp",
      link:"/posts/uniapp/"
    },
    {
      text:"Vue",
      link:"/posts/vue/"
    },
    {
      text:"Javascript",
      link:"/posts/javascript/"
    },
    {
      text:"广东专升本报名",
      link:"/posts/gdzsb/"
    }
  ]
  },
  {
    text: "github仓库",
    icon: "book",
    link: "https://github.com/lwflsq/lwf-blog",
  },
  {
    text: "个人简介",
    icon: "book",
    link: "intro"
  },
]);
