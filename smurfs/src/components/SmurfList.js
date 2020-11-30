import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions'



const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            <h1>SMURFS! W/Redux</h1>
            {props.isLoading ? <p>Loading Smurf data...</p> : null }
            {props.isPosting ? <p>Posting new Smurf!</p> : null }
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            {props.smurfData.map((smurf) => {
                return (
                    <div key={smurf.id} style={{ border: "1px solid black", width: "250px", margin: "auto auto", borderRadius: "5px", backgroundColor: "#4399EF", 
                    color: "#F8F8FF"}}>
                        <h2>{smurf.name}</h2>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>    
                )
            })}
        </div>
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);