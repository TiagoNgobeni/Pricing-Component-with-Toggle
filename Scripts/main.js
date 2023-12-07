    // Define your prices for monthly and annual plans
    const basicMonthlyPrice = 19.99;
    const basicAnnualPrice = 199.99;

    const proMonthlyPrice = 24.99;
    const proAnnualPrice = 249.99;

    const masterMonthlyPrice = 29.99;
    const masterAnnualPrice = 299.99;

    function togglePrices() {
      const toggleSwitch = document.getElementById('toggleSwitch');

      const product1PriceElement = document.getElementById('basic-price');
      const product2PriceElement = document.getElementById('pro-price');
      const product3PriceElement = document.getElementById('master-price');

      if (toggleSwitch.checked) {
        // Show annual prices
        product1PriceElement.textContent = basicAnnualPrice;
        product2PriceElement.textContent = proAnnualPrice;
        product3PriceElement.textContent = masterAnnualPrice;
      } else {
        // Show monthly prices
        product1PriceElement.textContent = basicMonthlyPrice;
        product2PriceElement.textContent = proMonthlyPrice;
        product3PriceElement.textContent = masterMonthlyPrice;
      }
    }

    // Initialize prices on page load
    togglePrices();

// TOGGLE SWITCH BUTTON
function toggleSwitch() {
    var toggle = document.getElementById("myToggle");
    console.log("Toggle is now " + (toggle.checked ? "on" : "off"));
}