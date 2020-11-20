import React from 'react';
import CourseData from '../CoursePlan/CourseData/CourseData';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';

const Home = () => {
    return (
        <>
            <Menubar />
            <Header />
            <CourseData />
            <Footer />
        </>
    );
};

export default Home;