import {useNavigate} from 'react-router-dom'
export function Error404() {
    const navigate = useNavigate()
    navigate('/')
    return(
        <div className="flex justify-center items-center">
            Page not found
        </div>
    )
}