import { Container, NewMovie, Content} from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import {Section} from "../../components/Section"
import {Note} from "../../components/Note"
import {Tag} from "../../components/Tag"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom";

export function Home(){
    return(
        <Container>
            <Header />
            <div className="initial">
                <h1>Meus filmes</h1>
                <NewMovie>
                    <Link to="/new">
                        <Button icon={<FiPlus/>} title="Adicionar filme"></Button>
                    </Link>
                </NewMovie>
            </div>

            <Content>
                <Note data={{title: 'Interestellar', description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As ", tags: [{id: '1', name: "Ficção Científica"}, {id: '2', name: 'Drama'},{id: '3', name: 'Família'}]}}/>
                <Note data={{title: 'Interestellar', description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As ", tags: [{id: '1', name: "Ficção Científica"}, {id: '2', name: 'Drama'},{id: '3', name: 'Família'}]}}/>
                <Note data={{title: 'Interestellar', description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As ", tags: [{id: '1', name: "Ficção Científica"}, {id: '2', name: 'Drama'},{id: '3', name: 'Família'}]}}/>
            </Content>

        </Container>
    );
}