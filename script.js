const bill = document.querySelector('#bill');
const ppl = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.btn');
const info = document.querySelector('.info');

const secureFields = () => {
if (bill.value === '' || ppl.value === '' || tip.value === 0) {
    info.textContent = 'Please, fill all the fields.';
}
else {
    calculateBill();
}
}

const calculateBill = () => {
    const newBill = parseFloat(bill.value);
    const newPpl = parseInt(ppl.value);
    const newTip = parseFloat(tip.value);
    const result = (newBill + (newBill * newTip)) / newPpl;
    info.textContent = `You should pitch in ${result.toFixed(2)} zlotys.`;
}

btn.addEventListener('click', secureFields);
