(function(){
    var listitem = document.querySelector('#list'),
    form = document.querySelector('form'),
    newitem = document.querySelector('#newitem');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    listitem.innerHTML += '<li>' + newitem.value + '</li>';
    save();
    newitem.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    save();
  },false)
  
  function save() {
    window.localStorage.myitems = listitem.innerHTML;
  }
  
  function getitem() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      listitem.innerHTML = '<li>Wake up early in the morning</li>'+
                       '<li>Assignments</li>'+
                       '<li>Projects</li>';
    }
    else {
      listitem.innerHTML = storedValues;
    }
  }
  getitem();
})();
