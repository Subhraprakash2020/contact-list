// get old value from local storage
var localContact = localStorage.getItem('contactlist');

parsedData = JSON.parse(localContact);
$('.contact ul').html('');
$(parsedData).each(function(k, v) {
    $('.contact ul').append(`<li><span class = "newName">` + 'test name' + `</span>&nbsp;&nbsp;<span class="newNumber">` + v + `</span>&nbsp;&nbsp;<span><button type="button" class="btn btn-primary" 
    onclick="editcontact('dummy name', ` + v + `)" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button></span><span><button class="delete" onclick="deleteContact(this, ` + v + `)" type="button">Delete</button></span></li>`);
});

$('.add').on('click', function() {

    console.log("add button clicked");
    var enterNUM = $('.phone').val();
    console.log("input value::", $('.phone').val);
    var enterName = $('.name').val();
    console.log("input a name::", $('.name').val);
    if (!enterNUM) {
        window.alert("Please enter a number");
    } else {
        contact = [];
        // get old value from local storage
        var localContact = localStorage.getItem('contactlist');

        parsedData = JSON.parse(localContact);

        $(parsedData).each(function(k, v) {
            contact.push(v);
        });

        // add new value to array   
        contact.push(enterNUM);
        var stringifyData = JSON.stringify(contact);

        localStorage.setItem('contactlist', stringifyData);


        $('.contact ul').append(`<li><span class = "newName">` + enterName + `</span>&nbsp;&nbsp;<span class="newNumber">` + enterNUM + `</span>&nbsp;&nbsp;<span><button type="button" class="btn btn-primary" 
        onclick="editcontact(` + enterName + `, ` + enterNUM + `)" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button></span><span><button class="delete" onclick="deleteContact(this)" type="button">Delete</button></span></li>
       
    `);

        $('.phone').val('');
        $('.name').val('');
    }

});

function deleteContact(e, phone) {
    localContact = localStorage.getItem('contactlist');
    console.log("localContact", localContact);

    localContact = JSON.parse(localContact);
    console.log("localContact", localContact);

    if (confirm)
        window.alert("are you want to delete");
    console.log("delete a number", $(this).parent().parent());
    // $(this).parent().parent().remove();
    $(e.parentElement.parentElement).remove();
    console.log("have you delete");
    $(localContact).each(function(k, v) {
        console.log("v::", v);
        if (phone == v) {
            console.log("phone number matched");
            // write deletion logic
            //remove element from array
            //set localstorage again

            $(localContact).remove(".phone");

        }
    })
}


function editcontact(name, phone) {
    console.log("edit ", name, phone);
    $('#exampleModal').modal();
    $('#myname').val(name);
    $('#mynumber').val(phone);
}


// save contact click hide the popup
$('.save-phone').on('click', function() {
    $('#myname').val();
    $('#mynumber').val();
    $('#exampleModal').modal('hide');
})

// $('.delete').on('click', function() {
//     console.log("just delete");
//     $("contactlist").each(function() {

//     });
// })