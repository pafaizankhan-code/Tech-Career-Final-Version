// Blog content for the home Blog section and the /blog/:slug detail page.
// All three posts revolve around "How Websites Work" so the section reads as
// a beginner-friendly explainer series.

export const blogs = [
  {
    slug: 'how-websites-work-simple-explanation',
    no: '01',
    category: 'Web Basics',
    title: 'How Websites Work - A Simple Explanation',
    excerpt:
      'Ever wondered what really happens when you type a website address and hit enter? Here is the whole journey, in plain English - from your browser to the server and back.',
    readTime: '6 min read',
    date: 'April 12, 2026',
    author: 'Tech Career IT Solutions',
    tags: ['Browser', 'Server', 'HTML', 'CSS'],
    intro:
      'A website is just a bunch of files - text, images, styles and scripts - that live on a computer somewhere in the world. Your browser asks for those files, downloads them, and then paints them on your screen. That is it. Everything else is detail.',
    sections: [
      {
        heading: 'The three pieces every website is made of',
        body: 'Almost every website on the internet is built from three core technologies. HTML is the structure - the headings, paragraphs, buttons and images. CSS is the styling - the colours, fonts, spacing and layout. JavaScript is the behaviour - the menus that open, the forms that validate, the carousels that slide. When you visit a site, your browser downloads these three things and stitches them together into the page you see.',
      },
      {
        heading: 'What happens when you press Enter',
        body: 'When you type "techcareer.site" and press Enter, your browser does not magically know where that website lives. It first asks a special phonebook called DNS, "where is techcareer.site?" DNS replies with an IP address, like 142.250.193.14 - the actual street address of the server. Your browser then sends a request to that address and the server replies with the HTML file. From there, the browser reads the HTML, requests any extra CSS and JavaScript files, and slowly builds the page in front of your eyes.',
      },
      {
        heading: 'Front-end vs back-end, made simple',
        body: 'The front-end is everything you can see and click - the design, the buttons, the animations. It runs inside your browser. The back-end is the part you cannot see - the database, the login system, the server that processes your order. When you log in to Instagram, the front-end is the screen and form you see. The back-end is what checks your password, fetches your photos and sends them back. A modern website almost always has both, working together.',
      },
      {
        heading: 'Why some websites feel fast and others feel slow',
        body: 'A website feels fast when the server is close, the files are small, and the code is clean. It feels slow when the server is far away, the images are huge, or the scripts are doing too much work. Good developers care about every kilobyte they ship - because every extra second of loading time loses real users. That is why we build with performance in mind from day one.',
      },
    ],
    takeaway:
      'A website is not magic. It is files served from a computer, downloaded by your browser and rendered on your screen. Once you understand that loop, every other web concept - hosting, domains, frameworks, APIs - starts to click into place.',
  },
  {
    slug: 'what-is-domain-and-hosting',
    no: '02',
    category: 'Web Basics',
    title: 'What Is a Domain and Hosting? A Beginner’s Guide',
    excerpt:
      'A domain is the address. Hosting is the land your house sits on. Here is the simplest way to understand the two things every website needs to exist online.',
    readTime: '5 min read',
    date: 'April 18, 2026',
    author: 'Tech Career IT Solutions',
    tags: ['Domain', 'Hosting', 'DNS'],
    intro:
      'Every website you have ever visited needs two things to exist on the internet - a domain name (the address people type in) and hosting (the computer that actually stores the website). They are different products, often bought from different companies, and getting them right at the start saves you a lot of headache later.',
    sections: [
      {
        heading: 'A domain is just a friendly name',
        body: 'Computers talk to each other using IP addresses - long strings of numbers like 192.168.1.42. Humans are bad at remembering numbers, so the domain name system was invented. A domain like "techcareer.site" is just a friendly nickname for an IP address. You rent it from a registrar (like GoDaddy, Namecheap or Google Domains) for a yearly fee - usually a few hundred to a few thousand rupees.',
      },
      {
        heading: 'Hosting is the actual computer',
        body: 'Your website files have to live somewhere - on a real computer that is connected to the internet 24x7. That computer is called a server, and renting space on one is called hosting. There are different flavours: shared hosting (cheap, multiple sites on one server), VPS (more power, more control), cloud hosting (scales automatically), and managed hosting (the host handles all the server stuff for you). Beginners usually start with shared or managed hosting.',
      },
      {
        heading: 'How the two connect',
        body: 'Once you own a domain and have hosting, you tell the domain "point to this server" by updating something called DNS records. After a few minutes (sometimes a few hours), anyone typing your domain in the browser will land on your hosted website. This is the moment your site goes live to the world.',
      },
      {
        heading: 'What we recommend for first-time owners',
        body: 'For most small businesses we work with, we suggest a .com or .in domain (it is what people instinctively type) paired with a good managed hosting plan. Skip the cheapest plans - they are slow, and a slow website costs you customers. Spend a little more upfront and your site will load fast, stay online, and rank better in Google.',
      },
    ],
    takeaway:
      'Domain = the address people type. Hosting = the computer where your website lives. You need both. Buy the domain from a reputable registrar, choose hosting that fits your traffic, and connect them with DNS. That is the whole setup.',
  },
  {
    slug: 'how-a-website-loads-step-by-step',
    no: '03',
    category: 'Web Basics',
    title: 'How a Website Loads in Your Browser - Step by Step',
    excerpt:
      'From the moment you press Enter to the moment the page appears, dozens of things happen in milliseconds. Here is what is actually going on, broken down stage by stage.',
    readTime: '7 min read',
    date: 'April 24, 2026',
    author: 'Tech Career IT Solutions',
    tags: ['Browser', 'Performance', 'HTTP', 'Rendering'],
    intro:
      'When you click a link or type a URL, the page seems to appear instantly. But behind that simple click, your browser does a surprisingly complex dance - looking up addresses, opening secure connections, downloading files, parsing code and painting pixels. Understanding this sequence is the first step to building faster websites.',
    sections: [
      {
        heading: 'Step 1 - Looking up the address (DNS)',
        body: 'The browser needs to know which server to talk to. So it asks a DNS resolver, "what is the IP address for techcareer.site?" The resolver checks its cache, and if it does not know, it asks the root servers, then the .site servers, until it finds the answer. This usually takes a few milliseconds - but on a slow network it can be the biggest bottleneck.',
      },
      {
        heading: 'Step 2 - Opening a secure connection',
        body: 'Once it has the IP address, the browser opens a TCP connection to the server, then upgrades it to HTTPS using a TLS handshake. This handshake exchanges encryption keys so that nothing you send (passwords, card numbers, anything) can be read by anyone in between. Modern browsers do this in one or two round trips.',
      },
      {
        heading: 'Step 3 - Requesting and receiving the HTML',
        body: 'The browser sends an HTTP GET request - basically saying "please give me the homepage." The server processes the request and sends back an HTML file. The HTML is the skeleton of the page. The moment the first bytes arrive, the browser starts reading them - it does not wait for the full file before getting to work.',
      },
      {
        heading: 'Step 4 - Discovering and downloading more files',
        body: 'As the browser parses the HTML, it finds links to other resources - CSS files, JavaScript files, images, fonts. It starts downloading them in parallel. CSS is render-blocking, meaning the page will not appear until the CSS is ready. JavaScript can also block, depending on how it is loaded. This is where performance work matters most.',
      },
      {
        heading: 'Step 5 - Building the page (parsing and rendering)',
        body: 'The browser turns the HTML into a tree called the DOM, and the CSS into a tree called the CSSOM. It combines them into a render tree, calculates the position of every element (layout), and finally paints the pixels on your screen. JavaScript may then run and change things - adding interactivity, fetching more data, animating elements.',
      },
      {
        heading: 'Why this matters for your business',
        body: 'Every step in this chain takes time. If your hosting is slow, step 3 takes longer. If your images are huge, step 4 drags. If your JavaScript is heavy, step 5 stutters. A well-built website respects each of these stages - and that is the difference between a site that feels snappy and one that feels broken. We build for speed at every layer.',
      },
    ],
    takeaway:
      'A page load is not one thing - it is a chain of DNS lookup, secure handshake, HTML download, asset fetching, parsing and painting. Optimise each step, and your website will feel instant. Ignore any one of them, and your visitors will leave before the page is ready.',
  },
]

export const getBlog = (slug) => blogs.find((b) => b.slug === slug)

export const getRelatedBlogs = (slug, limit = 2) =>
  blogs.filter((b) => b.slug !== slug).slice(0, limit)
