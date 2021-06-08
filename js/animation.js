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