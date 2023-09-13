document.addEventListener('DOMContentLoaded', function () {
  const inputWeight = document.getElementById('inputWeight');
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  const convertButton = document.getElementById('convertButton');
  const outputWeight = document.getElementById('outputWeight');

  convertButton.addEventListener('click', function () {
    const inputValue = parseFloat(inputWeight.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(inputValue)) {
      alert('Please enter a valid number for weight.');
      return;
    }

    let result;

    // Perform weight conversion
    if (from === 'kg' && to === 'lb') {
      result = inputValue * 2.20462;
    } else if (from === 'kg' && to === 'oz') {
      result = inputValue * 35.274;
    } else if (from === 'lb' && to === 'kg') {
      result = inputValue / 2.20462;
    } else if (from === 'lb' && to === 'oz') {
      result = inputValue * 16;
    } else if (from === 'oz' && to === 'kg') {
      result = inputValue / 35.274;
    } else if (from === 'oz' && to === 'lb') {
      result = inputValue / 16;
    } else {
      result = inputValue; // Same unit
    }

    outputWeight.textContent = `${inputValue} ${from} is ${result.toFixed(
      2
    )} ${to}`;
  });
});
