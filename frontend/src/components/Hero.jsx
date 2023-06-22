import { Container, Card, Button } from 'react-bootstrap'


const Hero = () => {
  return (
    <div className='py-5'>
        <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                <h1 className='text-center mb-4'>MERN Authentication Boiler Plate Hero</h1>
                <p className='text-center mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam provident rerum eius laborum atque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa!
                </p>
                <div className='d-flex'>
                    <Button variant='primary' href='/login' className='me-3'>Sing In</Button>
                    <Button variant='secondary' href='/register'>Sign up</Button>
                </div>
            </Card>
        </Container>      
    </div>
  )
}

export default Hero

