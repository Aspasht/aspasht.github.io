export function invokeIntersection(targetElement: string, animateClass: string): void {

    const targets: NodeListOf<Element> = document.querySelectorAll(`${targetElement}`);

    const invoke = (target: Element) => {
        const iObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${animateClass}`);
                    observer.disconnect();
                    console.log('intersecting');
                } else {
                    entry.target.classList.remove(`${animateClass}`);
                    observer.disconnect();
                    console.log('Not intersecting');
                }
            });
        }, { root: null, threshold: 0.5 });
        iObserver.observe(target);
    };

    targets.forEach(invoke);

};
