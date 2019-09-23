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

$('input[type=checkbox]').on('change', function(){
    const $framework = $('.activities label:eq(1) input');
    const $libs = $('.activities label:eq(2) input');
    const $express = $('.activities label:eq(3) input');
    const $node = $('.activities label:eq(4) input');

    if ($(this).attr('name') === 'js-frameworks' && $(this).is(':checked')){
        $express.prop('disabled', true).parent().css('color', 'gray');
    } else if ($(this).attr('name') === 'js-frameworks' && $(this).not(':checked')) {
        $express.prop('disabled', false).parent().css('color', 'black');
    }

    if ($(this).attr('name') === 'express' && $(this).is(':checked')){
        $framework.prop('disabled', true).parent().css('color', 'gray');
    } else if ($(this).attr('name') === 'express' && $(this).not(':checked')) {
        $framework.prop('disabled', false).parent().css('color', 'black');
    }

    if ($(this).attr('name') === 'js-libs' && $(this).is(':checked')){
        $node.prop('disabled', true).parent().css('color', 'gray');
    } else if ($(this).attr('name') === 'js-libs' && $(this).not(':checked')) {
        $node.prop('disabled', false).parent().css('color', 'black');
    }

    if ($(this).attr('name') === 'node' && $(this).is(':checked')){
        $libs.prop('disabled', true).parent().css('color', 'gray');
    } else if ($(this).attr('name') === 'node' && $(this).not(':checked')) {
        $libs.prop('disabled', false).parent().css('color', 'black');
    }
});























