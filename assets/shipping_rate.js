/**
 * Module to add a shipping rates calculator to cart page.
 *
 * Copyright (c) 2011-2016 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Modified by David Little, 2016
 */

"object"==typeof Countries&&(Countries.updateProvinceLabel=function(e,t){
  if("string"==typeof e&&Countries[e]&&Countries[e].provinces){
    if("object"!=typeof t&&(t=document.getElementById("address_province_label"),null===t))return;
    t.innerHTML=Countries[e].label;
    var select=document.getElementById("address_province");
    var container=document.getElementById("address_province_container");
    select.innerHTML="";
    var provinces=Countries[e].provinces;
    for(var i=0;i<provinces.length;i++){
      var opt=document.createElement("option");
      opt.value=provinces[i][0];
      opt.text=provinces[i][1];
      select.appendChild(opt);
    }
    container.style.display="block";
  } else {
    var container=document.getElementById("address_province_container");
    if(container) container.style.display="none";
  }
});

Shopify.Cart.ShippingCalculator.show( {
  submitButton: theme.strings.shippingCalcSubmitButton,
  submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
  customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
  moneyFormat: theme.strings.shippingCalcMoneyFormat
} );