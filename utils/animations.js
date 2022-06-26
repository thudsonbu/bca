function addObservers {
  const fadeLeftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-left');
      }
    });
  });
  fadeLeftObserver.observe(document.querySelector('.square'));

  const fadeRightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-right');
      }
    });
  });
  fadeRightObserver.observe(document.querySelector('.square'));
}