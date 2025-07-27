import React from 'react';
import UploadTestimonial from './UploadTestimonial';
import TestimonialManagement from './TestimonialManagement';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ManageTestimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [], refetch } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const res = await axiosPublic.get('/testimonial');
      return res.data;
    }
  })

  console.log(testimonials);
  return (
    <div>
      <UploadTestimonial></UploadTestimonial>
      {
        testimonials ? <TestimonialManagement testimonials={testimonials} refetch={refetch}></TestimonialManagement> : <></>
      }
    </div>
  );
};

export default ManageTestimonials;