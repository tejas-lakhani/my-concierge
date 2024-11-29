import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, IconButton, TextField, Tooltip } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { io } from "socket.io-client";

// Sample contacts
const contacts = [
  { id: 1, name: "Aya Mason", avatarSrc: "https://via.placeholder.com/150" },
  {
    id: 2,
    name: "Jonathan Benitez",
    avatarSrc: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Christien Kelly",
    avatarSrc: "https://via.placeholder.com/150",
  },
];

const ChatPage = () => {
  const socket = useRef(null); // UseRef for socket instance
  const [selectedContact, setSelectedContact] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Initialize Socket.IO connection
    socket.current = io("http://192.168.29.230:4009", {
      query: {},
      transports: ["websocket"],
    });

    socket.current.on("connect", () => {
      console.log("Connected to server");
    });

    // Listen for incoming messages
    socket.current.on("personal-1", (data) => {
      console.log("Received message:", data);
      setChatMessages((prevMessages) => ({
        ...prevMessages,
        [data.contactId]: [
          ...(prevMessages[data.contactId] || []),
          {
            sender: data.sender,
            message: data.message,
            time: data.time,
            self: false,
          },
        ],
      }));
    });

    return () => {
      socket.current.disconnect(); // Cleanup on component unmount
    };
  }, []);

  const handleContactClick = (contactId) => {
    setSelectedContact(contactId);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() && selectedContact) {
      const newMessage = {
        sender: "You",
        message: inputMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        self: true,
      };

      // Update chat locally
      setChatMessages((prevMessages) => ({
        ...prevMessages,
        [selectedContact]: [
          ...(prevMessages[selectedContact] || []),
          newMessage,
        ],
      }));

      // Emit message to server
      socket.current.emit("message", {
        contactId: selectedContact,
        message: newMessage.message,
      });

      setInputMessage("");
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="bg-white p-9">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Chat</h1>
      </div>

      <div className="flex gap-5 justify-end items-end flex-wrap my-8">
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            padding: "13px 25px",
            borderRadius: "12px",
            fontSize: { xs: "12px", sm: "13px" },
          }}
        >
          New Message
        </Button>
      </div>

      <div className="relative flex flex-col md:flex-row md:h-[65vh] h-auto overflow-y-auto">
        <div className="xl:w-1/3 w-full border-r h-[65vh] overflow-y-auto">
          <h2 className="text-xl font-semibold p-4">Contacts</h2>
          <div className="divide-y">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleContactClick(contact.id)}
              >
                <Avatar alt={contact.name} src={contact.avatarSrc} />
                <div className="ml-4">
                  <h4 className="font-medium">{contact.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          {selectedContact ? (
            <>
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <Avatar
                    alt={contacts[selectedContact - 1].name}
                    src={contacts[selectedContact - 1].avatarSrc}
                  />
                  <h4 className="ml-4 text-lg font-medium">
                    {contacts[selectedContact - 1].name}
                  </h4>
                </div>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>

              <div className="h-[48vh] flex-grow p-4 space-y-3 overflow-y-auto">
                {(chatMessages[selectedContact] || []).map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.self ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`${
                        msg.self ? "bg-gray-300" : "bg-gray-200"
                      } p-3 rounded-lg max-w-xs`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-2/3 p-4 border-t lg:absolute bottom-0 flex items-center space-x-4">
                <Tooltip title="Attach a file">
                  <IconButton
                    color="primary"
                    aria-label="upload file"
                    component="label"
                  >
                    <AttachFileIcon />
                    <input type="file" hidden onChange={handleFileChange} />
                  </IconButton>
                </Tooltip>
                {file && (
                  <span className="ml-2 text-gray-600 text-sm">
                    {file.name}
                  </span>
                )}
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type your message here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
                    padding: "13px 25px",
                    borderRadius: "12px",
                    fontSize: { xs: "12px", sm: "13px" },
                  }}
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <h2 className="text-gray-500">
                Select a contact to start chatting
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import {
//   Avatar,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   TextField,
//   Tooltip,
// } from "@mui/material";
// import React, { useState } from "react";

// const messages = [
//   {
//     id: 1,
//     name: "Aya Mason",
//     message: "Enquiry About Your...",
//     time: "Today, 9.52pm",
//     icon: <DoneAllIcon className="text-purple-500" />,
//     unreadCount: 0,
//     avatarSrc: "https://via.placeholder.com/150", // Replace with actual avatar URLs
//   },
//   {
//     id: 2,
//     name: "Jonathan Benitez",
//     message: "Enquiry About Your...",
//     time: "Today, 12.11pm",
//     unreadCount: 1,
//     avatarSrc: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Christien Kelly",
//     message: "Enquiry About Your...",
//     time: "Today, 2.40pm",
//     unreadCount: 0,
//     avatarSrc: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Aya Mason",
//     message: "Enquiry About Your...",
//     time: "Yesterday, 12.31pm",
//     unreadCount: 5,
//     avatarSrc: "https://via.placeholder.com/150",
//   },
//   {
//     id: 5,
//     name: "Jonathan Benitez",
//     message: "Enquiry About Your...",
//     time: "Wednesday, 11.12am",
//     unreadCount: 0,
//     avatarSrc: "https://via.placeholder.com/150",
//   },
// ];

// // Sample contacts
// const contacts = [
//   { id: 1, name: "Aya Mason", avatarSrc: "https://via.placeholder.com/150" },
//   {
//     id: 2,
//     name: "Jonathan Benitez",
//     avatarSrc: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Christien Kelly",
//     avatarSrc: "https://via.placeholder.com/150",
//   },
// ];

// // Sample chat messages for each contact
// const chatMessages = {
//   1: [
//     { sender: "Aya Mason", message: "Hey There!", time: "8.30pm", self: false },
//     {
//       sender: "Aya Mason",
//       message: "How are you?",
//       time: "8.31pm",
//       self: false,
//     },
//     { sender: "You", message: "Hello!", time: "8.33pm", self: true },
//     {
//       sender: "You",
//       message: "I am fine and how are you?",
//       time: "8.34pm",
//       self: true,
//     },
//     {
//       sender: "Aya Mason",
//       message: "I am doing well, Can we meet tomorrow?",
//       time: "8.36pm",
//       self: false,
//     },
//     { sender: "You", message: "Yes Sure!", time: "8.58pm", self: true },
//   ],
//   2: [
//     {
//       sender: "Jonathan Benitez",
//       message: "Hello!",
//       time: "9.10pm",
//       self: false,
//     },
//     {
//       sender: "You",
//       message: "Hey, how’s it going?",
//       time: "9.15pm",
//       self: true,
//     },
//   ],
//   3: [
//     {
//       sender: "Christien Kelly",
//       message: "Can you send the files?",
//       time: "3.00pm",
//       self: false,
//     },
//     {
//       sender: "You",
//       message: "Sure, I’ll send them shortly.",
//       time: "3.05pm",
//       self: true,
//     },
//   ],
// };

// const ChatPage = () => {
//   const [adminAnchorEl, setAdminAnchorEl] = useState(null);
//   const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
//   const [membershipAnchorEl, setMembershipAnchorEl] = useState(null);
//   // Handlers to open and close menus
//   const handleOpenAdminMenu = (event) => setAdminAnchorEl(event.currentTarget);
//   const handleCloseAdminMenu = () => setAdminAnchorEl(null);

//   const handleOpenCategoryMenu = (event) =>
//     setCategoryAnchorEl(event.currentTarget.value);
//   const handleCloseCategoryMenu = () => setCategoryAnchorEl(null);

//   const handleOpenMembershipMenu = (event) =>
//     setMembershipAnchorEl(event.currentTarget);
//   const handleCloseMembershipMenu = () => setMembershipAnchorEl(null);

//   const [selectedContact, setSelectedContact] = useState(null); // Track selected contact
//   const [inputMessage, setInputMessage] = useState(""); // Message input

//   const handleContactClick = (contactId) => {
//     setSelectedContact(contactId);
//   };

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       chatMessages[selectedContact].push({
//         sender: "You",
//         message: inputMessage,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         self: true,
//       });
//       setInputMessage("");
//     }
//   };

//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   return (
//     <div className="bg-white p-9">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-semibold">Chat</h1>
//       </div>
//       {/* <div className="flex justify-center gap-20">
//         <div>
//           <Button
//             id="demo-positioned-button"
//             aria-controls={open ? 'demo-positioned-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//             style={{ background: "#666666" ,borderRadius:"12px",width:"100%" }}
//             className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
//           >
//             <span className="text-white">All Admin</span>
//             <ExpandMoreIcon className="text-white" />
//           </Button>
//           <Menu
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             anchorEl={anchorEl}
//             open={open}

//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//           >
//             <MenuList>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//         <div>
//           <Button
//             id="demo-positioned-button"
//             aria-controls={open ? 'demo-positioned-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//             style={{ background: "#666666",borderRadius:"12px"  }}
//             className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
//           >
//             <span className="text-white">All category</span>
//             <ExpandMoreIcon className="text-white" />
//           </Button>
//           <Menu
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             anchorEl={anchorEl}
//             open={open}

//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//           >
//             <MenuList>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//         <div>
//           <Button
//             id="demo-positioned-button"
//             aria-controls={open ? 'demo-positioned-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//             style={{ background: "#666666",borderRadius:"12px"  }}
//             className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
//           >
//             <span className="text-white">mm / dd / yyyy</span>
//             <ExpandMoreIcon className="text-white" />
//           </Button>
//           <Menu
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             anchorEl={anchorEl}
//             open={open}

//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//           >
//             <MenuList>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//         <div>
//           <Button
//             id="demo-positioned-button"
//             aria-controls={open ? 'demo-positioned-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//             style={{ background: "#666666",borderRadius:"12px" }}
//             className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
//           >
//             <span className="text-white">All Membership</span>
//             <ExpandMoreIcon className="text-white" />
//           </Button>
//           <Menu
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             anchorEl={anchorEl}
//             open={open}

//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//           >
//             <MenuList>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <div className="text-gray-800">Lorem ipsum</div>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </div>

//       </div> */}
//       {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           displayEmpty
//           value={personName}
//           style={{background:"#666666",color:"white"}}
//           onChange={handleChanges}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Placeholder</em>;
//             }

//             return selected.join(', ');
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem disabled value="">
//             <em>Placeholder</em>
//           </MenuItem>
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               // style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl> */}

//       <div className="flex flex-col sm:flex-row gap-5">
//         {/* Admin Dropdown */}
//         <div>
//           <button
//             className="bg-gray-600 text-white px-4 py-2 rounded-md w-full"
//             onClick={handleOpenAdminMenu}
//           >
//             All Admin
//             {adminAnchorEl ? (
//               <ExpandLessIcon className="ml-2" />
//             ) : (
//               <ExpandMoreIcon className="ml-2" />
//             )}
//           </button>
//           <Menu
//             anchorEl={adminAnchorEl}
//             open={Boolean(adminAnchorEl)}
//             onClose={handleCloseAdminMenu}
//           >
//             <MenuItem onClick={handleCloseAdminMenu}>Admin 1</MenuItem>
//             <MenuItem onClick={handleCloseAdminMenu}>Admin 2</MenuItem>
//           </Menu>
//         </div>

//         {/* Category Dropdown */}
//         <div>
//           <button
//             className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-md w-full"
//             onClick={handleOpenCategoryMenu}
//           >
//             All category
//             {categoryAnchorEl ? (
//               <ExpandLessIcon className="ml-2" />
//             ) : (
//               <ExpandMoreIcon className="ml-2" />
//             )}
//           </button>
//           <Menu
//             anchorEl={categoryAnchorEl}
//             open={Boolean(categoryAnchorEl)}
//             onClose={handleCloseCategoryMenu}
//           >
//             <MenuItem onClick={handleCloseCategoryMenu}>Lorem ipsum 1</MenuItem>
//             <MenuItem onClick={handleCloseCategoryMenu}>Lorem ipsum 2</MenuItem>
//           </Menu>
//         </div>

//         {/* Date Dropdown */}
//         <div>
//           <button className="bg-gray-600 text-white px-4 py-2 rounded-md w-full">
//             mm / dd / yyyy
//             <ExpandMoreIcon className="ml-2" />
//           </button>
//           {/* You can integrate a date picker here */}
//         </div>

//         {/* Membership Dropdown */}
//         <div>
//           <button
//             className="bg-gray-600 text-white px-4 py-2 rounded-md w-full"
//             onClick={handleOpenMembershipMenu}
//           >
//             All Membership
//             {membershipAnchorEl ? (
//               <ExpandLessIcon className="ml-2" />
//             ) : (
//               <ExpandMoreIcon className="ml-2" />
//             )}
//           </button>
//           <Menu
//             anchorEl={membershipAnchorEl}
//             open={Boolean(membershipAnchorEl)}
//             onClose={handleCloseMembershipMenu}
//           >
//             <MenuItem onClick={handleCloseMembershipMenu}>
//               Membership 1
//             </MenuItem>
//             <MenuItem onClick={handleCloseMembershipMenu}>
//               Membership 2
//             </MenuItem>
//           </Menu>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-end items-end flex-wrap my-8">
//         <Button
//           variant="contained"
//           sx={{
//             background:
//               " linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
//             padding: "13px 25px",
//             borderRadius: "12px",
//             fontSize: { xs: "12px", sm: "13px" },
//           }}
//         >
//           New Message
//         </Button>
//       </div>
//       {/* <div className="w-full  mx-auto">
//         {messages.map((msg) => (
//           <div key={msg.id} className="cursor-pointer flex items-start space-x-3 py-4 border-b">
//             <Badge
//               badgeContent={msg.unreadCount > 0 ? msg.unreadCount : null}
//               color="warning"
//               overlap="circular"
//               onClick={() => handleContactClick(msg.id)}
//             >
//               <Avatar alt={msg.name} src={msg.avatarSrc} />
//             </Badge>

//             <div className="flex-grow">
//               <div className="flex justify-between items-center">
//                 <h4 className="text-sm font-medium">{msg.name}</h4>
//                 <span className="text-xs text-gray-500">{msg.time}</span>
//               </div>
//               <p className="text-xs text-gray-400">{msg.message}</p>
//             </div>

//             {msg.icon && <div className="ml-2">{msg.icon}</div>}
//           </div>
//         ))}
//       </div> */}
//       <div className="relative flex flex-col md:flex-row md:h-[65vh] h-auto overflow-y-auto">
//         {/* Contact List */}
//         <div className="xl:w-1/3 w-full border-r h-[65vh] overflow-y-auto">
//           <h2 className="text-xl font-semibold p-4">Contacts</h2>
//           <div className="divide-y">
//             {contacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleContactClick(contact.id)}
//               >
//                 <Avatar alt={contact.name} src={contact.avatarSrc} />
//                 <div className="ml-4">
//                   <h4 className="font-medium">{contact.name}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Window */}
//         <div className="w-full lg:w-2/3 ">
//           {selectedContact ? (
//             <>
//               {/* Chat Header */}
//               <div className="flex items-center justify-between p-4 border-b">
//                 <div className="flex items-center">
//                   <Avatar
//                     alt={contacts[selectedContact - 1].name}
//                     src={contacts[selectedContact - 1].avatarSrc}
//                   />
//                   <h4 className="ml-4 text-lg font-medium">
//                     {contacts[selectedContact - 1].name}
//                   </h4>
//                 </div>
//                 <IconButton>
//                   <MoreVertIcon />
//                 </IconButton>
//               </div>

//               {/* Chat Body */}
//               <div className="h-[48vh] flex-grow p-4 space-y-3 overflow-y-auto">
//                 {chatMessages[selectedContact].map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       msg.self ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`${
//                         msg.self ? "bg-gray-300" : "bg-gray-200"
//                       } p-3 rounded-lg max-w-xs`}
//                     >
//                       <p className="text-sm">{msg.message}</p>
//                       <span className="text-xs text-gray-500">{msg.time}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Chat Input */}
//               <div className="w-2/3 p-4 border-t lg:absolute bottom-0 flex items-center space-x-4">
//                 <Tooltip title="Attach a file">
//                   <IconButton
//                     color="primary"
//                     aria-label="upload file"
//                     component="label"
//                   >
//                     <AttachFileIcon />
//                     <input type="file" hidden onChange={handleFileChange} />
//                   </IconButton>
//                 </Tooltip>
//                 {file && (
//                   <span className="ml-2 text-gray-600 text-sm">
//                     {file.name}
//                   </span>
//                 )}
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Type your message here..."
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                 />
//                 {/* <Button
//                   variant="contained"
//                   color="primary"
//                   endIcon={<SendIcon />}
//                   onClick={handleSendMessage}
//                 >
//                   Send
//                 </Button> */}
//                 <Button
//                   variant="contained"
//                   sx={{
//                     background:
//                       " linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
//                     padding: "13px 25px",
//                     borderRadius: "12px",
//                     fontSize: { xs: "12px", sm: "13px" },
//                   }}
//                   onClick={handleSendMessage}
//                 >
//                   Send
//                 </Button>
//               </div>
//             </>
//           ) : (
//             <div className="flex-grow flex items-center justify-center">
//               <h2 className="text-gray-500">
//                 Select a contact to start chatting
//               </h2>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
