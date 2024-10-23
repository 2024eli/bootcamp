import React, { useEffect, useState, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ScreenGrid from '../components/ScreenGrid';
import User from './User';
import AddUser from './AddUser';
import Typewriter from '../components/Typewriter';
import { User as UserType } from '../util/types/custom';
import { getData, putData, deleteData, postData, useData } from '../util/api';

interface HomeProp {
  setUsers: React.Dispatch<SetStateAction<UserType[]>>;
  users: UserType[];
}

function HomePage({ users, setUsers }: HomeProp) {
  const response = useData('users');
  useEffect(() => {
    if (response?.data && response.data.length > 0) {
      setUsers(response.data);
    }
  }, [response, setUsers]);

  const deleteUser = async (userId: string) => {
    deleteData(`users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ padding: (t) => t.spacing(2) }}>
      <Box
        className="Title"
        sx={{
          height: 150,
        }}
      >
        <Typewriter text="Toxic Traits" />
      </Box>
      <ScreenGrid>
        {users.map((user: any) => (
          <User
            key={user._id}
            _id={user._id}
            name={user.name}
            url={user.url}
            traits={user.traits}
            year={user.year}
            hometown={user.hometown}
            major={user.major}
            deleteUser={deleteUser}
          />
        ))}
        <AddUser />
      </ScreenGrid>
    </Box>
  );
}

export default HomePage;
