import React, { Fragment, useEffect } from 'react';

// apis
import { fetchFriends } from '../apis/friends'; //←この行を追加する

export const Friends = () => {
  useEffect(() => {
    fetchFriends()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      フレンド募集一覧
    </Fragment>
  )
}