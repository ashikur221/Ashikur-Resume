import React from 'react';
import UploadForm from './UploadForm';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import TableComponent from './TableComponent';
import Swal from 'sweetalert2';

const ManageStackOverflowPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: stacks = [], refetch } = useQuery({
    queryKey: ['stacks'],
    queryFn: async () => {
      const res = await axiosPublic.get('/stack-overflow');
      return res.data;
    }
  })

  // console.log(stacks);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/stack-overflow/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "StackOverflow has been deleted.",
                icon: "success"
              });
            }
            refetch();
          })
          .catch(err => {
            console.log(err);
          })

      }
    });
  }

  return (
    <div>
      <UploadForm refetch={refetch}></UploadForm>
      <TableComponent dataList={stacks} handleDelete={handleDelete}></TableComponent>
    </div>
  );
};

export default ManageStackOverflowPage;