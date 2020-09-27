import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PresidentList = () => (
    
    <div className="estilo-container">
        <h1>Votaciones Presidenciales</h1>
    
    <Card.Group itemsPerRow={3}>
        <Card >
            <Image src='https://notimundo.com.ec/wp-content/www/uploads/2017/01/Elecciones-2017_GuillermoLasso.jpg' style={{left: '60px'}}/>
            <Card.Content style={{height: 10}}>
            <Card.Header>Guillermo Lasso</Card.Header>
            <Card.Meta>Partido Creo</Card.Meta>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="---"
               
            />
            </Card.Content>
            <Card.Content extra style={{height: 50}}>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='data:image/jpeg;base64,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' style={{left: '60px'}}/>
            <Card.Content>
            <Card.Header>Andrés Arauz</Card.Header>
            <Card.Meta>Centro democrático</Card.Meta>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="---"
               
            />
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='https://notimundo.com.ec/wp-content/www/uploads/2017/01/Elecciones-2017_GuillermoLasso.jpg' style={{left: '60px'}} />
            <Card.Content>
            <Card.Header>Guillermo Lasso</Card.Header>
            <Card.Meta>Partido Creo</Card.Meta>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="---"
               
            />
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='https://notimundo.com.ec/wp-content/www/uploads/2017/01/Elecciones-2017_GuillermoLasso.jpg' style={{left: '60px'}} />
            <Card.Content>
            <Card.Header>Guillermo Lasso</Card.Header>
            <Card.Meta>Partido Creo</Card.Meta>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="---"
               
            />
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>
        <Card>
            <Image src='https://notimundo.com.ec/wp-content/www/uploads/2017/01/Elecciones-2017_GuillermoLasso.jpg' style={{left: '60px'}}/>
            <Card.Content>
            <Card.Header>Guillermo Lasso</Card.Header>
            <Card.Meta>Partido Creo</Card.Meta>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="---"
               
            />
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>
        </Card.Group>
        </div>
)

export default PresidentList