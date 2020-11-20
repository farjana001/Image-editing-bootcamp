import React from 'react';
import '../CoursePlan.scss';

const CoursePlanDetails = ({ courses }) => {
    const { title, icon, price, details } = courses;
    console.log(title);
    return (
        <div col-md-4>
            <div className="course-plan-card text-center m-3">
                <h2>{title}</h2>
                <h1 className="mb-3">${price}</h1>
                {
                    details.map(dt => <p>{dt.task}</p>)
                }
                <div className="purchase-btn"><button>PURCHASE</button></div>
            </div>
        </div>
    );
};

export default CoursePlanDetails;