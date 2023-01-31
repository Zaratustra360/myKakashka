import style from './TopButton.module.sass'

const TopButton = (props) => {
const {children} = props
    return <button className={style.btn}>{children}</button>
}

export default TopButton