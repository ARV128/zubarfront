import React from 'react'
import { useRef, useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import '../components/CSS/VideoSnimakStats.css'



export default function VideoSnimakStats({ videoSrc, stats = null, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onPause);
    };
  }, []);

  const handlePlay = (e) => {
    e?.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };

  const defaultStats = [
    { value: "10+", label: "Skilled Doctors" },
    { value: "15+", label: "Years of Experience" },
    { value: "20K+", label: "Appointment Booked" },
    { value: "99%", label: "Patient Satisfaction" },
  ];

  const useStats = stats && Array.isArray(stats) && stats.length ? stats : defaultStats;

  return (
    <div className="vs-container">
      <div className="vs-card">
        <div className="vs-video-wrap" onClick={() => videoRef.current?.paused && videoRef.current.play()}>
          {/* video element: no autoplay */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            className="vs-video"
            playsInline
            preload="metadata"
          />
          {/* central play button overlay (hidden when video is playing) */}
          {!isPlaying && (
            <button className="vs-play" onClick={handlePlay} aria-label="Play video">
              <span className="vs-play-inner" />
            </button>
          )}

          {/* subtle bottom gradient for contrast */}
          <div className="vs-gradient" aria-hidden="true" />
        </div>

        {/* stats bar - overlays video on desktop, below video on small screens */}
        <div className="vs-stats">
          {useStats.map((s, i) => (
            <div className="vs-stat-item" key={i}>
              <div className="vs-stat-value">{s.value}</div>
              <div className="vs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

VideoSnimakStats.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  poster: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

