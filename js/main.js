// function for calculating aditional costs

function getAditionalCost(memory, storage, deliveryType) {
  // calculating memoryCost
  const memoryCost = document.getElementById("memory-cost");
  if (memory == "8GB") {
    memoryCost.innerText = 0;
  } else if (memory == "16GB") {
    memoryCost.innerText = 180;
  }
  // calculating storage Cost
  const storageCost = document.getElementById("storage-cost");
  if (storage == "256GB") {
    storageCost.innerText = 0;
  } else if (storage == "512GB") {
    storageCost.innerText = 100;
  } else if (storage == "1TB") {
    storageCost.innerText = 180;
  }
  // calculating delivery Cost
  const deliveryCost = document.getElementById("delivery-charge");
  if (deliveryType == "regular") {
    deliveryCost.innerText = 0;
  } else if (deliveryType == "express") {
    deliveryCost.innerText = 20;
  }
  // calling function to set total value
  getTotalPrice();
}

// function for getting Total Price
function getTotalPrice() {
  const bestPrice = document.getElementById("best-price");
  const memoryCost = document.getElementById("memory-cost");
  const storageCost = document.getElementById("storage-cost");
  const deliveryCost = document.getElementById("delivery-charge");
  const totalPrice = document.getElementById("total-price");
  const grandTotal = document.getElementById("grand-total");
  // setting total Price
  totalPrice.innerText =
    parseInt(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);
  // setting grand Total price
  grandTotal.innerText = totalPrice.innerText;
}

// function for matching promo code
function matchPromoCode() {
  const promoInput = document.getElementById("promo-input");
  const grandTotal = document.getElementById("grand-total");
  // matching promo code
  if (promoInput.value == "stevekaku") {
    // calculating discount and setting total after discount
    const discount = grandTotal.innerText * 0.2;
    const total = grandTotal.innerText - discount;
    grandTotal.innerText = total;
  }
  // clean promo Input
  promoInput.value = "";
}
