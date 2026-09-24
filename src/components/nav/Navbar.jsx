import React from "react";
import { NAVBAR } from "../../common/index";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpenNavAndroid, setIsOpenNavAndroid] = useState(false);
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleIsOpenNavAndroid = () => {
    setIsOpenNavAndroid((prev) => !prev);
  };

  return (
    <nav>
      {/* PC */}
      <div
        ref={navContainerRef}
        className="hidden md:flex md:justify-between md:items-center fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-white/30 hover:bg-white/70 px-3 rounded-2xl max-w-7xl mx-auto mt-1"
      >
        <div className="ml-5 rounded-full overflow-hidden">
          <a
            href="https://literasiindonesianetlify.wordpress.com/"
            target="_blank"
          >
            <img src="/LI.png" alt="" className="w-10" />
          </a>
        </div>
        <div>
          <ul className="flex space-x-6 mr-2 ">
            {NAVBAR.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.url}
                  className="hover:text-blue-500  font-semibold"
                >
                  {item.name}
                </a>

                {/* Dropdown */}
                {item.children && (
                  <ul
                    className="
                  absolute left-0 mt-5 w-48  shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 bg-white/70 rounded-b-xl
                "
                  >
                    {item.children.map((child) => (
                      <li key={child.id} className="">
                        <a href={child.url} className="block px-4 py-2  ">
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ==============================
          MOBILE NAVBAR
      ============================== */}

      <div className="md:hidden">
        {/* Hamburger Button */}
        <div className="fixed right-5 top-5 z-50">
          <button
            onClick={handleIsOpenNavAndroid}
            className="cursor-pointer rounded-lg  p-2 shadow-md"
          >
            {isOpenNavAndroid ? (
              <IoMdClose className="h-10 w-10" />
            ) : (
              <GiHamburgerMenu className="h-10 w-10" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpenNavAndroid && (
          <motion.div
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-100%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 h-screen w-full bg-white"
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {NAVBAR.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  onClick={() => setIsOpenNavAndroid(false)}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="text-2xl font-semibold"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
