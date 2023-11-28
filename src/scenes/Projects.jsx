import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ projectRef, title, href, name, description, techstack }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = projectRef.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a title={title} href={href} className="text-2xl font-playfair relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-blue
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">{name}</a>
        <p className="mt-7">{description}</p>
        <p className="mt-7"><u>Tech Stack:</u> {techstack}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  ); 
};

const Projects = () => {
  return (
    <section id="projets" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JETS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Un aperçu des projets que j'ai réalisés dans le cadre professionnel ou
          récréatif.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            projectRef="Project 1"
            name="surf-community.fr" 
            href="https://surf-community.fr"
            description="Un site communautaire de Surf créé en 2017"
            techstack="Wordpress + Elementor - LAMP (Linux, Apache, MySql, PHP)"
          />
          <Project
            projectRef="Project 2"
            name="Auger News" 
            href="https://mynews-frontend-jade.vercel.app/"
            description="Un site d'informations sourcé à partir des données de The Verge"
            techstack="MERN (MongoDB, Express, React, Node)"
          />

          {/* ROW 2 */}
          <Project
            projectRef="Project 3"
            name="MyQuiver"
            title="Application disponible sur demande" 
            description="Un MVP d'une application mobile no-code pour aider les surfeurs à choisir leurs planches"
            techstack="Glide (no-code)"
          />
          <Project
            projectRef="Project 4"
            name="MyMoviz" 
            href="https://mymoviz-frontend-gilt.vercel.app/"
            description="Un site web présentant le classement des films avec le plus de vote sur themoviedb.org"
            techstack="MERN (MongoDB, Express, React, Node)"
          />
          <Project
            projectRef="Project 5"
            name="Plant-Sitting" 
            title="Application disponible sur demande"
            description="Une application mobile de mise en réseau pour l'entretien et le gardiennage des plantes"
            techstack="MERN (MongoDB, Express, React Native, Node)"
          />

          {/* ROW 3 */}
          <Project
            projectRef="Project 6"
            name="MyTwitter" 
            href="https://hackatweet-frontend.vercel.app/"
            description="Un réseau social twitter-like pour tous"
            techstack="MERN (MongoDB, Express, React, Node)"
          />
          <Project
            projectRef="Project 7"
            name="Locapic" 
            title="Application disponible sur demande"
            description="Une application mobile de géolocalisation des villes"
            techstack="MERN (MongoDB, Express, React, Node)"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
