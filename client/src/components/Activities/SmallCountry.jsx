export const SmallCountry = ({name, flagimg, id}) => {


    return (
        <div>
            <div>
                 
                <img src={flagimg}/>
                <p >{name}</p>
                <p>{id}</p>

    
                
            </div>
        </div>
    )
}