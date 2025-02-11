let addBtn = $('.add');
let deleteBtn = $('.delete');
let listContainer = $('.listContainer');

addBtn.on('click',function(){
    let li = $('li').first().clone(true);
    let inp = $(this).prev().val();

    listContainer.prepend(li);
    li.children('span').text(inp);
});

deleteBtn.on('click',function(){
    $(this).parent().remove();
});