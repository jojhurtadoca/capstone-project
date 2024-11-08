import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid2";

export const Footer = () => {
  return (
    <section className="padding-desktop footer">
      <section className="footer-section" spacing={4}>
        <Grid item xs={12} md={4}>
          <section className="footer-section-column">
            <img
              src="/assets/images/Asset 20@4x.png"
              alt="Footer Logo"
              className="footer-image"
            />
          </section>
        </Grid>
        <Grid item xs={12} md={4}>
          <section className="footer-section-column">
            <Typography variant="h6" gutterBottom>
              Doormat Nav igation
            </Typography>
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span>About</span>
            </div>
            <div className="menu-item">
              <span>Menu</span>
            </div>
            <div className="menu-item">
              <span>Reservations</span>
            </div>
            <div className="menu-item">
              <span>Order Online</span>
            </div>
            <div className="menu-item">
              <span>Login</span>
            </div>
          </section>
        </Grid>
        <Grid item xs={12} md={4}>
          <section className="footer-section-column">
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <div className="contact-item">
              <span>Address</span>
              <p>Chicago, USA</p>
            </div>
            <div className="contact-item">
              <span>Phone Number</span>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <span>Email</span>
              <p>contact@littlelemonrestaurant.com</p>
            </div>
          </section>
        </Grid>
        <Grid item xs={12} md={4}>
          <section className="footer-section-column">
            <Typography variant="h6" gutterBottom>
              Social Media Links
            </Typography>
            <Box display="flex" gap={2}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </section>
        </Grid>
      </section>
    </section>
  );
};
