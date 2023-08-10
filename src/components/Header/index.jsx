import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input"

export function Header(){
    return(
        <Container>
            
            <h1>RocketMovies</h1>

            <div className="UserInput">
                <Input placeholder="Pesquisar pelo título"/>
            </div>

            <Profile to="/profile">
                <div>
                    <strong>João Marcos</strong>
                    <span>Sair</span>
                </div>

                <img src="https://github.com/Joao-MarcosOM.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    );
}