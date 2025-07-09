import { useEffect, useRef } from "react";

export function useFullPageScroll(sectionCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionIndex = useRef(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Custom smooth scroll function
    const smoothScrollTo = (targetY: number, duration = 1500) => {
      const startY = container.scrollTop;
      const changeY = targetY - startY;
      const startTime = performance.now();
      function easeInOutCubic(t: number) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      function animateScroll(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        container.scrollTop = startY + changeY * ease;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }
      requestAnimationFrame(animateScroll);
    };

    const scrollToSection = (index: number) => {
      const target = container.children[index] as HTMLElement;
      if (target) {
        // Use custom smooth scroll
        smoothScrollTo(target.offsetTop);
      }
    };

    const goToNextSection = () => {
      if (sectionIndex.current < sectionCount - 1) {
        sectionIndex.current += 1;
        scrollToSection(sectionIndex.current);
      }
    };
    const goToPrevSection = () => {
      if (sectionIndex.current > 0) {
        sectionIndex.current -= 1;
        scrollToSection(sectionIndex.current);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;
      if (e.deltaY > 0) {
        goToNextSection();
      } else if (e.deltaY < 0) {
        goToPrevSection();
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 1400);
    };

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      if (Math.abs(deltaY) < 50) return;
      if (isScrolling.current) return;
      isScrolling.current = true;
      if (deltaY > 0) {
        goToNextSection();
      } else if (deltaY < 0) {
        goToPrevSection();
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 1400);
      touchStartY.current = null;
    };

    // Keyboard arrow support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        isScrolling.current = true;
        goToNextSection();
        setTimeout(() => {
          isScrolling.current = false;
        }, 1400);
      } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        isScrolling.current = true;
        goToPrevSection();
        setTimeout(() => {
          isScrolling.current = false;
        }, 1400);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionCount]);

  return containerRef;
} 