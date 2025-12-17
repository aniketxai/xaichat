"use client"
import { useState ,useRef,useEffect} from 'react'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'
import axios from 'axios'

function ChatMain({ selectedChat, messages, onMenuClick,senderid }) {

const bottomRef = useRef(null);
useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages.length]);




  if (!selectedChat) {
    return (
      <div className="chat-main">
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <h2>Select a chat to start messaging</h2>
          <p>Choose a conversation from the sidebar</p>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-main">
      <div className="chat-header">
        <button className="mobile-menu-button" onClick={onMenuClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="header-user-info">
          <div className="header-avatar">{selectedChat.avatar}</div>
          <div className="header-text">
            <h2>{selectedChat.name}</h2>
            <span className="status">{selectedChat.lastSeen || 'Online'}</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M23 7l-7 5 7 5V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="messages-container">
        <div className="date-divider">
          <span>Today</span>
        </div>
        {messages.map((message, index) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>

      <MessageInput senderid={senderid} reciverid={selectedChat.id} />
    </div>
  )
}

export default ChatMain
