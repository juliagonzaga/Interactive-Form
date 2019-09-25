$('#name').focus();
$('#other-title').hide();
$('#title').on('change', function(){
    if ($(this).val() === 'other'){
        $('#other-title').show().focus();   
    } else {
        $('#other-title').hide();
    };
});
$('#design').on('change', function(){
    const $selectTheme = $(this).val();
    const $allTheme = $('#color option');
    const $jsPuns = $('#color option:lt(3)');
    const $heartJs = $('#color option:gt(2)');
    $($allTheme).removeAttr('selected');
        if ($selectTheme === 'js puns'){
            $($jsPuns).show();
            $($heartJs).hide();
        } else if ($selectTheme === 'heart js'){
            $('#color option:eq(3)').attr('selected', true);
            $($heartJs).show();
            $($jsPuns).hide();
        } else {
            $($allTheme).show();
        };
});


var $total = 0;
$('.activities').append($(`<label>Total: $${$total}</label><br>`));
$('input[type=checkbox]').on('change', function(){
    const $checked = $(this).is(':checked');
    const $notChecked = $(this).not(':checked');
    const $attr = $(this).attr('name');
    const $framework = $('.activities label:eq(1) input');
    const $libs = $('.activities label:eq(2) input');
    const $express = $('.activities label:eq(3) input');
    const $node = $('.activities label:eq(4) input');
    
    if ($attr === 'js-frameworks' && $checked){
        $express.prop('disabled', true).parent().css('color', 'gray');
    } else if ($attr === 'js-frameworks' && $notChecked) {
        $express.prop('disabled', false).parent().css('color', 'black');
    }

    if ($attr === 'express' && $checked){
        $framework.prop('disabled', true).parent().css('color', 'gray');
    } else if ($attr === 'express' && $notChecked) {
        $framework.prop('disabled', false).parent().css('color', 'black');
    }

    if ($attr === 'js-libs' && $checked){
        $node.prop('disabled', true).parent().css('color', 'gray');
    } else if ($attr === 'js-libs' && $notChecked) {
        $node.prop('disabled', false).parent().css('color', 'black');
    }

    if ($attr === 'node' && $checked){
        $libs.prop('disabled', true).parent().css('color', 'gray');
    } else if ($attr === 'node' && $notChecked) {
        $libs.prop('disabled', false).parent().css('color', 'black');
    }

    if($checked){
        let $price = parseInt($(this).parent().text().match(/\d+$/));
        $total += $price;
        $('.activities label:last').text(`Total: $${$total}`);
    } else {
        let $price = parseInt($(this).parent().text().match(/\d+$/));
        $total -= $price;
        $('.activities label:last').text(`Total: $${$total}`);
    }
});



















