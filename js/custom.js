// ++++++++++++++++++++++++++++++++ SCROLL ANIMATIONS ++++++++++++++++++++++++++++
// ===============================================================================
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.image-new-wrapper',
        scrub: true,
        // markers: true,
        end: "bottom 55%",
        // start: "top 95%"
    }
})
    .to('.image-new-wrapper', {
        y: -210,
        ease: "none",
    })
    .to('.image-content-wrapper-3', {
        y: -190,
        ease: "none",

    });

// const tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.second-timeline-wrapper',
//         scrub: true,
//         markers: true,
//         start: "top 105%"
//     }
// })
//     .to('.second-timeline-wrapper', {
//         y: -400,
//         scrub: 2,
//         ease: "none"
//     })
//     .to('.image-content-wrapper-5', {
//         y: -100,
//         scrub: 3,
//         ease: "none"
//     });



// +++++++++++++++++++ LANDING TEXT ANIMATION +++++++++++++++++++++++++++++++++++++++

// =================================================================================

document.addEventListener("DOMContentLoaded", (event) => {
    function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            },
        });

        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 80%",
            markers: false,
            onEnter: () => timeline.play(),
        });
    }

    const splitTypeElements = document.querySelectorAll("[text-split]");
    splitTypeElements.forEach((splitTypeElement) => {
        const typeSplit = new SplitType(splitTypeElement, {
            types: "words, chars",
            tagName: "span",
        });
    });

    const lettersFadeInRandomElements = document.querySelectorAll("[letters-fade-in-random]");
    lettersFadeInRandomElements.forEach((element) => {
        const tl = gsap.timeline({ paused: true });
        const chars = element.querySelectorAll(".char");
        tl.from(chars, {
            opacity: 0,
            duration: 1.5,
            ease: "power1.out",
            stagger: { amount: 0.4, from: "random" },
        });
        createScrollTrigger(element, tl);
    });

    const textSplitElements = document.querySelectorAll("[text-split]");
    textSplitElements.forEach((element) => {
        gsap.set(element, { opacity: 1 });
    });
});

