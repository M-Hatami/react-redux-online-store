export function calculatePrice(price, currency) {
  switch (currency) {
    case "عراقي":
      return price * 0.86;
    case "سورية":
      return price * 1.33;
    default:
      return price;
  }
}

export function calculateTotal(cart, currency) {
  let totalRial = 0;
  Object.keys(cart).forEach((itemName) => {
    totalRial += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalRial, currency).toFixed(2);
}

export function getCurrencySymbol(currencyFilter) {
  switch (currencyFilter) {
    case "ایران":
      return "تومان";
    case "عراقي":
      return "دينار";
    case "سورية":
      return "ليرة";
    default:
      return "";
  }
}
