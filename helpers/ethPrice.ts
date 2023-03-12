/**
 * This function accepts a float value an returns a parsed int
 * @param ethPrice
 * @returns
 */
const parseEthPrice = (floatValue: string) => {
  const price = parseFloat(floatValue.replace(",", ""));
  return price;
};

export default parseEthPrice;
