import { Button, ImagenHome, Layout } from '@/components'
import React from 'react'
import presentacion360 from '@/assets/presentacion360.png'

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  return (
    <Layout id="#home">
      <div className="md:flex md:flex-row md:justify-between md:items-center">
        <div>
          <div className="flex flex-col md:mr-10 justify-center z-10 h-[25rem] pb-10">
            <span className="text-base font-medium sm:text-xl">
              Ing. Bioquimia
            </span>
            <h1 className="text-4xl font-bold sm:text-4xl lg:text-6xl">
              VIOLETA <span className="text-primary">UC</span>
            </h1>
          </div>
          <Button>Conocer Más</Button>
        </div>
        <div className="absolute top-28 right-0 md:right-12 -z-10 w-[200px] h-[400px] md:relative md:w-[450px] md:top-0 lg:w-[540px] md:flex md:items-center">
          <img
            className="w-full h-full md:hidden"
            src={presentacion360}
            alt="Presentacion"
          />
          <ImagenHome className="" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
