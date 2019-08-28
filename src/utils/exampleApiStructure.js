const Train = (() => {
  const to = toPlace => {
    const from = place => `you are going from ${place} to ${toPlace}`;
    return {
      from
    };
  };
  const result = () => this.place + this.toPlace;

  return {
    to,
    result
  };
})();

const res = Train.to("bhi").from("eus"); /*?*/

const journey = {
  to: place => ({
    from: toPlace => `you are going from ${place} to ${toPlace}`
  })
};

const res2 = journey.to("bhi").from("eus"); /*?*/
