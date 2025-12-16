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
      name: 'Aniket',
      avatar: '👨',
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
    content: "Yeah man! Anyway, Saturday it is. I'll bring some snacks and popcorn! 🍿",
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
  },
  {
    id: 5,
    type: 'received',
    content: 'Haha perfect 😂 Movie night is officially happening.',
    time: '09:21 AM',
    isVoice: false
  },
  {
    id: 6,
    type: 'sent',
    content: 'I’ll set up the projector and grab some drinks.',
    time: '09:22 AM',
    isVoice: false,
    reactions: ['🔥']
  },
  {
    id: 7,
    type: 'received',
    content: '',
    time: '09:23 AM',
    isVoice: true,
    duration: '0:18',
    reactions: ['😂']
  },
  {
    id: 8,
    type: 'sent',
    content: 'That voice note cracked me up 😭',
    time: '09:24 AM',
    isVoice: false
  },
  {
    id: 9,
    type: 'received',
    content: 'Right?? I was trying to sound serious 😅',
    time: '09:25 AM',
    isVoice: false,
    reactions: ['🤣']
  },
  {
    id: 10,
    type: 'sent',
    content: '',
    time: '09:26 AM',
    isVoice: true,
    duration: '0:12'
  },
  {
    id: 11,
    type: 'received',
    content: 'Alright, see you Saturday then. Don’t forget the speakers!',
    time: '09:27 AM',
    isVoice: false,
    reactions: ['👍', '🎬']
  },
  {
    id: 12,
    type: 'sent',
    content: 'Just checked — weather looks perfect for Saturday ☀️',
    time: '11:02 AM',
    isVoice: false
  },
  {
    id: 13,
    type: 'received',
    content: 'Let’s gooo 🙌 No rain, no excuses.',
    time: '11:03 AM',
    isVoice: false,
    reactions: ['🔥']
  },
  {
    id: 14,
    type: 'received',
    content: '',
    time: '11:04 AM',
    isVoice: true,
    duration: '0:07'
  },
  {
    id: 15,
    type: 'sent',
    content: 'Bro that laugh 😭',
    time: '11:05 AM',
    isVoice: false,
    reactions: ['😂']
  },
  {
    id: 16,
    type: 'received',
    content: 'You know I had to add sound effects 😎',
    time: '11:06 AM',
    isVoice: false
  },
  {
    id: 17,
    type: 'sent',
    content: '',
    time: '11:08 AM',
    isVoice: true,
    duration: '0:21',
    reactions: ['🤣']
  },
  {
    id: 18,
    type: 'received',
    content: 'Okay wow, that was unnecessary but hilarious 😂',
    time: '11:09 AM',
    isVoice: false
  },
  {
    id: 19,
    type: 'sent',
    content: 'Unnecessary is my brand.',
    time: '11:10 AM',
    isVoice: false,
    reactions: ['🚀']
  },
  {
    id: 20,
    type: 'received',
    content: 'Respect. See you then ✌️',
    time: '11:11 AM',
    isVoice: false,
    reactions: ['👍']
  },
  {
    id: 21,
    type: 'sent',
    content: 'By the way, what movie are we watching?',
    time: '01:42 PM',
    isVoice: false
  },
  {
    id: 22,
    type: 'received',
    content: 'Thinking sci-fi 👀',
    time: '01:43 PM',
    isVoice: false
  },
  {
    id: 23,
    type: 'sent',
    content: 'As long as it’s not 3 hours long 😅',
    time: '01:44 PM',
    isVoice: false,
    reactions: ['😂']
  },
  {
    id: 24,
    type: 'received',
    content: '',
    time: '01:45 PM',
    isVoice: true,
    duration: '0:15'
  },
  {
    id: 25,
    type: 'sent',
    content: 'Okay that actually convinced me.',
    time: '01:46 PM',
    isVoice: false
  },
  {
    id: 26,
    type: 'received',
    content: 'Deal 🤝',
    time: '01:47 PM',
    isVoice: false,
    reactions: ['🤝']
  },
  {
    id: 27,
    type: 'sent',
    content: '',
    time: '04:10 PM',
    isVoice: true,
    duration: '0:09'
  },
  {
    id: 28,
    type: 'received',
    content: 'LOL not you practicing quotes already',
    time: '04:11 PM',
    isVoice: false,
    reactions: ['🤣']
  },
  {
    id: 29,
    type: 'sent',
    content: 'I like to be prepared.',
    time: '04:12 PM',
    isVoice: false
  },
  {
    id: 30,
    type: 'received',
    content: 'Fair enough 😂',
    time: '04:13 PM',
    isVoice: false
  },
  {
    id: 31,
    type: 'sent',
    content: 'What time should I come over?',
    time: '07:01 PM',
    isVoice: false
  },
  {
    id: 32,
    type: 'received',
    content: 'Around 7 works!',
    time: '07:02 PM',
    isVoice: false,
    reactions: ['👍']
  },
  {
    id: 33,
    type: 'sent',
    content: 'Perfect.',
    time: '07:03 PM',
    isVoice: false
  },
  {
    id: 34,
    type: 'received',
    content: '',
    time: '07:04 PM',
    isVoice: true,
    duration: '0:06'
  },
  {
    id: 35,
    type: 'sent',
    content: '😂😂',
    time: '07:05 PM',
    isVoice: false
  },
  {
    id: 36,
    type: 'received',
    content: 'Alright I’m off, catch you later!',
    time: '09:18 PM',
    isVoice: false
  },
  {
    id: 37,
    type: 'sent',
    content: 'Later! 👋',
    time: '09:19 PM',
    isVoice: false
  },
  {
    id: 38,
    type: 'received',
    content: '',
    time: '09:20 PM',
    isVoice: true,
    duration: '0:05',
    reactions: ['😂']
  },
  {
    id: 39,
    type: 'sent',
    content: 'Bro 😭',
    time: '09:21 PM',
    isVoice: false
  },
  {
    id: 40,
    type: 'received',
    content: 'Goodnight 😂',
    time: '09:22 PM',
    isVoice: false
  },
  {
    id: 41,
    type: 'sent',
    content: 'Night!',
    time: '09:23 PM',
    isVoice: false
  },
  {
    id: 42,
    type: 'received',
    content: 'Don’t forget snacks 👀',
    time: '09:24 PM',
    isVoice: false
  },
  {
    id: 43,
    type: 'sent',
    content: 'Already on the list 📝',
    time: '09:25 PM',
    isVoice: false,
    reactions: ['🔥']
  },
  {
    id: 44,
    type: 'received',
    content: '',
    time: '09:26 PM',
    isVoice: true,
    duration: '0:08'
  },
  {
    id: 45,
    type: 'sent',
    content: 'Okay now actually sleeping.',
    time: '09:27 PM',
    isVoice: false
  },
  {
    id: 46,
    type: 'received',
    content: 'Same 😂',
    time: '09:28 PM',
    isVoice: false
  },
  {
    id: 47,
    type: 'sent',
    content: 'Promise?',
    time: '09:29 PM',
    isVoice: false
  },
  {
    id: 48,
    type: 'received',
    content: '…no 😅',
    time: '09:30 PM',
    isVoice: false,
    reactions: ['🤣']
  },
  {
    id: 49,
    type: 'sent',
    content: 'Figures.',
    time: '09:31 PM',
    isVoice: false
  },
  {
    id: 50,
    type: 'received',
    content: 'Alright fr this time. Night ✨',
    time: '09:32 PM',
    isVoice: false,
    reactions: ['🌙']
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
