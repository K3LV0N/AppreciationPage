import { useState } from "react";
import EnvelopeCard from "./components/EnvelopeCard";
import MessageModal from "./components/MessageModal";
import messages from "./components/messages";

// https://k3lv0n.github.io/AppreciationPage/

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [openEnvelopeId, setOpenEnvelopeId] = useState(null);

  const handleOpen = (msg) => {
    setSelectedMessage(msg);
    setOpenEnvelopeId(msg.id);
  };

  const handleClose = () => {
    setSelectedMessage(null);
    setOpenEnvelopeId(null); // closes the envelope
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-pink-50">
      <h1 className="text-3xl font-bold mb-8 text-black">
        💌 Taryn's Appreciation Page 💌
      </h1>
      <div className="grid grid-cols-5 gap-6">
        {messages.map((msg) =>
          msg.id < 11 ? ( // 👈 condition here
            <EnvelopeCard
              key={msg.id}
              name={msg.name}
              isOpen={openEnvelopeId === msg.id}
              onOpen={() => handleOpen(msg)}
            />
          ) : null
        )}
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {messages.map((msg) =>
          msg.id >= 11 ? ( // 👈 condition here
            <EnvelopeCard
              key={msg.id}
              name={msg.name}
              isOpen={openEnvelopeId === msg.id}
              onOpen={() => handleOpen(msg)}
            />
          ) : null
        )}
      </div>

      {selectedMessage && (
        <MessageModal message={selectedMessage} onClose={handleClose} />
      )}
    </div>
  );
}

export default App;
