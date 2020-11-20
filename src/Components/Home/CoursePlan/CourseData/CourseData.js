import React from 'react';
import '../CoursePlan.scss'
import CoursePlanDetails from '../CoursePlanDetails/CoursePlanDetails';

const CourseData = () => {
    const courseData = [
        {
            id: 1,
            title: "Beginner",
            icon: "",
            price: 29,
            details: [
                {
                    task: "Clipping Path/Remove Background"
                },
                {
                    task: "Image Resize & Using Template"
                },
                {
                    task: "Hair Masking"
                },
                {
                    task: "Shadow Creation"
                }
              
            ]
        },
        {
            id: 2,
            title: "Intermediate",
            icon: "",
            price: 39,
            details: [
                {
                    task: "Clipping Path/Remove Background"
                },
                {
                    task: "Image Resize & Using Template"
                },
                {
                    task: "Hair Masking"
                },
                {
                    task: "Shadow Creation"
                },
                {
                    task: "Object Retouch"
                },
                {
                    task: "Adding Reflection"
                }
            ]
        },
        {
            id: 3,
            title: "Advance",
            icon: "",
            price: 59,
            details: [
                {
                    task: "Clipping Path/Remove Background"
                },
                {
                    task: "Complex Masking"
                },
                {
                    task: "Shadow Creation"
                },
                {
                    task: "Object and Skin Retouch"
                },
                {
                    task: "Adding Reflection"
                },
                {
                    task: "Recolor"
                },
                {
                    task: "image manipulation"
                }
            ]
        }
    ]
    return (
        <section className="course-plan-wrapper">
            <div className="container">
                <h1 className="course-plan-heading">CHOOSE THE BEST <span>PLAN FOR YOU</span></h1>
                <div className="course-plan-body">
                    <div className="row d-flex- justify-content-center">
                        {
                            courseData.map(course => <CoursePlanDetails key={course.id} courses={course} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseData;