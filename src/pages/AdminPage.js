import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Checkbox,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const AdminPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('/api/enquiries');
      setEnquiries(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching enquiries. Please try again.');
      setLoading(false);
    }
  };

  const handleSolvedChange = async (enquiryId, solved) => {
    try {
      await axios.put(`/api/enquiries/${enquiryId}`, {
        solved: solved
      });
      setEnquiries(prevEnquiries => 
        prevEnquiries.map(enquiry => 
          enquiry.id === enquiryId ? { ...enquiry, solved } : enquiry
        )
      );
    } catch (err) {
      setError('Error updating enquiry status. Please try again.');
      setEnquiries(prevEnquiries => 
        prevEnquiries.map(enquiry => 
          enquiry.id === enquiryId ? { ...enquiry, solved: !solved } : enquiry
        )
      );
    }
  };

  const handleDelete = async (enquiryId) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        await axios.delete(`/api/enquiries/${enquiryId}`);
        setEnquiries(enquiries.filter(enquiry => enquiry.id !== enquiryId));
      } catch (err) {
        setError('Error deleting enquiry. Please try again.');
      }
    }
  };

  const formatDate = (dateString) => {
    try {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      
      const [datePart, timePart] = dateString.split(' ');
      const [year, month, day] = datePart.split('-');
      const [hours, minutes, seconds] = timePart.split(':');
      
      const date = new Date(year, month - 1, day, hours, minutes, seconds);
      
      return date.toLocaleString('en-IN', options) + ' IST';
    } catch (error) {
      return dateString;
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography>Loading enquiries...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Enquiry Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Date Submitted (IST)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell>
                  <Tooltip title={enquiry.solved ? "Mark as unsolved" : "Mark as solved"}>
                    <Checkbox
                      checked={enquiry.solved}
                      onChange={(e) => handleSolvedChange(enquiry.id, e.target.checked)}
                      color="primary"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.reason}</TableCell>
                <TableCell>{formatDate(enquiry.created_at)}</TableCell>
                <TableCell>
                  <Tooltip title="Delete enquiry">
                    <IconButton
                      onClick={() => handleDelete(enquiry.id)}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPage; 