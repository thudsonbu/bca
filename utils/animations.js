module.exports = {
  scrollListener(ref, animationClass) { 

  const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  };

    const displayScrollElement = (element) => {
      element.classList.add('why');
    };

    const handleScrollAnimation = () => {
        if (elementInView(ref, 0)) {
          displayScrollElement(ref);
          console.log('scrolled')
        }
    }

    console.log(ref.classList)
    ref.classList.remove('description');
    console.log(ref.classList)
    handleScrollAnimation();

    //Need to update the state somehow 
    //also I think the ref needs to be 
    //changed but this is almost working

  }
}