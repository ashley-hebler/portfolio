export const state = () => ({
  projects: [
    {
      name: "Rare Country Awards",
      slug: "rare-country-awards",
      tags: [
        {
          name: "Nuxt/Vue",
          icon: "vuejs"
        },
        {
          name: "Firebase",
          icon: "firebase"
        }
      ],
      main: "rc.jpg",
      label: "rc",
      desc:
        "This was an award site built for the 2017 Rare Country Awards in Nashville. During the voting period, authenticated users submitted up to 10 votes a day and became eligible to win a trip to Nashville. I even got to attend the awards show. Coolest project to date!",
      specs: "Dev",
      url: "https://www.rarecountryawards.com/"
    },
    {
      name: "isthereacanban.com",
      slug: "can-ban",
      tags: [
        {
          name: "React (Create React App)",
          icon: "react"
        },
        {
          name: "Node.js",
          icon: "nodedotjs"
        }
      ],
      main: "canban.png",
      label: "cb",
      desc:
        "I created this site to help people sort out which rivers in Texas have a can ban in place. This site was my first exposure to React and bootstrapping with the Create React App. In order to save myself from having to <a target='_blank' href='https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject'>eject</a>, I wrote custom node processes to perform repetitive tasks.",
      specs: "Design and Dev",
      url: "https://isthereacanban.com"
    },
    {
      name: "MedicareMall.com",
      slug: "medicaremall",
      tags: [
        {
          name: "WordPress Theme Development",
          icon: "wordpress"
        },
        {
          name: "BitBucket",
          icon: "bitbucket"
        }
      ],
      main: "medicaremall.jpg",
      label: "mm",
      desc:
        'This site runs on WordPress and it was my first deep dive into building a theme from scratch; (although, I did use <a href="https://underscores.me/" target="_blank">_underscores</a> as a skeleton). This was built around two years ago at the time of writing.',
      specs: "Design and Dev",
      url: "https://www.medicaremall.com/"
    },
    {
      name: "faves.com",
      slug: "faves",
      tags: [
        {
          name: "Heroku",
          icon: "heroku"
        }
      ],
      main: "faves.jpg",
      label: "fv",
      desc:
        'This project was designed to aggregate our top performers for Fans 1st Media sites. I needed a way to server-side render content (for SEO) pulled in from a custom build WordPress endpoint so I went with <a href="https://nuxtjs.org/">Nuxt</a> and deployed the Node.js environment using Heroku.',
      specs: "Dev",
      url: "http://faves.com/"
    },
    {
      name: "Taxonomy Inspector",
      slug: "taxonomy-inspector",
      tags: [
        {
          name: "WordPress Rest API",
          icon: "wordpress"
        },
        {
          name: "Netlify (deployment tool)",
          icon: "netlify"
        }
      ],
      main: "tax-inspect.png",
      label: "ti",
      desc:
        "This is a simple static site I initially built to get a quick look at internal sites’ taxonomy usage. Since the same logic could be applied to any WordPress site, I thought it’d be neat to see how other media companies organized their tags and categories.",
      specs: "Design and Dev",
      url: "https://jolly-pike-f07dc0.netlify.com/"
    },
    {
      name: "Web Design Class Site",
      slug: "web-design-class",
      tags: [
        {
          name: "Markdown",
          icon: "file"
        }
      ],
      main: "webdesign.jpg",
      label: "wd",
      desc:
        'Last spring, I taught a Wed Design course and used this site to guide lessons and projects each class period. <a href="https://kind-beaver-78f31b.netlify.com/handouts/intro-to-html" target="_blank">Using markdown to build each lesson</a> allowed me to quickly document and allow printable versions of each topic.',
      specs: "Design and Dev",
      url: "https://kind-beaver-78f31b.netlify.com/"
    }
  ]
});
