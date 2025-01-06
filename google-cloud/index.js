import { Firestore } from '@google-cloud/firestore';

// Инициализация Firestore
const firestore = new Firestore();

// Пример HTTP-функции
export const helloWorld = (req, res) => {
    res.send('Hello, world!');
};

// Функция для сохранения заказа
export const saveOrder = async (req, res) => {
    try {
        const order = req.body; // Данные заказа из запроса
        const docRef = firestore.collection('orders').doc(order.id);
        await docRef.set(order);
        res.status(200).send('Order saved!');
    } catch (err) {
        res.status(500).send('Error saving order: ' + err.message);
    }
};
