import { myProjects } from "../constants";
import { useState } from "react";
import { useEffect } from "react";


const projectCount = myProjects.length;

const ProjectSimple = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };


  const currentProject = myProjects[selectedProjectIndex];
  const newIndex = selectedProjectIndex === projectCount - 1 ? 0 : selectedProjectIndex + 1;
  const currentProject2 = myProjects[newIndex];


  const projectComponent = (currentProject) => {
    return (

      <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-zinc-900 rounded-xl">
        <div className="absolute top-0 right-0">

          <img src="/assets/Mask.png" alt="spotlight" className="-z-10 w-full h-96 object-cover " />
          <div className="absolute top-0 right-0 w-full h-96 -z-20" style={{ backgroundColor: currentProject.logoStyle.backgroundColor }}></div>

          <div className="p-3 absolute top-0 right-0 backdrop-filter backdrop-blur-lg w-full h-96 z-10"></div>
        </div>

        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg " style={currentProject.logoStyle}>
          <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
        </div>

        <div className="z-10 flex flex-col gap-5 text-white-600 my-5">
          <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

          <p className="animatedText">{currentProject.desc}</p>
          <p className="animatedText">{currentProject.subdesc}</p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-3">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="tech-logo">
                <img src={tag.path} alt={tag.name} />

              </div>
            ))}
          </div>

          <a
            className="flex items-center gap-2 cursor-pointer text-white-600"
            href={currentProject.href}
            target="_blank"
            rel="noreferrer">
            <p>Check Live Site</p>
            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
          </a>
        </div>


      </div>
    )
  }


  return (

    <section className="c-space" id='work'>
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {projectComponent(currentProject)}
        {isLargeScreen && projectComponent(currentProject2)}
      </div>


      <div className="flex justify-between items-center mt-7">
        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
          <img src="/assets/left-arrow.png" alt="left arrow" />
        </button>
        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
          <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
        </button>
      </div>

    </section>

  );
};

export default ProjectSimple;

