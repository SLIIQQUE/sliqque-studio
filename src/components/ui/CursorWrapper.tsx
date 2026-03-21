"use client";

import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";

const CursorWrapper = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setHasWindow(true);
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (!hasWindow || isTouchDevice) return null;

  return <CustomCursor />;
};

export default CursorWrapper;
