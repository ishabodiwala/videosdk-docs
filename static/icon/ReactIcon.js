import * as React from "react";

const ReactIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#C4C4C4" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.922 2.002a3.558 3.558 0 0 0-1.18.178c-.8.253-1.64.745-2.5 1.426-.337.267-.677.573-1.019.896a15.3 15.3 0 0 0-.997-.873c-.86-.681-1.696-1.174-2.494-1.426-.798-.252-1.593-.26-2.245.107-.652.367-1.043 1.04-1.218 1.84-.175.798-.155 1.75.02 2.815.062.37.149.758.248 1.154-.373.11-.735.226-1.07.353-1.014.385-1.852.846-2.462 1.395C1.395 10.415 1 11.08 1 11.812c0 .73.394 1.395 1.005 1.944.61.548 1.448 1.01 2.461 1.395.36.137.748.26 1.15.376a14.978 14.978 0 0 0-.342 1.517c-.176 1.066-.194 2.018-.019 2.819.176.8.566 1.478 1.222 1.846.655.369 1.453.36 2.253.107.8-.252 1.638-.744 2.498-1.425.334-.265.672-.566 1.01-.887.34.322.68.626 1.016.892.86.68 1.697 1.172 2.495 1.424s1.592.26 2.245-.107c.652-.367 1.041-1.04 1.216-1.839.175-.799.156-1.75-.02-2.815-.08-.484-.197-.995-.341-1.522.414-.119.815-.245 1.185-.386 1.013-.385 1.851-.847 2.461-1.395.61-.549 1.005-1.213 1.005-1.944 0-.731-.394-1.397-1.005-1.945-.61-.549-1.448-1.01-2.461-1.395-.34-.13-.708-.246-1.087-.358.1-.398.189-.789.25-1.16.176-1.067.195-2.02.02-2.82-.176-.802-.567-1.478-1.223-1.846a2.318 2.318 0 0 0-1.072-.286Zm-.045.968c.239.007.443.062.617.16.35.196.608.578.745 1.207.138.629.133 1.478-.03 2.463-.055.337-.136.694-.227 1.06-1-.234-2.096-.408-3.264-.51A23.069 23.069 0 0 0 12.92 5.2c.322-.306.64-.591.952-.838.795-.63 1.548-1.058 2.176-1.256.314-.1.588-.142.828-.136Zm-9.278.003c.24-.006.515.036.83.136.63.199 1.384.627 2.18 1.257.305.242.617.522.931.82a23.118 23.118 0 0 0-1.81 2.169 23.161 23.161 0 0 0-3.249.514c-.09-.364-.172-.72-.227-1.055-.163-.986-.167-1.836-.029-2.466.138-.63.399-1.015.75-1.213.177-.1.383-.155.624-.162Zm4.64 2.912c.398.422.796.884 1.191 1.38a29.06 29.06 0 0 0-2.383.001c.395-.497.793-.959 1.191-1.381Zm.011 2.317c.665 0 1.313.026 1.943.071.434.607.858 1.25 1.262 1.931.355.599.676 1.196.968 1.786a26.944 26.944 0 0 1-.982 1.81 27.048 27.048 0 0 1-.983 1.53 27.208 27.208 0 0 1-4.466-.004c-.331-.482-.656-.982-.968-1.507a26.935 26.935 0 0 1-.979-1.807c.297-.6.623-1.207.984-1.816.402-.678.824-1.317 1.256-1.92a27.265 27.265 0 0 1 1.965-.074Zm3.202.19c.806.098 1.563.234 2.267.397a21.065 21.065 0 0 1-.778 2.083c-.203-.38-.413-.762-.64-1.144-.274-.463-.56-.904-.85-1.336ZM8.996 8.4c-.284.423-.562.856-.831 1.31-.23.387-.444.773-.649 1.158a21.055 21.055 0 0 1-.772-2.07A21.495 21.495 0 0 1 8.996 8.4Zm9.69.642c.347.102.681.209.989.326.933.355 1.672.775 2.151 1.205.479.43.687.84.687 1.239 0 .398-.208.808-.687 1.238-.479.43-1.218.85-2.151 1.206-.342.13-.716.247-1.106.359a23.233 23.233 0 0 0-1.055-2.603 22.688 22.688 0 0 0 1.172-2.97Zm-12.888.005c.291.939.678 1.927 1.157 2.94a23.213 23.213 0 0 0-1.061 2.617 13.848 13.848 0 0 1-1.069-.348c-.933-.355-1.672-.776-2.151-1.206-.479-.43-.687-.84-.687-1.238s.208-.808.687-1.239c.479-.43 1.218-.85 2.151-1.205.303-.115.632-.22.973-.321Zm6.452.578c-1.344 0-2.445 1.071-2.445 2.38s1.1 2.38 2.445 2.38c1.344 0 2.445-1.071 2.445-2.38s-1.1-2.38-2.445-2.38Zm-4.722 3.506c.206.387.42.775.65 1.164.18.304.365.6.552.892-.656-.09-1.28-.201-1.867-.334.187-.556.41-1.133.665-1.722Zm9.425 0c.256.59.48 1.168.667 1.726-.588.132-1.215.244-1.873.332.19-.294.377-.594.56-.902.229-.387.442-.772.646-1.156ZM6.582 15.777c.884.204 1.844.36 2.86.463a23.596 23.596 0 0 0 2.098 2.566c-.318.302-.633.586-.942.83-.795.63-1.548 1.057-2.176 1.255-.628.198-1.097.172-1.446-.024-.35-.196-.606-.578-.744-1.207-.138-.628-.134-1.477.029-2.462.073-.446.184-.925.32-1.421Zm11.32.004c.138.499.249.98.323 1.429.163.985.167 1.835.029 2.465-.138.63-.397 1.016-.749 1.214-.352.198-.826.224-1.455.025-.63-.198-1.384-.627-2.18-1.257a14.274 14.274 0 0 1-.949-.836 23.538 23.538 0 0 0 2.113-2.58 23.03 23.03 0 0 0 2.868-.46Zm-7.184.556c.502.027 1.01.045 1.532.045.504 0 .996-.017 1.482-.042a22.037 22.037 0 0 1-1.508 1.78 22.132 22.132 0 0 1-1.506-1.783Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default ReactIcon;