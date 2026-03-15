const nesEmuBlog = {
  title: 'NES Emulator Project',
  subtitle: 'A low-level journey into 6502 and PPU internals',
  lastUpdated: '2025-08-14',
  sections: [
    {
      id: 'progress',
      title: 'Current Progress',
      bullets: [
        'CPU implementation: complete (remaining illegal opcode edge cases).',
        'Cartridge loading: complete for standard iNES ROMs.',
        'Graphics processing (PPU): in progress.',
        'Audio processing: not started.',
        'Input handling: not started.',
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: ['C++ for core emulation logic.', 'SDL3 for rendering and runtime input handling.'],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'The CPU core started with opcode decode and execute loops built around a lookup table. This kept instruction dispatch explicit and easy to test while implementing addressing modes one by one.',
        'Cartridge loading parses the iNES header, maps PRG/CHR ROM data into emulator memory, and stores mapper metadata for compatibility decisions.',
        'PPU work currently focuses on memory-mapped registers and timing synchronization between CPU and PPU cycles, with sprite/background composition next.',
        'Testing relied on NES validation ROMs and stepping instruction traces against expected state, which helped catch subtle status flag and memory access bugs.',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'Addressing modes were the most difficult concept initially; understanding them required piecing together multiple references and experimenting directly in code.',
        'The project timeline was longer than expected, but each debugging cycle improved the architecture and confidence for the next subsystem.',
        'Next milestone: continue PPU implementation and finish a full graphics path before moving into audio.',
      ],
    },
  ],
};

export default nesEmuBlog;
