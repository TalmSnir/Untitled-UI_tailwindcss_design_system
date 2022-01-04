import './App.css';
import Badge from './components/Badge';
import Button from './components/Button';
import Avatar from './components/Avatar/Avatar';
import ProfileImg from './profileimg.jpg';
import Notification from './components/Notification/Notification';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className='App p-8'>
      <Badge variant='primary' shape='pill' size='md'>
        badge
      </Badge>
      <Button>click me</Button>
    </div>
  );
}

export default App;
// <Button
//         variant='danger'
//         shape='round'
//         size='md'
//         className='flex items-center gap-2'>
//         click{' '}
//         <svg
//           width='24'
//           height='24'
//           viewBox='0 0 24 24'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'>
//           <path
//             d='M2 14.5L12 19.5L22 14.5M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z'
//             stroke='currentColor'
//             stroke-width='2'
//             stroke-linecap='round'
//             stroke-linejoin='round'
//           />
//         </svg>
//       </Button>
//       <Avatar src={ProfileImg} border />
//       <Notification show={true}>
//         <Notification.Header closeButton>
//           <Notification.Title>im a notification title</Notification.Title>
//         </Notification.Header>
//         <Notification.SupportText>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, nulla
//           facere architecto aliquam eos, enim sed, maxime porro ullam saepe
//           sunt? Doloremque, dolorem et. Error iste dolor at dignissimos. Facere?
//         </Notification.SupportText>
//         <Notification.Actions>
//           <Button variant='primary'>click me</Button>
//           <Button variant='danger'>click me</Button>
//         </Notification.Actions>
//       </Notification>
