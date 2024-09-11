import image1 from '../../assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg';
import images2 from '../../assets/istockphoto-1409298953-1024x1024.jpg';
import image3 from '../../assets/minh-pham-OtXADkUh3-I-unsplash.jpg';

const Banner = () => {
    return (
        
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={image1}
      className="w-full rounded-md" />
    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#5c94a5] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 w-1/2 pl-12'> 
      <h2 className='text-4xl font-bold'>A home is a place to start your story
        </h2>
        <p className='text-2xl'>The house you looked at today and wanted to think about<br></br> until tomorrow may be the same house someone looked at yesterday and will buy today.</p>
         <div className='absolute flex justify-end transform translate-y-1/2 left-5 right-5 bottom-0'>  
    <a href="#slide3" className="btn btn-circle">❮</a>
    <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
        </div>
        
   
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={images2}
      className="w-full" />
   <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 w-1/3 pl-5'> 
      <h2 className='text-4xl font-bold'>Be the reason of someone happiness's today
        </h2>
        <p>Every year, nearly 700 million people suffer from hunger around the world,<br></br>
         while 1.3 billion tons of food are thrown away. Both food waste and hunger<br>
         </br> have increased during the pandemic.</p>
         <div className='absolute flex justify-end transform translate-y-1/2 left-5 right-5 bottom-0'>  
    <a href="#slide1" className="btn btn-circle">❮</a>
    <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
        </div>
        </div>
        <div>

        </div>
    
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={image3}
      className="w-full" />
    
    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#464242] to-[rgba(21,21,21,0)]">
    <div className='text-white space-y-7 w-1/3 pl-12'> 
      <h2 className='text-4xl font-bold'>Be the reason of someone happiness's today
        </h2>
        <p>Every year, nearly 700 million people suffer from hunger around the world,<br></br>
         while 1.3 billion tons of food are thrown away. Both food waste and hunger<br>
         </br> have increased during the pandemic.</p>
         <div className='absolute flex justify-end transform translate-y-1/2 left-5 right-5 bottom-0'>  
    <a href="#slide2" className="btn btn-circle">❮</a>
    <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
        </div>
        </div>
       
    </div>
  </div>
 


      
    );
};

export default Banner;