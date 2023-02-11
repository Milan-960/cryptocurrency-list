import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimatedPointer() {
  return (
    <div className="App">
      <AnimatedCursor
        color="193, 11, 111"
        innerSize={8}
        outerSize={22}
        innerScale={0.3}
        outerScale={2}
        outerAlpha={0.5}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
    </div>
  );
}
