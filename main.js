// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Magic particles soft pixel style
const particlesContainer = document.querySelector('.particles');

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.width = '6px';
  particle.style.height = '6px';
  particle.style.backgroundColor = Math.random() > 0.5 ? '#ffcc99' : '#ffb347';
  particle.style.boxShadow = '0 0 4px #fff0cc';
  particle.style.opacity = '0.9';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '0';
  particle.style.transform = `translate(-50%, -50%) scale(${Math.random() + 0.5})`;
  particle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.style.opacity = '0';
    particle.style.transform += ' scale(0.5)';
  }, 50);

  setTimeout(() => {
    particle.remove();
  }, 1000);
}

document.addEventListener('mousemove', e => {
  createParticle(e.clientX, e.clientY);
});

