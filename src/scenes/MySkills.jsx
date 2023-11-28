import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveXs = useMediaQuery("(min-width: 480px)");
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="compétences" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MES <span className="text-red">COMPÉTENCES</span>
          </p>
          <LineGradient width="w-1/3" />
          {isAboveXs ? (
            <div>
              <div className="flex justify-start items-center mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Front-end :
                </p>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="react-icon"
                    src="../assets/react-icon.png"
                  />
                  <p>React</p>
                </div>
                <div className="flex flex-col justify-center items-center my-3 gap-1">
                  <img
                    className="contrast-200 hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="react-native-icon"
                    src="../assets/react-icon.png"
                  />
                  <div className="flex flex-row justify-center w-28">
                    <p>React Native</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-8 w-9"
                    alt="nextjs-icon"
                    src="../assets/nextjs-logo.png"
                  />
                  <p>NextJS</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="redux-icon"
                    src="../assets/redux-logo.png"
                  />
                  <p>Redux</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="graphql-icon"
                    src="../assets/graphql-logo.png"
                  />
                  <p>GraphQL</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="tailwind-icon"
                    src="../assets/tailwind-logo.png"
                  />
                  <p>Tailwind</p>
                </div>
              </div>
              <div className="flex justify-start items-center mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Back-end :
                </p>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="nodejs-icon"
                    src="../assets/nodejs-logo.png"
                  />
                  <p>NodeJS</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="contrast-300 hover:opacity-50 transition duration-500 h-7 w-21"
                    alt="expressjs-icon"
                    src="../assets/expressjs-logo.png"
                  />
                  <p>ExpressJS</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="postgresql-icon"
                    src="../assets/postgresql-logo.png"
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-12"
                    alt="mysql-icon"
                    src="../assets/mysql-logo.png"
                  />
                  <p>MySQL</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-12"
                    alt="php-icon"
                    src="../assets/php-logo.png"
                  />
                  <p>PHP</p>
                </div>
              </div>
              <div className="flex justify-start items-center mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Outils :
                </p>
                <div className="flex flex-col justify-center items-center ml-12 mr-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="git-icon"
                    src="../assets/git-logo.png"
                  />
                  <p>GIT</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="contrast-300 hover:opacity-50 transition duration-500 h-7 w-21"
                    alt="github-icon"
                    src="../assets/github-logo.png"
                  />
                  <p>GitHUB</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-8"
                    alt="gitlab-icon"
                    src="../assets/gitlab-logo.png"
                  />
                  <p>GitLAB</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-12"
                    alt="docker-icon"
                    src="../assets/docker-logo.png"
                  />
                  <p>Docker</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 my-3 gap-1">
                  <img
                    className="hover:opacity-50 transition duration-500 h-7 w-12"
                    alt="bash-icon"
                    src="../assets/bash-logo.png"
                  />
                  <p>Bash</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Front-end :
                </p>
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="react-icon"
                  src="../assets/react-icon.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-8 w-9"
                  alt="nextjs-icon"
                  src="../assets/nextjs-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="redux-icon"
                  src="../assets/redux-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="graphql-icon"
                  src="../assets/graphql-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="tailwind-icon"
                  src="../assets/tailwind-logo.png"
                />
              </div>
              <div className="flex justify-between items-center mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Back-end :
                </p>
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="nodejs-icon"
                  src="../assets/nodejs-logo.png"
                />
                <img
                  className="contrast-300 hover:opacity-50 transition duration-500 mx-1 h-7 w-21"
                  alt="expressjs-icon"
                  src="../assets/expressjs-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="postgresql-icon"
                  src="../assets/postgresql-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-12"
                  alt="mysql-icon"
                  src="../assets/mysql-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-12"
                  alt="php-icon"
                  src="../assets/php-logo.png"
                />
              </div>
              <div className="flex justify-between items-center mx-1 mt-8">
                <p className="font-playfair font-semibold text-lg mr-6 whitespace-nowrap">
                  Outils :
                </p>
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="git-icon"
                  src="../assets/git-logo.png"
                />
                <img
                  className="contrast-300 hover:opacity-50 transition duration-500 mx-1 h-7 w-21"
                  alt="github-icon"
                  src="../assets/github-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-8"
                  alt="gitlab-icon"
                  src="../assets/gitlab-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-12"
                  alt="docker-icon"
                  src="../assets/docker-logo.png"
                />
                <img
                  className="hover:opacity-50 transition duration-500 mx-1 h-7 w-12"
                  alt="bash-icon"
                  src="../assets/bash-logo.png"
                />
              </div>
            </div>
          )}
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            {/* Junior Full Stack React.js/NodeJS Developer */}
            <ul>
              <li>
                + 10 projets full-stack (React/NextJS, NodeJS/ExpressJS,
                MongoDB){" "}
              </li>
              <li>+ 30 projets de sites web statiques (HTML, CSS, JS) </li>
              <li>
                + 500.000 vues sur mon blog communautaire{" "}
                <a
                  href="www.surf-community.fr"
                  className="hover:text-red underline text-blue"
                >
                  Surf-Community.fr
                </a>{" "}
                sur Wordpress (HTML, CSS, JS et PHP)
              </li>
            </ul>
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Passionné par l'innovation (organisationnelle et de produit) et les
            nouvelles technologies (IA, blockchain, réalité virtuelle), je mets
            mes compétences au services de vos besoins.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            À côté de mes activités de développeur, je puise ma créativité dans
            les activités qui me passionnent (sciences humaines, mathématiques
            appliquées, économie, monde sportif, musique).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
