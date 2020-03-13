const createButGradient = () => {
  const btn = document.querySelector('.mouse-cursor-gradient');
  btn.onmousemove = (e) => {
    const x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;
    const y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };
};

export default createButGradient;