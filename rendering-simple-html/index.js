let count = 0;

const h3Elem = document.querySelector("h3");

h3Elem.innerHTML = count;

const handleInc = () => {
  count++;
  h3Elem.innerHTML = count;
  console.log(count);
};

const handleDec = () => {
  count--;
  h3Elem.innerHTML = count;
  console.log(count);
};
