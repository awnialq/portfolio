import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const ContentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  '& .MuiTypography-root': {
    fontFamily: 'Inter, sans-serif',
  },
}));

const NESEmu = () => {
    return (
        <Box sx={{ py: 4 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography 
                    variant="h2" 
                    sx={{ 
                        mb: 4,
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                    }}
                >
                    NES Emulator Project
                </Typography>
                <Typography 
                    variant="h4" 
                    sx={{ 
                        mb: 6,
                        color: '#64ffda',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                    }}
                >
                    A Journey into Console Emulation
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ContentCard>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    mb: 3,
                                    color: '#64ffda',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                Current Progress
                            </Typography>
                            <Box component="ul" sx={{ 
                                listStyle: 'none',
                                p: 0,
                                '& li': {
                                    mb: 2,
                                    color: '#8892b0',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }
                            }}>
                                <li>CPU Implementation - In Progress</li>
                                <li>Cartridge Loading - In Progress</li>
                                <li>Graphics Processing - Not Started</li>
                                <li>Audio Processing - Not Started</li>
                                <li>Input Handling - Not Started</li>
                            </Box>
                        </ContentCard>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ContentCard>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    mb: 3,
                                    color: '#64ffda',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                Technical Stack
                            </Typography>
                            <Box component="ul" sx={{ 
                                listStyle: 'none',
                                p: 0,
                                '& li': {
                                    mb: 2,
                                    color: '#8892b0',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }
                            }}>
                                <li>C++</li>
                                <li>SDL2(?)</li>
                                <li>Web App(?)</li>
                            </Box>
                        </ContentCard>
                    </Grid>

                    <Grid item xs={12}>
                        <ContentCard>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    mb: 3,
                                    color: '#64ffda',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                Project Overview
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: '#8892b0',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Welcome to my NES emulator development blog! Here I'll document my
                                progress in building a Nintendo Entertainment System emulator from
                                scratch.
                            </Typography>
                        </ContentCard>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    );
};

export default NESEmu; 