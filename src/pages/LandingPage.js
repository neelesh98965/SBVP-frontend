import React, { useState, useEffect } from 'react';
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
  const [flippedCards, setFlippedCards] = useState({});

  // Add initial flip animation for the first card
  useEffect(() => {
    // Flip the first card after a short delay
    const timer1 = setTimeout(() => {
      setFlippedCards(prev => ({ ...prev, 1: true }));
    }, 1000);

    // Flip it back after 1.5 seconds
    const timer2 = setTimeout(() => {
      setFlippedCards(prev => ({ ...prev, 1: false }));
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

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
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/heroSectionBanner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.85)',
            animation: 'zoomIn 20s ease-in-out infinite alternate',
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            height: '100%',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box 
            sx={{ 
              color: '#FFFFFF',
              maxWidth: '700px',
              animation: 'fadeInUp 1s ease-out',
              mb: { xs: 2, md: 4 },
              transform: 'translateY(50px)',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
                lineHeight: 1.2,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animation: 'slideInLeft 1s ease-out',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2em'
              }}
            >
              <div>PACKAGING THAT PROTECTS.</div>
              <div>SERVICE THAT DELIVERS.</div>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Banner Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(123, 86, 48, 0.05) 0%, rgba(123, 86, 48, 0.02) 100%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 61, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: 'rgba(29, 78, 61, 0.03)',
              borderRadius: '50%',
              top: '-100px',
              left: '-100px',
              animation: 'float 6s ease-in-out infinite',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '150px',
              height: '150px',
              background: 'rgba(123, 86, 48, 0.03)',
              borderRadius: '50%',
              bottom: '-75px',
              right: '-75px',
              animation: 'float 8s ease-in-out infinite reverse',
            }
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              mb: 4,
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, white, transparent)',
                top: '-20px',
                left: 0,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, white, transparent)',
                bottom: '-20px',
                left: 0,
              }
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'white',
                animation: 'fadeInUp 1s ease-out',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '0.5px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Welcome to Our Company
            </Typography>
          </Box>
          
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'white',
              opacity: 0.9,
              animation: 'fadeInUp 1s ease-out 0.3s both',
              maxWidth: '800px',
              mx: 'auto',
              position: 'relative',
              '&::before': {
                content: '"❖"',
                position: 'absolute',
                left: '-30px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '1.5rem',
              },
              '&::after': {
                content: '"❖"',
                position: 'absolute',
                right: '-30px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '1.5rem',
              }
            }}
          >
            Your Trusted Partner in Quality Products
          </Typography>
        </Container>

        {/* Add these keyframes at the top of your file, after the imports */}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(5deg);
              }
            }
          `}
        </style>
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
              onClick={() => handleCardClick(product.id)}
              sx={{
                width: 300,
                minHeight: 300,
                perspective: '1000px',
                cursor: 'pointer',
              }}
            >
              <Box
                className="flip-card-inner"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[product.id] ? 'rotateY(180deg)' : 'rotateY(0)',
                }}
              >
                {/* Front of card (Content) */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    borderRadius: '10px',
                    background: `linear-gradient(120deg, #fff 80%, ${theme.palette.secondary.light} 100%)`,
                    boxShadow: '0 4px 24px rgba(140, 110, 83, 0.10)',
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f7f3ef', py: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 100,
                        width: 100,
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
                  <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        textAlign: 'center',
                        fontSize: '1.2rem',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                        maxWidth: '90%',
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Box>

                {/* Back of card (Image only) */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#f7f3ef',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    p: '5px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      m: 0,
                      p: 0,
                      borderRadius: '10px',
                    }}
                    image={product.image}
                    alt={product.title}
                    onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                  />
                </Box>
              </Box>
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
      <Container maxWidth={false} sx={{ my: 12, px: { xs: 2, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            background: '#EADFCF',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(123, 86, 48, 0.1)',
            maxWidth: '700px',
            mx: 'auto',
            p: 0,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: '#17372D',
                fontWeight: 700,
                mb: 4,
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              Tell Us What You Need
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3, 
                width: '100%',
              }}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 8px rgba(123, 86, 48, 0.08)',
                      '& fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#17372D',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& .MuiInputBase-input': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                      py: 1.5,
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 8px rgba(123, 86, 48, 0.08)',
                      '& fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#17372D',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& .MuiInputBase-input': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                      py: 1.5,
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 8px rgba(123, 86, 48, 0.08)',
                      '& fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#17372D',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& .MuiInputBase-input': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                      py: 1.5,
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Enquiry"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 8px rgba(123, 86, 48, 0.08)',
                      '& fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(123, 86, 48, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#17372D',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& .MuiInputBase-input': {
                      color: '#17372D',
                      fontFamily: 'Poppins, sans-serif',
                      py: 1.5,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(123, 86, 48, 0.15)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(123, 86, 48, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                    maxWidth: '300px',
                    mx: 'auto',
                  }}
                >
                  Submit Your Enquiry
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default LandingPage; 