import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import TopProjectForm from './TopProjectForm';
import TopProjectTable from './TopProjectTable';

const ManageTopProjects = () => {

  const axiosPublic = useAxiosPublic();
  // get top rated projects 
  const { data: projects = [], refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await axiosPublic.get('/top-project');
      return res.data;
    }
  })

  // get all services 
  const { data: skills = [] } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const res = await axiosPublic.get('/skills');
      return res.data;
    }
  })

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
        axiosPublic.delete(`/top-project/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Project has been deleted.",
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
      <Helmet>
        <title>Dashboard | Add Top Rated Project</title>
      </Helmet>

      <TopProjectForm refetch={refetch} skills={skills}></TopProjectForm>
      <TopProjectTable projects={projects} handleDelete={handleDelete}></TopProjectTable>
    </div>
  );
};

export default ManageTopProjects;