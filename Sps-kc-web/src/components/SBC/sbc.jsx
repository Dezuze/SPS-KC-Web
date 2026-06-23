import React from "react";
import "./sbc.css"; // Assuming you might still have some global styles here.

const TableRow = ({ name, memberCount, formedDate }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
    <td className="p-4 text-gray-800 font-medium border-r border-gray-200">{name}</td>
    <td className="p-4 text-gray-700 border-r border-gray-200">{memberCount}</td>
    <td className="p-4 text-gray-700">{formedDate}</td>
  </tr>
);

const Sbclist = () => {
  const data = [
    { name: "Mar Baselios Inst of Tech & Sci,SP01", formedDate: "3/21/2023", memberCount: "97" },
    { name: "Chenganur College of Engineering,SP01", formedDate: "4/21/2024", memberCount: "80" },
    { name: "College of Engg - Karunagappally,PHO/MIT/SSC/SP", formedDate: "6/22/2020", memberCount: "65" },
    { name: "College of Engineering-Attingal,SP01", formedDate: "2/24/2023", memberCount: "64" },
    { name: "Jyothi Engineering College - Thrissur,SP01", formedDate: "8/9/2024", memberCount: "60" },
    { name: "Mar Athanasius College of Eng,SP01", formedDate: "1/27/2023", memberCount: "43" },
    { name: "Sree Buddha College of Engineering,SP01", formedDate: "12/30/2024", memberCount: "43" },
    { name: "Muslim Assoc Coll of Eng Venjaramood,SP01", formedDate: "3/8/2023", memberCount: "42" },
    { name: "Federal Inst of Science & Tech,SP01", formedDate: "6/21/2022", memberCount: "32" },
    { name: "Sahrdaya College of Engg & Tech - Thrissur,SP01", formedDate: "6/3/2022", memberCount: "27" },
    { name: "M Dasan Institute of Technology,SP01", formedDate: "10/26/2022", memberCount: "25" },
    { name: "College of Eng-Thalassery,SP01", formedDate: "5/17/2023", memberCount: "21" },
    { name: "TKM College of Engineering,SP01", formedDate: "10/21/2019", memberCount: "21" },
    { name: "Trivandrum College of Engineering,SP01", formedDate: "1/12/2018", memberCount: "21" },
    { name: "National Institute of Technology Calicut,SP01", formedDate: "6/3/2023", memberCount: "18" },
    { name: "Toc H Institute of Science and Technology,SP01", formedDate: "6/3/2023", memberCount: "18" },
    { name: "KMEA Engineering College-Aluva,SP01", formedDate: "7/28/2022", memberCount: "16" },
    { name: "Vimal Jyothi Engineering College-Kannur,SP01", formedDate: "4/14/2024", memberCount: "15" },
    { name: "Rajagiri School of Engineering & Tech,SP01", formedDate: "3/13/2023", memberCount: "14" },
    { name: "Rajiv Gandhi Institute of Technology Kottayam,SP01", formedDate: "2/2/2022", memberCount: "14" },
    { name: "Model Engineering College,SP01", formedDate: "12/30/2019", memberCount: "13" },
    { name: "Government Engineering College-Thrissur,SP01", formedDate: "7/4/2021", memberCount: "12" },
    { name: "Adi Shankara Inst of Engineering & Tech,SP01", formedDate: "4/30/2015", memberCount: "11" },
    { name: "Viswajyothi College Of Eng & Tech,SP01", formedDate: "7/2/2023", memberCount: "11" },
    { name: "MEA Engineering College - Perinthalmanna,SP01", formedDate: "7/6/2023", memberCount: "9" },
    { name: "College Of Engineering-Poonjar,SP01", formedDate: "9/29/2024", memberCount: "6" },
    { name: "Adi Shankara Inst of Engineering & Tech,SP01", formedDate: "4/30/2015", memberCount: "11" },
    { name: "Mar Baselios College of Eng & Tech,SP01", formedDate: "7/31/2020", memberCount: "4" },
    { name: "Sree Narayana Gurukulam College of Eng,SP01", formedDate: "3/21/2023", memberCount: "3" },
    { name: "Amrita Vishwa Vidyapeetham,SP01", formedDate: "4/17/2013", memberCount: "2" },
    { name: "Lourdes Matha Coll of Science & Tech,SP01", formedDate: "7/2/2023", memberCount: "1" },
    { name: "Mangalam College of Engineering,SP01", formedDate: "3/18/2022", memberCount: "1" },
    { name: "College of Engineering Muttathara,SP01", formedDate: "10/30/2023", memberCount: "0" },
    { name: "MES College of Engineering - Kuttippuram,SP01", formedDate: "5/13/2016", memberCount: "0" },
    { name: "MES College of Engineering and Technology,SP01", formedDate: "4/7/2024", memberCount: "0" }
  ];

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg sbc-list">
    <h1 className="text-4xl sm:text-5xl text-center font-extrabold text-blue-800 mb-4 tracking-tight">
      IEEE SPS Kerala Chapter Student Branches
        </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="column">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold  uppercase tracking-wider border-r border-gray-300"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold  uppercase tracking-wider border-r border-gray-300"
              >
                Member Count
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Formed Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <TableRow key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sbclist;