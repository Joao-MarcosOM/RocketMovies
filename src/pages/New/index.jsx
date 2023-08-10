import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"; 
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles";

import { Link } from "react-router-dom"

import { FiArrowLeft} from "react-icons/fi"


export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/"><FiArrowLeft />Voltar</Link>
                    </header>
                    
                    <h1>Novo filme</h1>
                    
                    <div className="initial">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="Comédia"/>
                            <NoteItem value="Romance"/>
                            <NoteItem isNew placeholder="Novo marcador"/>
                        </div> 
                    </Section>
                    
                    <div className="userChoice">
                        <Button title="Excluir filme" isDelete/>
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}