import React, { useState } from 'react';

// Dummy data for patient bookings with Indian names
const dummyBookings = [
    { id: 1, name: "Rajesh Kumar", age: 30, date: "2024-07-15", status: "Pending" },
    { id: 2, name: "Aarushi Sharma", age: 25, date: "2024-08-22", status: "Pending" },
    { id: 3, name: "Deepak Patel", age: 45, date: "2024-06-30", status: "Pending" },
    { id: 4, name: "Meera Gupta", age: 28, date: "2024-05-17", status: "Pending" },
    { id: 5, name: "Suresh Gupta", age: 40, date: "2024-09-01", status: "Pending" },
    { id: 6, name: "Priya Singh", age: 35, date: "2024-08-12", status: "Pending" },
    { id: 7, name: "Ankit Verma", age: 50, date: "2024-07-21", status: "Pending" },
    { id: 8, name: "Pooja Sharma", age: 30, date: "2024-06-05", status: "Pending" },
    { id: 9, name: "Vikram Patel", age: 45, date: "2024-07-10", status: "Pending" },
    { id: 10, name: "Neeta Reddy", age: 28, date: "2024-08-25", status: "Pending" },
    { id: 11, name: "Sandeep Kumar", age: 39, date: "2024-06-15", status: "Pending" },
    { id: 12, name: "Geeta Singh", age: 33, date: "2024-07-08", status: "Pending" },
    { id: 13, name: "Anil Verma", age: 50, date: "2024-09-10", status: "Pending" },
    { id: 14, name: "Kavita Mehta", age: 32, date: "2024-06-22", status: "Pending" },
    { id: 15, name: "Sunil Gupta", age: 37, date: "2024-07-29", status: "Pending" },
    { id: 16, name: "Rita Joshi", age: 29, date: "2024-08-18", status: "Pending" },
    { id: 17, name: "Sunil Yadav", age: 29, date: "2024-08-01", status: "Pending" },
    { id: 18, name: "Sneha Agarwal", age: 40, date: "2024-07-25", status: "Pending" },
    { id: 19, name: "Rajiv Sinha", age: 41, date: "2024-09-03", status: "Pending" },
    { id: 20, name: "Anita Sharma", age: 26, date: "2024-06-12", status: "Pending" },
    { id: 21, name: "Ravi Kumar", age: 35, date: "2024-07-05", status: "Pending" },
    { id: 22, name: "Meena Joshi", age: 27, date: "2024-08-20", status: "Pending" },
    { id: 23, name: "Nitin Agarwal", age: 44, date: "2024-09-07", status: "Pending" },
    { id: 24, name: "Sonia Reddy", age: 32, date: "2024-06-29", status: "Pending" },
    { id: 25, name: "Rakesh Sharma", age: 42, date: "2024-07-17", status: "Pending" },
    { id: 26, name: "Sunita Chaudhary", age: 33, date: "2024-08-10", status: "Pending" },
    { id: 27, name: "Karan Mehta", age: 29, date: "2024-07-22", status: "Pending" },
    { id: 28, name: "Aarti Verma", age: 31, date: "2024-09-05", status: "Pending" },
    { id: 29, name: "Rajiv Sinha", age: 38, date: "2024-08-15", status: "Pending" },
    { id: 30, name: "Nisha Kapoor", age: 31, date: "2024-07-26", status: "Pending" },
    { id: 31, name: "Amit Kumar", age: 36, date: "2024-09-08", status: "Pending" },
    { id: 32, name: "Ruchi Patel", age: 27, date: "2024-06-18", status: "Pending" },
    { id: 33, name: "Arun Bhardwaj", age: 46, date: "2024-08-05", status: "Pending" },
    { id: 34, name: "Shalini Kapoor", age: 29, date: "2024-09-12", status: "Pending" },
    { id: 35, name: "Manoj Yadav", age: 53, date: "2024-07-14", status: "Pending" },
    { id: 36, name: "Meenal Sharma", age: 30, date: "2024-08-02", status: "Pending" },
    { id: 37, name: "Harsh Patel", age: 31, date: "2024-07-30", status: "Pending" },
    { id: 38, name: "Renu Mehta", age: 34, date: "2024-06-28", status: "Pending" },
    { id: 39, name: "Naveen Kumar", age: 43, date: "2024-08-08", status: "Pending" },
    { id: 40, name: "Kiran Joshi", age: 29, date: "2024-07-20", status: "Pending" }
];

const ReceptionistPage = () => {
  const [bookings, setBookings] = useState(dummyBookings);

  // Function to approve a booking
  const handleApprove = (id) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: "Approved" } : booking
      )
    );
  };

  // Function to reject a booking
  const handleReject = (id) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: "Rejected" } : booking
      )
    );
  };

  return (
    <div className="p-8 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Receptionist Dashboard</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-red-100">
            <tr>
              <th className="py-2 px-4 border-b-2 border-red-300">ID</th>
              <th className="py-2 px-4 border-b-2 border-red-300">Patient Name</th>
              <th className="py-2 px-4 border-b-2 border-red-300">Age</th>
              <th className="py-2 px-4 border-b-2 border-red-300">Booking Date</th>
              <th className="py-2 px-4 border-b-2 border-red-300">Status</th>
              <th className="py-2 px-4 border-b-2 border-red-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2 px-4 border-b">{booking.id}</td>
                <td className="py-2 px-4 border-b">{booking.name}</td>
                <td className="py-2 px-4 border-b">{booking.age}</td>
                <td className="py-2 px-4 border-b">{booking.date}</td>
                <td className={`py-2 px-4 border-b font-bold ${booking.status === 'Approved' ? 'text-green-500' : booking.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                  {booking.status}
                </td>
                <td className="py-2 px-4 border-b flex gap-2">
                  <button
                    onClick={() => handleApprove(booking.id)}
                    disabled={booking.status !== "Pending"}
                    className={`px-4 py-2 rounded-lg ${booking.status === "Pending" ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(booking.id)}
                    disabled={booking.status !== "Pending"}
                    className={`px-4 py-2 rounded-lg ${booking.status === "Pending" ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceptionistPage;
