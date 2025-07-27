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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
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
        My Projects
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
          onClick={() => window.open("https://github.com/namansingh302004/interview-agent", "_blank")}
          style={{ cursor: 'pointer' }}
        >
          <a
            href="https://github.com/namansingh302004/interview-agent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/agent.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
          </a>
          <h3>Interview Agent</h3>
          <p>
            A real-time voice interview pipeline with OpenAI, LangGraph, and
            LiveKit.
          </p>
          <div className="project-tech">
            <span>OpenAI</span>
            <span>LangGraph</span>
            <span>LiveKit</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://github.com/namansingh302004/earthquake-management-system", "_blank")}
          style={{ cursor: 'pointer' }}
        >
          <a
            href="https://github.com/namansingh302004/earthquake-management-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/earth.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <h3>Earthquake Management System</h3>
          <p>
            A system to manage and report earthquake data, providing crucial
            information to users.
          </p>
          <div className="project-tech">
            <span>Flask</span>
            <span>MySQL</span>
            <span>React</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://github.com/namansingh302004/book-recommender-system", "_blank")}
          style={{ cursor: 'pointer' }}
        >
          <a
            href="https://github.com/namansingh302004/book-recommender-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/book.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <h3>Book Recommender System</h3>
          <p>
            A system that recommends books to users based on their reading
            history and preferences.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Flask</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://github.com/namansingh302004/smart-helmet", "_blank")}
          style={{ cursor: 'pointer' }}
        >
          <a
            href="https://github.com/namansingh302004/smart-helmet" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/ai-saas.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <h3>Smart Helmet (Patent)</h3>
          <p>
            An IoT-based safety device for two-wheeler riders, with features
            like accident detection and emergency alerts.
          </p>
          <div className="project-tech">
            <span>Arduino</span>
            <span>IoT</span>
            <span>C++</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
