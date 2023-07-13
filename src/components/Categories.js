import React from "react"

function Categories({selectedCat, setCat, categories}){
    function onSelection(e){
        setCat(e.target.value)
    }
    return (
        <React.Fragment>
            <select onChange={onSelection}>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <div>Category selected: {selectedCat ? selectedCat : 'All'}</div>
            <button onClick={()=>{setCat(null)}}>Clear Selection</button>
        </React.Fragment>
    )
}

export default Categories