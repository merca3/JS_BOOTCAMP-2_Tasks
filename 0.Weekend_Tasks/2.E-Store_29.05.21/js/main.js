$('.add-cart').click(() => {
    alert('Item was added to the Cart!')
})

$('#remove-btn1').click(() => {
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price1').text()) * parseInt($('#product-amount1').text());
    $('#total-pay').text(newTotalPay);
    $('#cart-item1').remove();
})
$('#remove-btn2').click(() => {
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price2').text()) * parseInt($('#product-amount2').text());
    $('#total-pay').text(newTotalPay);
    $('#cart-item2').remove();
})
$('#remove-btn3').click(() => {
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price3').text()) * parseInt($('#product-amount3').text());
    $('#total-pay').text(newTotalPay);
    $('#cart-item3').remove();
})



$('#add-amount1').click(() => {
    const newAmount = parseInt($('#product-amount1').text()) + 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price1').text());
    const newTotalPay = parseFloat($('#total-pay').text()) + parseFloat($('#product-price1').text());
    $('#product-amount1').text(newAmount);
    $('#product-mult-price1').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);
})
$('#minus-amount1').click(() => {
    const newAmount = parseInt($('#product-amount1').text()) - 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price1').text());
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price1').text());
    $('#product-amount1').text(newAmount);
    $('#product-mult-price1').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);
    if (newAmount < 1) {
        $('#cart-item1').remove();
    };
})

$('#add-amount2').click(() => {
    const newAmount = parseInt($('#product-amount2').text()) + 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price2').text());
    const newTotalPay = parseFloat($('#total-pay').text()) + parseFloat($('#product-price2').text());
    $('#product-amount2').text(newAmount);
    $('#product-mult-price2').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);

})
$('#minus-amount2').click(() => {
    const newAmount = parseInt($('#product-amount2').text()) - 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price2').text());
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price2').text());
    $('#product-amount2').text(newAmount);
    $('#product-mult-price2').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);
    if (newAmount < 1) {
        $('#cart-item2').remove();
    }
})

$('#add-amount3').click(() => {
    const newAmount = parseInt($('#product-amount3').text()) + 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price3').text());
    const newTotalPay = parseFloat($('#total-pay').text()) + parseFloat($('#product-price3').text());
    $('#product-amount3').text(newAmount);
    $('#product-mult-price3').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);
})
$('#minus-amount3').click(() => {
    const newAmount = parseInt($('#product-amount3').text()) - 1;
    const newTotalPrice = newAmount * parseFloat($('#product-price3').text());
    const newTotalPay = parseFloat($('#total-pay').text()) - parseFloat($('#product-price3').text());
    $('#product-amount3').text(newAmount);
    $('#product-mult-price3').text(newTotalPrice);
    $('#total-pay').text(newTotalPay);
    if (newAmount < 1) {
        $('#cart-item3').remove();
    }
})

// if ($('#total-pay').text() == '0') {
//     $('#empty-card').toggleClass('hidden');
//     $('#total').toggleClass('hidden');
//     $('#cart-list').toggleClass('hidden');
// }