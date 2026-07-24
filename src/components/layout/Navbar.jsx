import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderKanban, Mail, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // SCROLL TO SECTION
  const scrollToSection = (id) => {
    setMenuOpen(false);

    const performScroll = () => {
      const section = document.getElementById(id);

      if (!section) return;

      const offset = window.innerWidth < 768 ? 80 : 100;

      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        performScroll();
      }, 120);

      return;
    }

    performScroll();
  };

  // ACTIVE SECTION + SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.3) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      {/* LOGO */}
      <div
          className="
          absolute
          top-6
          left-4
          sm:left-6
          lg:left-8
          z-[70]
  "
      >
        <button
          onClick={() => navigate("/")}
          className="
          group
          flex
          items-center
          "
        >
          <span
            className="
            text-[30px]
            font-semibold
            tracking-[-0.04em]
            text-[#111111]
            transition-all
            duration-300
            group-hover:opacity-80
            "
          >
            SABEEH
            <span className="text-orange-500">.</span>
          </span>
        </button>
      </div>

      {/* DESKTOP NAVBAR */}
      <header
        className="
        fixed
        top-4
        lg:top-6
        left-1/2
        -translate-x-1/2
        z-[60]

        hidden
        md:block
        "
      >
        <motion.div
          animate={{
            y: isScrolled ? 0 : 0,
            scale: isScrolled ? 0.98 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
          relative

          flex
          items-center
          gap-1

          px-2
          py-2

          rounded-full

          border

          backdrop-blur-2xl

          transition-all
          duration-500

          ${
            isScrolled
              ? `
                bg-white/75
                border-white/40
                shadow-[0_10px_50px_rgba(0,0,0,0.08)]
              `
              : `
                bg-white/50
                border-white/20
                shadow-[0_4px_30px_rgba(0,0,0,0.04)]
              `
          }
          `}
        >
          {/* SUBTLE GLOW */}
          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-white/20
            pointer-events-none
            "
          />

          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                relative
                "
              >
                {/* ACTIVE PILL */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 30,
                    }}
                    className="
                    absolute
                    inset-0

                    rounded-full

                    bg-[#111111]

                    shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                    "
                  />
                )}

                {/* NAV ITEM */}
                <div
                  className={`
                  relative
                  z-10

                  flex
                  items-center
                  gap-2

                  px-4
                  lg:px-5
                  py-2.5

                  rounded-full

                  text-[14px]
                  font-medium
                  tracking-[-0.01em]

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        text-white
                      `
                      : `
                        text-black/55
                        hover:text-[#111111]
                        hover:bg-black/[0.03]
                      `
                  }
                  `}
                >
                  <Icon size={16} strokeWidth={2} />

                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </motion.div>
      </header>

      {/* MOBILE BUTTON */}
      <div
        className="
        fixed
        top-4
        right-4
        z-[70]

        md:hidden
        "
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          relative

          w-11
          h-11

          rounded-full

          bg-white/80
          backdrop-blur-xl

          border
          border-black/5

          shadow-[0_8px_30px_rgba(0,0,0,0.08)]

          flex
          items-center
          justify-center

          transition-all
          duration-300
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            fixed
            top-20
            left-4
            right-4
            z-[60]

            md:hidden
            "
          >
            <div
              className="
              overflow-hidden

              p-3

              rounded-[24px]

              bg-white/80
              backdrop-blur-2xl

              border
              border-white/30

              shadow-[0_10px_50px_rgba(0,0,0,0.12)]
              "
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;

                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                    w-full

                    flex
                    items-center
                    gap-3

                    px-4
                    py-3.5

                    rounded-2xl

                    text-[15px]
                    font-medium
                    tracking-[-0.01em]

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-[#111111]
                          text-white
                          shadow-lg
                        `
                        : `
                          text-[#111111]
                          hover:bg-black/[0.04]
                        `
                    }
                    `}
                  >
                    <Icon size={18} strokeWidth={2} />

                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
