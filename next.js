//next(); yazmassan sonraki functionu calistirmayan bir program denemesi

const funcArr = [];
let position = 0;
let nexted = false;
const nextFunc = (mainFunc) => {
  funcArr.push(mainFunc);

  const next = () => {
    nexted = false;
  };
  if (position === 0) {
    nexted = false;
  }
  if (!nexted) {
    nexted = true;
    funcArr[position](next);
  }
  position++;
};

nextFunc((next) => {
  console.log("a");
});

nextFunc((next) => {
  console.log("b");
});
