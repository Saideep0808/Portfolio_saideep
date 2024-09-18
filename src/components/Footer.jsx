import { LuLogOut } from "react-icons/lu";
import { SOCIAL_MEDIA_LINKS } from "./Constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-black text-white py-20 p-4 mx-auto md:px-16 lg:px-24">
    {/* //   <div className="flex items-center justify-center">
    //     <motion.img
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //       src={logo}
    //       width={200}
    //       className="my-20"
    //     />
    //   </div> */}
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;saideep. All copy rights reserved.
      </p>
    </div>
  );
};

export default Footer;