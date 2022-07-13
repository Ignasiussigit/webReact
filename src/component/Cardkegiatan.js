import Card from 'react-bootstrap/Card';

const Cardkegiatan = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    {props.judul}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cardkegiatan;