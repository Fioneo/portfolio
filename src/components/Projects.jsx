import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
const translations = {
  en: {
    title: "Projects",
    subtitle: "Some of my recent work",
    viewCode: "View Code",
    viewLive: "Live Demo",
    projects: [
      {
        title: "Crypto Dashboard",
        description:
          "CryptoTracker is a modern single-page application for tracking cryptocurrencies in real time.",
        tags: ["Tailwind", "Javascript", "Chart.js"],
        links: {
          demo: "https://fioneo-crypto-tracker.vercel.app/",
          github: "https://github.com/Fioneo/crypto-tracker",
        },
      },
      {
        title: "React Shop",
        description: "Shop built with React, Tailwind CSS, and Lucide React",
        tags: ["React", "lucide-react", "Tailwind"],
        links: {
          demo: "https://fioneo-react-shop.vercel.app/",
          github: "https://github.com/Fioneo/react-shop",
        },
      },
      {
        title: "Todo",
        description:
          "A modern Todo App with Tailwind CSS. Add, edit, complete, and delete tasks with data saved in localStorage.",
        tags: ["React", "lucide-react", "Tailwind"],
        links: {
          demo: "https://fioneo-todo.vercel.app/",
          github: "https://github.com/Fioneo/react-todo",
        },
      },
      {
        title: "Portfolio Website",
        description:
          "Creative portfolio site with animations and interactive elements",
        tags: ["React", "Motion", "Tailwind"],
      },
    ],
  },
  ru: {
    title: "Проекты",
    subtitle: "Некоторые из моих недавних работ",
    viewCode: "Код",
    viewLive: "Демо",
    projects: [
      {
        title: "E-Commerce Платформа",
        description:
          "Полнофункциональная платформа для онлайн-покупок с корзиной и оплатой",
        tags: ["React", "TypeScript", "Stripe"],
        links: {
          demo: "https://fioneo-crypto-tracker.vercel.app/",
          github: "https://github.com/Fioneo/crypto-tracker",
        },
      },
      {
        title: "Менеджер Задач",
        description:
          "Совместный менеджер задач с обновлениями в реальном времени",
        tags: ["Next.js", "Firebase", "Tailwind"],
        links: {
          demo: "https://fioneo-react-shop.vercel.app/",
          github: "https://github.com/Fioneo/react-shop",
        },
      },
      {
        title: "Погодная Панель",
        description:
          "Красивое погодное приложение с прогнозами, картами и метриками",
        tags: ["React", "API", "Charts"],
        links: {
          demo: "https://fioneo-todo.vercel.app/",
          github: "https://github.com/Fioneo/react-todo",
        },
      },
      {
        title: "Сайт-Портфолио",
        description:
          "Креативный сайт-портфолио с анимациями и интерактивными элементами",
        tags: ["React", "Motion", "Tailwind"],
      },
    ],
  },
};
function Projects({ language }) {
  const t = translations[language];
  return (
    <section
      className="py-20 px-4 min-h-screen flex justify-center items-center"
      id="projects"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{"{ "}</span>
            {t.title}
            <span className="text-primary font-mono">{" }"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </motion.div>
        <ul className="grid md:grid-cols-2 gap-6">
          {t.projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-card p-6 rounded-lg border border-border group-hover:border-primary/50 transition-colors h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <div className="w-8 h-8 rounded bg-primary/20"></div>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.links?.github}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      aria-label={t.viewCode}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.links?.demo}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      aria-label={t.viewLive}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-bg text-sm rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 font-mono text-sm text-muted text-center"
        >
          <span className="text-primary">// </span>
          More projects on GitHub
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
