import React from 'react'

const VideoSubtitles = ({ step }) => (
  <div id="video-subtitles-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">HTML5 Video Subtitles</p>

      {step === 2 && (
        <>
          <img
            src={process.env.PUBLIC_URL + '/images/sintel.jpg'}
            alt="Sintel movie"
            style={{ width: '70%' }}
          />
          <i style={{ marginTop: '1rem' }}>
            Open Movie created by{' '}
            <a
              href="http://www.blender.org/foundation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'underline' }}
            >
              The Blender Foundation
            </a>
          </i>
        </>
      )}

      {step > 2 && step < 7 && (
        <div style={{ width: '1000px', height: '275px' }}>
          <div style={{ height: { 3: 70, 4: 140, 5: 230, 6: 275 }[step], overflow: 'hidden' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/video_subtitles_example.png'}
              alt="Video subtitles example"
              style={{ width: '1000px' }}
            />
          </div>
        </div>
      )}

      {step === 7 && (
        <img
          src={process.env.PUBLIC_URL + '/images/video_subtitles_vtt.png'}
          alt="Video subtitle webvtt file"
          style={{
            maxHeight: '70vh'
          }}
        />
      )}

      {step === 8 && (
        <video
          controls
          preload="metadata"
          crossOrigin="anonymous"
          muted={true}
          style={{ width: '100vw' }}
        >
          <source src={process.env.PUBLIC_URL + '/video/sintel-short.mp4'} type="video/mp4" />
          <source src={process.env.PUBLIC_URL + '/video/sintel-short.webm'} type="video/webm" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={process.env.PUBLIC_URL + '/subtitles/vtt/sintel-en.vtt'}
            default
          />
          <track
            label="Français"
            kind="subtitles"
            srcLang="fr"
            src={process.env.PUBLIC_URL + '/subtitles/vtt/sintel-fr.vtt'}
          />
          <track
            label="Deutsch"
            kind="subtitles"
            srcLang="de"
            src={process.env.PUBLIC_URL + '/subtitles/vtt/sintel-de.vtt'}
          />
        </video>
      )}
    </div>
  </div>
)

VideoSubtitles.steps = 8

export default VideoSubtitles
