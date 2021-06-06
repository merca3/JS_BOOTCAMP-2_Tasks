$('#remove-btn').click(() => {
    $('.cart-item').remove();
})

const changeTotalPrice = (amount) => {
    const price = parseFloat($('.product-price').text());
    const newTotalPrice = price * amount;
    $('.product-amount').text(amount);
    $('.product-mult-price').text(newTotalPrice);
}

$('.cart-item').on('click', '.add-amount', () => {
    const oldAmount = parseInt($('.product-amount').text());
    const newAmount = oldAmount + 1;
    changeTotalPrice(newAmount);
})

$('.minus-amount').click(() => {
    const oldAmount = parseInt($('.product-amount').text());
    const newAmount = oldAmount - 1;
    changeTotalPrice(newAmount);
})