const getRandomNumber = (limit) => {
    // math nos a un numero entre cero y uno / 0--->0.999999 * 126 => 0 ===> 125.999999
return Math.floor(Math.random() * limit) + 1; 
};

export { getRandomNumber };