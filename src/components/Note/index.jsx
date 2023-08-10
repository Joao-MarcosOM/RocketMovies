import { Container } from "./styles";

import { Tag } from "../Tag";

import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export function Note({ data, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <div className="score">
                < AiFillStar />
                < AiFillStar />                
                < AiFillStar />
                < AiFillStar />
                <FiStar />
            </div>
            
            <p>{data.description}</p>

            {
                data.tags &&  
                <footer>
                    {
                        data.tags.map( tag => 
                            <Tag key={tag.id} title={tag.name}/>
                        )
                    }
                </footer>
            }
        </Container>
    )
}