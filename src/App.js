import logo from './logo.svg';
import './App.css';

function App() {
    const info = ['DucNH', 30, '0968057988'];

    const calculator = (a, b) => {
        const cong = a + b;
        const tru = a - b;
        const nhan = a * b;
        const chia = a / b;
        return [cong, tru, nhan, chia]
    }

    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021,
        color: 'red',
        registration: {
            city: 'Houston',
            state: 'Texas',
            country: 'USA'
        }
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const [...rest] = numbers;

    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const arr_all = [...arr1, ...arr2];

    const my_vehicle = myVehicle(vehicleOne).toUpperCase();

    function myVehicle({model, registration: {city}}) {
        return 'My model ' + model + ' Registration ' + city
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>{my_vehicle}</p>
                <ul>{arr_all.map((item) => <li>{item}</li>)}</ul>
            </header>
        </div>
    );
}

export default App;
