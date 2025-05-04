import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Box,
  Paper,
  Slider,
  useTheme,
} from '@mui/material';
import axios from 'axios';

const marks = [
  { value: 10000, label: '₹10k' },
  { value: 50000, label: '₹50k' },
  { value: 100000, label: '₹1L' },
  { value: 200000, label: '₹2L+' },
];

const darkBg = '#23262B';

// Product preview data (same as ProductsPage)
const previewProducts = [
  {
    id: 1,
    title: 'Premium Corrugated Boxes',
    description: 'High-quality corrugated boxes perfect for shipping and storage. Available in various sizes and strengths.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=500&q=80',
    features: ['Water-resistant', 'Customizable sizes', 'Eco-friendly'],
    price: '₹299 - ₹999',
    tag: 'Best Seller',
  },
  {
    id: 2,
    title: 'Custom Printed Boxes',
    description: 'Branded packaging solutions with your company logo and design. Perfect for product presentation and brand recognition.',
    image: 'https://images.pexels.com/photos/634158/pexels-photo-634158.jpeg?auto=compress&w=500&q=80',
    features: ['Full-color printing', 'Premium finish', 'Brand customization'],
    price: '₹499 - ₹1499',
    tag: 'Customizable',
  },
  {
    id: 3,
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable packaging solutions made from recycled materials. Environmentally conscious choice for businesses looking to reduce their carbon footprint.',
    image: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&w=500&q=80',
    features: ['100% Recycled', 'Biodegradable', 'Green certified'],
    price: '₹399 - ₹1299',
    tag: 'Eco',
  },
];
const fallbackImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80';

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sbvp-backend-python-with-sqllite-a2rq.onrender.com/api/enquiry', formData);
      alert('Enquiry submitted successfully!');
      setFormData({ name: '', phone: '', email: '', reason: '' });
    } catch (error) {
      alert('Error submitting enquiry. Please try again.');
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Company
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Trusted Partner in Quality Products
          </Typography>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are a leading company dedicated to providing high-quality products
          and exceptional service to our customers. With years of experience in
          the industry, we have built a reputation for reliability and excellence.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/about')}
        >
          View More
        </Button>
      </Container>

      {/* Products Preview Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Products
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}>
          {previewProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: 260,
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                borderRadius: '10px',
                boxShadow: '0 4px 24px rgba(140, 110, 83, 0.10)',
                overflow: 'hidden',
                position: 'relative',
                background: `linear-gradient(120deg, #fff 80%, ${theme.palette.secondary.light} 100%)`,
                mb: 2,
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f7f3ef', py: 1 }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    objectFit: 'contain',
                    m: 0,
                    p: 0,
                    borderBottom: `2px solid ${theme.palette.secondary.main}`,
                    background: 'none',
                  }}
                  image={product.image}
                  alt={product.title}
                  onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: 1,
                    fontSize: '1rem',
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, minHeight: 30, fontSize: '0.95rem' }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1, fontSize: '0.95rem' }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </Box>
      </Container>

      {/* Enquiry Form Section */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Paper
          elevation={6}
          sx={{
            background: darkBg,
            color: '#fff',
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, mb: 4, letterSpacing: 1 }}
          >
            LET'S WORK TOGETHER
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="standard"
                  InputProps={{
                    style: { color: '#fff', fontWeight: 500 },
                    disableUnderline: false,
                  }}
                  InputLabelProps={{ style: { color: '#bbb', letterSpacing: 1 } }}
                  sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottomColor: '#555' }, '& .MuiInput-underline:after': { borderBottomColor: theme.palette.secondary.main } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="standard"
                  InputProps={{ style: { color: '#fff', fontWeight: 500 } }}
                  InputLabelProps={{ style: { color: '#bbb', letterSpacing: 1 } }}
                  sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottomColor: '#555' }, '& .MuiInput-underline:after': { borderBottomColor: theme.palette.secondary.main } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="standard"
                  InputProps={{ style: { color: '#fff', fontWeight: 500 } }}
                  InputLabelProps={{ style: { color: '#bbb', letterSpacing: 1 } }}
                  sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottomColor: '#555' }, '& .MuiInput-underline:after': { borderBottomColor: theme.palette.secondary.main } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Reason for Enquiry"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  variant="standard"
                  InputProps={{ style: { color: '#fff', fontWeight: 500 } }}
                  InputLabelProps={{ style: { color: '#bbb', letterSpacing: 1 } }}
                  sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottomColor: '#555' }, '& .MuiInput-underline:after': { borderBottomColor: theme.palette.secondary.main } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: 2,
                    bgcolor: theme.palette.secondary.main,
                    color: '#fff',
                    borderRadius: 2,
                    py: 2,
                    '&:hover': {
                      bgcolor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  SUBMIT DETAILS
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LandingPage; 