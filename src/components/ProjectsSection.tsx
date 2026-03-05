import React from 'react';
import trinketsAndGunpowder from '../assets/trinketsAndGunpowder.png'
import bloodflow from '../assets/bloodflowBackground.jpg'
import steamLogo from '../assets/steam.png'

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className='game'>
          <a href="https://store.steampowered.com/app/4433320/Trinkets_and_Gunpowder/" target="_blank"><img className='img' src={trinketsAndGunpowder.src} width={'450px'}/></a>
          <div className='description'>
          <h2 className="text-3xl font-bold mb-8">Trinkets and Gunpowder</h2>
          <p>Trinkets and Gunpowder is an exciting Russian Roulette inspired party game. React quickly to gain cards which can offer various strategic advantages, but take too long to pull the trigger and your opponent may get there first.</p>
          <br/>
          <a href="https://store.steampowered.com/app/4433320/Trinkets_and_Gunpowder/" target="_blank" className="text-xl mb-8">
            <div className='logo'>
              <img className='img' src={steamLogo.src} width={'32px'}/>
              <p className='link'>Wishlist on Steam</p>
            </div>
          </a>
          </div>
        </div>
      </div>
      <br>
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className='game'>
          <a href="https://store.steampowered.com/app/3151100/Bloodflow/" target="_blank"><img className='img' src={bloodflow.src} width={'450px'}/></a>
          <div className='description'>
          <h2 className="text-3xl font-bold mb-8">Bloodflow</h2>
          <p>Bloodflow is a fast-paced third-person brawler, featuring stylish combat and vibrant colours. Put your timing, target prioritisation and positioning skills to the test and lock into the flow state to achieve mastery.</p>
          <br/>
          <a href="https://store.steampowered.com/app/3151100/Bloodflow/" target="_blank" className="text-xl mb-8">
            <div className='logo'>
              <img className='img' src={steamLogo.src} width={'32px'}/>
              <p className='link'>Available on Steam</p>
            </div>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;