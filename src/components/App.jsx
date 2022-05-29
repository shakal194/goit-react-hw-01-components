import Profile from '../components/profile/profile';
import Statistics from '../components/statistics/statistics';
import Friends from '../components/friends/friends';
import Transaction from '../components/transactions/transaction';

import user from '../data/user.json';
import statisticalData from '../data/data.json';
import friendsList from '../data/friends.json';
import transactionHystori from '../data/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Friends friends={friendsList} />
      <Transaction items={transactionHystori} />
    </>
  );
}

export default App;
