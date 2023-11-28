import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      {/* The image is put on top (although it is on the right on a large screen => md:order-2) in order to be firstly shown on a small screen (first the picture and after the description) */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          // Here we build a draw relative to the picture
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5">
        {/* HEADINGS */}
        {/* Motion allows to use ready-to-use animation (ex: for div) */}
        <motion.div
          // Once the div is seen, we launch the animation
          initial="hidden" // The name of the initial condition
          whileInView="visible" // The name of the final condition
          viewport={{ once: true, amount: 0.5 }} // Once the div is visible (above 0.5 visible)
          transition={{ duration: 0.5 }}
          // Animation settings
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            {/* {""} for the space ! */}
            Michaël {""}
            {/* Note : xs:before:content-brush is used for screens above XS and use the following source :  content => brush (cf: see tailwind.config.js) */}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Auger
            </span>
          </p>

          <p className="mt-10 mb-7 text-m text-center md:text-start font-bold">
            Junior Full Stack React.js/NodeJS Developer
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Après une première expérience personnelle de plus de 5 ans à gérer{" "}
            <a
              href="www.surf-community.fr"
              className="hover:text-red underline text-blue"
            >
              un blog communautaire
            </a>{" "}
            sur Wordpress (<b>HTML, CSS, JS et PHP</b>), j'ai décidé de me
            reconvertir en 2022 avec La Capsule, une formation intensive (+400
            heures) labelisée Grande Ecole du Numérique : "Développeur Fullstack
            JS web & mobile" (titre RNCP 6 (bac+3/+4)) sur la stack MERN : React
            / Express / MongoDB / Node.
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Actuellement en mission à The Coding Machine, une agence de
            marketing digital spécialisée pour les éditeurs de logiciels et ESN
            en B2B, je travaille principalement sur la partie front (React /
            Redux / Apollo GraphQL) pour un grand compte.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            // bg-gradient-rainblue has been defined before in the tailwind.config.js
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
