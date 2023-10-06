$(document).ready(function()
{
    $("#form_contact").validate
    ({
        rules:
        {
            name:
            {
                required: true,
                minlength: 3
            },
            place:
            {
                required: true,
            },
            cNumber:
            {
                required: true,
                number:true
            },
            email:
            {
                required: true,
                email: true
            }

        }
    })
    $("#btn_submit").click(function()
    {

    })
})
    