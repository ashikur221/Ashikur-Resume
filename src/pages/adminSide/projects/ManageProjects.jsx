
import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import ProjectTable from './ProjectTable';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageProjects = () => {
  
  const axiosPublic = useAxiosPublic();
  // get all projects 
  const { data: projects = [], refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await axiosPublic.get('/project');
      return res.data;
    }
  })

  // get all services 
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/service');
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
        axiosPublic.delete(`/project/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Service has been deleted.",
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
    <>
      <Helmet>
        <title>Dashboard | Add Project</title>
      </Helmet>
      <ProjectForm refetch={refetch} services={services}></ProjectForm>
      <ProjectTable projects={projects} handleDelete={handleDelete}></ProjectTable>
    </>
  );
};

export default ManageProjects;