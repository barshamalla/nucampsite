import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderDirectoryItems(props) {
    return props.campsites.map(site => {
        return (
            <div key={site.id} className="col-md-5 m-1">
                <Card onClick={() => props.onClick(site.id)}>
                    <CardImg width="100%" src={site.image} alt={site.name}/>
                    <CardImgOverlay>
                        <CardTitle>{site.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    })
}

function Directory(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderDirectoryItems {...props}/>
            </div>
        </div>
    );
}

export default Directory;