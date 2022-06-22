import a from './lib/index';

const container = document.querySelector('.container');
const value = Object.keys(a);

container.innerText = value;

export default value;
