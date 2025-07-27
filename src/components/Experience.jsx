import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <h3>ML Intern @ Value Leaf IT Solutions (UK)</h3>
          <p>May–July 2025</p>
          <p>
            Built real-time voice interview pipeline with OpenAI, LangGraph,
            LiveKit and deployed on AWS.
          </p>
          <div className="project-tech">
            <span>OpenAI</span>
            <span>LangGraph</span>
            <span>LiveKit</span>
            <span>AWS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <h3>SRIP @ VIT (AI for Education)</h3>
          <p>May–July 2025</p>
          <p>
            Fine-tuned multimodal LLMs for image captioning using Transformer
            Architecture and Mixture of Experts.
          </p>
          <div className="project-tech">
            <span>PyTorch</span>
            <span>Transformers</span>
            <span>LLM</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};