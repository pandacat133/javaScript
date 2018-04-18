let allCategories;
let selectedCategory;

loadCategories();

function loadCategories() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
          allCategories = JSON.parse(this.responseText);
          console.log(allCategories);

          for(let i = 0; i < allCategories.categories.length; i++) {
              $('.centerBox').append('<div class="card">'+
                                     '<div class="catImage"><img src="'+ allCategories.categories[i].courseimage +'"></div>'+
                                     '<div class="catTitle">'+ allCategories.categories[i].name +'</div>'+
                                     '<div class="catSemester">'+ allCategories.categories[i].semester +'</div>'+
                                     '<div class="catDescription">'+ allCategories.categories[i].description +'</div>'+
                                     '<div class="catButton">' +
                                        '<button onclick="selectCourse('+ allCategories.categories[i].catid +', this)">' +
                                            'SELECT' +
                                        '</button>' +
                                     '</div>'+
                                     '</div>'
              );
          }
      }
    };

    xhttp.open('GET', '//api.jsonbin.io/b/5ad654fbf5d4cd62f4721e02', true);
    xhttp.send();
}

function selectCourse(catId, myButton) {

    let theCard = $(myButton).parent().parent();

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            selectedCategory = JSON.parse(this.responseText);
            console.log(selectedCategory);

            let classArray = selectedCategory.classes[0].levels;
            for(let c = 0; c < classArray.length; c++) {
                $(theCard).append('<a class="typeLinks" href="javascript: showAllClasses('+ c +')">'+ classArray[c].type +'</a>');
            }

        }
    };

    xhttp.open('GET', 'https://uxcobra.com/classapi/class' + catId + '.txt', true);
    xhttp.send();
}

function showAllClasses(typeIndex) {
    $('.centerBox').slideUp(function() {
        $('.classDisplay').slideDown();
    });

    $('.classDisplay').append('<div class="classHeader">'+ selectedCategory.selectedCourseName +'</div>');

    for(let i = 0; i < selectedCategory.classes.length; i++) {
        $('.classDisplay').append('<div class="classRow">' +
                                  '<div class="rowItem">'+ selectedCategory.classes[i].classname +'</div>'+
                                  '<div class="rowItem">'+ selectedCategory.classes[i].levels[typeIndex].type +'</div>'+
                                  '<div class="rowItem">'+ selectedCategory.classes[i].levels[typeIndex].teacher +'</div>'+
                                  '<div class="rowItem">'+ selectedCategory.classes[i].levels[typeIndex].schedule +'</div>'+
                                  '</div>');
    }
}