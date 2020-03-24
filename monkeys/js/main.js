//Document ready func jQuery object
/* 
Name : Crystal Snow
3/4/2020

*/
$(function () {
    let $monkeyDivs = [$('#wiseMonkey1'), $('#wiseMonkey2')];
    let target = 0;
    let $op1;
    let $op2;
    //reset button
    $('#reset').click(function () {
        $monkeyDivs.forEach($d => clr($d));
        $('#message').text("Match the monkeys");
        target = 0;
    });
    //clear classes
    function clr($item) {
        $item.removeClass();
        $item.addClass('block');
    }
    //
    function imageSwap() {
        let $class = $(this).find('img').attr('alt');
        let $div;

        if (target === 0) {
            $div = $monkeyDivs[0];
            target = 1;
            $op1 = $class;

        } else if (target === 1) {
            $div = $monkeyDivs[1];
            $op2 = $class;
            target = 2;

            if ($op1 === $op2) {
                $('#message').text("They Match!");
            }
        }


        if (typeof $div !== 'undefined') {
            $div.addClass($class);
        }



    }
    $('article > button').on('click', imageSwap);

});
