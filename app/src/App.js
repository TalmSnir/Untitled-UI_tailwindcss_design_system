import './App.css';
import Badge from './components/Badges/Badge';
import BadgeGroup from './components/Badges/BadgeGroup';
import Button from './components/Button';
// import Avatar from './components/Avatar/Avatar';
// import ProfileImg from './profileimg.jpg';
// import Notification from './components/Notification/Notification';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className='App p-8'>
      <BadgeGroup>
        <Badge className='bg-white rounded-full py-0.5' variant='danger'>
          badge
        </Badge>
        <BadgeGroup.Support>there was something wrong</BadgeGroup.Support>
      </BadgeGroup>
      <Button variant='outline-danger' size='sm' shape='rounded'>
        click me
      </Button>
      <Alert show={true} icon>
        <Alert.Icon>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2 14.5L12 19.5L22 14.5M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Alert.Icon>
        <Alert.Header closeButton>
          <Alert.Title>im a notification title</Alert.Title>
        </Alert.Header>

        <Alert.SupportText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, nulla
          facere architecto aliquam eos, enim sed, maxime porro ullam saepe
          sunt? Doloremque, dolorem et. Error iste dolor at dignissimos. Facere?
        </Alert.SupportText>
        <Alert.Actions>
          <Button size='sm'>click me</Button>
          <Button size='sm'>click me</Button>
        </Alert.Actions>
      </Alert>
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

//       </Button>
//       <Avatar src={ProfileImg} border />

// <Notification show={true}>
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
