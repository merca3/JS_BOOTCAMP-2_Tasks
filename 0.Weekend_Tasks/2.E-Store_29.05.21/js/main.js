$('.remove-btn button').click((this) => {
    $(this).parent().remove();
})

$('#add-amount').click(() => {
    $('#product-amount').html('3');
})