import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const TestimonialManagement = ({ testimonials = [], refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);

  

  // Delete Testimonial
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        axiosPublic
          .delete(`/testimonial/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Testimonial has been deleted.',
                icon: 'success',
              });
              refetch();
            }
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Testimonials</h2>
      {isLoading ? (
        <div className="text-center">
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      ) : Array.isArray(testimonials) && testimonials.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">#</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Person</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Name</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Company</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Position</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Location</th>
                <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial, index) => (
                <tr key={testimonial._id}>
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b flex items-center">
                    <img
                      src={testimonial.personImageUrl}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">{testimonial.name}</td>
                  <td className="py-3 px-4 border-b">{testimonial.company}</td>
                  <td className="py-3 px-4 border-b">{testimonial.position}</td>
                  <td className="py-3 px-4 border-b">{testimonial.location}</td>
                  <td className="py-3 px-4 border-b">
                    <Link to={`/dashboard/update-testimonial/${testimonial._id}`}>
                      <button className="text-blue-600 hover:underline mr-4">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">No testimonials found.</p>
      )}
    </div>
  );
};

export default TestimonialManagement;
