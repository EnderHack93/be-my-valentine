import React, { useState, FC, ReactNode } from "react";

interface CardWithFlipEffectProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

const CardWithFlipEffect: FC<CardWithFlipEffectProps> = ({
  frontContent,
  backContent,
}) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div className="h-[373px] w-[373px]" style={{ perspective: "1000px" }}>
      <div
        onClick={() => setFlipped((prev) => !prev)}
        className="relative w-full h-full transition-transform duration-700 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Cara Frontal */}
        <div
          className="absolute w-full h-full bg-white p-0 rounded-lg shadow-xl flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontContent}
        </div>

        {/* Cara Trasera */}
        <div
          className="absolute w-full h-full bg-white p-[10px] rounded-lg shadow-xl flex items-center justify-center overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default CardWithFlipEffect;
