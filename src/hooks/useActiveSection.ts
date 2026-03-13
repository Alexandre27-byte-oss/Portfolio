import { RefCallback, useCallback, useEffect, useRef, useState } from "react";

type SectionId = string;

export function useActiveSection<T extends readonly SectionId[]>(ids: T) {
  const [activeId, setActiveId] = useState<T[number]>(ids[0]);
  const nodesRef = useRef(new Map<SectionId, HTMLElement>());

  const registerSectionRef = useCallback(
    (id: T[number]): RefCallback<HTMLElement> =>
      (node) => {
        if (node) nodesRef.current.set(id, node);
        else nodesRef.current.delete(id);
      },
    []
  );

  useEffect(() => {
    const nodes = Array.from(nodesRef.current.values());
    if (!nodes.length) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id as T[number]);
      },
      {
        root: null,
        threshold: reduceMotion ? [0.25] : [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return { activeId, registerSectionRef };
}
