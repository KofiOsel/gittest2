const confirmButton = document.querySelector('input[name="button"]');
const radioButton = document.querySelectorAll('input[name="selection"]');
const result = document.getElementById('result');

confirmButton.addEventListener('click',  () => {
    const options = ['Ronaldo', 'Messi', 'Neymar'];
    let selectedValue;
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked)
            selectedValue = options[i];
    }
    if ('Messi' === selectedValue) result.textContent = `Good Answer: ${selectedValue}`;
    else result.textContent = `Sorry Wrong Answer: ${selectedValue}`;
});