import { useEffect, useRef } from "react";
import { mountStreetScene, SCENE_HEIGHT } from "./streetScene";

/**
 * Animated line-art strip that stands on the footer's top edge.
 * It overlaps the footer by 1px so no hairline shows between them at fractional zoom.
 */
export default function FooterScene() {
  const ref = useRef(null);

  useEffect(() => mountStreetScene(ref.current), []);

  return (
    <div
      ref={ref}
      className="footer-scene -mb-px w-full select-none overflow-hidden"
      style={{ height: SCENE_HEIGHT }}
    />
  );
}
