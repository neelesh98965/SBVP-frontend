import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
} from '@mui/material';

const AboutUsPage = () => {
  // Sample team data - in a real application, this would come from an API
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: 'https://source.unsplash.com/random/300x300?person=1',
      bio: 'John has over 20 years of experience in the industry.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://source.unsplash.com/random/300x300?person=2',
      bio: 'Jane leads our technical innovation and development.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'COO',
      image: 'https://source.unsplash.com/random/300x300?person=3',
      bio: 'Mike oversees our day-to-day operations and growth.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      {/* Company Overview Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Our Company
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2010, our company has grown from a small startup to a
          leading provider of innovative solutions in the industry. We are
          committed to delivering excellence in everything we do, from product
          development to customer service.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to create products that make a difference in people's
          lives while maintaining the highest standards of quality and
          sustainability. We believe in continuous innovation and staying ahead
          of industry trends.
        </Typography>
      </Paper>

      {/* Values Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Values
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We constantly push boundaries and explore new possibilities to
                  create better solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Quality
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We maintain the highest standards in everything we do, from
                  product development to customer service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Sustainability
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are committed to environmental responsibility and sustainable
                  business practices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUsPage; 