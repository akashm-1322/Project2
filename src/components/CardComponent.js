

export default function Card(props) {
    return(
        <div className="card-component">
            <section className="card-img">
                <img className="card-places" src ={props.imageUrl} alt={props.title}/>
            </section>
            <section className="card-description-1">
                <h2 className="card--location">{props.location}</h2>
                <a className="card--location-url" href={props.googleMapsUrl}>View on Google Maps</a>
            </section>
            <section className="card-description-2">
                 <p className="card--date">
                 {props.startDate} - {props.endDate}
                 </p>
                <p className="card--description">{props.description}</p>

            </section>
        </div>
    )
}