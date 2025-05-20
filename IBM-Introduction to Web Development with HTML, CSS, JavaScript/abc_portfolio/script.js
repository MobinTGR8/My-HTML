function addRecommendation() {
  const input = document.getElementById('new-rec');
  const recList = document.getElementById('recommendation-list');
  const newText = input.value.trim();

  if (newText) {
    const para = document.createElement('p');
    para.textContent = newText;
    recList.appendChild(para);
    input.value = '';
    alert("Thank you! Your recommendation has been added.");
  } else {
    alert("Please enter a recommendation before submitting.");
  }
}
