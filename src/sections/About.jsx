import React from 'react';
import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { skillArray } from '../constants';

// const Tooltip = ({ message, children }) => {
//     return (
//         <div class="group relative flex items-center w-full">
//             {children}
//             <span class="absolute top-50 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
//         </div>
//     )
// }

const SkillSet = () => {
    return (
        <div className="grid xl:grid-cols-7 md:grid-cols-5 md:grid-rows-3 grid-cols-4 gap-5 h-full tooltip tooltip-open tooltip-top" data-tip="hello">
            {skillArray.map((x, index) => {
                var srcLink = `assets/skills/${x}`;
                var altText = x.substring(0, x.lastIndexOf('.'));
                return (
                    <div key={index} className="col-span-1 row-span-1 group relative flex items-center justify-center">

                        <img src={srcLink} alt={altText} className="w-full" />
                        <span className="absolute  scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{altText}</span>
                    </div>
                );
            })}

        </div>
    );
};


const About = () => {


    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('pronoykundu.dev@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (<section className='c-space my-20' id='about'>

        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/final.png" alt="grid-1" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div className="space-y-2">
                        <p className="grid-headtext ">Hi, I’m Pronoy</p>
                        <p className="grid-subtext">
                            With 4 years of experience in Computer Science, I have honed my skills in development, machine learning, networks and so on, and am definitely still looking to further enhance my skills.
                        </p>
                    </div>
                </div>

            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                            applications
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="w-full h-full relative border border-black-300 bg-black-200 rounded-xl sm:p-7 p-4 flex flex-col gap-5 justify-around">
                    <div>
                        <div className="  top-0 left-0 rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.1}
                                showAtmosphere
                                showGraticules
                                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                                labelsData={[{ lat: 13.0843, lng: 80.2705, text: 'Chennai, India', color: 'white', size: 500 }]}
                                labelDotRadius={1}
                                labelSize={4}
                            />
                        </div>
                        <div className='top-{450} mt-6 sm:pt-6'>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I'm based in Chennai, India and open to remote work worldwide.</p>
                        </div>
                    </div>
                    <a href="#contact">
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                    </a>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <SkillSet />

                    <div>
                        <p className="grid-headtext">My Journey of Coding</p>
                        <p className="grid-subtext">
                            I REALLY love building things and solving problems through code. I enjoy exploring new technologies, and enhancing my skills, and here is a list of my favorites that I love to work with.
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img
                        src="assets/grid4.png"
                        alt="grid-4"
                        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                    />

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">pronoykundu.dev@gmail.com</p>
                        </div>
                        {/* <Tooltip message={"✨ Coming soon!"}>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </Tooltip> */}

                    </div>
                </div>
            </div>

        </div>
    </section>);
}

export default About;
