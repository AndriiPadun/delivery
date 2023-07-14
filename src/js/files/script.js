// Підключення функціоналу "Чертоги Фрілансера"



window.addEventListener("load", function () {
  const closedBox = document.querySelector('.delivery__box');
  const hiddenSlider = document.querySelector('.delivery__wrapper');
  const imageClose = closedBox.querySelector('.box-close');
  const imageOpen = closedBox.querySelector('.box-open');

  closedBox.addEventListener('mouseover', function () {
    closedBox.classList.add('open-box');
    hiddenSlider.classList.add('show');
    imageClose.dataset.box = 2;
    imageOpen.dataset.box = 1;
  });
});

const popup = document.querySelector('.popup');
const registrationBtn = popup.querySelector('.form-popup__button');
const formCheckbox = popup.querySelector('.form-popup__checkbox');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');
const formBlock = popup.querySelector('.popup__block-form');
const checkBlock = popup.querySelector('.block-check');
const nameInputResult = document.getElementById('full-name');
const phoneInputResult = document.getElementById('phone-number');
const tariffResult = document.getElementById('tariff');
const backToFormBtn = document.getElementById('back-to');
const toChangeBtn = document.getElementById('change');
const changeBtn = document.querySelector('.block-tariff__change');
const blockTariff = document.querySelector('.block-tariff');
const blockFinish = document.querySelector('.block-finish');
const blockCheckBtn = document.getElementById('finish');
const blockFinishBtn = document.querySelector('.block-finish__button');
const form = popup.querySelector('.form-popup');

let inputName;
let phone;

const choiceTariff = document.querySelector('.choice__name');
const choiceBtns = document.querySelectorAll('.card__button');
choiceBtns.forEach(choiceBtn => {
  choiceBtn.addEventListener('click', function (e) {
    const one = choiceBtn.closest('.content-offers__card');
    const oneText = one.querySelector('.card__tariff');
    choiceTariff.innerText = oneText.textContent;
  });
});

registrationBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const requiredInputs = document.querySelectorAll('input[required]');
  const isAllInputsFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');

  if (isAllInputsFilled && formCheckbox.checked) {
    inputName = nameInput.value;
    phone = phoneInput.value;
    formBlock.dataset.show = 2;
    checkBlock.dataset.show = 1;

    if (checkBlock.dataset.show === '1') {
      tariffResult.innerText = choiceTariff.textContent;
      nameInputResult.innerText = name;
      phoneInputResult.innerText = phone;
    }
  }
});

backToFormBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (formBlock.dataset.show === '2') {
    formBlock.dataset.show = 1;
    checkBlock.dataset.show = 2;
  }
});

toChangeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (formBlock.dataset.show === '1') {
    formBlock.dataset.show = 2;
    blockTariff.dataset.show = 1;
  }
});

const tariffs = popup.querySelectorAll('.block-tariff__item');
tariffs.forEach(tariff => {
  tariff.addEventListener('click', function (e) {
    tariffs.forEach(item => item.classList.remove('active-item'));
    e.target.classList.add('active-item');

    if (e.target.classList.contains('active-item')) {
      const tariffName = tariff.closest('.block-tariff__item');
      const tariffTitle = tariffName.querySelector('.block-tariff__title');
      choiceTariff.innerText = tariffTitle.textContent;

      changeBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (blockTariff.dataset.show === '1') {
          formBlock.dataset.show = 1;
          blockTariff.dataset.show = 2;
        }
      });

      registrationBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const requiredInputs = document.querySelectorAll('input[required]');
        const isAllInputsFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');

        if (isAllInputsFilled && formCheckbox.checked) {
          inputName = nameInput.value;
          phone = phoneInput.value;
          formBlock.dataset.show = 2;
          checkBlock.dataset.show = 1;

          if (checkBlock.dataset.show === '1') {
            tariffResult.innerText = tariffTitle.textContent;
            nameInputResult.innerText = name;
            phoneInputResult.innerText = phone;
          }
        }
      });
    }
  });
});

blockCheckBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (checkBlock.dataset.show === '1') {
    blockFinish.dataset.show = 1;
    checkBlock.dataset.show = 2;
  }
});

blockFinishBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (blockFinish.dataset.show === '1') {
    blockFinish.dataset.show = 2;
    formBlock.dataset.show = 1;
  }
});


if (popup) {
  popup.addEventListener("click", function(e){
   if ( e.target.hasAttribute("data-close")) {
    form.reset();
    formBlock.dataset.show = 1;
    blockFinish.dataset.show = 2;
    checkBlock.dataset.show = 2;
    blockTariff.dataset.show = 2;
   }
  })
}


    




