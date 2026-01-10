export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export const scrollToSection = (link) => {
    const id = link.startsWith('#') ? link.substring(1) : null;
    if (!id) return;
    
    const element = document.getElementById(id);
    if (!element) return;

    window.isNavigating = true;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = (t) => 1 - Math.pow(1 - t, 4);
        const currentProgress = Math.min(progress / duration, 1);
        const easedProgress = ease(currentProgress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            window.isNavigating = false;
        }
    };

    window.requestAnimationFrame(step);
};
