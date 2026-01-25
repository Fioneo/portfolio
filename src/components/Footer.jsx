import { motion } from "motion/react";
import { Heart } from "lucide-react";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>and React</span>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">©</span> {currentYear}
            <span className="text-primary">{"{ "}</span>Portfolio
            <span className="text-primary">{" }"}</span>
          </div>

          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">console</span>.log(
            <span className="text-[#ce9178]">"Thanks for visiting!"</span>);
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
