import './Header.css'
import styles from './Header.module.css'

function Header(){

    const myStyle={
        color:'red',
        backgroundColor:'aqua',
        padding:'10px'
    }

    return<> 
    {/* <h1 style = {myStyle}>Hello styling</h1> */}
    <h1 className={styles.bigBlue}>Hello styling</h1>
    <p style={styles}>Add a little style</p>
    </>
}

export default Header;