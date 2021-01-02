import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

export const NavBar = () => {
    return (
        <div className="ui inverted menu" >
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo"/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content ='Create Activity'/>
                </Menu.Item>
            </Container>  
        </div>
    )
}
export default NavBar
