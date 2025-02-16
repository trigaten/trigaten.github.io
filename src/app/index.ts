import botanyResearch from "@/../public/projects/2023/botanyResearch.jpeg";
import hackAPrompt from "@/../public/projects/2023/hackaPrompt.png";
import image1 from "@/../public/gardenPhotos/home/image1.png";
import image2 from "@/../public/gardenPhotos/home/image2.png";
import image3 from "@/../public/gardenPhotos/home/image3.png";
import image4 from "@/../public/gardenPhotos/home/image4.png";
import image5 from "@/../public/gardenPhotos/home/image5.png";
import image8 from "@/../public/gardenPhotos/home/image8.png";
import image6 from "@/../public/gardenPhotos/home/image6.png";
import image7 from "@/../public/gardenPhotos/home/image7.png";
import image9 from "@/../public/gardenPhotos/home/image9.png";
import thePromptReport from "@/../public/projects/2023/thePromptReport.png";
import mineRL from "@/../public/projects/2023/mineRL.png";
import shade from "@/../public/projects/2023/Shade.png";
import andreou from "@/../public/projects/2023/andreou.png";
import farama from "@/../public/projects/2023/farama.png";
import semiotic from "@/../public/projects/2023/semiotic.png";
//Plant imports for projects
import creepingCucumber from "@/../public/gardenPhotos/projects/creepingCucumber.png";
import ghostPipe from "@/../public/gardenPhotos/projects/ghostPipe.png";
import plant2 from "@/../public/gardenPhotos/projects/plant2.png";
import plant3 from "@/../public/gardenPhotos/projects/plant3.png";
import plant4 from "@/../public/gardenPhotos/projects/plant4.png";
import plant5 from "@/../public/gardenPhotos/projects/plant5.png";
import plant6 from "@/../public/gardenPhotos/projects/plant6.png";
import plant7 from "@/../public/gardenPhotos/projects/plant7.png";
import plant8 from "@/../public/gardenPhotos/projects/plant8.png";
import blog1 from "@/../public/blogs/ExampleBlog.png";
import blog2 from "@/../public/blogs/image2.png";

//Plant improts for blog
import blog1Plant from "@/../public/gardenPhotos/blog/BlogPlant1.png";
import blog2Plant from "@/../public/gardenPhotos/blog/BlogPlant2.png";
import blog3Plant from "@/../public/gardenPhotos/blog/BlogPlant3.png";
import blog4Plant from "@/../public/gardenPhotos/blog/BlogPlant4.png";
import blog5Plant from "@/../public/gardenPhotos/blog/BlogPlant5.png";
import blog6Plant from "@/../public/gardenPhotos/blog/BlogPlant6.png";
import blog7Plant from "@/../public/gardenPhotos/blog/BlogPlant7.png";
import blog8Plant from "@/../public/gardenPhotos/blog/BlogPlant8.png";
import blog9Plant from "@/../public/gardenPhotos/blog/BlogPlant9.png";

//Podcasts
import pc1 from "@/../public/podcasts/latentSpace.jpg";
import pc2 from "@/../public/podcasts/cognitiveResearch.webp";
import pc3 from "@/../public/podcasts/ignorePrevious.jpg";
import pc4 from "@/../public/podcasts/whatsAI.png";
import pc5 from "@/../public/podcasts/SecurityTable.jpeg";
import pc6 from "@/../public/podcasts/mlSecOps.png";
import pc7 from "@/../public/podcasts/promptCast.webp";
import { title } from "process";
const homePageProjects = [
  {
    title: "HackAPrompt",
    stack: ["React", "Node"],
    date: "Spring 2023",
    link: "https://paper.hackaprompt.com/",
    description:
      "Organized the first and largest competition on prompt injection. Secured $40K in sponsorship from major companies, including OpenAI, HuggingFace, and Scale. Collected and published the largest dataset of prompt injections (600K+ adversarial prompts) and developed the first taxonomical ontology of Prompt Hacking. The paper won Best Theme Paper at EMNLP2023.",
    image: hackAPrompt,
    research: true,
    year: 2023,
  },
  {
    title: "The Prompt Report",
    stack: ["LLMs"],
    date: "Spring 2023",
    link: "https://arxiv.org/pdf/2311.16119",
    description:
      "Ran the largest study on prompting ever done. I lead a team of 32 researchers from U Maryland, OpenAI, Microsoft, Princeton, Stanford, and other institutions. Surveyed over 1500 papers and created a systematic literature review with comphrehensive taxonomies of 100s of techniques.",
    image: thePromptReport,
    research: true,
    year: 2023,
  },
  // {
  //   title:
  //     "Stabilizing Hostilities through Arbitration and Diplomatic Engagement",
  //   link: "https://www.shade-aie.org/",
  //   date: "Spring 2022 - Spring 2023",
  //   stack: ["CI Pipelines"],
  //   description:
  //     "I led a team of graduate and undergraduate students in a DARPA-funded multi-university project aimed at building AI bots to play the board game Diplomacy while interacting with human players. As part of this initiative, I conceptualized and pitched four unique bot designs: Janus Bot, Janus Bot [Shortened], Janus Bot [MVP], and SOA Bot. I developed continuous integration pipelines to streamline development, implementing Dockerized testing and integrating precommit checks. Additionally, I built Vercel integration for the project's documentation website. I also authored a comprehensive report on DAIDE-English translation and developed a DAIDE syntax parser package to support communication protocols between the bots and players.",
  //   image: shade,
  //   research: true,
  //   year: 2023,
  // },
];

