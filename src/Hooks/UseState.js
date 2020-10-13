import React, {useState, useEffect } from 'react';


//создаём хукб который возвращает ключи, которые нужеы для инпут валюе
function UseStateHook( ) {
    const [count, setCount] = useState(0);
// Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.title = `Вы нажали ${count} раз`;
    });
    return(
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
        </div>
    )
}

export default UseStateHook