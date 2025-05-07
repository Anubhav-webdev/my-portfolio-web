var typed = new Typed('#element', {
    strings: ['Web Developer', 'Problem Solver', 'Creative Thinker'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
      section.style.display = 'none'; // Hide all
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block'; // Show selected
    setTimeout(() => {
      activeSection.classList.add('active');
    }, 10); // Slight delay for animation to trigger
  }