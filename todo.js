id=1;
$("#add").click(function(){
    var task=$("#task");
    if(task.val()==="")alert("Enter the task");
    else{
        li_id="li"+id.toString();
        cb="<input class='tasks' type='checkbox' id="+id+" onchange='alter(this.id)'>"
        label="<label for="+id+">"+task.val()+"</label>"
        $("#todo-item").append("<li class='todo-item' id="+li_id+">"+cb+label+"</li>");
        task.val("");
        id++;
    }
});
function alter(id){
    item=$("#li"+id);
    if(item.hasClass("todo-item")){
        item.removeClass("todo-item");
        item.addClass("completed-item");
        $("#completed").append(item);
    }
    else{
        item.removeClass("completed-item");
        item.addClass("todo-item");
        $("#todo-item").append(item);
    }
}
