import '../styles/notification.css';

export const NOTIFICATION_TYPE = {
  WARN: 'warn',
  ERROR: 'error',
  INFO: 'info',
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
}
export default Notification;
  