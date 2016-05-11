$(function(){
  addEventListener();
});

function addEventListener(){
  $('button').on('click', function(){
    getBooks();
  });
};

function getBooks(){
  var url = "http://daretoexplore.herokuapp.com/books"
  $.get(url, function(data){
    renderTemplate(data);
  })
};

function renderTemplate(data){
  var source = $('#books-template').html();
  var template = Handlebars.compile(source);
  var booksTemplate = template({book: data});
  $results = $('#results');
  $results.append(booksTemplate);
};
