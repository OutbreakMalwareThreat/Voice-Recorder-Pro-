# Voice Recorder — Windows Desktop App

A sleek voice recorder built with Electron. Records in MP3 (320kbps) with live waveform visualization.

## Requirements

- **Node.js** (v18 or newer) — https://nodejs.org
- **Windows 10/11 x64**

## Build & Run

### Option A — Run without installing (development mode)

```
npm install
npm start
```

### Option B — Build a Windows installer (.exe)

```
npm install
npm run build
```

The installer will appear in `dist/Voice Recorder Setup 1.0.0.exe`.  
Double-click it to install, then launch from the Start Menu or Desktop shortcut.

### Option C — Build a portable .exe (no installer needed)

```
npm install
npm run build:portable
```

The portable `.exe` appears in `dist/` — just double-click it, no installation required.

---

## Features

- 🎙️ Microphone selection (all system mics detected)
- 🔴 Live recording with waveform visualizer
- 🎵 MP3 encoding at 320kbps (falls back to WebM if needed)
- ▶️ In-app playback before saving
- 💾 Native Windows Save dialog — choose exactly where files are saved
- 📂 Click saved path to reveal in Explorer

## Notes

- The app requests microphone access on first launch — click **Allow** when Windows prompts
- Recordings are held in memory until you click **↓ SAVE** on each one
- Internet connection not required after first launch (fonts load from Google Fonts on first run only)
