import CareStyle from "./CareStyle";

function Item({id, name, price, light, water, cover}){
    return(
        <li key={id} className="plant-item">
            <img className="plant-item-cover" src={cover}></img>
            <div>{name} </div>
            <div>${price}</div>
            <CareStyle type={'light'} value={light}></CareStyle>
            <CareStyle type={'water'} value={water}></CareStyle>
        </li>
    )
}

export default Item;