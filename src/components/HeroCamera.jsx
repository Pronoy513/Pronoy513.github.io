import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();

    /*************  ✨ Codeium Command 🌟  *************/
    // Animate the camera position to smoothly follow the cursor
    useFrame((state, delta) => {
        // Damp the camera position to [0, 0, 20] at a rate of 0.25 per second
        // easing.dampE(state.camera.position, [0, 0, 1000], 0.45, delta);

        /******  98add982-8346-4191-8d8f-c272d74702ca  *******/
        if (!isMobile) {
            easing.dampE(group.current.rotation, [-state.pointer.y / 2, state.pointer.x / 1, 0], 0.25, delta);
        }
    });

    return <group ref={group} scale={isMobile ? 1 : 1.3}>{children}</group>;
};

export default HeroCamera;