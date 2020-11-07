import React from 'react'
const SetItem = ({ handleSubmit, setItemInput, itemInput, alert}) => {
    return (
        <div>
            {alert && <h2>Submit Successful</h2>}        
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Item</p>
                    <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SetItem;