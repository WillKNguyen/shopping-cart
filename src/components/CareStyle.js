import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const quantityLabel = {
	1: 'little',
	2: 'moderate',
	3: 'plenty of'
}

function handleClick(type, value){
    alert(`This plant requires ${quantityLabel[value]} ${type}`)
}

function CareStyle({type, value}){
    var scaleType = null
    if (type === 'light'){
        scaleType = <img src={sun}></img>
    }
    else {
        scaleType = <img src={water}></img>
    }

    const iter = [1,2,3]

    return(
        <div onClick={()=>handleClick(type, value)}>
            {iter.map((i) => {
                if (value >= i) {
                    return (
                        <span key={i.toString()}>{scaleType}</span>
                    )
                }
            })}
        </div>
    )
}

export default CareStyle