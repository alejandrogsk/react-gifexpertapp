import React, { useState } from 'react';

import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

export const GifExpertApp = ({subtitle = 'GifExpertApp'}) => {

    const [categories, setCategories] = useState(['Rick and Morty'])

    return (
      <>
        <h2>{subtitle}</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        <ol>
            {
                categories.map( (category, i) => (
                    <GifGrid 
                    key={ category }
                    category={ category }
                    />
                ))
            }
        </ol>

      </>
    );

}