import Button from './Button'

function Event(){
    function myEvent() {
        console.log('Event actived')
    }
    
    return(
        <>
            <p>Click here to run a event</p>
            <Button event={myEvent} text="First event"/>
        </>
    ) 
}

export default Event
