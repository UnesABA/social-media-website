import "./rightBar.scss";

const RightBar = () => {
  const suggestedUsers = [
    {
      id: 1,
      name: "Jane Doe",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const activities = [
    {
      id: 1,
      name: "Jane Doe",
      action: "changed their cover picture",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: "1 min ago",
    },
    {
      id: 2,
      name: "Jane Doe",
      action: "changed their cover picture",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: "1 min ago",
    },
    {
      id: 3,
      name: "Jane Doe",
      action: "changed their cover picture",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: "1 min ago",
    },
    {
      id: 4,
      name: "Jane Doe",
      action: "changed their cover picture",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: "1 min ago",
    },
  ];

  const onlineUsers = new Array(11).fill({
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  });

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {suggestedUsers.map(user => (
            <div className="user" key={user.id}>
              <div className="userInfo">
                <img src={user.img} alt={user.name} />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Latest Activities</span>
          {activities.map(activity => (
            <div className="user" key={activity.id}>
              <div className="userInfo">
                <img src={activity.img} alt={activity.name} />
                <p>
                  <span>{activity.name}</span> {activity.action}
                </p>
              </div>
              <span>{activity.time}</span>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Online Friends</span>
          {onlineUsers.map((user, index) => (
            <div className="user" key={index}>
              <div className="userInfo">
                <img src={user.img} alt={user.name} />
                <div className="online" />
                <span>{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
