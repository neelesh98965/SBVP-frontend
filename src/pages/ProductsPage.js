import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Paper,
  useTheme,
  Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const fallbackImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80';

const products = [
  {
    id: 1,
    title: 'Premium Corrugated Boxes',
    description: 'High-quality corrugated boxes perfect for shipping and storage. Available in various sizes and strengths. Ideal for e-commerce businesses and industrial packaging.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=500&q=80',
    features: ['Water-resistant', 'Customizable sizes', 'Eco-friendly'],
    price: '₹299 - ₹999',
    tag: 'Best Seller',
  },
  {
    id: 2,
    title: 'Custom Printed Boxes',
    description: 'Branded packaging solutions with your company logo and design. Perfect for product presentation and brand recognition. Available in multiple finishes.',
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
  {
    id: 4,
    title: 'Industrial Storage Boxes',
    description: 'Heavy-duty storage solutions for industrial use. Built to withstand harsh conditions and heavy loads. Perfect for warehouse organization.',
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&w=500&q=80',
    features: ['Extra strength', 'Stackable', 'Weather resistant'],
    price: '₹599 - ₹1999',
    tag: 'Heavy Duty',
  },
  {
    id: 5,
    title: 'Retail Display Boxes',
    description: 'Attractive display packaging for retail products. Designed to enhance product visibility and customer appeal. Customizable for different retail needs.',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&w=500&q=80',
    features: ['Display ready', 'Retail optimized', 'Eye-catching design'],
    price: '₹349 - ₹899',
    tag: 'Retail',
  },
  {
    id: 6,
    title: 'Specialty Packaging',
    description: 'Custom-designed packaging for specific industries. Includes food-grade, pharmaceutical, and electronics packaging solutions.',
    image: 'https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&w=500&q=80',
    features: ['Industry specific', 'Quality certified', 'Custom solutions'],
    price: '₹799 - ₹2499',
    tag: 'Special',
  },
];

// Add more products for scrolling demo
const moreProducts = Array.from({ length: 14 }, (_, i) => ({
  ...products[0],
  id: 7 + i,
  title: `Cardboard Box Variant ${i + 1}`,
}));
const allProducts = [...products, ...moreProducts];

const ProductsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            mb: 6,
            textAlign: 'center',
            background: `linear-gradient(120deg, ${theme.palette.background.paper} 60%, ${theme.palette.secondary.light} 100%)`,
            color: theme.palette.text.primary,
            borderRadius: 6,
            boxShadow: '0 8px 32px rgba(140, 110, 83, 0.10)',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Bringing Simplicity to Cardboard Packaging
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: theme.palette.text.secondary }}>
            Premium Cardboard Solutions for Every Business
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', color: theme.palette.text.secondary }}>
            Discover our comprehensive range of high-quality cardboard packaging solutions. From eco-friendly options to industrial-grade packaging, we simplify your packaging experience.
          </Typography>
        </Paper>

        {/* Products Grid with Scroll */}
        <Box sx={{
          maxHeight: 700,
          overflowY: 'auto',
          pr: 1,
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}>
            {allProducts.map((product, idx) => (
              <Card
                key={product.id}
                sx={{
                  width: 300,
                  minHeight: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  borderRadius: '10px',
                  boxShadow: '0 4px 24px rgba(140, 110, 83, 0.10)',
                  overflow: 'hidden',
                  position: 'relative',
                  background: `linear-gradient(120deg, #fff 80%, ${theme.palette.secondary.light} 100%)`,
                  mb: 2,
                  flex: '0 0 calc(33.333% - 32px)',
                  maxWidth: 300,
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f7f3ef', py: 1 }}>
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
                  <Chip
                    label={product.tag}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: theme.palette.secondary.main,
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(140, 110, 83, 0.10)',
                    }}
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
                      fontSize: '1.15rem',
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, minHeight: 40, fontSize: '1rem' }}
                  >
                    {product.description}
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    {product.features.map((feature, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 0.5,
                          color: theme.palette.text.secondary,
                          fontSize: '0.95rem',
                        }}
                      >
                        <InfoIcon sx={{ mr: 1, fontSize: '1rem', color: theme.palette.secondary.main }} />
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      mt: 'auto',
                      py: 1,
                      borderRadius: 2,
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      letterSpacing: 1,
                    }}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 8,
            textAlign: 'center',
            background: `linear-gradient(90deg, ${theme.palette.secondary.light} 60%, #fff 100%)`,
            color: theme.palette.text.primary,
            borderRadius: 6,
            boxShadow: '0 4px 24px rgba(140, 110, 83, 0.10)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Need Custom Packaging Solutions?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Contact us for personalized packaging solutions tailored to your specific needs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              bgcolor: theme.palette.primary.main,
              color: '#fff',
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                opacity: 0.95,
              },
            }}
          >
            Contact Us
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductsPage; 