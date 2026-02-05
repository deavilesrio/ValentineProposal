import App from './App';
import './App.css'
import { sendLove } from './Heart';
import { useEffect, useState } from 'react';
function HomePage() {
    const [proposalOpened, setProposalOpened] = useState(false);
    const [envelopeOpened, setEnvelopeOpened] = useState(false);
    const [opened, setOpened] = useState(true);
    useEffect(() => {
        sendLove();
    }, []);
    function handleTap() {
        
        // Show App after 2 seconds delay
        setTimeout(() => {
            setOpened(false);
            setProposalOpened(true);
            console.log("Envelope opened");
        }, 2000);
    }
    return(
        

        <div className="page">
            {opened &&(
                <div
                    className={`envelope ${envelopeOpened ? "open" : ""}`}
                    onClick={() => { setEnvelopeOpened(true); handleTap(); }}
                >
                    <div className="flap"></div>
                    <div className="flaphor"></div>
                    <div className="letter">
                    <p>Be My Valentine? 💘</p>
                    </div>
                    <div className="flaphor2"></div>
                    <div className="flap2"></div>
                    
                    {/* <div className="body"></div> */}
                </div>
            
                )
            }
        {opened && !envelopeOpened && <h2>Tap to open ✉️</h2>}
      {proposalOpened ? <App /> : null}
    </div>

    );
}
export default HomePage;