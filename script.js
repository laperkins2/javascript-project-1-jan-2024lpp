whoButton.onclick = function () {
  let blackHair = blackHairCheckbox.checked;
  let glasses = glassesCheckbox.checked;
  let female = femaleCheckbox.checked;
  let hat = hatCheckbox.checked;

  let anne = !hat && blackHair && !glasses && female;
  let mary = hat && !blackHair && !glasses && female;
  let claire = hat && !blackHair && glasses && female;
  let philip = !hat && blackHair && !glasses && !female;

  if (anne) {
    divA.textContent = 'I am Anne';
    anneImg.src = 'anne.png';
    theBody.style.backgroundColor = 'yellow';
  } else if (mary) {
    divA.textContent = 'I am Mary';
    maryImg.src = 'mary.png';
    theBody.style.backgroundColor = 'gray';
  } else if (claire) {
    divA.textContent = 'I am Claire';
    claireImg.src = 'claire.png';
    theBody.style.backgroundColor = 'blue';
  } else if (philip) {
    divA.textContent = 'I am Philip';
    philipImg.src = 'philip.png';
    theBody.style.backgroundColor = 'tan';
  } else {
    divA.textContent = 'Who are you then';
    questionImg.src = 'question.png';
    theBody.style.backgroundColor = 'red';
  }
};
