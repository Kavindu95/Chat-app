# U-app

U-app is a chat application built using React.js and Firebase. It leverages Firestore as the backend database to store user information and chat data, enabling real-time communication between users.

## Pages/Components

### Home
Displays the main interface of the chat application, featuring a sidebar and chat window.

### Login
Provides a login form for existing users to sign in using their email and password.

### Register
Allows new users to sign up by providing necessary details such as display name, email, password, and an avatar image.

### Components

#### Chat
The `Chat` component represents the main chat interface within the U-app, providing users with the ability to interact in real-time conversations or chat rooms.

##### Responsibilities
- **Display Messages:** Renders and displays messages exchanged between users within a specific chat room.
- **User Interaction:** Allows users to send messages, view conversation history, and interact within the chat environment.
- **Real-Time Updates:** Updates the chat interface in real-time as new messages are sent or received.

##### Structure and Features
- **Message Display:** Displays individual messages, including sender's name, message content, timestamp, etc.
- **Input Field:** Provides an input field for users to type and send messages.
- **Scrollable Chat History:** Enables users to view the conversation history and scroll through previous messages.
- **Real-Time Updates:** Utilizes Firebase or other real-time database features to update the chat interface instantly.

#### Chats
The `Chats` component manages the list of available chats or conversations, allowing users to navigate between different chat rooms.

#### Input
The `Input` component renders an input field allowing users to type and send messages within a chat.

#### Message
The `Message` component represents an individual message within a chat conversation, displaying the sender's name, message content, timestamp, etc.

#### Messages
The `Messages` component acts as a container holding multiple `Message` components, displaying the conversation history within a chat window.

#### Navbar
The `Navbar` component contains links, buttons, or other elements for global actions and navigation within the app.

#### Search
The `Search` component provides functionality for users to search for specific messages, users, or content within the chat application.

#### Sidebar
The `Sidebar` component renders a sidebar interface displaying user information, chat rooms, settings, or additional functionalities to enhance the user experience.

## Technologies Used
- React.js
- Firebase (Authentication, Firestore, Storage)

## Backend
Firestore is utilized as the backend database to store user information, chat messages, and application data, providing real-time synchronization across users.

## How to Run the App Locally
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure Firebase settings and add your Firebase configuration details.
4. Start the app using `npm start`.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to submit pull requests or open issues.

## License
This project is licensed under the MIT License - see the [LICENSE](/src/Licence.txt) file for details.
