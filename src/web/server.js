const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── End of life ─────────────────────────────────────────────────────────────
// Concordia was shut down in October 2026. The web client no longer talks to
// any backend; every route serves a static end-of-life notice instead.
// The previous web server lives in git history (before this commit).

// ── Branding assets ─────────────────────────────────────────────────────────
app.use('/branding', express.static(path.join(__dirname, '..', '..', 'branding')));

// ── End-of-life notice for every other path ────────────────────────────────
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'eol.html'));
});

app.listen(PORT, () => {
  console.log(`Concordia end-of-life page running on port ${PORT}`);
});
