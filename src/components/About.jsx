import { Zap, Palette, Code2 } from "lucide-react";
import { motion } from "motion/react";
const translations = {
  en: {
    title: "About Me",
    description:
      "I’m a junior frontend developer with a strong interest in building clean and interactive web applications. I enjoy creating projects with React, Tailwind CSS,and Typescript.I’m eager to learn, grow, and contribute to real-world projects.",
    features: [
      {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable and scalable code",
      },
      {
        icon: Palette,
        title: "UI/UX Focus",
        description: "Creating beautiful and intuitive interfaces",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed and efficiency",
      },
    ],
  },
  ru: {
    title: "Обо мне",
    description:
      "Я начинающий фронтенд-разработчик с интересом к созданию чистых и интерактивных веб-приложений. Люблю работать с React, Tailwind CSS и Typescript.Готов учиться, развиваться и участвовать в реальных проектах.",
    features: [
      {
        icon: Code2,
        title: "Чистый код",
        description: "Написание поддерживаемого и масштабируемого кода",
      },
      {
        icon: Palette,
        title: "Фокус на UI/UX",
        description: "Создание красивых и интуитивных интерфейсов",
      },
      {
        icon: Zap,
        title: "Производительность",
        description: "Оптимизация скорости и эффективности",
      },
    ],
  },
};
function About({ language }) {
  const t = translations[language];
  return (
    <section
      className="py-20 px-4 bg-bg/30 min-h-screen flex justify-center items-center"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-16">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl font-bold flex gap-1 items-center mx-auto">
              <span className="text-primary font-mono">//</span>
              {t.title}
            </h2>
            <p className="text-muted max-w-2xl text-lg mx-auto">
              {t.description}
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-8 h-full">
            {t.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors h-full">
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 font-mono text-sm text-muted text-center"
        >
          <span className="text-primary">{"/* "}</span>
          Always learning, always growing
          <span className="text-primary">{" */"}</span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
