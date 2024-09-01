import React, { useState } from 'react';

// Extended dummy data for doctors by specialty
const doctorsData = {
  "Cardiology": [
    { name: "Dr. Aditi Sharma", hospital: "Apollo Hospital", experience: "12 years", contact: "aditi.sharma@apollohospital.com" },
    { name: "Dr. Rajeev Kumar", hospital: "AIIMS Hospital", experience: "10 years", contact: "rajeeve.kumar@aiimshospital.com" },
    { name: "Dr. Ananya Gupta", hospital: "Max Hospital", experience: "15 years", contact: "ananya.gupta@maxhospital.com" },
    { name: "Dr. Ravi Patel", hospital: "Fortis Hospital", experience: "8 years", contact: "ravi.patel@fortishospital.com" },
  ],
  "Neurology": [
    { name: "Dr. Deepak Yadav", hospital: "Medanta Hospital", experience: "14 years", contact: "deepak.yadav@medantahospital.com" },
    { name: "Dr. Neeta Singh", hospital: "Religare Hospital", experience: "11 years", contact: "neeta.singh@religarehospital.com" },
    { name: "Dr. Sanjay Sharma", hospital: "AIIMS Hospital", experience: "13 years", contact: "sanjay.sharma@aiimshospital.com" },
    { name: "Dr. Nisha Mehta", hospital: "Apollo Hospital", experience: "9 years", contact: "nisha.mehta@apollohospital.com" },
  ],
  "Orthopedics": [
    { name: "Dr. Arun Deshmukh", hospital: "Max Hospital", experience: "16 years", contact: "arun.deshmukh@maxhospital.com" },
    { name: "Dr. Pooja Reddy", hospital: "AIIMS Hospital", experience: "12 years", contact: "pooja.reddy@aiimshospital.com" },
    { name: "Dr. Vikas Sharma", hospital: "Fortis Hospital", experience: "14 years", contact: "vikas.sharma@fortishospital.com" },
    { name: "Dr. Meera Kapoor", hospital: "Medanta Hospital", experience: "10 years", contact: "meera.kapoor@medantahospital.com" },
  ],
  "Dermatology": [
    { name: "Dr. Ayesha Khan", hospital: "Apollo Hospital", experience: "11 years", contact: "ayesha.khan@apollohospital.com" },
    { name: "Dr. Vikram Patel", hospital: "AIIMS Hospital", experience: "13 years", contact: "vikram.patel@aiimshospital.com" },
    { name: "Dr. Sonali Gupta", hospital: "Max Hospital", experience: "9 years", contact: "sonali.gupta@maxhospital.com" },
    { name: "Dr. Ashok Jain", hospital: "Fortis Hospital", experience: "15 years", contact: "ashok.jain@fortishospital.com" },
  ],
  "Oncology": [
    { name: "Dr. Shruti Patel", hospital: "Apollo Hospital", experience: "10 years", specialization: "Oncology", contact: "shruti.patel@apollohospital.com" },
    { name: "Dr. Vikash Kumar", hospital: "Fortis Hospital", experience: "14 years", specialization: "Oncology", contact: "vikash.kumar@fortishospital.com" },
    { name: "Dr. Meenal Singh", hospital: "Medanta Hospital", experience: "12 years", specialization: "Oncology", contact: "meenal.singh@medantahospital.com" },
    { name: "Dr. Rajesh Bhardwaj", hospital: "Religare Hospital", experience: "9 years", specialization: "Oncology", contact: "rajesh.bhardwaj@religarehospital.com" }
  ],
  "Urology": [
    { name: "Dr. Nitin Sharma", hospital: "Max Hospital", experience: "12 years", specialization: "Urology", contact: "nitin.sharma@maxhospital.com" },
    { name: "Dr. Kavita Reddy", hospital: "AIIMS Hospital", experience: "10 years", specialization: "Urology", contact: "kavita.reddy@aiimshospital.com" },
    { name: "Dr. Ashok Mehta", hospital: "Apollo Hospital", experience: "15 years", specialization: "Urology", contact: "ashok.mehta@apollohospital.com" },
    { name: "Dr. Sonali Gupta", hospital: "Fortis Hospital", experience: "8 years", specialization: "Urology", contact: "sonali.gupta@fortishospital.com" },
    { name: "Dr. Amit Joshi", hospital: "Medanta Hospital", experience: "11 years", specialization: "Urology", contact: "amit.joshi@medantahospital.com" },
    { name: "Dr. Priti Shah", hospital: "Religare Hospital", experience: "9 years", specialization: "Urology", contact: "priti.shah@religarehospital.com" }
  ],
  "Gastroenterology": [
    { name: "Dr. Shyam Sundar", hospital: "Apollo Hospital", experience: "14 years", specialization: "Gastroenterology", contact: "shyam.sundar@apollohospital.com" },
    { name: "Dr. Rekha Rao", hospital: "Max Hospital", experience: "12 years", specialization: "Gastroenterology", contact: "rekha.rao@maxhospital.com" },
    { name: "Dr. Harshit Kumar", hospital: "Fortis Hospital", experience: "10 years", specialization: "Gastroenterology", contact: "harshit.kumar@fortishospital.com" },
    { name: "Dr. Poonam Verma", hospital: "Medanta Hospital", experience: "9 years", specialization: "Gastroenterology", contact: "poonam.verma@medantahospital.com" },
    { name: "Dr. Gaurav Yadav", hospital: "Religare Hospital", experience: "13 years", specialization: "Gastroenterology", contact: "gaurav.yadav@religarehospital.com" },
    { name: "Dr. Tanya Singh", hospital: "AIIMS Hospital", experience: "11 years", specialization: "Gastroenterology", contact: "tanya.singh@aiimshospital.com" }
  ],
  "Nephrology": [
    { name: "Dr. Neeraj Kapoor", hospital: "Medanta Hospital", experience: "15 years", specialization: "Nephrology", contact: "neeraj.kapoor@medantahospital.com" },
    { name: "Dr. Anju Sharma", hospital: "AIIMS Hospital", experience: "10 years", specialization: "Nephrology", contact: "anju.sharma@aiimshospital.com" },
    { name: "Dr. Sandeep Patel", hospital: "Fortis Hospital", experience: "12 years", specialization: "Nephrology", contact: "sandeep.patel@fortishospital.com" },
    { name: "Dr. Komal Reddy", hospital: "Max Hospital", experience: "8 years", specialization: "Nephrology", contact: "komal.reddy@maxhospital.com" },
    { name: "Dr. Manish Verma", hospital: "Religare Hospital", experience: "14 years", specialization: "Nephrology", contact: "manish.verma@religarehospital.com" },
    { name: "Dr. Swati Singh", hospital: "Apollo Hospital", experience: "9 years", specialization: "Nephrology", contact: "swati.singh@apollohospital.com" }
  ],
  "Endocrinology": [
    { name: "Dr. Arun Gupta", hospital: "Medanta Hospital", experience: "13 years", specialization: "Endocrinology", contact: "arun.gupta@medantahospital.com" },
    { name: "Dr. Ruchi Patel", hospital: "AIIMS Hospital", experience: "11 years", specialization: "Endocrinology", contact: "ruchi.patel@aiimshospital.com" },
    { name: "Dr. Anil Sharma", hospital: "Max Hospital", experience: "14 years", specialization: "Endocrinology", contact: "anil.sharma@maxhospital.com" },
    { name: "Dr. Shilpa Yadav", hospital: "Fortis Hospital", experience: "10 years", specialization: "Endocrinology", contact: "shilpa.yadav@fortishospital.com" },
    { name: "Dr. Kunal Mehta", hospital: "Religare Hospital", experience: "12 years", specialization: "Endocrinology", contact: "kunal.mehta@religarehospital.com" },
    { name: "Dr. Kirti Joshi", hospital: "Apollo Hospital", experience: "9 years", specialization: "Endocrinology", contact: "kirti.joshi@apollohospital.com" }
  ],
  "Hematology": [
    { name: "Dr. Manish Joshi", hospital: "Religare Hospital", experience: "9 years", specialization: "Hematology", contact: "manish.joshi@religarehospital.com" },
    { name: "Dr. Neha Patel", hospital: "Medanta Hospital", experience: "13 years", specialization: "Hematology", contact: "neha.patel@medantahospital.com" },
    { name: "Dr. Ravi Yadav", hospital: "Max Hospital", experience: "11 years", specialization: "Hematology", contact: "ravi.yadav@maxhospital.com" },
    { name: "Dr. Priti Shah", hospital: "Fortis Hospital", experience: "10 years", specialization: "Hematology", contact: "priti.shah@fortishospital.com" }
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to toggle the chatbot window
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle message sending
  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      // Get a response from the chatbot
      const response = getChatbotResponse(input);
      setMessages(prevMessages => [...prevMessages, userMessage, response]);

      // Clear the input field
      setInput('');
    }
  };

  // Function to get the chatbot's response
  const getChatbotResponse = (userInput) => {
    const specialty = Object.keys(doctorsData).find(specialty =>
      userInput.toLowerCase().includes(specialty.toLowerCase())
    );

    if (specialty) {
      const doctorsList = doctorsData[specialty].map(
        (doc) => `${doc.name} from ${doc.hospital} with ${doc.experience} experience. Contact: ${doc.contact}`
      ).join("; ");

      return {
        sender: 'bot',
        text: `The best doctors in ${specialty} are: ${doctorsList}`
      };
    } else {
      return { sender: 'bot', text: "Sorry, I couldn't find any doctors for that specialty." };
    }
  };

  return (
    <div className="chatbot-container fixed bottom-4 right-4 z-50">
      {/* Button to toggle the chatbot */}
      <div
        className={`chatbot-button bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer ${
          isOpen ? 'hidden' : 'block'
        }`}
        onClick={toggleChatbot}
      >
        Chat with us
      </div>

      {/* Chatbot window */}
      {isOpen && (
        <div className="chatbot-window bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-80 h-96 flex flex-col">
          {/* Header with close button */}
          <div className="chatbot-header flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Hospital Assistant</h2>
            <button onClick={toggleChatbot} className="text-red-500 font-bold">
              X
            </button>
          </div>

          {/* Messages area */}
          <div className="chatbot-messages flex-1 overflow-y-auto mb-2">
            {messages.map((message, index) => (
              <div key={index} className={`message-${message.sender} mb-1`}>
                <p className={`text-${message.sender === 'user' ? 'right' : 'left'} text-sm`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input area for user message */}
          <div className="chatbot-input flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-2 py-1"
              placeholder="Ask about doctors..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
