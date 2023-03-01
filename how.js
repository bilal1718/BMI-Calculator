const mybutton = document.querySelector('.mybutton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName){
        this.createDiv(itemName);
    }
      createDiv(itemName){
        let input=document.createElement('input');
        input.value= itemName;
        input.disabled= true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let edit=document.createElement('button');
        edit.innerHTML = "EDIT";
        edit.classList.add('edit');

        let remove=document.createElement('button');
        remove.innerHTML="REMOVE";
        remove.classList.add('remove');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

        edit.addEventListener('click',()=> this.edit(input));
        remove.addEventListener('click',()=> this.remove(itemBox));
      }
      edit(input){
        input.disabled= !input.disabled;

      }
      remove(item){
        container.removeChild(item);
      }

}

function check(){
  if(input.value != ""){
    new item(input.value);
    input.value="";
  }
}


mybutton.addEventListener('click',check);
window.addEventListener('keydown',(e) => {
  if(e.which ==13){
    check();
  }
})
