import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const educationData = [
  { id: 1, type: 'B.Sc in Engineering', institution: 'Daffodil International University', year: '2022', grade: '3.94 CGPA', subject: 'Computer Science and Engineering', certificate: "https://res.cloudinary.com/deifi77os/image/upload/v1729359980/Portfolio/vbpweghsk0fvjkwfef8z.png" },
  { id: 2, type: 'H.S.C (Higher Secondary Certificate)', institution: 'Dr. Nashir Uddin Talukdar College', year: '2018', grade: '5.00 GPA', subject: 'Science', certificate:"https://res.cloudinary.com/deifi77os/image/upload/v1729360099/Portfolio/uzbtpudvowvwe1qvhzpm.jpg" },
  { id: 3, type: 'S.S.C (Secondary School Certificate)', institution: 'Baro Gharia High School', year: '2016', grade: '5.00 GPA', subject: 'Science', certificate:"https://res.cloudinary.com/deifi77os/image/upload/v1729360198/Portfolio/qn3rgjkkw96iwpmd1nc4.jpg" },
  { id: 4, type: 'J.S.C (Junior School Certificate)', institution: 'Baro Gharia High School', year: '2013', grade: '5.00 GPA', subject: 'Per Education Curriculum', certificate:"https://res.cloudinary.com/deifi77os/image/upload/v1729360336/Portfolio/eb3lt9fngj5oremmtzlk.jpg" },
];

const EducationCard = ({ education }) => (
  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 border">
    <div className="h-1/5">
      <FaGraduationCap className='text-4xl' />
    </div>
    <div className="h-3/5">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{education.type}</h3>
      <p className="text-gray-700"><strong>Institution:</strong> {education.institution}</p>
      <p className="text-gray-700"><strong>Year:</strong> {education.year}</p>
      <p className="text-gray-700"><strong>Grade:</strong> {education.grade}</p>
      <p className="text-gray-700"><strong>Subject:</strong> {education.subject}</p>
    </div>
    <div className="flex my-5 items-center justify-center h-1/5">
      <Link
        to={education.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150"
      >
        View Certificate
      </Link>
    </div>
  </div>
);

const EducationComponent = () => (
  <div className=" p-10">
    <p className="text-4xl font-bold text-center py-5">
      Educational <span className="text-theme_primary">Qualifications</span>
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  </div>
);

export default EducationComponent;
