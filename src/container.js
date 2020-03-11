const collector = [];

const addItems = ({
  project,
  title,
  description,
  date,
  time,
  priority,
  note
}) => {
  collector.push({
    project,
    title,
    description,
    date,
    time,
    priority,
    note
  });
  return console.log('collector', collector);
  ;
};

export { addItems, collector };
