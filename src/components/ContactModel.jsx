import {
  ContactShadows,
  Html,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { useEffect } from "react";

const ContactModel = () => {
  const model = useGLTF("./buster_drone/scene.gltf");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    const action = animations.actions.Start_Liftoff;
    action.play();
  }, []);
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 1]} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <primitive object={model.scene} scale={2} position={[2, 0.5, 0]} />

      <ContactShadows position-y={-1.14} opacity={0.5} blur={1.4} />
    </>
  );
};

export default ContactModel;
