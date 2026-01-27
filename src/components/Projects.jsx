import { motion } from "motion/react";
import {
  Github,
  ExternalLin,
  TrendingUp,
  ShoppingCart,
  CheckSquare,
  Monitor,
} from "lucide-react";
const translations = {
  en: {
    title: "Projects",
    subtitle: "Some of my recent work",
    viewCode: "View Code",
    viewLive: "Live Demo",
    projects: [
      {
        title: "Crypto Dashboard",
        icon: TrendingUp,
        description:
          "Single-page application for tracking cryptocurrencies in real time. It provides global market statistics, a sortable and searchable top-100 coins table, and detailed coin pages with interactive charts",
        tags: ["Tailwind", "Javascript", "Chart.js"],
        links: {
          demo: "https://fioneo-crypto-tracker.vercel.app/",
          github: "https://github.com/Fioneo/crypto-tracker",
        },
      },
      {
        title: "Online Shop",
        icon: ShoppingCart,
        description:
          "A modern shop built with React, featuring cart and wishlist functionality, a responsive UI, smooth user interactions, and real-time notifications.",
        tags: ["React", "lucide-react", "Tailwind"],
        links: {
          demo: "https://fioneo-react-shop.vercel.app/",
          github: "https://github.com/Fioneo/react-shop",
        },
      },
      {
        title: "Todo app",
        icon: CheckSquare,
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
        icon: Monitor,
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
        title: "Трекер криптовалют",
        icon: TrendingUp,
        description:
          "Одностраничное приложение для отслеживания криптовалют в реальном времени. Здесь можно посмотреть общую статистику рынка, топ-100 монет с поиском и сортировкой, а также подробную информацию по каждой монете с интерактивными графиками.",
        tags: ["tailwind", "javascript", "Chart.js"],
        links: {
          demo: "https://fioneo-crypto-tracker.vercel.app/",
          github: "https://github.com/Fioneo/crypto-tracker",
        },
      },
      {
        title: "Интернет-магазин",
        icon: ShoppingCart,
        description:
          "Современный интернет-магазин с корзиной и избранным. Проект имеет адаптивный дизайн, уведомления и удобный пользовательский интерфейс.",
        tags: ["React", "lucide-react", "Tailwind"],
        links: {
          demo: "https://fioneo-react-shop.vercel.app/",
          github: "https://github.com/Fioneo/react-shop",
        },
      },
      {
        title: "Менеджер задач",
        icon: CheckSquare,
        description:
          "Простой и современный список задач.Поддерживает добавление, редактирование, выполнение задач и сохранением даннных.",
        tags: ["React", "lucide-react", "tailwind"],
        links: {
          demo: "https://fioneo-todo.vercel.app/",
          github: "https://github.com/Fioneo/react-todo",
        },
      },
      {
        title: "Сайт-Портфолио",
        icon: Monitor,
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
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                <p className="text-muted-foreground mb-4 grow">
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
