import React from 'react'

export default function rteContainer({ storyRte}) {

  return (
    <>
        <div
            className={styles.successStory__content}
            dangerouslySetInnerHTML={{ storyRte }}
        ></div>
    </>
  )
}
