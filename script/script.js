document.querySelector('.profile__button_edit').addEventListener("click", function() {
  document.querySelector('.popup').style.display='block'; 
  });

document.querySelector('.popup__button_close').addEventListener("click", function () {
  document.querySelector('.popup').style.display='none'; 
  });

  document.querySelector('.profile__button_edit').addEventListener("click",
  function EditName() {
      let x = document.querySelector(".profile__name").textContent;
      document.querySelector(".popup__input_name").value = x;
  });
  
  document.querySelector('.profile__button_edit').addEventListener("click",
  function EditProfession() {
      let x = document.querySelector(".profile__profession").textContent;
      document.querySelector(".popup__input_profession").value = x;
  });

  document.querySelector('.popup__button_save').addEventListener("click",
function SaveInfo() {
    let y = document.querySelector(".popup__input_name").value;
  document.querySelector(".profile__name").textContent = y;

  let z = document.querySelector(".popup__input_profession").value;
  document.querySelector(".profile__profession").textContent = z;
  document.querySelector('.popup').style.display='none'; 

});

