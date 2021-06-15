// All happens only within #cart-item1 div

$('.remove-btn').click(function() {
    $(this).parent().parent().remove();
})

$('.add-amount').click(function() {
    const amount = parseInt($(this).parent().parent().children('.product-amount').text());
    const newAmount = amount++;
    $(this).parent().parent().children('.product-amount').text(newAmount);

})

$('.minus-amount').click(function() {
    $(this)
})