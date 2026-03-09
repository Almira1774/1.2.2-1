import { carsList } from '../cars.const';
import './TableStyle.css';
const Table = () => {
  console.log(carsList);
  return (
    <table className="table">
      <thead>
        <th>Марка</th>
        <th>Цена</th>
        <th>Год</th>
        <th>Цвет</th>
        <th>Заказать</th>
      </thead>
      <tbody>
      {carsList.map((car) => {
            return (
              <tr key={car.brand}>
                <td>
                  {car.brand}
                  {car.model}
                </td>
                <td>
                  {car.price} {car.сurrency}
                </td>
                <td>{car.year}</td>
                <td>
                  <select>
                    {car.color.map((c) => {
                      return <option>{c}</option>;
                    })}
                  </select>
                </td>
                <td>
                  <button disabled={car.isReserved? true : 
                  false}>Забронировать</button>
                </td>
              </tr>
            )})}
      </tbody>
    </table>
  );
};

export default Table;
