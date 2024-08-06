import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import apiClient from '../../services/api-client';
import CourseCard from './CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllCourses = async () => {
    setLoading(true);
    try {
      const { data } = await apiClient.get("/Al-amin/manager/courses/get-all/4");
      if (data) {
        setCourses(data.data); // Update the state
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    console.log("Courses updated:", courses); // Log courses when it gets updated
  }, [courses]);

  return (
    <Box>
      {loading ? (
        <CircularProgress sx={{ m: "20px auto", display: "block" }} />
      ) : (
        <Grid container spacing={2} sx={{ padding: "20px" }}>
          {courses?.map((course) => (
            <Grid item xs={4} key={course.id}>
              <CourseCard center={course.center} name={course.name} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Courses;

