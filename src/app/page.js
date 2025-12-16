"use client"
import { useState } from 'react'
import './components/Style.css'
import ChatSidebar from './components/ChatSidebar'
import ChatMain from './components/ChatMain'

function Home() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const chats = [
    {
      id: 1,
      name: 'Aniket XAI',
      avatar: '👨‍🦰',
      lastMessage: 'Awesome! See you then!',
      time: '09:19 AM',
      online: false,
      lastSeen: 'Last seen 19 Nov at 01:08 PM'
    },
    {
      id: 2,
      name: 'Rohan',
      avatar: '📚',
      lastMessage: 'You: Me too.😊',
      time: '09:19 AM',
      online: false
    },
    {
      id: 3,
      name: 'Aman',
      avatar: '🏖️',
      lastMessage: 'You: Count me in!',
      time: '09:19 AM',
      online: false
    }
  ]

  const messages = selectedChat ? [
    {
      id: 1,
      type: 'received',
      content: 'Yeah man! Anyway, Saturday it is. I\'ll bring some snacks and popcorn! 🍿',
      time: '09:19 AM',
      isVoice: false
    },
    {
      id: 2,
      type: 'sent',
      content: 'No way! That sounds amazing!',
      time: '09:19 AM',
      isVoice: false
    },
    {
      id: 3,
      type: 'sent',
      content: 'Awesome! See you then!',
      time: '09:19 AM',
      isVoice: false,
      reactions: ['👍']
    },
    {
      id: 4,
      type: 'received',
      content: '',
      time: '09:19 AM',
      isVoice: true,
      duration: '0:10',
      reactions: ['😂', '🚀']
    }
  ] : []

  const handleChatSelect = (chat) => {
    setSelectedChat(chat)
    setIsSidebarOpen(false)
  }

  return (
    <div className="chat-app">
      <ChatSidebar
        chats={chats}
        selectedChat={selectedChat}
        onChatSelect={handleChatSelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <ChatMain
        selectedChat={selectedChat}
        messages={messages}
        onMenuClick={() => setIsSidebarOpen(true)}
      />
    </div>
  )
}

export default Home
