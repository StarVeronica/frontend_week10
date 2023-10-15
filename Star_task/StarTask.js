function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity * price;
    alert(`Стоимость покупки: ${result.toLocaleString('ru-RU')} рублей`);
}
