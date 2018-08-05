// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Instruments
import { store } from './bus/init/store';
import './theme/initGallery';

// App
import App from './navigation/App';

render (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById ('app')
);


// ToDo: ДЗ 1 - Добавить в API
// ToDo: ДЗ 1 - Создать тип Экшена
// ToDo: ДЗ 1 - Создать Экшен
// ToDo: ДЗ 1 - Создать обработку редюсером (новый пост в начало смиска)
// ToDo: ДЗ 1 - Привязать новый экшени через мэпдиспетч то пропс к пропсам компонента (копозер должен получить его автоматически)
