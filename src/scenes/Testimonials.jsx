import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
  before:absolute before:top-[-100px] xxs:before:top-[-50px] before:left-1/2 xs:before:absolute xs:before:top-[0px] xs:before:left-1/2 lg:before:top-[-120px] lg:before:-ml-[110px] lg:before:left-1/2`;

  return (
    <section id="témoignages" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TÉMOIGNAGES
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
          Découvrez ce que mes clients ou mes collaborateurs ont à dire sur mon
          travail. Voici quelques-uns de leurs témoignages sur les projets que
          nous avons réalisés ensemble.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          // Note: person1 in defined in content (tailwind.config.js)
          className={` bg-blue ${testimonialStyles}  before:content-person1small lg:before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">
            “
            <span className="font-playfair text-xl text-black">Charlène.H</span>
          </p>
          <p className="text-justify text-sm">
            Michaël a réalisé un travail très satisfaisant pour mon site
            WordPress (
            <a href="www.charleneonthebeach.com">charleneonthebeach.com</a>). Il
            a été à l'écoute et réactif pour réaliser mon site web en tenant
            compte de mes besoins et de mes demandes, tout au long du projet. Je
            recommande vivement tes services à quiconque cherche un développeur
            web compétent et fiable.
          </p>
        </motion.div>

        <motion.div
          className={` bg-red ${testimonialStyles}  before:content-person2small lg:before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">
            “<span className="font-playfair text-xl text-black">Mathis.C</span>
          </p>
          <p className="text-justify text-sm">
            Je recommande fortement Michael pour ses compétences de
            développement mobile, son professionnalisme et sa capacité à
            travailler en équipe pour atteindre des objectifs communs. Son
            expertise sur React Native a été un véritable atout pour notre
            équipe, et son travail a été d’une grande qualité tout au long du
            projet.
          </p>
        </motion.div>

        <motion.div
          className={` bg-yellow ${testimonialStyles} before:content-person3small lg:before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">
            “
            <span className="font-playfair text-xl text-black">Stéphane.C</span>
          </p>
          <p className="text-justify text-sm">
            Le travail réalisé par Michael Auger m'a permis de juger de ses
            qualités de réflexion, de rédaction et d'investigation auprès
            d'acteurs institutionnels ou financiers. Son goût marqué pour la
            recherche de nouvelles solutions, ses fortes convictions pour faire
            avancer les réflexions, son esprit toujours curieux ont été des
            facteurs clé de réussite.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
