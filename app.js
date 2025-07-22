document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    const addButton = document.getElementById('addButton');
    const result = document.getElementById('result');

    addButton.addEventListener('click', () => {
        const number1 = parseFloat(num1.value) || 0;
        const number2 = parseFloat(num2.value) || 0;
        const number3 = parseFloat(num3.value) || 0;

        const sum = number1 + number2 + number3;
        result.textContent = `The sum is: ${sum}`;
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});