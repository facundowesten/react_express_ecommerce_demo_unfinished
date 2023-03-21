import React from 'react'
import "./CategoryBlock.css"
export const CategoryBlock = ({backgroundImagePath, categoryName}: {backgroundImagePath: string, categoryName: string}) => {
  return (
    <div className={"category-block"}>
        <img className="category-image" src={backgroundImagePath} />
        <div className="category-text">{categoryName}</div>
    </div>
  )
}
