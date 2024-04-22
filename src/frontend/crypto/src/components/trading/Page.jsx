import Container from 'react-bootstrap/Container';


import {Header, active_enum} from '../common/MyHeader.jsx'




export default function TradingPage() {
    return (
        <>
            <Header active={active_enum.trading}></Header>
            <Container className='text-light' data-bs-theme="dark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum tenetur, eius sed necessitatibus optio quasi pariatur labore facilis, ab iste, non reiciendis modi fuga cum ipsa esse? Ipsum, nobis!
            </Container>
            
        </>
    )
}