import React from "react";

export default function Dates(props) {
  const created = props.dateTypes.createdAt;
  const updated = props.dateTypes.updatedAt;
  const trueOrFalse = props.dates;
  return (
    <div>
      <h2>Your Date Comparison</h2>
      {trueOrFalse ? (
        <p>
          Your "created at" date of {created} was earlier than your "updated at"
          date of {updated}
        </p>
      ) : (
        <p>
          Your "created at" date of {created} was later than your "updated at"
          date of {updated}
        </p>
      )}
    </div>
  );
}
