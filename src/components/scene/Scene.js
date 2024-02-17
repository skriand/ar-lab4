import React from "react";

const Scene = () => {


  return (
    <>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true; precision: best; antialias: true"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
          smooth="true"
          smoothCount="15"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="150 300 -100"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
};

export default Scene;
