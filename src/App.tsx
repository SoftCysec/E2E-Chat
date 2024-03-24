import { useState, useEffect } from 'react';
import './styles/app.scss';
import './styles/animations.scss';
import getSessionContextFromUrl from './helpers/getSessionContextFromUrl';
import useSecureChatSession from './hooks/useSecureChatSession';
import ChatFeed from './components/Chat/ChatFeed';
import ChatInput from './components/Chat/ChatInput';
import ChatStatus from './components/Chat/ChatStatus';
import Error from './components/Error';
import EstablishingStep from './components/EstablishingStep';
import CreatedStep from './components/CreatedStep';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

let didInit = false;

const IntroAnimation = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Adjust time as needed for your animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-animation">
      <h1>Welcome to End-2-End Chat!</h1>
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const session = useSecureChatSession();

  const finishIntro = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const sessionContext = getSessionContextFromUrl(window.location);
      session.establish(sessionContext);
    }
  }, []);

  if (showIntro) {
    return <IntroAnimation onFinish={finishIntro} />;
  }

  const retry = () => {
    const sessionContext = getSessionContextFromUrl(window.location);
    session.establish(sessionContext);
  };

  const createNewSession = () => {
    window.location.hash = '';
    session.establish();
  };

  return (
    <div className="app">
      <header>
        <SignedOut><SignInButton /></SignedOut>
        <SignedIn><UserButton /></SignedIn>
      </header>
      <SignedIn>
        {/* The main chat system is now wrapped inside SignedIn to ensure it's only accessible when logged in */}
        <div className="chat">
          <ChatStatus info={session.info} sessionHash={session.hash} isConnected={session.isLive} />
          {session.state === 'establishing' && <EstablishingStep info={session.info} />}
          {session.state === 'error' && (
            <Error info={session.info} onRetry={retry} onCreateNewSession={createNewSession} />
          )}
          {session.state === 'created' && <CreatedStep info={session.info} sessionId={session.id} />}
          {session.hash && <ChatFeed messages={session.messages} />}
          <ChatInput disabled={!session.isLive} send={session.send} />
        </div>
      </SignedIn>
      <SignedOut>
        {/* Optionally, you can also add a message or redirect logic for users who are not signed in */}
        <div>Please sign in to access the chat.</div>
      </SignedOut>
    </div>
  );
};

export default App;
