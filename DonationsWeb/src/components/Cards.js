import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>אנשים שהצלחנו לעזור להם</h1>
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem src="images/after.jpg" text="מפונים מכפר עזה במרכז הקהילתי בהרצליה" label='מקום מגורים' path='/services'></CardItem>
                    <CardItem src="images/Helping.jpg" text="חלוקת תרומות לחיילים" label='תרומות' path='/services'></CardItem>
                </ul>
                <ul className='cards__items'>
            <CardItem
              src='images/Givataim.jpg'
              text='איסוף ציוד בגבעתיים למען תושבי הדרום '
              label='תרומות'
              path='/services'
            />
            <CardItem
              src='images/Bonot Alternativa.jpg'
              text='איסוף מזון לתושבי הדרום של תנועת בונות אלטרנטיבה'
              label='תרומות'
              path='/products'
            />
           
          </ul>
            </div>
        </div>
      
    </div>
  ) 
}

export default Cards
