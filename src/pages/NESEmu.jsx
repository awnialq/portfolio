import React from 'react';
//import '../styles/NESEmu.css';

const NESEmu = () => {
    return (
        <div className="nes-emu-container">
            <header className="blog-header">
                <h1>NES Emulator Project</h1>
                <p className="subtitle">A Journey into Console Emulation</p>
            </header>

            <main className="blog-content">
                <article className="blog-post">
                    <h2>Project Overview</h2>
                    <p>
                        Welcome to my NES emulator development blog! Here I'll document my
                        progress in building a Nintendo Entertainment System emulator from
                        scratch.
                    </p>
                </article>

                <article className="blog-post">
                    <h2>Current Progress</h2>
                    <ul>
                        <li>CPU Implementation - In Progress</li>
                        <li>Memory Management - Planning</li>
                        <li>Graphics Processing - Not Started</li>
                    </ul>
                </article>

                <section className="technical-details">
                    <h2>Technical Stack</h2>
                    <p>
                        This project is being built using:
                    </p>
                    <ul>
                        <li>JavaScript/React for the frontend</li>
                        <li>WebAssembly for performance-critical components</li>
                        <li>HTML5 Canvas for rendering</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default NESEmu; 