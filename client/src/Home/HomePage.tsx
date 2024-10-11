import React from 'react';
import ScreenGrid from '../components/ScreenGrid';
import Card from '../components/card/Card';

const users = [
  {
    id: '1',
    name: 'James',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  },
  {
    id: '2',
    name: 'Khoi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  },
  {
    id: '3',
    name: 'Evelyn',
    url: '/evelyn.jpg',
  },
];
function HomePage() {
  return (
    <div>
      <h1>Toxic traits</h1>
      <ScreenGrid>
        {users.map((user) => (
          <Card key={user.id} id={user.id} name={user.name} url={user.url} />
        ))}
      </ScreenGrid>
    </div>
  );
}

export default HomePage;
