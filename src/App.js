import Container from 'components/container/Container';

import Profile from 'components/social-profile/Profile';

import Statistics from 'components/statistics/Statistics-list';

import FriendList from 'components/friend-list/FriendList';

import TransactionHistory from 'components/transaction-history/TransactionHistory';

import user from './data/user.json';

import data from './data/data.json';

import friends from './data/friends.json';

import transactions from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
