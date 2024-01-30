export default (price: number) => {
  const formattedPrice = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " $";
  return formattedPrice;
};
