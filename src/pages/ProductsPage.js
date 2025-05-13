import React, { useState, useEffect, useRef } from 'react';
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
  const [flippedCards, setFlippedCards] = useState({});
  const observerRef = useRef(null);

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

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          if (entry.isIntersecting) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

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
          maxHeight: { xs: '80vh', sm: '70vh', md: '700px' },
          overflowY: 'auto',
          pr: 1,
          scrollbarWidth: 'none',  // Hide scrollbar for Firefox
          msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          '&::-webkit-scrollbar': {
            display: 'none',  // Hide scrollbar for Chrome/Safari/Opera
          },
          scrollBehavior: 'smooth',
        }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, sm: 4 },
            justifyContent: 'center',
            px: { xs: 2, sm: 3, md: 4 },
          }}>
            {allProducts.map((product) => (
              <Card
                key={product.id}
                className="product-card"
                onClick={() => handleCardClick(product.id)}
                sx={{
                  width: {
                    xs: '100%',      // 1 card per row on mobile
                    sm: 'calc(50% - 16px)',  // 2 cards per row on tablet
                    md: 'calc(33.333% - 32px)', // 3 cards per row on desktop
                    lg: 'calc(25% - 32px)',  // 4 cards per row on large screens
                  },
                  minHeight: {
                    xs: 350,  // Taller on mobile
                    sm: 300,  // Standard height on larger screens
                  },
                  perspective: '1000px',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(50px)',
                  transition: 'all 0.6s ease-out',
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
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 1 }}>
                        {product.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{
                              bgcolor: theme.palette.secondary.light,
                              color: theme.palette.primary.main,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mt: 1,
                        }}
                      >
                        {product.price}
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