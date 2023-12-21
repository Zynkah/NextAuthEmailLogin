export type BlogProps = {
  blogData: Array<{
    header: string;
    description: string;
    content: string;
    footer: string;
    link: string;
  }>;
};

export const blogData = Object.freeze({
  blog: [
    {
      header: "Next.js",
      description: "My journey in learning Next.js",
      content:
        "I was taught this framework for the first time in my internship. I had just graduated from a coding bootcamp and all I knew was React. A year later, it is still all I use and it is how I got my current job.",
      footer: "To learn more about Next.js click here",
      link: "https://nextjs.org/",
    },
    {
      header: "Next-Auth",
      description: "The struggles of learning Next-Auth",
      content:
        "I learned this authentication for Next.js at my first job. It was somehow both simple and stupid complicated all at once. When it clicks, it clicks though. So tough it out!",
      footer: "To learn more about Next-Auth click this",
      link: "https://next-auth.js.org/",
    },
    {
      header: "Tailwind Css",
      description: "Simple and sweet Tailwind CSS",
      content:
        "I had learned Bootstrap, Material UI and Next UI before I was introduced to Tailwind CSS. I have no desire to use any of those anymore. Tailwind is simple CSS and was easy enough to learn in one weekend.",
      footer: 'To learn more about Tailwind CSS click this',
      link: "https://tailwindcss.com/",
    },
    {
      header: "Shad.cn",
      description: "Convenient time saver",
      content:
        "This site takes the time out of writing components you have written a thousand times. Instead of building everything from scratch you can just copy and past most components you normally use to build a site",
      footer: "To learn more about Shad.cn click this",
      link: "https://ui.shadcn.com/",
    },
  ],
});
