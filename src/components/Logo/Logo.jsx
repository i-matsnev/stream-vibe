
import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const {
    className,
  } = props
  
  return (
    <div
      className={classNames(className, 'logo')}
    >
      Logo
    </div>
  )
}

export default Logo