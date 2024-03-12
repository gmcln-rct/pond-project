import successStories from '../../data/success-stories';

export default function IndividualStory({ params}) {

  function findStory(id) {
    return successStories.find(story => story.id === id);
  }

  return (
    <>
    <div>IndividualStory</div>
    <div>{params.id}</div>
    </>
  )
}