const projectsResearch = [
  {
    title: "Botany Research",
    stack: ["HTML"],
    date: "Fall 2024",
    link: "https://forageflora.com/",
    description:
      "Developed a <b>comprehensive map</b> of hundreds of wild plants on the University of Maryland campus, engaging numerous campus stakeholders and securing a <b>UMD sustainability grant</b>. Additionally, constructed a <b>biogas reactor</b> using plastic components to further support campus sustainability efforts.",
    image: botanyResearch,
    research: false,
    year: 2024,
  },
  {
    title: "HackAPrompt",
    stack: ["React", "Node"],
    date: "Spring 2023",
    link: "https://paper.hackaprompt.com/",
    description:
      "Organized the <b>first and largest competition on prompt injection</b>. Secured <b>$40K in sponsorship</b> from major companies, including OpenAI, HuggingFace, and Scale. Collected and published the <b>largest dataset of prompt injections</b> (600K+ adversarial prompts) and developed the <b>first taxonomical ontology of Prompt Hacking</b>. The paper won <b>Best Theme Paper at EMNLP2023</b>.",
    image: hackAPrompt,
    research: true,
    year: 2023,
  },
  {
    title: "The Prompt Report",
    stack: ["LLMs"],
    date: "Spring 2023",
    link: "https://trigaten.github.io/Prompt_Survey_Site/",
    description:
      "Ran the <b>largest study on prompting ever done</b>. I lead a team of <b>32 researchers</b> from U Maryland, OpenAI, Microsoft, Princeton, Stanford, and other institutions. Surveyed <b>over 1500 papers</b> and created a <b>systematic literature review</b> with comprehensive taxonomies of 100s of techniques.",
    image: thePromptReport,
    research: true,
    year: 2023,
  },
  {
    title: "Mine RL",
    stack: ["Reinforcement Learning", "Python"],
    date: "Summer 2022 - Summer 2023",
    link: "https://neurips.cc/virtual/2023/poster/73655#:~:text=BEDD%20consists%20of%20a%20collection,of%20human%20and%20algorithmic%20agents",
    description:
      "Helped organize the <b>Minecraft Deep Reinforcement Learning competition</b>. Also ported in various functionalities from Malmo and wrote <b>1000+ lines of code</b>.",
    image: mineRL,
    research: true,
    year: 2023,
  },
  {
    title:
      "Stabilizing Hostilities through Arbitration and Diplomatic Engagement",
    link: "https://www.shade-aie.org/",
    date: "Spring 2022 - Spring 2023",
    stack: ["CI Pipelines"],
    description:
      "I led a team of graduate and undergraduate students in a <b>DARPA-funded multi-university project</b> aimed at building AI bots to play the board game Diplomacy while interacting with human players. As part of this initiative, I conceptualized and pitched <b>four unique bot designs</b>: Janus Bot, Janus Bot [Shortened], Janus Bot [MVP], and SOA Bot. I developed <b>continuous integration pipelines</b> to streamline development, implementing <b>Dockerized testing</b> and integrating precommit checks. Additionally, I built <b>Vercel integration</b> for the project's documentation website. I also authored a <b>comprehensive report on DAIDE-English translation</b> and developed a <b>DAIDE syntax parser package</b> to support communication protocols between the bots and players.",
    image: shade,
    research: false,
    year: 2023,
  },
];
export default projectsResearch;

