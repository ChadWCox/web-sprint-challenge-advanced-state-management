import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions'







const SmurfForm = (props) => {
    
    const initialState = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}

   const [smurfs, setSmurfs] = useState(initialState)

   const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setSmurfs({
          ...smurfs,
          [name]: value
      })
   };

   const handleSubmit = (e) => {
       e.preventDefault()
       postSmurfs(smurfs);
       setSmurfs(initialState)
   }

   



return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '250px', margin: '20px auto',  justifyContent: 'center', border: '1px solid black', padding: '0 0 20px'}}> 
            <h2>Add New Smurf</h2>
            <label style={{padding: '2% 0'}}> 
                Name:
                <input id='name' type='text' name='name' onChange={handleChange}
                value={smurfs.name} />
            </label>
            <label style={{padding: '5% 0', margin: '0 0 0 15px'}}>
                Age: 
                <input id='age' type='number' name='age' onChange={handleChange} value={smurfs.age} />
            </label>
            <label>
                Height:
                <input id='height' type='text' name='height'onChange={handleChange} value={smurfs.height} />
            </label>
            <button type="submit" style={{ width: '100px', margin: '5% auto'}}>Add Smurf</button>
        </form>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        isPosting: state.isPosting,
        smurfData: state.smurfData,
        error: state.error
        }
}

export default connect(mapStateToProps)(SmurfForm);
    




