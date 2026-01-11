import { getFormattedDate } from '../constants';
import SocialLinks from './SocialLinks';
import portfolioData from '../data/portfolio.json';

export default function Masthead() {
  const formattedDate = getFormattedDate();

  return (
    <div className="text-center mb-10 md:mb-16">
      <h1 className="font-['Pixelify_Sans'] font-normal text-3xl md:text-4xl lg:text-5xl text-black mb-5 tracking-wide">
        {portfolioData.hero.newspaperTitle}
      </h1>
      
      <div className="relative flex items-center justify-center">
        <p className="font-['IBM_Plex_Mono'] text-sm md:text-base lg:text-lg text-black">
          {formattedDate}
        </p>
        
        <SocialLinks />
      </div>
    </div>
  );
}