const gardenImagesHome = [
  [image1, "Heliconia", "", "Somewhere in Singapore"],
  [
    image2,
    "Lowbush Blueberry",
    "Vaccinium angustifolium",
    "My first wild blueberries, found in Maine",
  ],
  [
    image3,
    "Plants grown in my room",
    "",
    "Lettuce, Trifolium Oxalis, Garlic, the works!",
  ],
  [
    image4,
    "Red Trillium",
    "Trillium erectum",
    "Only flowers for 2-3 weeks a year.",
  ],
  [
    image5,
    "Ice Plant",
    "Mesembryanthemum crystallinum L.",
    "Technically edible, but very salty",
  ],
  [image8, "False Shamrock", "Oxalis Triangularis", ""],
  [image7, "Not a Cactus", "", ""],
  [
    image6,
    "Home-Grown Garlic",
    "Allium sativum",
    "You can buy it from the grocery store and just grow it!",
  ],
  [image9, "Some of my favorite room plants :)", "", ""],
];
export { gardenImagesHome };
export { homePageProjects };

const gardenImagesProjects = [
  [
    creepingCucumber,
    "Creeping Cucumber",
    "Melothria pendula",
    "Edible mini cucumbers that grow wild! (eat when green)",
  ],
  [
    ghostPipe,
    "Ghost Pipe",
    "Monotropa uniflora L.",
    "This is a non-photosynthesizing plant",
  ],
  [plant2, "Yucca", "Yucca sp.", "That flower stem does taste like asparagus"],
  [plant3, "Miscl. plants in a terrarium", "", ""],
  [plant4, "A stunning leaf layout", "", "Not sure what this plant is called"],
  [plant5, "Just Nature", "", ""],
  [
    plant6,
    "Pretty Orchids",
    "Orchidaceae sp.",
    "The Singapore Botanical gardens are known for their orchids",
  ],
  [plant7, "This could be 1 of ~750 plants in the genus", "Russula sp.", ""],
  [
    plant8,
    "Common Red Stem-Fig",
    "Ficus Variegata",
    "Its fruit grows directly on its trunk!",
  ],
];

const gardenImagesBlog = [
  [blog1Plant, "Bunchberry", "Cornus canadensis", "Found in Maine"],
  [blog2Plant, "Ringless Honey mushroom", "Armillaria tabescens", ""],
  [blog3Plant, "Fake mushrooms, creepier than usual", "", ""],
  [
    blog4Plant,
    "Beauty Berries, Mint, Persimmons, and Peppers",
    "",
    "Foraged on UMD campus",
  ],
  [
    blog5Plant,
    "Wineberries",
    "Rubus phoenicolasius",
    "100s of thousands grow around UMD",
  ],
  [
    blog7Plant,
    "Crocus",
    "Crocus sp.",
    "Some of the first flowers that come out in spring",
  ],
  [blog9Plant, "Singapore Botanical Gardens", "", ""],
  [blog8Plant, "Leatherleaf Mahonia", "Berberis bealei", "U Maryland"],
  [
    blog6Plant,
    "Wild Roses",
    "Rosa Rugosa",
    "Picture are rose hips, the edible fruit of roses",
  ],
];

export { gardenImagesBlog };
export { gardenImagesProjects };
interface BlogPostProps {
  title: string;
  image: any;
  date: string;
  tag: string;
  blurbs: string;
  content: string;
  id: number;
}

