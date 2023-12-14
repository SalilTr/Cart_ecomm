import React from 'react';
import "../styles/colors.scss";
import "../styles/Home.scss"
import ProductCard from './ProductCard';

const Home = () => {



    const img1="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg";
    const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFLcTftUDbZUFvuep0wL84Zm1gn11vFG-tf2nwnIwZg&s"
    const productList=[
        {
            name:"macbook",
            price:800,
            image:img1,
            id:1
        },
        {
            name:"nokia",
            price:80,
            image:img2,
            id:2
        },
        {
            name:"apple i phone",
            price:400,
            image:img1,
            id:3
        },
        {
            name:"samsung",
            price:80,
            image:img2,
            id:4
        },
        {
            name:"fan",
            price:10,
            image:img1,
            id:5
        },
        {
            name:"almirah",
            price:20,
            image:img2,
            id:6
        },
    ]

  return (
   <div className="home">
   
   {
    productList.map((element,index)=>{
        return(
            <ProductCard key={index} name={element.name} id={element.id} price={element.price} imgSrc={element.image} quantity={element.quantity}/>

        )
    })
    
   }
   </div>

   
  )
}

export default Home
