"use client"
import { useState } from 'react'


function MessageBubble({ message }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (message.isVoice) {
    return (
      <div className={`message ${message.type}`}>
        <div className="voice-message">
          <button
            className="play-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
              </svg>
            )}
          </button>
          <div className="voice-content">
            <div className="waveform">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="wave-bar"
                  style={{
                    height: `${Math.random() * 100}%`,
                    opacity: isPlaying && i < 15 ? 1 : 0.5
                  }}
                />
              ))}
            </div>
            <div className="voice-duration">{message.duration}</div>
          </div>
          <button className="download-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="message-time">{message.time}</div>
        {message.reactions && message.reactions.length > 0 && (
          <div className="message-reactions">
            {message.reactions.map((reaction, index) => (
              <span key={index} className="reaction">
                {reaction} <span className="reaction-count">1</span>
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`message ${message.type}`}>
      <div className="message-bubble">
        <p>{message.content}</p>
        <span className="message-time">{message.time}</span>
        {message.type === 'sent' && (
          <svg className="check-marks" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 6L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      {message.reactions && message.reactions.length > 0 && (
        <div className="message-reactions">
          {message.reactions.map((reaction, index) => (
            <span key={index} className="reaction">
              {reaction} <span className="reaction-count">1</span>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default MessageBubble
