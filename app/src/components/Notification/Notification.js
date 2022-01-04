import React from 'react';
import NotificationHeader from './NotificationHeader';
import NotificationSupportText from './NotificationSupportText';
import NotificationTitle from './NotificationTitle';
import NotificationActions from './NotificationActions';
import NotificationImg from './NotificationImg';
import NotificationIcon from './NotificationIcon';
function Notification({ children, icon, image }) {
  return (
    <div
      className={`shadow-md rounded-xl overflow-hidden ${
        icon ? 'flex  gap-8 p-6' : image ? 'flex  gap-8' : 'p-6'
      }`}>
      {icon || image ? (
        <>
          <div
            className={`    ${
              image ? 'self-stretch w-1/5 shrink-0' : 'items-start'
            }`}>
            {children.slice(0, 1)}
          </div>
          <div className={`${image && 'p-6'}`}>{children.slice(1)}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}

Object.assign(Notification, {
  Header: NotificationHeader,
  SupportText: NotificationSupportText,
  Title: NotificationTitle,
  Actions: NotificationActions,
  Image: NotificationImg,
  Icon: NotificationIcon,
});
export default Notification;
