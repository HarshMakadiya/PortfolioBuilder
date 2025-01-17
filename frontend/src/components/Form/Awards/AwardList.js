import React from 'react';
import NewAwardForm from './NewAwardForm';
import Award from './Award';
import { connect } from 'react-redux';
import { removeAward } from './actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AwardList = ({ awards = [], onRemovePressed }) => {
    return(
    <div>
        <NewAwardForm />
        <div className="container mb-3">
            {awards.map(award => <Award award={award.award} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    awards: state.awards,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: award => {
        toast.success('Award removed successfully', {
            position: "top-right",
            autoClose: 2000,
            closeOnClick:true
            });
        dispatch(removeAward(award))},
});

export default connect(mapStateToProps, mapDispatchToProps)(AwardList);