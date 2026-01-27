import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Code2,
  FileCode,
  Layers,
  Palette,
  Zap,
  Triangle,
  GitBranch,
  Braces,
} from "lucide-react";
const translations = {
  en: {
    title: "Skills",
    subtitle: "Technologies I work with",
  },
  ru: {
    title: "Навыки",
    subtitle: "Технологии, с которыми я работаю",
  },
};

const skills = [
  {
    name: "React",
    color: "#61DAFB",
    icon: Code2,
    description: {
      en: "Building modern, interactive UIs with hooks and components",
      ru: "Создание современных интерактивных интерфейсов с хуками",
    },
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: FileCode,
    description: {
      en: "Writing type-safe code with interfaces and generics",
      ru: "Написание типобезопасного кода с использованием интерфейсов и дженериков",
    },
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
    icon: Braces,
    description: {
      en: "ES6+, async/await and modern patterns",
      ru: "Уверенное владение ES6+, async/await и современных паттернов",
    },
  },
  {
    name: "HTML/CSS",
    color: "#E44D26",
    icon: Layers,
    description: {
      en: "Semantic HTML5 and modern CSS with animations",
      ru: "Семантический HTML5 и современный CSS с анимациями",
    },
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    icon: Zap,
    description: {
      en: "Rapid UI development with utility-first CSS",
      ru: "Быстрая разработка UI с utility-first CSS",
    },
  },
  {
    name: "Next.js",
    color: "text-second",
    bgColor: "#000000",
    icon: Triangle,
    description: {
      en: "Full-stack apps with SSR, SSG, and API routes",
      ru: "Full-stack приложения с SSR, SSG и API маршрутами",
    },
  },
  {
    name: "Git",
    color: "#F05032",
    icon: GitBranch,
    description: {
      en: "Version control and collaborative workflows",
      ru: "Контроль версий и командная работа",
    },
  },
  {
    name: "SCSS",
    color: "#CC6699",
    icon: Palette,
    description: {
      en: "Advanced styling with variables and mixins",
      ru: "Продвинутая стилизация с переменными и миксинами",
    },
  },
];
const techStackArray = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Tailwind",
  "Next.js",
  "Git",
  "SCSS",
];
function Skills({ language }) {
  const t = translations[language];
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    if (currentLineIndex < techStackArray.length) {
      const currentString = techStackArray[currentLineIndex];

      if (charIndex < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentTyping((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => [...prev, currentTyping]);
          setCurrentTyping("");
          setCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, charIndex, isVisible, currentTyping]);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{"<"}</span>
            {t.title}
            <span className="text-primary font-mono">{"/>"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                  }}
                />
                <div className="relative bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors  h-full flex flex-col gap-2">
                  <div
                    className="mb-2 p-3 w-fit rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: `${skill.bgColor ? skill.bgColor : skill.color}15`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: skill.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold  font-mono"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground ">
                    {skill.description[language]}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onViewportEnter={() => setIsVisible(true)}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-card rounded-lg border border-border p-6 overflow-hidden hover:border-primary/50 transition-colors">
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="font-mono text-sm">
              <div className="text-muted-foreground mb-3 text-xs">
                <span className="text-primary">// skills.ts</span>
              </div>

              <div className="space-y-1">
                <div>
                  <span className="text-[#569CD6]">const</span>{" "}
                  <span className="text-[#4FC1FF]">techStack</span>
                  <span className="text-[#D4D4D4]">: </span>
                  <span className="text-[#4EC9B0]">string</span>
                  <span className="text-[#D4D4D4]">[] = [</span>
                </div>
                {typedLines.map((line, index) => (
                  <div key={index} className="ml-4">
                    <span className="text-[#CE9178]">"{line}"</span>
                    <span className="text-[#D4D4D4]">,</span>
                  </div>
                ))}

                {currentLineIndex < techStackArray.length && currentTyping && (
                  <div className="ml-4">
                    <span className="text-[#CE9178]">"{currentTyping}</span>
                    <motion.span
                      className="inline-block w-2 h-4 bg-primary"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </div>
                )}

                {currentLineIndex >= techStackArray.length && (
                  <div>
                    <span className="text-[#D4D4D4]">];</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 font-mono text-sm text-muted-foreground text-center"
        >
          <span className="text-primary">{"/* "}</span>
          Constantly learning new technologies
          <span className="text-primary">{" */"}</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
