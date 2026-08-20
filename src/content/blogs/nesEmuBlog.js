const nesEmuBlog = {
  title: 'NES Emulator Project',
  subtitle: 'A low-level journey into 6502 and PPU internals',
  lastUpdated: '2026-08-08',
  navLabel: 'Read the build log',
  tagline: '6502 · PPU · mappers',
  sections: [
    {
      id: 'progress',
      title: 'Current Progress',
      bullets: [
        { status: 'done', text: 'CPU implementation: complete (remaining illegal opcode edge cases).' },
        { status: 'done', text: 'Cartridge loading: Mapper 000 and 003 complete.' },
        { status: 'done', text: 'Graphics processing (PPU): complete.' },
        { status: 'done', text: 'Input handling: complete.' },
        { status: 'live', text: 'Audio processing: in progress.' },
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: ['C++ for core emulation logic.', 'SDL2 for rendering and runtime input handling.', 'Emscripten compiler for web integration'],
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
        'PPU was a complex topic but it made more sense after some work',
      ],
    },
  ],
};

export default nesEmuBlog;
