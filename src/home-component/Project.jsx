import { useState } from "react"
import pcforge from "../assets/images/pcforge.png"
import rollingStone from "../assets/images/rollingstone.png"
import dashboardProject from "../assets/images/dashboard-preview.png"

const Project = () => {

  const [modalImage, setModalImage] = useState(null);

  // Funzione per aprire il modale con l'immagine
  const openModal = (imageSrc) => {
    document.body.style.overflow = 'hidden'; 
    setModalImage(imageSrc);
  }

  // Funzione per chiudere il modale
  const closeModal = () => {
    document.body.style.overflow = ''; 
    setModalImage(null);
  }

  return (
  <>
   {modalImage && (
        <div className="modalBackdrop" onClick={closeModal}>
          <div className="modalContent">
            <img src={modalImage} alt="" />
          </div>
        </div>
      )}
    <section>
    <div id="project" className='wrapper' >
        <h3>Project</h3>
        <div className='imageProject'>
            <div className='projectInfo' onClick={() => openModal(pcforge)}>
            <img src={pcforge} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus et quis modi. Fugiat, corporis. Repellendus voluptatibus corporis numquam rerum, ex illo nesciunt ratione saepe natus inventore autem, ducimus eum!</p>
            </div>
            <div className='projectInfo' onClick={() => openModal(rollingStone)}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus et quis modi. Fugiat, corporis. Repellendus voluptatibus corporis numquam rerum, ex illo nesciunt ratione saepe natus inventore autem, ducimus eum!</p>
            <img src={rollingStone} alt="" />
            </div>
            <div className='projectInfo' onClick={() => openModal(dashboardProject)}>
            <img src={dashboardProject} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus et quis modi. Fugiat, corporis. Repellendus voluptatibus corporis numquam rerum, ex illo nesciunt ratione saepe natus inventore autem, ducimus eum!</p>
            </div>
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Project