function combineUsers(...arrays) {
  const mergedUsers = [].concat(...arrays);

  const today = Date.today().toString("M/d/yyyy");

  return {
    users: mergedUsers,
    merge_date: today
  };
}

module.exports = { combineUsers };