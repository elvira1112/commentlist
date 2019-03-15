import React from 'react';
export default function({loading, comments, totalCount}) {
  if (loading) {
    return <div>empty</div>;
  }
  if (comments.length === 0) {
    return <div>loading</div>;
  }
  return <div>{comments.length} of {totalCount}</div>;
}