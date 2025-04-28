export type Article = {
  id: string
  title: string
  excerpt: string
  content: string
  category: "technology" | "world-news" | "jobs" | "entertainment" | "success-stories"
  image: string
  date: string
  author: string
  featured?: boolean
  likes?: number
  comments?: Comment[]
}

export type Comment = {
  id: string
  author: string
  content: string
  date: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

export type Milestone = {
  id: string
  year: string
  title: string
  description: string
}

// Mock Articles Data
export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt: "Discover how artificial intelligence is transforming the way websites are built and maintained.",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the web development industry in unprecedented ways. From automated coding assistants to intelligent design systems, AI tools are helping developers create more efficient, accessible, and user-friendly websites.</p>
      
      <p>One of the most significant impacts of AI in web development is the ability to analyze user behavior and preferences to create personalized experiences. Machine learning algorithms can process vast amounts of data to identify patterns and make predictions about what users want to see, leading to more engaging websites.</p>
      
      <p>AI-powered chatbots and virtual assistants are also becoming increasingly sophisticated, providing real-time support to website visitors without human intervention. These tools can handle customer inquiries, guide users through complex processes, and even complete transactions.</p>
      
      <p>Furthermore, AI is enhancing accessibility features, making websites more inclusive for people with disabilities. Voice recognition, image description, and other AI-driven technologies are breaking down barriers and ensuring that web content is available to everyone.</p>
      
      <p>As we look to the future, the integration of AI in web development will only deepen. We can expect to see more advanced natural language processing, predictive analytics, and automated testing tools that will further streamline the development process and enhance user experiences.</p>
    `,
    category: "technology",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-04-15",
    author: "Rahul Sharma",
    featured: true,
    likes: 42,
    comments: [
      {
        id: "c1",
        author: "Priya Singh",
        content: "This article really opened my eyes to the possibilities of AI in web development!",
        date: "2023-04-16",
      },
      {
        id: "c2",
        author: "Amit Kumar",
        content: "I've been using AI tools in my development workflow and they've been game-changers.",
        date: "2023-04-17",
      },
    ],
  },
  {
    id: "2",
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt: "World leaders have committed to ambitious new targets to combat climate change at the latest summit.",
    content: `
      <p>In a landmark decision that could reshape global climate policy for decades to come, world leaders at the International Climate Summit have reached a historic agreement to significantly reduce carbon emissions by 2030.</p>
      
      <p>The agreement, which was signed by representatives from 195 countries, sets a binding target to cut global carbon emissions by 50% compared to 2010 levels within the next decade. This ambitious goal goes beyond previous international climate accords and reflects the growing urgency of addressing climate change.</p>
      
      <p>Developed nations have also pledged substantial financial support to help developing countries transition to renewable energy sources and adapt to the impacts of climate change. The newly established Climate Transition Fund will mobilize $100 billion annually to support these efforts.</p>
      
      <p>Environmental experts have hailed the agreement as a crucial step forward, though many emphasize that implementation will be the true test of its effectiveness. The accord includes robust monitoring mechanisms and penalties for countries that fail to meet their commitments.</p>
      
      <p>The summit also saw unprecedented participation from the private sector, with major corporations announcing their own climate initiatives and investments in green technology. This collaboration between governments and businesses signals a comprehensive approach to tackling one of humanity's greatest challenges.</p>
    `,
    category: "world-news",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-04-10",
    author: "Neha Gupta",
    featured: true,
    likes: 38,
    comments: [
      {
        id: "c3",
        author: "Vikram Patel",
        content: "It's about time world leaders took decisive action on climate change.",
        date: "2023-04-11",
      },
    ],
  },
  {
    id: "3",
    title: "Government Announces New IT Sector Jobs Initiative",
    excerpt:
      "A new government program aims to create 100,000 new jobs in the technology sector over the next five years.",
    content: `
      <p>The Ministry of Electronics and Information Technology has unveiled an ambitious initiative aimed at creating 100,000 new jobs in the IT sector over the next five years. The program, titled "Digital Workforce 2028," will focus on developing talent in emerging technologies such as artificial intelligence, blockchain, and cybersecurity.</p>
      
      <p>Under this initiative, the government will establish specialized training centers in 50 cities across the country, offering free or subsidized courses to eligible candidates. These centers will be equipped with state-of-the-art facilities and will be run in partnership with leading technology companies.</p>
      
      <p>The program also includes incentives for tech startups that create a minimum number of jobs, including tax benefits and access to low-interest loans. Additionally, a dedicated online platform will be launched to connect trained professionals with potential employers.</p>
      
      <p>Industry leaders have welcomed the announcement, with many highlighting the growing demand for skilled IT professionals in the country. According to recent studies, the technology sector in India is expected to grow at a CAGR of 7.2% through 2028, creating significant employment opportunities.</p>
      
      <p>Applications for the first batch of training programs will open next month, with courses scheduled to begin in July. Interested candidates can find more information on the ministry's official website.</p>
    `,
    category: "jobs",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-04-05",
    author: "Arjun Reddy",
    featured: true,
    likes: 56,
    comments: [],
  },
  {
    id: "4",
    title: "New Blockbuster Film Breaks Box Office Records",
    excerpt: "The latest superhero movie has shattered opening weekend records worldwide.",
    content: `
      <p>The highly anticipated superhero film "Eternal Legends: The Final Chapter" has broken all-time box office records in its opening weekend, grossing over $1.2 billion globally. This unprecedented success marks a new milestone in cinema history and demonstrates the enduring popularity of superhero franchises.</p>
      
      <p>Directed by acclaimed filmmaker Sophia Rodriguez, the movie has received praise from both critics and audiences for its groundbreaking visual effects, compelling storyline, and diverse cast. It currently holds a 95% approval rating on review aggregator sites.</p>
      
      <p>The film, which serves as the culmination of a decade-long narrative spanning multiple movies, features an ensemble cast of A-list actors and introduces several new characters who are expected to lead the franchise into its next phase. Studio executives have already confirmed plans for spin-off series and sequels.</p>
      
      <p>Theater owners are reporting sold-out showings weeks in advance, with some cinemas adding extra screenings to meet demand. The movie's success is particularly significant for the industry, which has been recovering from the impacts of the pandemic on theatrical releases.</p>
      
      <p>Merchandising sales related to the film have also reached record levels, with toys, clothing, and collectibles flying off shelves worldwide. Industry analysts predict that the total revenue generated by the franchise, including box office, streaming, and merchandise, could exceed $5 billion by year's end.</p>
    `,
    category: "entertainment",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-03-28",
    author: "Deepak Verma",
    likes: 29,
    comments: [
      {
        id: "c4",
        author: "Sanjay Mehta",
        content: "I watched it on the first day and it was absolutely mind-blowing!",
        date: "2023-03-29",
      },
      {
        id: "c5",
        author: "Ananya Desai",
        content: "The special effects were incredible, but I thought the story was a bit predictable.",
        date: "2023-03-30",
      },
    ],
  },
  {
    id: "5",
    title: "From College Dropout to Tech CEO: A Journey of Perseverance",
    excerpt: "The inspiring story of how one entrepreneur overcame obstacles to build a successful tech company.",
    content: `
      <p>Ten years ago, Ravi Malhotra was a college dropout with nothing but a laptop and a dream. Today, he's the CEO of CloudTech Solutions, a software company valued at over $500 million. His journey from failure to success offers valuable lessons for aspiring entrepreneurs.</p>
      
      <p>Malhotra's story begins with a series of setbacks. After dropping out of engineering college due to financial constraints, he worked multiple jobs while teaching himself programming at night. His first three startup attempts failed, leaving him in debt and almost ready to give up.</p>
      
      <p>The turning point came when he identified a gap in the market for affordable cloud solutions for small businesses. Working from a small apartment, Malhotra developed the initial version of what would become CloudTech's flagship product. With no funding, he personally approached local businesses to try his software.</p>
      
      <p>Word of mouth helped the company grow steadily, and after two years of bootstrapping, Malhotra secured his first round of venture capital funding. He attributes his success to persistence, continuous learning, and building a product that genuinely solved problems for his customers.</p>
      
      <p>"The most important thing I learned is that failure is not the opposite of success—it's part of the journey to success," says Malhotra. Today, CloudTech employs over 300 people and serves clients in 28 countries. Malhotra now mentors young entrepreneurs and has established a foundation to provide scholarships to students from disadvantaged backgrounds.</p>
    `,
    category: "success-stories",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-03-20",
    author: "Meera Kapoor",
    likes: 87,
    comments: [
      {
        id: "c6",
        author: "Rajesh Khanna",
        content: "Such an inspiring story! It shows that with determination, anything is possible.",
        date: "2023-03-21",
      },
    ],
  },
  {
    id: "6",
    title: "The Rise of Progressive Web Apps",
    excerpt: "How PWAs are changing the mobile experience and why businesses should pay attention.",
    content: `
      <p>Progressive Web Apps (PWAs) are revolutionizing the way users interact with mobile content, offering an experience that combines the best features of websites and native applications. As more businesses adopt this technology, understanding its benefits and implementation has become crucial for staying competitive in the digital landscape.</p>
      
      <p>PWAs provide numerous advantages over traditional mobile apps, including faster loading times, offline functionality, and no need for installation through app stores. They also require less storage space on users' devices and can be updated more seamlessly than native applications.</p>
      
      <p>For businesses, PWAs offer significant benefits in terms of development costs and user engagement. Rather than creating separate apps for different platforms, companies can develop a single PWA that works across all devices. Studies have shown that businesses implementing PWAs have seen an average increase of 36% in user engagement and a 79% increase in conversions.</p>
      
      <p>Major brands like Twitter, Starbucks, and Uber have already embraced PWAs with impressive results. Twitter Lite, for example, saw a 65% increase in pages per session and a 75% increase in tweets sent after launching their PWA.</p>
      
      <p>As browser support for PWA features continues to improve and user expectations for mobile experiences rise, this technology is poised to become the new standard for digital presence. Businesses that adopt PWAs early will likely gain a competitive edge in user experience and operational efficiency.</p>
    `,
    category: "technology",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-03-15",
    author: "Vikram Singh",
    likes: 45,
    comments: [],
  },
  {
    id: "7",
    title: "New Trade Agreement to Boost Regional Economy",
    excerpt: "A landmark trade deal between neighboring countries is expected to create thousands of jobs.",
    content: `
      <p>A historic trade agreement signed yesterday between four neighboring countries is expected to significantly boost regional economic growth and create an estimated 50,000 new jobs over the next five years. The Comprehensive Regional Economic Partnership (CREP) eliminates tariffs on 90% of goods traded between the participating nations and establishes common standards for investment and intellectual property.</p>
      
      <p>Economic analysts predict that the agreement will increase regional GDP by approximately 3.5% by 2028, with particularly strong growth in manufacturing, agriculture, and technology sectors. Small and medium enterprises are expected to benefit substantially from simplified customs procedures and reduced regulatory barriers.</p>
      
      <p>The agreement also includes provisions for environmental protection and labor standards, addressing concerns that had stalled previous negotiation attempts. A joint regulatory body will be established to monitor compliance with these provisions and resolve potential disputes.</p>
      
      <p>Business leaders have welcomed the deal, with industry associations highlighting the opportunities for expansion into new markets. "This agreement opens doors for our members to reach millions of new customers while creating jobs at home," said the president of the National Chamber of Commerce.</p>
      
      <p>Implementation of the agreement will begin in phases starting next quarter, with full implementation expected within two years. Government agencies are already preparing resources to help businesses navigate the new trade landscape and take advantage of the opportunities it presents.</p>
    `,
    category: "world-news",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-03-10",
    author: "Priya Sharma",
    likes: 32,
    comments: [],
  },
  {
    id: "8",
    title: "Remote Work Revolution: Companies Adapting to the New Normal",
    excerpt: "How businesses are transforming their operations to thrive in a remote-first world.",
    content: `
      <p>The global shift to remote work, initially triggered by necessity, has evolved into a permanent transformation of the workplace landscape. Companies across industries are reimagining their operations, policies, and culture to thrive in this new paradigm, with many reporting unexpected benefits alongside the challenges.</p>
      
      <p>Major corporations that once resisted flexible work arrangements are now embracing hybrid or fully remote models. Tech giant TechSphere recently announced that 70% of its workforce will continue working remotely indefinitely, while financial services firm GlobalFinance has redesigned its offices to function primarily as collaboration spaces rather than daily workplaces.</p>
      
      <p>This shift has profound implications for talent acquisition and retention. Companies report accessing wider talent pools by hiring without geographic constraints, while employees increasingly prioritize flexibility when considering job opportunities. A recent survey found that 64% of professionals would turn down a job that didn't offer remote work options, even if it came with higher compensation.</p>
      
      <p>However, maintaining company culture and ensuring effective collaboration remain significant challenges. Organizations are investing in new digital tools, establishing clear communication protocols, and creating virtual team-building activities to address these issues. Some are experimenting with quarterly in-person retreats to balance the benefits of remote work with the value of face-to-face interaction.</p>
      
      <p>As this workplace revolution continues to unfold, both employers and employees are navigating a complex landscape of opportunities and challenges that will likely reshape the concept of work for generations to come.</p>
    `,
    category: "jobs",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-03-05",
    author: "Karan Malhotra",
    likes: 51,
    comments: [
      {
        id: "c7",
        author: "Nisha Patel",
        content: "My company went fully remote last year and productivity has actually increased!",
        date: "2023-03-06",
      },
      {
        id: "c8",
        author: "Rohan Joshi",
        content:
          "I miss the office environment sometimes, but the flexibility of remote work has improved my work-life balance tremendously.",
        date: "2023-03-07",
      },
    ],
  },
]

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Rajesh founded Log Vikas with a vision to empower people through technology and information. With over 15 years of experience in the tech industry, he leads our strategic direction and innovation initiatives.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "Priya Singh",
    role: "Chief Technology Officer",
    bio: "Priya oversees all technical aspects of Log Vikas, from website development to app creation. Her expertise in emerging technologies ensures we stay at the cutting edge of digital solutions.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Amit Sharma",
    role: "Content Director",
    bio: "Amit leads our content strategy across all platforms. With a background in journalism, he ensures that Log Vikas delivers accurate, engaging, and valuable information to our readers.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Neha Gupta",
    role: "Head of Business Development",
    bio: "Neha drives our growth strategies and partnership initiatives. Her innovative approach to business development has helped Log Vikas expand its reach and impact.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

// Services Data
export const services: Service[] = [
  {
    id: "1",
    title: "Website Development",
    description:
      "We create custom, responsive websites that reflect your brand and meet your business objectives. Our development process focuses on user experience, performance, and scalability.",
    icon: "code",
    benefits: [
      "Custom designs tailored to your brand",
      "Mobile-responsive layouts",
      "SEO-friendly architecture",
      "Content management systems",
      "E-commerce capabilities",
      "Performance optimization",
    ],
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Our team builds native and cross-platform mobile applications that deliver exceptional user experiences. We handle the entire development lifecycle from concept to deployment.",
    icon: "smartphone",
    benefits: [
      "iOS and Android development",
      "Cross-platform solutions",
      "User-centered design",
      "Offline functionality",
      "Integration with existing systems",
      "Ongoing support and updates",
    ],
  },
  {
    id: "3",
    title: "Digital Marketing",
    description:
      "Enhance your online presence and reach your target audience with our comprehensive digital marketing services. We develop strategies that drive traffic, engagement, and conversions.",
    icon: "bar-chart",
    benefits: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Content marketing",
      "Email campaigns",
      "Pay-per-click advertising",
      "Analytics and reporting",
    ],
  },
  {
    id: "4",
    title: "UI/UX Design",
    description:
      "We create intuitive, engaging user interfaces and experiences that keep your customers coming back. Our design process is research-driven and focused on user needs.",
    icon: "layout",
    benefits: [
      "User research and testing",
      "Wireframing and prototyping",
      "Visual design",
      "Interaction design",
      "Accessibility compliance",
      "Design systems",
    ],
  },
]

// Milestones Data
export const milestones: Milestone[] = [
  {
    id: "1",
    year: "2018",
    title: "Foundation of Log Vikas",
    description: "Log Vikas was established with a mission to empower people through technology and information.",
  },
  {
    id: "2",
    year: "2019",
    title: "Launch of First Website",
    description: "We launched our first website, providing technology news and insights to a growing audience.",
  },
  {
    id: "3",
    year: "2020",
    title: "Expansion of Services",
    description:
      "Added website and app development services to our portfolio, helping businesses establish their digital presence.",
  },
  {
    id: "4",
    year: "2021",
    title: "Readers' Corner Introduction",
    description: "Launched the Readers' Corner, creating a platform for diverse voices and perspectives.",
  },
  {
    id: "5",
    year: "2022",
    title: "Community Milestone",
    description: "Reached 100,000 monthly active users across our platforms.",
  },
  {
    id: "6",
    year: "2023",
    title: "Technology Innovation Award",
    description: "Received recognition for our contributions to technology education and digital literacy.",
  },
]

// Helper function to get featured articles
export const getFeaturedArticles = () => {
  return articles.filter((article) => article.featured)
}

// Helper function to get articles by category
export const getArticlesByCategory = (category: string) => {
  return articles.filter((article) => article.category === category)
}

// Helper function to get article by id
export const getArticleById = (id: string) => {
  return articles.find((article) => article.id === id)
}
