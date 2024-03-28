<img align="right" src="https://user-images.githubusercontent.com/53393266/177538578-de6100bf-603f-497c-8802-ba6879a01c6f.png">

# E2E-chat

**E2E-chat is a web app for private, anonymous, E2E encrypted one-time chat sessions.**

## Features

- **Private and Secure:** End-to-end encryption ensures that your conversations stay private.
- **Anonymous Usage:** No registration required; use the app without sharing personal information.
- **One-time Chat Sessions:** Every chat is a unique session, leaving no data trail.

## Technology Stack

- **Frontend:** Developed with React and Vite for a modern, fast user experience.
- **Authentication:** User authentication and management are handled securely through Clerk.
- **Cryptography:** Client-side encryption guarantees that messages are readable only by the chat participants.

## How To Use 

1. **Login or Signup:** Visit the app and log in or sign up for a new account.
2. **Start a Chat Session:** Open the app and start a new chat session.
3. **Share the Session Link:** Send the generated link to the person you want to chat with.
4. **Enjoy Private Conversation:** Your chat is secure and encrypted.

## Software Design and Implementation

### Architecture Overview
The E2E-Chat application is built on a modern web technology stack, emphasizing client-side operations to enhance user privacy and security. The architecture is designed to facilitate easy, secure, and anonymous communication between users, with a heavy emphasis on client-side processing to ensure end-to-end encryption of messages.

### Client-Based Framework
The application utilizes a single-page application (SPA) framework with React, allowing for dynamic updates to the user interface without reloading the entire page. This approach enhances user experience and application performance. Vite, a modern frontend build tool, is used in conjunction with React to optimize development speed with features like fast cold starts and instant hot module replacement (HMR).

**Key Components:**
- **React Components:** The UI is broken down into reusable React components, facilitating a modular design that enhances code readability and maintainability.
- **State Management:** Utilizes React's Context API for managing global state, such as user authentication status and chat session information, ensuring that the state is easily accessible across the application without prop drilling.
- **Encryption Module:** A dedicated module within the client handles the encryption and decryption of messages using web crypto APIs. This module ensures that all messages are encrypted before leaving the user's device and can only be decrypted by the intended recipient.

### User Authentication with Clerk
Clerk is integrated to manage user authentication and sessions, providing a secure and seamless login experience. Clerk offers various authentication methods, including email and social logins, which can be easily configured to suit the application's needs.

**Implementation Highlights:**
- **Frontend Authentication:** Clerk's frontend SDK is integrated into the application, enabling authentication-related UI components and hooks that manage user sessions directly from the client side.
- **Security Practices:** Utilizes best practices for security, such as secure tokens and session management, to protect user information and authentication states.
- **Customization and Flexibility:** Clerk's SDK allows for customization of the authentication flow and UI, ensuring that the user experience remains consistent with the overall design of the application.

### Encryption and Security
The application implements end-to-end encryption to ensure that chat messages are secure and can only be read by the participants in a chat session.

**Encryption Process:**
1. **Key Generation:** When a chat session is initiated, a unique encryption key is generated using cryptographic standards.
2. **Message Encryption:** Messages are encrypted on the sender's side using the session's unique key before being sent over the network.
3. **Message Decryption:** The recipient uses the same unique key to decrypt the message upon receipt, ensuring that no intermediary can decipher the content.

**Security Considerations:**
- **No Server Storage:** Messages are not stored on any server, ensuring that private conversations remain confidential and reducing the risk of data breaches.
- **Session Management:** Chat sessions are ephemeral, with encryption keys and chat history not being stored after the session ends, further enhancing privacy.

### Development Setup and Running Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SoftCysec/E2E-Chat.git
   ```
   ```bash
    cd E2E-Chat
    ```
2. **Already have the project cloned?**
   ```bash
    cd E2E-Chat
    ```
    ```bash
    git pull
    ```
3. **Install Dependencies:**
   ```bash
    npm install
    ```
4. **Run the Application:**
    ```bash
     npm run dev
     ```
5. **Open the Application:**
    Visit `http://localhost:3000` in your browser to access the application.
