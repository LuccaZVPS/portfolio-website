import { EmojiText } from '../EmojiText';
import Heading from '../Heading/Heading';
import {DiReact,DiHtml5,DiCss3Full,DiSass,} from 'react-icons/di'
import {SiStyledcomponents,SiTypescript} from 'react-icons/si'
import { Container } from './styles';


export function SkillsSection() {
  return (
    <Container>
      <EmojiText txt='🧑‍💻 Skills'/>
      <Heading text='Tecnologias e habilidades'/>

    <div className='content'>
    <div className='front'>
          <h3>Front End</h3>
          <div className='imgs-tech'>
              <img src="/ts.svg" alt="" />
              <img src="/react.svg" alt="" />
              <img src="/redux.svg" alt="" />
              <img src="/styled.svg" alt="" />
              <img src="/sass.svg" alt="" />
              <img src="/html.svg" alt="" />
              <img src="/git.svg" alt="" />


          </div>
      </div>

      <div className='back'>
      <h3>Back End</h3>
      <div className='imgs-tech'>
              <img src="/npm.svg" alt="" />
              <img src="/mysql.svg" alt="" />
              <img src="/node.svg" alt="" />
              <img src="/next.svg" alt="" />
              <img src="/mongodb.svg" alt="" />
              


          </div>
      </div>

    </div>
    
    </Container>
  );
}
