import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const SubFeature = () => {
  const enrollRef = useRef(null);
  const learnRef = useRef(null);
  const underlineRef = useRef(null);
  const containerRef = useRef(null);
  const [activeRef, setActiveRef] = useState(null);
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });

  useEffect(() => {
    const moveUnderline = () => {
      const underline = underlineRef.current;
      const container = containerRef.current;

      if (!underline || !container) return;

      if (!activeRef?.current) {
        // Hide underline when not hovering
        underline.style.width = `0px`;
        return;
      }

      const target = activeRef.current;
      const { left, width } = target.getBoundingClientRect();
      const containerLeft = container.getBoundingClientRect().left;

      underline.style.left = `${left - containerLeft}px`;
      underline.style.width = `${width}px`;
    };

    moveUnderline();
    window.addEventListener('resize', moveUnderline);
    return () => window.removeEventListener('resize', moveUnderline);
  }, [activeRef]);

  return (
    <section className="bg-[#053F54] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <div className="flex items-center space-x-2">
            <motion.div
              ref={lineRef}
              initial={{ width: 0 }}
              animate={{ width: isInView ? 24 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-0.5 bg-blue-500"
            />
            <p className="text-sm text-blue-500 font-semibold">Portal</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Portal Access Made Simple</h2>
          <p className="mt-4 text-white max-w-2xl">
            Whether you're learning or leading, get to your dashboard in seconds. Quick, secure access to everything you need &mdash;from coursework and schedules to student support.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-6 relative"
          onMouseLeave={() => setActiveRef(null)} // ✨ Remove underline when not hovering
        >
          {/* Underline Element */}
          <div
            ref={underlineRef}
            className="absolute h-0.5 bg-orange-400 transition-all duration-300 bottom-0"
            style={{ width: 0, left: 0 }}
          />

          {/* Student Portal Card */}
          <div
            ref={enrollRef}
            onMouseEnter={() => setActiveRef(enrollRef)}
            className="bg-[#004A5F] p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-800 p-2 rounded-md">
                <FaUserGraduate className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Student Portal</h3>
            </div>
            <p className="text-sky-100 mb-6">
              Explore your courses, view schedules, and get support &mdash;everything you need for success.
            </p>
            <a href="#" className="text-orange-400 inline-flex items-center font-medium group">
              Learn More
              <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={16} />
            </a>
          </div>

          {/* Faculty Portal Card */}
          <div
            ref={learnRef}
            onMouseEnter={() => setActiveRef(learnRef)}
            className="bg-[#004A5F] p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-800 p-2 rounded-md">
                <FaChalkboardTeacher className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Faculty Portal</h3>
            </div>
            <p className="text-sky-100 mb-6">
              Manage classes, student records, and academic tools in one place.
            </p>
            <a href="#" className="text-orange-400 inline-flex items-center font-medium group">
              Learn More
              <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFeature;

