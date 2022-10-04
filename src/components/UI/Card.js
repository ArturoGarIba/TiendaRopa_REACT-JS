import styles from "./Card.module.css";
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';


export function Card(props) {
  const classes = `${props.className}`;

  return (
    <div className={cx(globalStyles.div, globalStyles['col h-100'], styles['card'])}>
      <div className={cx(styles[classes])}>
        {props.children}
      </div>
    </div>
  )
}

export default Card;