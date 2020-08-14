import React from 'react'
import styles from './home.module.scss'
import {connect} from 'react-redux'

const Home = (props : any) => {
    console.log(props);
    
    return(
        <section className={styles.home}>
            <button  onClick={props.increment}
                className={styles.clickrBtn}
            >
                +
            </button>

            <h2>{props.count}</h2>

            <button 
                onClick={props.decrement}
                className={styles.clickrBtn}
            >
                -
            </button>
        </section>        
    )
}

function mapStateToProps(state : any){
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)