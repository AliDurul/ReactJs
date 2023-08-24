

const Products = ({ item }) => {



  return (
    <div className="card" style={{ width: '18rem' }}>
   
        <img src={item.image} className="card-img-top" alt="..." height={"90%"} />
   
      <div className="card-body">
        <h5 className="card-title">$ {item.price}</h5>
        <p className="card-text">{item.title}</p>
        <p  className="btn btn-primary ">Learn More</p>
      </div>
    </div>


  )
}

export default Products