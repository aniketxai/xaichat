"use client"
import { useState ,useEffect} from 'react'
import './components/Style.css'
import ChatSidebar from './components/ChatSidebar'
import ChatMain from './components/ChatMain'
import axios from 'axios'




function Home() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [userDetails, setUserDetails] = useState(null)
  const [allUsers, setAllUsers] = useState([])
  const [message, setMessage] = useState([])
  


//Get user Details from API
const getUserDetails = async () => {
const response = await axios.get('/api/users/info')
console.log(response.data.user)
setUserDetails(response.data.user)
console.log("User", userDetails)
}

//Get all users on component mount
const getAllUsers = async () => {
  const response = await axios.get('/api/users/all')
  console.log("All users", response.data.users)
  setAllUsers(response.data.users)
  console.log("All Users State", allUsers)
}

//API to Get messages between logged in user and selected user
  const getMessages = async (receiverId) => {
    const response = await axios.get(`/api/users/msg/${receiverId}`)
    console.log("Messages", response.data.messages)
    setMessage(response.data.messages)

  }


useEffect(() => {
  getUserDetails()
  getAllUsers()
}, [])



// derive chats list from allUsers for the sidebar
const chats = (allUsers && allUsers.length)
  ? allUsers.map((u) => ({
      id: u._id,
      name: u.name || u.email,
      avatar: '👤',
      lastMessage: 'Awesome! See you then!',
      time: '09:19 AM',
      online: !!u.online,
      lastSeen: 'Last seen 19 Nov at 01:08 PM'
    }))
  : []


//derive messages for the selected chat
    const messages = selectedChat ? message.map((msg) => ({
    id: msg._id,
    type: msg.senderId === userDetails._id ? 'sent' : 'received',
    content: msg.text,
    time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isVoice: false
  })) : []



  // const chats = [
  //   {
  //     id: 1,
  //     name: 'Aniket',
  //     avatar: '👨',
  //     lastMessage: 'Awesome! See you then!',
  //     time: '09:19 AM',
  //     online: false,
  //     lastSeen: 'Last seen 19 Nov at 01:08 PM'
  //   },
  //   {
  //     id: 2,
  //     name: 'Rohan',
  //     avatar: '📚',
  //     lastMessage: 'You: Me too.😊',
  //     time: '09:19 AM',
  //     online: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Aman',
  //     avatar: '🏖️',
  //     lastMessage: 'You: Count me in!',
  //     time: '09:19 AM',
  //     online: false
  //   }
  // ]

  
  // const messages = selectedChat ? [
  //  {
  //   id: 1,
  //   type: 'received',
  //   content: "Yeah man! Anyway, Saturday it is. I'll bring some snacks and popcorn! 🍿",
  //   time: '09:19 AM',
  //   isVoice: false
  // },
  // {
  //   id: 2,
  //   type: 'sent',
  //   content: 'No way! That sounds amazing!',
  //   time: '09:19 AM',
  //   isVoice: false
  // },
  // {
  //   id: 3,
  //   type: 'sent',
  //   content: 'Awesome! See you then!',
  //   time: '09:19 AM',
  //   isVoice: false,
  //   reactions: ['👍']
  // },
  // {
  //   id: 4,
  //   type: 'received',
  //   content: '',
  //   time: '09:19 AM',
  //   isVoice: true,
  //   duration: '0:10',
  //   reactions: ['😂', '🚀']
  // },
  // {
  //   id: 5,
  //   type: 'received',
  //   content: 'Haha perfect 😂 Movie night is officially happening.',
  //   time: '09:21 AM',
  //   isVoice: false
  // },
  // {
  //   id: 6,
  //   type: 'sent',
  //   content: 'I’ll set up the projector and grab some drinks.',
  //   time: '09:22 AM',
  //   isVoice: false,
  //   reactions: ['🔥']
  // }
  // ] : []




  useEffect(() => {
  if (!selectedChat?.id) return;

  getMessages(selectedChat.id); // initial load

  const interval = setInterval(() => {
    getMessages(selectedChat.id);
  }, 3000);

  return () => clearInterval(interval);
}, [selectedChat?.id]);



  const handleChatSelect = (chat) => {
    setSelectedChat(chat)
    setIsSidebarOpen(false)
    console.log(selectedChat)
    // getMessages(chat.id)
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
        senderid={userDetails ? userDetails._id : null}
        onMenuClick={() => setIsSidebarOpen(true)}
      />
    </div>
  )
}

export default Home
