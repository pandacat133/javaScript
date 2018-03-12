function createAList() {
    var listName = $('#createInput').val();
    $('.createdLists').append('<div>'+ listName + '</div>');
    $('#createInput').val('');
}

//<div class="editbox" contenteditable=true></div>