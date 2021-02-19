import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfList = (props) => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.smurfs.map((smurf, i) => {
        return <Smurf key={i} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.isLoading,
    smurfs: state.smurfsArr,
  };
};

export default connect(mapStateToProps)(SmurfList);