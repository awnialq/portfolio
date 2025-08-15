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
                                Current Progress (As of: 8/14/25)
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
                                <li>CPU Implementation - Complete (Illegal Opcodes not fully implemented)</li>
                                <li>Cartridge Loading - Complete (Mostly)</li>
                                <li>Graphics Processing - Currently in Progress</li>
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
                                <li>SDL3</li>
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

                                <br />
                                <br />

                                Reflecting on developing the CPU (08/14/2025):
                                <br />
                                <br />
                                  You know, when I first began developing this project, I didn't expect it to be that bad.
                                  But I was very wrong in my estimation of how long it would take. Even though I used One Lone Coder's project
                                  as a starting tempelate, I didn't really follow through with his exact design philosophy, but rememnants of his implementation 
                                  such as the lookup table carried forward in my implementation of the NES. 
                                <br />
                                <br />
                                  The main concept I sturggled to properly understand until later on was the addressing modes as a whole. There wasn't any documentation
                                  I could find online, so I had to spend a lot of time going to many different sources to properly understand how it functions.
                                <br />
                                <br />
                                  Other than that, testing the cpu using NES test was pretty fun as it was like solving a puzzle. At first, you only progress a couple instructions
                                  and then get stopped, but as you figure out more and more bugs in your code, it all slots into place.
                                <br />
                                <br />
                                  When it comes to illegal opcodes, I did initially go thru and fix the addressing modes which were causing the issues but gave up as my structure
                                  is good enough to continue working on the emulator now. My next steps are working on the PPU, which will probably take a while as I have minimal
                                  understanding on how it works at the moment.
                            </Typography>
                        </ContentCard>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    );
};

export default NESEmu; 