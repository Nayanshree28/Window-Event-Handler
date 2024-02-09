const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_model = document.querySelector('.close-modal');
const close_modelbtn = document.querySelectorAll('.show-modal');
console.log(close_modelbtn);

const closeModel = function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
};
for(let i=0; i<close_modelbtn.length; i++){
    close_modelbtn[i].addEventListener('click', function(){
        console.log('button clicked');
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
    close_model.addEventListener('click',closeModel);
     
    overlay.addEventListener('click',function(){
        model.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    document.addEventListener('keydown', function(e){
        console.log(e.key);
        if(e.key === 'Escape'){
            if(!model.classList.contains('hidden')){
                closeModel();
            }
        }
    })
}
 
