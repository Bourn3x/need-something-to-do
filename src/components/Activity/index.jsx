import "./Activity.scss";

const Activity = ({ activity }) => {
  if (!activity) {
    return <div/>
  }
  return (
    <div className={"activity-container"}>
      <p>
        {activity && activity.activity}
      </p>
      <p>
        - Type: {activity && activity.type}
      </p>
      <p>
        - Participants: {activity && activity.participants}
      </p>
      <p>
        - Does it cost money: {activity && activity.price}
      </p>
      <p>
        - Accessibility: {activity && activity.accessibility}
      </p>
    </div>
  )
}

export default Activity
