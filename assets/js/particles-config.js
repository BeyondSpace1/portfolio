// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 50,
//       density: { enable: true, value_area: 800 }
//     },
//     color: { value: "#999999" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//     },
//     opacity: {
//       value: 0.5,
//       random: true,
//       anim: { enable: false }
//     },
//     size: {
//       value: 4,
//       random: true,
//       anim: { enable: false }
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#888888",
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       out_mode: "bounce"
//     }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "grab" },
//       onclick: { enable: true, mode: "push" }
//     },
//     modes: {
//       grab: { distance: 140, line_linked: { opacity: 1 } },
//       push: { particles_nb: 4 }
//     }
//   },
//   retina_detect: true
// });


document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#999999" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#888888",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});
