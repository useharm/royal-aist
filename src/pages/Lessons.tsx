import React from 'react';
import SignUpBlock from '../components/SignUpBlock';

const Lessons: React.FC = () => {
    return (
        <div>
<section className="all__marg">
    <div className="container">
        <div className="lessons__main">
            <div className="lessons__center">
                <h2>lessons in our center</h2>
                <p>
                    Thanks to the training at the AIST center, your children will
                    begin to think systematically, approach solving problems of any complexity
                    not only logically, but also creatively, since creativity
                    is the highest degree of intelligence. That is why we have such
                    a wide range of teaching methods, both authorial and creative.
                </p>
            </div>
            <div className="lessons__href">
                <ul>
                    <li><a href="#">English, French, Arabic</a></li>
                    <li><a href="#">painting</a></li>
                    <li><a href="#">mathematics</a></li>
                    <li><a href="#">music, vocals</a></li>
                    <li><a href="#">funny sounds (abc)</a></li>
                    <li><a href="#">gymnastic</a></li>
                    <li><a href="#">speech therapist</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

<SignUpBlock />
        </div>
    );
};

export default Lessons;