import "./Content.css"

const Content = () => {

    const imgStyle = {
        // width: '100%',
        display:"block",
        margin:"1rem auto"
    }

  return (
    <div className='content'>
        <h1>react js</h1>
        <p style={{color:'#FFF',  backgroundColor:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis, ea.</p>
            <img style={imgStyle} src="https://picsum.photos/id/684/600/400" alt=""/>
            <img style={imgStyle} src="https://picsum.photos/id/64/600/400" alt=""/>
        <p className='par2'>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Sit rem ipsam vel facilis reiciendis nemo optio perspiciatis soluta deserunt nostrum exercitationem praesentium nobis fugit, ipsa quibusdam pariatur laudantium obcaecati nihil?</p>
    </div>
  )
}

export default Content