import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/valadaolucas.png" 
          alt="Foto de Lucas Valadão"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Valadão</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}