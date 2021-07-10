import foodImage from '../images/IMG_1578_3.jpg'

export default function About () {
    return (
        <div className='about'>
            <h2>About Empamama's</h2><br/>
            <div className='aboutContents'>
                <div className='aboutText1Container'>
                    <p>Empamama’s is your ticket to experiencing an authentic Filipino meal in Southern Delaware.</p>
                    <p>Empamama's started as a vision from a proud Filipina to spread the warmth and comfort of traditional Filipino cooking to her neighbors - and we want to share that enduring vision with you!</p>
                </div>
                <div>
                    <img src='../../src/images/IMG_1578_3.jpg' alt='Food'/>
                </div>
                <div className='aboutText2Container'>
                    <p>Feel free to contact us to schedule a Filipino-style dinner or make an order for our homemade frozen Filipino delicacies.</p>
                </div>
                <div>
                    <img src=''/>
                </div>
            </div>
        </div>
    )
}
