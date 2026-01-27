import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
const translations = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    namePlaceholder: "Your Name",
    emailPlaceholder: "your.email@example.com",
    messagePlaceholder: "Your message...",
    send: "Send Message",
    success: "Message sent successfully!",
  },
  ru: {
    title: "Свяжитесь со мной",
    subtitle: "Давайте работать вместе над вашим следующим проектом",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "ваш.email@example.com",
    messagePlaceholder: "Ваше сообщение...",
    send: "Отправить",
    success: "Сообщение успешно отправлено!",
  },
};
function Contact({ language }) {
  const t = translations[language];
  return (
    <section
      className="flex items-center justify-center px-8 pt-20 min-h-screen bg-bg/30"
      id="contact"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{"function "}</span>
            {t.title}
            <span className="text-primary font-mono">{"()"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">fioneo.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telegram</h3>
                <a
                  href="https://t.me/fioneo_dev"
                  target="_blank"
                  className="text-muted-foreground"
                >
                  @fioneo_dev
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-sm text-muted-foreground p-4 bg-card rounded-lg border border-border"
            >
              <div>
                <span className="text-primary">const</span> response ={" "}
                <span className="text-primary">await</span>
              </div>
              <div className="ml-4">
                <span className="text-[#F0DB4F]">sendMessage</span>
                <span className="text-foreground">(</span>
                <span className="text-[#ce9178]">message</span>
                <span className="text-foreground">);</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-lg border border-border space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary "
              />
            </div>

            <div>
              <textarea
                placeholder={t.messagePlaceholder}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary  resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
              }}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {t.send}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
