gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl
        .add('start')
        .from(".header__title", {
            duration: 1,
            x: 900,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".header__btn-wrap", {
            duration: 1,
            x: -900,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".members img", {
            duration: 1,
            y: -700,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".members__sub-title", {
            duration: 1,
            y: -900,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".members__title", {
            duration: 1,
            x: 900,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".members__h5", {
            duration: 1,
            x: -900,
            ease: "back.out(1.01)",
        }, 'start')

        .from(".members__text", {
            duration: 1,
            y: 900,
            ease: "back.out(1.01)",
        }, 'start')
})

gsap.from(".about__title", {
    scrollTrigger: '.about__title',
    x: -600,
    ease: "back.out(1.7)",
    duration: .5,
})

gsap.from(".about__text", {
    scrollTrigger: '.about__text',
    x: 600,
    ease: "back.out(1.7)",
    duration: .5,
})

gsap.from(".about .btn", {
    scrollTrigger: '.about .btn',
    y: 600,
    ease: "back.out(1.7)",
    duration: .5,
})

gsap.from(".about__photo:nth-child(1)", {
    scrollTrigger: '.about__photo:nth-child(1)',
    x: -600,
    ease: "back.out(1.7)",
    duration: .5,
})

gsap.from(".about__photo:nth-child(2)", {
    scrollTrigger: '.about__photo:nth-child(2)',
    x: 600,
    ease: "back.out(1.7)",
    duration: .5,
})

gsap.from(".trainers__trainer", {
    scrollTrigger: '.trainers__trainer',
    y: 350,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: .5,
    start: 'bottom mid'
})

gsap.from(".footer__box", {
    scrollTrigger: '.footer__box',
    y: 200,
    ease: "back.out(1.7)",
    duration: .5,

})