const scrollListeners = {};

export function scrollListener( ref, animationClass ) {
  const listenerId = Math.random() * 10000000;

  const listener = addScrollListener( 
    ref, 
    animationClass, 
    listenerId 
  );

  scrollListeners[ listenerId ] = listener;
}

function removeListener( listenerId ) {
  window.removeEventListener( 'scroll', scrollListeners[ listenerId ] );

  delete scrollListeners[ listenerId ];
}

function addScrollListener(ref, animationClass, listenerId ) { 
  const elementInView = (el, scrollOffset = 0) => {
    if ( !el ) {
      removeListener( listenerId );
    } else {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
      );
    }
  };

  const displayScrollElement = (element) => {
    element.classList.add(animationClass);
  };

  const handleScrollAnimation = () => {
    if (elementInView(ref, 0)) {
      displayScrollElement(ref);
    }
  }

  handleScrollAnimation();
}
