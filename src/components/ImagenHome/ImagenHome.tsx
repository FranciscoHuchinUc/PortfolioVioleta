import React from 'react'
import presentacion from '@/assets/presentacion.png'
import check from '@/assets/check.svg'
import { Card } from './Card'

export interface ImagenHomeInterface {
  className: string;
}

const ImagenHome: React.FC<ImagenHomeInterface> = ({ className }) => {
  return (
    <div className={className}>
      <Card
        className="top-12 -left-20"
        icon={check}
        title="Análisis de sustancias"
      />
      <Card
        className="bottom-32 -left-14"
        icon={check}
        title="Gestión de proyectos"
      />
      <Card
        className="top-20 -right-24"
        icon={check}
        title="Manejo de herramientas"
      />
      <Card className="bottom-12 -right-10" icon={check} title="Liderazgo" />
      <img className="hidden md:inline" src={presentacion} alt="" />
    </div>
  )
}

export default ImagenHome
