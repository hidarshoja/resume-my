import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: 'Haider Shoja',
      title: 'Senior Frontend Developer',
      subtitle: 'Web Development Specialist',
      description: 'Senior Frontend Developer with 5+ years of experience in building high-performance web applications. Expert in React, Next.js, and modern JavaScript frameworks.',
      cta: 'View My Work',
      contact: 'Get In Touch',
      available: 'Available for work',
      currently: 'Currently at Atlas Pood · Instructor at Fakooran',
      punchline: 'I design and ship high-performance interfaces — from FinTech platforms to bilingual enterprise systems that people actually use.',
      openTo: 'Open to remote & hybrid roles',
      proofEyebrow: 'Selected highlights',
      proofTitle: 'Proof, not promises',
      viewAll: 'See all projects',
      featured: 'Featured',
    },
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'My Journey & Experience',
      summary: 'Senior Frontend Developer with 5+ years of experience in building high-performance web applications. Expert in React, Next.js, and modern JavaScript frameworks. Proven track record of delivering scalable and maintainable solutions. Strong focus on user experience and performance optimization.',
      achievements: 'Key Achievements',
      achievementsList: [
        {
          title: 'Performance Optimization',
          description: 'Improved website loading speed by 100% through code optimization and implementing best practices.',
          icon: '⚡',
        },
        {
          title: 'Technical Leadership',
          description: 'Mentored junior developers and established coding standards that improved team productivity by 100%.',
          icon: '👥',
        },
        {
          title: 'Project Management',
          description: 'Successfully led the development of multiple large-scale web applications from concept to deployment.',
          icon: '📊',
        },
        {
          title: 'Professional Training',
          description: 'Trained multiple professional developers at Fakooran Institute and helped them successfully enter the job market.',
          icon: '🎓',
        },
      ],
      experience: 'Work Experience',
      experienceList: [
        {
          company: 'Atlas Pood Company',
          role: 'Senior Frontend Developer',
          period: 'August 2024 - Present',
          responsibilities: [
            'Led the development of a modern admin panel using React and Bootstrap',
            'Implemented a robust bilingual system (Persian/English) with dynamic content management',
            'Integrated Zakeke 3D curtain design API, enhancing user experience',
            'Collaborated with backend team to design efficient API integrations',
          ],
        },
        {
          company: 'Pars Pi Company',
          role: 'Frontend Developer (Remote)',
          period: '2023 - 2024',
          responsibilities: [
            'Developed Club Mega Card, gold trading platform and other projects',
            'Implemented responsive designs for various devices',
            'Managed project lifecycles from development to deployment',
            'Collaborated with backend to improve performance',
          ],
        },
        {
          company: 'Sorena Company',
          role: 'Frontend Developer',
          period: '2022 - 2023',
          responsibilities: [
            'Developed high-performance web applications using modern JavaScript frameworks',
            'Implemented responsive designs and optimized user interfaces',
            'Collaborated with cross-functional teams',
            'Optimized application performance and code maintainability',
          ],
        },
        {
          company: 'Melcom Company',
          role: 'Frontend Developer',
          period: '2021 - 2022',
          responsibilities: [
            'Developed web applications using React and Next.js',
            'Implemented modern UI/UX designs',
            'Collaborated with design and backend teams',
            'Optimized application performance',
          ],
        },
        {
          company: 'Fakooran Institute',
          role: 'Web Programming Instructor',
          period: '2020 - 2024',
          responsibilities: [
            'Taught comprehensive web development courses (HTML, CSS, Bootstrap, TailwindCSS, React, Next.js)',
            'Recognized as one of the top-rated instructors by students',
            'Developed modern curriculum under Technical and Vocational Training Organization',
            'Mentored students in building professional portfolios',
          ],
        },
      ],
    },
    // Projects Page
    projects: {
      title: 'My Projects',
      subtitle: 'Portfolio & Case Studies',
      viewLive: 'View Live',
      viewVideo: 'Watch Summary Video',
      viewDetails: 'View Details',
      projectsList: [
        {
          id: 1,
          title: 'Atlas Pood Bilingual Website',
          description: 'A modern bilingual website (Persian/English) with 3D curtain design API integration',
          tech: ['React', 'Bootstrap', 'API Integration'],
          category: 'Corporate',
        },
        {
          id: 2,
          title: 'Dr. Aspirin Treatment Site',
          description: 'Medical treatment platform with modern UI/UX',
          tech: ['Next.js', 'TailwindCSS'],
          category: 'Healthcare',
        },
        {
          id: 3,
          title: 'Dr. Aspirin Admin Panel',
          description: 'Comprehensive admin panel for medical platform management',
          tech: ['Next.js', 'TailwindCSS'],
          category: 'Dashboard',
        },
        {
          id: 4,
          title: 'Digital Currency Platform',
          description: 'Cryptocurrency trading platform with user and admin panels',
          tech: ['React', 'Redux', 'REST API'],
          category: 'FinTech',
        },
        {
          id: 5,
          title: 'Gold Trading Website',
          description: 'Platform for gold buying and selling transactions',
          tech: ['React', 'JavaScript'],
          category: 'FinTech',
        },
        {
          id: 6,
          title: 'Nora Part Shop',
          description: 'E-commerce platform for auto parts',
          tech: ['React', 'E-commerce'],
          category: 'E-commerce',
        },
        {
          id: 7,
          title: 'Real Estate Project',
          description: 'Property listing and real estate management platform',
          tech: ['React', 'Maps API'],
          category: 'Real Estate',
        },
        {
          id: 8,
          title: 'Iranian Carpet Project',
          description: 'Online showcase and sales platform for Iranian carpets',
          tech: ['React', 'E-commerce'],
          category: 'E-commerce',
        },
        {
          id: 9,
          title: 'Fakur Training Site',
          description: 'Educational platform for online learning',
          tech: ['React', 'LMS'],
          category: 'Education',
        },
        {
          id: 10,
          title: 'Beyond Website',
          description: 'Corporate website with modern design',
          tech: ['React', 'Responsive Design'],
          category: 'Corporate',
        },
        {
          id: 11,
          title: 'Pars Hesabdar',
          description: 'Accounting software platform',
          tech: ['React', 'Financial Tools'],
          category: 'FinTech',
        },
        {
          id: 12,
          title: 'User Club Mega Card',
          description: 'Accounting software platform',
          tech: ['React', 'Financial Tools'],
          category: 'FinTech',
        },
      ],
    },
    // Skills Page
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies & Tools I Work With',
      categories: {
        frontend: 'Frontend Development',
        frameworks: 'Frameworks & Libraries',
        styling: 'Styling & UI',
        tools: 'Tools & Others',
      },
    },
    // Contact Page
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's work together",
      description: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        github: 'GitHub',
      },
    },
    // Footer
    footer: {
      copyright: '© 2026 Haider Shoja. All rights reserved.',
      madeWith: 'Made with',
      tagline: 'High-performance interfaces for products people actually use.',
      ctaTitle: "Let's build something that ships.",
      ctaButton: 'Start a conversation',
      explore: 'Explore',
      connect: 'Connect',
    },
  },
  fa: {
    // Navigation
    nav: {
      home: 'خانه',
      about: 'درباره من',
      projects: 'پروژه‌ها',
      skills: 'مهارت‌ها',
      contact: 'تماس',
    },
    // Hero Section
    hero: {
      greeting: 'سلام، من',
      name: 'حیدر شجاع',
      title: 'توسعه‌دهنده ارشد فرانت‌اند',
      subtitle: 'متخصص توسعه وب',
      description: 'توسعه‌دهنده ارشد فرانت‌اند با بیش از ۵ سال تجربه در ساخت برنامه‌های وب با عملکرد بالا. متخصص در React، Next.js و فریم‌ورک‌های مدرن JavaScript.',
      cta: 'مشاهده کارها',
      contact: 'تماس با من',
      available: 'آماده همکاری',
      currently: 'اکنون در اطلس پود · مدرس آموزشگاه فکوران',
      punchline: 'رابط‌هایی می‌سازم که هم سریع‌اند هم دقیق — از پلتفرم‌های فین‌تک تا سیستم‌های سازمانی دوزبانه که واقعاً استفاده می‌شوند.',
      openTo: 'آماده همکاری حضوری، هیبرید و ریموت',
      proofEyebrow: 'نقاط برجسته',
      proofTitle: 'اثبات، نه ادعا',
      viewAll: 'همه پروژه‌ها',
      featured: 'ویژه',
    },
    // About Page
    about: {
      title: 'درباره من',
      subtitle: 'مسیر و تجربیات من',
      summary: 'توسعه‌دهنده ارشد فرانت‌اند با بیش از ۵ سال تجربه در ساخت برنامه‌های وب با عملکرد بالا. متخصص در React، Next.js و فریم‌ورک‌های مدرن JavaScript. سابقه اثبات شده در ارائه راه‌حل‌های مقیاس‌پذیر و قابل نگهداری. تمرکز قوی بر تجربه کاربری و بهینه‌سازی عملکرد.',
      achievements: 'دستاوردهای کلیدی',
      achievementsList: [
        {
          title: 'بهینه‌سازی عملکرد',
          description: 'بهبود سرعت بارگذاری وب‌سایت تا ۱۰۰٪ از طریق بهینه‌سازی کد و پیاده‌سازی بهترین روش‌ها.',
          icon: '⚡',
        },
        {
          title: 'رهبری فنی',
          description: 'مربی‌گری توسعه‌دهندگان تازه‌کار و ایجاد استانداردهای کدنویسی که بهره‌وری تیم را ۱۰۰٪ بهبود بخشید.',
          icon: '👥',
        },
        {
          title: 'مدیریت پروژه',
          description: 'هدایت موفق توسعه چندین برنامه وب در مقیاس بزرگ از مفهوم تا استقرار.',
          icon: '📊',
        },
        {
          title: 'آموزش حرفه‌ای',
          description: 'آموزش چندین برنامه‌نویس حرفه‌ای در آموزشگاه فکوران و همراهی در مسیر ورود موفق به بازار کار.',
          icon: '🎓',
        },
      ],
      experience: 'سوابق کاری',
      experienceList: [
        {
          company: 'شرکت اطلس پود',
          role: 'توسعه‌دهنده ارشد فرانت‌اند',
          period: 'مرداد ۱۴۰۳ - اکنون',
          responsibilities: [
            'توسعه پنل مدیریت مدرن با استفاده از React و Bootstrap',
            'پیاده‌سازی سیستم دوزبانه قوی (فارسی/انگلیسی) با مدیریت محتوای پویا',
            'ادغام API طراحی پرده سه بعدی Zakeke',
            'همکاری با تیم بک‌اند برای طراحی یکپارچه‌سازی‌های API کارآمد',
          ],
        },
        {
          company: 'شرکت پارس پای',
          role: 'توسعه‌دهنده فرانت‌اند (دورکاری)',
          period: '۱۴۰۲ - ۱۴۰۳',
          responsibilities: [
            'انجام پروژه‌های کلاب مگا کارت، خرید و فروش طلا و ...',
            'پیاده‌سازی طراحی‌های واکنش‌گرا برای دستگاه‌های مختلف',
            'مدیریت چرخه عمر پروژه از توسعه تا استقرار',
            'همکاری با بک‌اند جهت بهبود سرعت و عملکرد',
          ],
        },
        {
          company: 'شرکت سورنا',
          role: 'توسعه‌دهنده فرانت‌اند',
          period: '۱۴۰۱ - ۱۴۰۲',
          responsibilities: [
            'توسعه برنامه‌های وب با عملکرد بالا با فریم‌ورک‌های مدرن JavaScript',
            'پیاده‌سازی طراحی‌های واکنش‌گرا و بهینه‌سازی رابط کاربری',
            'همکاری با تیم‌های چند عملکردی',
            'بهینه‌سازی عملکرد برنامه و نگهداری کد',
          ],
        },
        {
          company: 'شرکت مالکوم',
          role: 'توسعه‌دهنده فرانت‌اند',
          period: '۱۴۰۰ - ۱۴۰۱',
          responsibilities: [
            'توسعه برنامه‌های وب با React و Next.js',
            'پیاده‌سازی طراحی‌های مدرن UI/UX',
            'همکاری با تیم‌های طراحی و بک‌اند',
            'بهینه‌سازی عملکرد برنامه',
          ],
        },
        {
          company: 'آموزشگاه فکوران',
          role: 'مدرس برنامه‌نویسی وب',
          period: '۱۳۹۹ - ۱۴۰۳',
          responsibilities: [
            'تدریس دوره‌های جامع توسعه وب (HTML، CSS، Bootstrap، TailwindCSS، React، Next.js)',
            'شناخته شده به عنوان یکی از اساتید برتر از دیدگاه دانشجویان',
            'توسعه برنامه درسی مدرن زیر نظر سازمان فنی و حرفه‌ای',
            'راهنمایی دانشجویان در ساخت پورتفولیو حرفه‌ای',
          ],
        },
      ],
    },
    // Projects Page
    projects: {
      title: 'پروژه‌های من',
      subtitle: 'نمونه کارها و پروژه‌ها',
      viewLive: 'مشاهده سایت',
      viewVideo: 'مشاهده خلاصه ویدیو',
      viewDetails: 'جزئیات بیشتر',
      projectsList: [
        {
          id: 1,
          title: 'سایت دوزبانه اطلس پود',
          description: 'وب‌سایت دوزبانه مدرن (فارسی/انگلیسی) با ادغام API طراحی پرده سه بعدی',
          tech: ['React', 'Bootstrap', 'API Integration'],
          category: 'شرکتی',
        },
        {
          id: 2,
          title: 'سایت درمان دکتر آسپرین',
          description: 'پلتفرم پزشکی با رابط کاربری مدرن',
          tech: ['Next.js', 'TailwindCSS'],
          category: 'پزشکی',
        },
        {
          id: 3,
          title: 'پنل مدیریت دکتر آسپرین',
          description: 'پنل مدیریت جامع برای پلتفرم پزشکی',
          tech: ['Next.js', 'TailwindCSS'],
          category: 'داشبورد',
        },
        {
          id: 4,
          title: 'پلتفرم ارز دیجیتال',
          description: 'پلتفرم معاملات ارز دیجیتال با پنل کاربری و مدیریت',
          tech: ['React', 'Redux', 'REST API'],
          category: 'فین‌تک',
        },
        {
          id: 5,
          title: 'سایت معاملات طلا',
          description: 'پلتفرم خرید و فروش طلا',
          tech: ['React', 'JavaScript'],
          category: 'فین‌تک',
        },
        {
          id: 6,
          title: 'فروشگاه نورا پارت',
          description: 'فروشگاه آنلاین قطعات خودرو',
          tech: ['React', 'E-commerce'],
          category: 'فروشگاهی',
        },
        {
          id: 7,
          title: 'پروژه املاک',
          description: 'پلتفرم مدیریت و نمایش املاک',
          tech: ['React', 'Maps API'],
          category: 'املاک',
        },
        {
          id: 8,
          title: 'پروژه فرش ایرانی',
          description: 'پلتفرم نمایش و فروش فرش ایرانی',
          tech: ['React', 'E-commerce'],
          category: 'فروشگاهی',
        },
        {
          id: 9,
          title: 'سایت آموزشی فکور',
          description: 'پلتفرم آموزش آنلاین',
          tech: ['React', 'LMS'],
          category: 'آموزشی',
        },
        {
          id: 10,
          title: 'سایت بایوند',
          description: 'وب‌سایت شرکتی با طراحی مدرن',
          tech: ['React', 'Responsive Design'],
          category: 'شرکتی',
        },
          {
            id: 11,
            title: 'پارس حسابدار',
            description: 'پلتفرم نرم‌افزار حسابداری',
            tech: ['React', 'Financial Tools'],
            category: 'فین‌تک',
          },
          {
            id: 12,
            title: 'کاربر گروه مگا کارت',
            description: 'پلتفرم مدیریت کاربران گروه مگا کارت',
            tech: ['React', 'Financial Tools'],
            category: 'فین‌تک',
          },
      ],
    },
    // Skills Page
    skills: {
      title: 'مهارت‌های فنی',
      subtitle: 'تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم',
      categories: {
        frontend: 'توسعه فرانت‌اند',
        frameworks: 'فریم‌ورک‌ها و کتابخانه‌ها',
        styling: 'استایل و UI',
        tools: 'ابزارها و سایر',
      },
    },
    // Contact Page
    contact: {
      title: 'تماس با من',
      subtitle: 'بیایید با هم کار کنیم',
      description: 'من همیشه برای فرصت‌های جدید و همکاری آماده هستم. با من تماس بگیرید!',
      form: {
        name: 'نام شما',
        email: 'ایمیل شما',
        message: 'پیام شما',
        send: 'ارسال پیام',
      },
      info: {
        phone: 'تلفن',
        email: 'ایمیل',
        github: 'گیت‌هاب',
      },
    },
    // Footer
    footer: {
      copyright: '© ۱۴۰۵ حیدر شجاع. تمامی حقوق محفوظ است.',
      madeWith: 'ساخته شده با',
      tagline: 'رابط‌هایی با عملکرد بالا، برای محصولاتی که واقعاً استفاده می‌شوند.',
      ctaTitle: 'بیایید چیزی بسازیم که به مرحله انتشار برسد.',
      ctaButton: 'شروع گفتگو',
      explore: 'مسیرها',
      connect: 'ارتباط',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fa';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.body.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL: language === 'fa' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}



