//Animação ao rolar o scrool

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');
  
    // Dicionário para armazenar timers de animação de saída
    const exitTimers = new Map();
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        const animationClass = target.getAttribute('data-animation');
  
        if (entry.isIntersecting) {
          if (exitTimers.has(target)) {
            clearTimeout(exitTimers.get(target));
            exitTimers.delete(target);
          }
  
          // Adiciona a animação de entrada
          if (animationClass) {
            target.setAttribute('style', `animation:${animationClass};animation-duration:1s;`);
            target.style.opacity = "1";
          }
        } else {
            const timer = setTimeout(() => {
              target.removeAttribute('style');
            }, 2000);
            target.style.opacity = "0";
            exitTimers.set(target, timer);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});
