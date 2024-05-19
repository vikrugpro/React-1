import './App.css';
import { Chart } from 'react-google-charts';
const options = {
    title: 'Любимые занятия котика Конфуция в течение дня',
};
const data = [
                    ['Занятие', 'количество часов в день'],
                    ['Кушать', 2],
                    ['Гладить пузико',1],
                    ['Мяукать', 1],
                    ['Сладенько спать', 18],
                    ['Укоризненно смотреть на рабов', 2],
                ];

function App() {
    return (
        <div className="App">
            <Chart
                chartType="PieChart"
                options={options}
                data={data}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default App;
