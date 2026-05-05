const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));

// If data already has posts array, do not re-run this logic
if (data.posts) {
  console.log('Already formatted');
  process.exit(0);
}

const mainPost = data.blog_post;

const posts = [
  mainPost,
  {
    metadata: {
      title: "Motor control for your EV application",
      slug: "motor-control-ev-application",
      published_date: "2024-04-15",
      read_time_minutes: 2,
      views: 48,
      comments: 0,
      likes: 0,
      category: "Electric Motors",
      meta_description: "Our company specializes in providing cost-effective, optimized motor control solutions for your electric vehicle applications to develop...",
      og_image: "/images/motor-controller.webp" // placeholder
    },
    intro: {
      hook: "Our company specializes in providing cost-effective, optimized motor control solutions for your electric vehicle applications to develop...",
      body: ""
    },
    sections: []
  },
  {
    metadata: {
      title: "How SMCs Can Unlock the Hidden Assets of Axial Flux Motors",
      slug: "smcs-unlock-hidden-assets-axial-flux-motors",
      published_date: "2024-04-15",
      read_time_minutes: 3,
      views: 70,
      comments: 0,
      likes: 3,
      category: "Electric Motors",
      meta_description: "Axial Flux Motors with high power density & SMCs with...",
      og_image: "/images/axial-flux-motor.webp" // placeholder
    },
    intro: {
      hook: "Axial Flux Motors with high power density & SMCs with...",
      body: ""
    },
    sections: []
  }
];

const newData = {
  posts: posts,
  site: mainPost.site
};

fs.writeFileSync('./data/blog.json', JSON.stringify(newData, null, 2));
console.log('Updated blog.json');
