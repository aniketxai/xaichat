"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'

function MessageInput({senderid,reciverid,socket,inputMessage = '',setInputMessage = () => {}}) {


  

  

  


  const handleSend = () => {
    if (inputMessage.trim()) {
      console.log('Sending message:', inputMessage)
      // API call to send message
      axios.post(`${process.env.BACKEND_URL}/api/msg/send`, {
        senderId: senderid,
        receiverId: reciverid,
        text: inputMessage
      })
      .then((response) => {
        console.log('Message sent successfully:', response.data)
        // Emit message through socket so receiver sees it immediately
        if (socket) {
          socket.emit('sendMessage', {
            senderId: senderid,
            receiverId: reciverid,
            text: inputMessage,
            createdAt: new Date()
          })
        }
      })
      .catch((error) => {
        console.error('Error sending message:', error)
      })

      // Clear input field
      setInputMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }




  return (
    <div className="message-input-container">
      <div className="input-wrapper">
        <button className="input-icon-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <input
          type="text"
          placeholder="Enter your message here"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="message-input"
        />

        <button className="input-icon-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="input-icon-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <button className="input-icon-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="send-button"
          onClick={handleSend}
          disabled={!inputMessage.trim()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MessageInput
