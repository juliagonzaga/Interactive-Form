$('#name').focus();
$('#other-title').hide();
$('#title').on('change', function(){
    if ($(this).val() === 'other'){
        $('#other-title').show().focus();   
    }; 
    if ($(this).val() !== 'other'){
        $('#other-title').hide();
    };
});
$('#design').on('change', function(){
    const $selectTheme = $(this).val();
    const $allTheme = $('#color option');
    const $jsPuns = $('#color option:lt(3)');
    const $heartJs = $('#color option:gt(2)');
    $('#color option').removeAttr('selected');
        if ($selectTheme === 'js puns'){
            $('#color option:eq(0)').attr('selected', true);
            $($jsPuns).show();
            $($heartJs).hide();
        }; 
        if ($selectTheme === 'heart js'){
            $('#color option:eq(3)').attr('selected', true);
            $($heartJs).show();
            $($jsPuns).hide();
        };
        if ($selectTheme === 'Select Theme'){
            $('#color option:eq(0)').attr('selected', true);
            $($allTheme).show();
        };
});