const blogPosts: BlogPostProps[] = [
  {
    id: 0,
    title: "Python Stack",
    image: blog1,
    date: "8th September, 2024",
    tag: "Python",
    blurbs: "Research-Grade Coding Practices",
    content: `
      <p>Here are my recommendations for how to write/organize code (targeted at Python).</p>
      <p>
        Here is me talking about CI and the rest of this for 30 minutes: 
        <a href="https://example.com/code-practices-talk">Code Practices Talk</a>
      </p>
      <p>Here are my recommendations of things to do/use (roughly in order of importance):</p>
      <ul>
        <li>CI/CD Pipeline</li>
        <li>Make your repo a Python Package</li>
        <li>Use Pytest in CI Pipeline</li>
        <li>Protect your Main Branch</li>
        <li>Make people write tests for any new feature they introduce</li>
        <li>
          Make people write documentation for all code they write. This can either be in the 
          <code>README.md</code> or using something like Sphinx, which autobuilds a documentation 
          website from your docs.
        </li>
        <li>Use black and flake8.</li>
        <li>Conventional Commits</li>
        <li>Use Test-Driven Development</li>
      </ul>
    `,
  },
  {
    id: 1,
    title: "Building an Academic Website",
    image: blog2,
    date: "8th September, 2024",
    tag: "Web Development",
    blurbs:
      "How to build a responsive modular academic website with Bootstrap and Jekyll",
    content: `
    <div>
  <h1>Why Bootstrap and Jekyll?</h1>
  <hr>
  <p>
    For the purpose of a simple academic website, Bootstrap provides a simple way to responsively structure content with containers, rows, and columns. With only a few divs, you can create appealing layouts for different screen sizes. It provides classes for:
  </p>
  <ul>
    <li>Quickly adjusting margins/padding (e.g. "mt-2" = margin-top: 0.50rem, "py-4" = top and bottom padding: 1.5rem).</li>
    <li>Making a number of display changes depending on screen size (e.g. "d-md-none" = display:none on medium screen sizes and larger).</li>
    <li>Responsive navbars and images.</li>
  </ul>
  <p>These features make development and site upkeep very quick.</p>

  <h2>Jekyll</h2>
  <hr>
  <p>
    Jekyll lets you to use HTML more efficiently. Among other things it allows you to:
  </p>
  <ul>
    <li>Include HTML files into other HTML files via its include tag.</li>
    <li>Create reusable templates.</li>
    <li>Easily work with multiple static blog pages.</li>
  </ul>
  <p>
    Jekyll has a very quick tutorial <a href="https://jekyllrb.com/docs/">here</a>.
  </p>
  <p>
    Bootstrap has a more complicated tutorial. I recommend you get to the layout overview as soon as possible after browsing the Introduction and getting the Bootstrap CDN setup.
  </p>

  <h2>Icons</h2>
  <hr>
  <p>
    Using icons for your GitHub, LinkedIn, Twitter, etc. links is generally a better look than putting raw text links on your site. Font Awesome and Bootstrap Social icons are good for this. These sites contain many free social media (and other) icons which look good and are easily usable in your site via their CDNs.
  </p>

  <h2>Jekyll Data</h2>
  <hr>
  <p>
    Another particularly useful feature of Jekyll is how you can easily store and load data from .yaml files. For example, in the image, the content under the Education, Industry Experience, and Languages is all stored in .yaml files and loaded into the webpage with a Jekyll for each loop. The links in the navbar are also all stored in a .yaml file which is loaded similarly.
  </p>

  <h2>Blogging</h2>
  <hr>
  <p>
    Jekyll provides useful features for managing blog pages. You can write content with HTML or Markdown and use Jekyll to load them onto your site. You can make a "posts" page which lists your posts, provides a description, and an image very easily. The site in the image has title+description, but take a look <a href="https://example.com/blogpage">BLOGPAGE</a> for an example with all three content pieces. You can also generate blog pages from .yaml files.
  </p>
</div>
    
    
    `,
  },
];

export { blogPosts };

//Podcasts

const podcasts = [
  {
    title: "The Ultimate Guide to Prompting",
    description: "Latent Spaces",
    Image: pc1,
    AudioLink: "https://www.latent.space/p/learn-prompting",
  },
  {
    title: "Cognitive Research",
    description:
      "Delving into The Prompt Report, with Sander Schulhoff of LearnPrompting.org on The Cognitive Revolution Podcast",
    Image: pc2,
    AudioLink:
      "https://www.cognitiverevolution.ai/delving-into-the-prompt-report-with-sander-schulhoff-of-learnprompting-org/",
  },
  {
    title: "The Cognitive Revolution",
    description: "Ignore Previous Instructions & Listen to This Interview",
    Image: pc3,
    AudioLink:
      "https://www.cognitiverevolution.ai/ignore-previous-instructions-listen-to-this-interview-sander-schulhoff-ceo-learnprompting-org/",
  },
  {
    title: "What's AI EP. 7",
    description:
      "Become a Pro at Prompt Engineering: Exclusive Tips from LearnPrompting Creator",
    Image: pc4,
    AudioLink: "https://www.youtube.com/watch?v=BNrPs3ANz1E",
  },
  {
    title: "The Security Table",
    description:
      "The Impact of Prompt Injection and HackAPrompt AI in the Age of Security",
    Image: pc5,
    AudioLink: "https://open.spotify.com/episode/4NZ2JFuVpUPxX2ZzN9lCoo",
  },
  {
    title: "MLSecOps",
    description:
      "Generative AI Prompt Hacking and Its Impact on AI Security & Safety",
    Image: pc6,
    AudioLink: "https://www.youtube.com/watch?v=ANzimffJ_QI",
  },
  {
    title: "PromptCast",
    description:
      "Sander Schulhoff’s Learn Prompting is teaching 3 million people how to use AI",
    Image: pc7,
    AudioLink: "https://open.spotify.com/episode/4NZ2JFuVpUPxX2ZzN9lCoo/",
  },
];
export { podcasts };
