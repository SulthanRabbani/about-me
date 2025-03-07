import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Code, Star, User, Briefcase } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const allSkills = [
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
    { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'RESTful APIs', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
  ];

  const stats = [
    { value: '3+', label: t('about.experience') },
    { value: '5+', label: t('about.years') },
    { value: '40+', label: t('about.completed') },
    { value: '15+', label: t('about.clients') },
  ];

  const workExperience = [
    {
      role: t('experience.role1'),
      company: "ABC Tech",
      period: "2021 - Present",
      description: t('experience.description1'),
      skills: ["React", "Next.js", "TypeScript"]
    },
    {
      role: t('experience.role2'),
      company: "XYZ Solutions",
      period: "2019 - 2021",
      description: t('experience.description2'),
      skills: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      role: t('experience.role3'),
      company: "DevStudio",
      period: "2018 - 2019",
      description: t('experience.description3'),
      skills: ["JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <User className="w-4 h-4 mr-1.5" /> {t('about.subtitle')}
          </div>
          
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            {t('about.title')}
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 mb-12 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
        }`}>
          <div className="tech-card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-500" />
              <span>{t('about.whoAmI')}</span>
            </h3>
            
            <p className="text-muted-foreground mb-6">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-700 delay-300 mb-12 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
        }`}>
          <div className="tech-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-500" />
              <span>{t('about.workExperience')}</span>
            </h3>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1">
                    <h4 className="text-lg font-semibold">{job.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                      <span className="font-medium text-purple-600 dark:text-purple-400">{job.company}</span>
                      <span className="hidden sm:block text-gray-500">•</span>
                      <span className="text-muted-foreground">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2 mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
        }`}>
          <div className="tech-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-500" />
              <span>{t('about.skills')}</span>
            </h3>
            
            <div className="hidden md:block overflow-hidden relative">
              <div className="skills-carousel">
                <div className="skills-track">
                  {[...Array(2)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="skills-slide flex gap-8">
                      {allSkills.map((item, idx) => (
                        <div 
                          key={`${repeatIndex}-${idx}`} 
                          className="skill-icon flex flex-col items-center"
                          title={item.name}
                        >
                          <div className="h-16 w-16 flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div className="text-xs text-center mt-2 text-muted-foreground">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:hidden">
              {allSkills.map((item, idx) => (
                <div 
                  key={idx} 
                  className="skill-icon flex flex-col items-center"
                  title={item.name}
                >
                  <div className="h-16 w-16 mx-auto flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="text-xs text-center mt-2 text-muted-foreground">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
