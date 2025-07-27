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

export const Certifications = () => {
  return (
    <motion.section
      id="certifications"
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
        My Certifications
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
          <h3>Machine Learning Training</h3>
          <p>Corizo</p>
          <div className="project-tech">
            <span>Machine Learning</span>
            <span>Python</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <h3>Machine Learning Specialization</h3>
          <p>Coursera (ID: MTROG06XSE8V)</p>
          <div className="project-tech">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};