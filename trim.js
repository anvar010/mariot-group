const fs = require('fs');
const cp = require('child_process');
const ffmpeg = require('ffmpeg-static');
const ffprobe = require('ffprobe-static').path;

// 1. Get duration
cp.exec(`"${ffprobe}" -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 public/hero-bg.mp4`, (err, stdout, stderr) => {
  if (err) {
    console.error('Error getting duration:', err);
    return;
  }
  
  const duration = parseFloat(stdout.trim());
  console.log(`Video duration: ${duration} seconds`);
  
  const targetDuration = duration - 5;
  console.log(`Target duration: ${targetDuration} seconds`);
  
  if (targetDuration <= 0) {
    console.error('Video is too short to trim 5 seconds off.');
    return;
  }

  // 2. Trim video
  console.log('Trimming video...');
  const trimCommand = `"${ffmpeg}" -i public/hero-bg.mp4 -t ${targetDuration} -c copy public/hero-bg-trimmed.mp4 -y`;
  
  cp.exec(trimCommand, (err2, stdout2, stderr2) => {
    if (err2) {
      console.error('Error trimming video:', err2);
      console.error(stderr2);
      return;
    }
    console.log('Video trimmed successfully. Replacing original...');
    fs.renameSync('public/hero-bg-trimmed.mp4', 'public/hero-bg.mp4');
    console.log('Done!');
  });
});
