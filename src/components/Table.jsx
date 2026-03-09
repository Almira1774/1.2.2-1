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
        {carsList.length > 0 ? (
          carsList.map((car) => {
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
                  {car.isReserved ? (
                    <button disabled={true}>Зарезервирован</button>
                  ) : (
                    <button>Забронировать</button>
                  )}
                </td>
              </tr>
            );
          })
        ) : (
          <tr className="noCars">
            <td colSpan="5">Автомобили не найдены</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
