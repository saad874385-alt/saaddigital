import { motion } from "motion/react";
import { ArrowRight, Code2, Rocket, Heart, Trophy, Mail, Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Projects", "Initiatives", "Skills", "Impact", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-display font-bold text-xl tracking-tighter">
            PORTFOLIO<span className="text-brand-accent">.</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-brand-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-brand-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-accent hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-wider uppercase mb-6">
              Available for New Opportunities
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              Crafting <br />
              <span className="text-brand-accent italic">Digital</span> <br />
              Experiences.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              I'm a Full-Stack Developer and UI Designer passionate about building performant, 
              scalable, and beautiful web applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-gray-800 transition-all group"
              >
                View Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Say Hello
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-10 right-10 hidden xl:block"
      >
         <div className="w-64 h-64 border-2 border-gray-100 rounded-3xl animate-spin-slow rotate-12" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200">
               <img 
                src="https://picsum.photos/seed/profile/800/800" 
                alt="About me" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent rounded-3xl -z-10" />
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Story</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">Driven by curiosity and a love for building products.</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hello! I'm a developer who bridges the gap between design and functionality. 
                With a background in computer science and a keen eye for aesthetics, 
                I create web solutions that don't just work—they feel right.
              </p>
              <p>
                My journey started with building simple static pages, and it has evolved 
                into architecting complex full-stack systems. I thrive in collaborative 
                environments where I can push the boundaries of what's possible on the web.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-sm">Global / Remote</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                  <p className="text-sm">5+ Years Professional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/seed/fintech/800/600",
      description: "A real-time financial tracking dashboard with predictive analytics."
    },
    {
      title: "E-Commerce OS",
      category: "SaaS Platform",
      image: "https://picsum.photos/seed/shop/800/600",
      description: "Scalable platform for independent creators to sell digital assets."
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps Tool",
      image: "https://picsum.photos/seed/cloud/800/600",
      description: "Visual interface for managing multi-cloud kubernetes clusters."
    },
    {
      title: "Health Metrics",
      category: "Mobile First",
      image: "https://picsum.photos/seed/health/800/600",
      description: "Personalized wellness tracking with wearable integration."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Works</h2>
            <h3 className="text-5xl font-bold">Selected Projects.</h3>
          </div>
          <button className="text-sm font-bold underline underline-offset-8 hover:text-brand-accent transition-colors">
            View All Projects
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <ExternalLink className="text-brand-primary h-6 w-6" />
                   </div>
                </div>
              </div>
              <p className="text-sm text-brand-accent font-bold mb-2 uppercase">{project.category}</p>
              <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
              <p className="text-gray-600 line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Initiatives = () => {
  const initiatives = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Open Source Contributor",
      description: "Active contributor to major React and TypeScript ecosystems, helping maintain core libraries."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mentorship Program",
      description: "Guiding 10+ junior developers every year through structured internship programs and code reviews."
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Tech Community lead",
      description: "Organizing local meetups and workshops to bridge the digital divide in underprivileged areas."
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
             <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Beyond Code</h2>
             <h3 className="text-4xl font-bold mb-6">Initiatives & Community.</h3>
             <p className="text-gray-400 leading-relaxed">
               I believe in giving back to the community that fostered my growth. 
               Beyond professional work, I dedicate time to social impact projects.
             </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
             {initiatives.map((item, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent transition-colors"
                >
                  <div className="text-brand-accent mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-normal">{item.description}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Motion", "Nex.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "AWS", "Vercel"] },
    { category: "Soft Skills", items: ["Leadership", "Agile", "Communication", "Problem Solving"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">The Toolkit</h2>
          <h3 className="text-5xl font-bold">Skills & Expertise.</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
               <h4 className="text-xl font-bold mb-6 text-brand-primary">{group.category}</h4>
               <ul className="space-y-4">
                 {group.items.map((skill) => (
                   <li key={skill} className="flex items-center text-gray-600">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-3" />
                     {skill}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
    const stats = [
        { label: "Projects Delivered", value: "50+", icon: <Rocket /> },
        { label: "Happy Clients", value: "30+", icon: <Heart /> },
        { label: "Awards Won", value: "12", icon: <Trophy /> },
        { label: "Years Experience", value: "5+", icon: <Code2 /> }
    ];

    return (
        <section id="impact" className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.div 
                                whileInView={{ scale: [0.8, 1.1, 1] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-5xl font-black text-brand-primary mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">Get In Touch</h2>
            <h3 className="text-6xl font-bold mb-8 italic">Let's build something <span className="text-brand-accent">extraordinary.</span></h3>
            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open. 
              I'm excited to hear about your vision.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center text-2xl font-bold hover:text-brand-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-6 group-hover:border-brand-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                hello@portfolio.com
              </a>
              <div className="flex gap-4 pt-6">
                 {[Github, Linkedin, Rocket].map((Icon, i) => (
                   <a key={i} href="#" className="w-14 h-14 rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
                     <Icon className="h-6 w-6" />
                   </a>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all" placeholder="New Project" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center shadow-lg shadow-black/5">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-gray-100 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="font-display font-bold text-2xl mb-6 tracking-tighter">
                   PORTFOLIO<span className="text-brand-accent">.</span>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Distinctive Portfolio. Hand-crafted with passion.
                </p>
                <div className="flex justify-center gap-8 mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---

export default function Portfolio() {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-accent/10 selection:text-brand-accent">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Initiatives />
      <Skills />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}
