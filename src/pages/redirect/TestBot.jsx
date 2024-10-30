import React from 'react'
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import img from '../../image/logo.png'
import img1 from '../../image/expired.gif'




export const TestBot = () => {
  const [countdown, setCountdown] = useState(5);

  const [displayContent, setDisplayContent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayContent(true);
    }, 2000); 
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      // Redirect logic goes here
      window.location.href = 'https://wa.me/917550077535';
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const getColor = () => {
    if (countdown >= 2) {
      return '#3f58b1';
    } else if (countdown === 1) {
      return '#f9a825';
    } else {
      return '#dc143c';
    }
  };

  return (

    <>
      {displayContent &&
        <div
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            backgroundColor: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={img}
            alt="Logo"
            style={{ marginBottom: '20px' }}
          />
          <img
            src={img1}
            alt=""
            style={{ width: '200px' }}

          />
          <p style={{ color: 'black', marginTop: '10px', fontSize: '14px', marginBottom: '20px' }}>
            Sorry, The link has expired
          </p>

          <CircularProgress
            color="inherit"
            value={100 - (countdown / 3) * 100}
            variant="determinate"
            style={{ color: getColor() }}
            size={50}
          />
          <p style={{ color: 'black', marginTop: '20px', fontSize: '14px' }}>
            Please wait a moment. You will be automatically redirected to WhatsApp
            in <span style={{ color: getColor() }}>{countdown}</span> seconds
          </p>
        </div>}


    </>

  )
}
