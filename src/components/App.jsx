import user from "Data/user.json";
import data from "Data/data.json";
import friends from "Data/friends.json";
import transactions from "Data/transactions.json";

import { Profile } from "Profile/Profile";
import { Statistics } from "Statistics/Statistics";
import { FriendsList } from "Friends/FriendsList";
import { TransactionHistory } from "Transactions/Transactions";

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};