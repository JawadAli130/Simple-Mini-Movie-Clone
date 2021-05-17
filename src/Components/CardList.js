import MoviesData from './Movies';
import Card from './Card';
import '../index.css';

function CardList(){
    return(
        <>
            <h1 className='headingTitle' >List of top 6 netflix webseries in 2021</h1>

            <div className='cardListContainer'>
                {MoviesData.map((item)=>{
                    return <Card key={item.imgsrc} imgsrc={item.imgsrc} title={item.title} movie_name={item.movie_name} />
                })}
            </div>
        </>
    )
}

export default CardList;