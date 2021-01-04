import {
    Card, CardImg, CardBody, CardSubtitle, CardTitle 
} from 'reactstrap';

const NavbarCom = () => (
    <Card>
        <CardImg width="100" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" />
        <CardBody>
            <CardTitle tag="h6">$100</CardTitle>
            <CardSubtitle tag="h6" className="text-muted">Card subtitle</CardSubtitle>
        </CardBody>
    </Card>
);

export default NavbarCom;