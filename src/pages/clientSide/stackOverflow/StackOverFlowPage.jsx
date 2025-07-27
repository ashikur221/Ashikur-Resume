import React from 'react';
import StackCard from './StackCard';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const StackOverFlowPage = () => {

  const axiosPublic = useAxiosPublic();
  const { data: stacks = [] } = useQuery({
    queryKey: ['stacks'],
    queryFn: async () => {
      const res = await axiosPublic.get('stack-overflow');
      return res.data;
    }
  })

  return (
    <div>
      <Helmet>
        <title>Ashikur Portfolio | StackOverflow</title>
      </Helmet>
      <p className="text-4xl font-bold text-center pt-10">
        Dev's Problem <span className="text-theme_primary">Solutions</span>
      </p>
      
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
              stacks?.map(stack => <StackCard key={stack._id} stack={stack}></StackCard>)
            }
            


          </div>
        </div>
      </div>
    </div>
  );
};

export default StackOverFlowPage;