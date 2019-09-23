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
    $(this).attr('checked', true);
    if ($(this).prop('checked') == false){
        $(this).removeAttr('checked');
    }
    console.log($(this))
});























